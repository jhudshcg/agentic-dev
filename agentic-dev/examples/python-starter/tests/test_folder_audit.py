from datetime import datetime, timedelta, timezone
from pathlib import Path
from os import utime

from src.folder_audit import build_audit_report, format_report


def _write_file(root: Path, relative_path: str, size_bytes: int, days_old: int, now: datetime) -> None:
    path = root / relative_path
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("x" * size_bytes, encoding="utf-8")
    modified_at = now - timedelta(days=days_old)
    timestamp = modified_at.timestamp()
    utime(path, (timestamp, timestamp))


def test_build_audit_report_finds_largest_and_old_files(tmp_path: Path) -> None:
    now = datetime(2026, 5, 14, tzinfo=timezone.utc)
    _write_file(tmp_path, "logs/error.log", 180, 35, now)
    _write_file(tmp_path, "media/preview.mov", 420, 5, now)
    _write_file(tmp_path, "exports/report.csv", 120, 42, now)
    _write_file(tmp_path, "build/cache.bin", 260, 2, now)
    (tmp_path / "empty/archive").mkdir(parents=True)

    report = build_audit_report(tmp_path, oldest_after_days=30, limit=2, now=now)

    assert report["largest_files"] == [
        {"path": "media/preview.mov", "size_bytes": 420, "modified_days_ago": 5},
        {"path": "build/cache.bin", "size_bytes": 260, "modified_days_ago": 2},
    ]
    assert report["old_files"] == [
        {"path": "exports/report.csv", "size_bytes": 120, "modified_days_ago": 42},
        {"path": "logs/error.log", "size_bytes": 180, "modified_days_ago": 35},
    ]


def test_build_audit_report_lists_empty_directories(tmp_path: Path) -> None:
    now = datetime(2026, 5, 14, tzinfo=timezone.utc)
    _write_file(tmp_path, "docs/notes.txt", 40, 3, now)
    (tmp_path / "assets/icons").mkdir(parents=True)
    (tmp_path / "exports/pending").mkdir(parents=True)

    report = build_audit_report(tmp_path, now=now)

    assert report["empty_directories"] == ["assets/icons", "exports/pending"]


def test_format_report_produces_cli_friendly_sections(tmp_path: Path) -> None:
    now = datetime(2026, 5, 14, tzinfo=timezone.utc)
    _write_file(tmp_path, "logs/error.log", 180, 35, now)

    report = build_audit_report(tmp_path, oldest_after_days=30, now=now)
    output = format_report(report)

    assert "Largest files:" in output
    assert "Older files:" in output
    assert "logs/error.log (35 days old)" in output