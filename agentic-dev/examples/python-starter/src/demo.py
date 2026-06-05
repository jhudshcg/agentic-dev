"""Create a small sample workspace and print a folder audit report."""

from datetime import datetime, timedelta, timezone
from os import utime
from pathlib import Path
from tempfile import TemporaryDirectory

from src.folder_audit import build_audit_report, format_report


def _write_demo_file(root: Path, relative_path: str, size_bytes: int, days_old: int) -> None:
    """Create one demo file with a predictable size and modification age."""

    path = root / relative_path
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("x" * size_bytes, encoding="utf-8")
    modified_at = datetime.now(timezone.utc) - timedelta(days=days_old)
    timestamp = modified_at.timestamp()
    utime(path, (timestamp, timestamp))


def _create_demo_workspace(root: Path) -> None:
    """Build a small folder tree that the audit demo can inspect."""

    _write_demo_file(root, "logs/error.log", 180, 35)
    _write_demo_file(root, "media/preview.mov", 420, 5)
    _write_demo_file(root, "exports/report.csv", 120, 42)
    _write_demo_file(root, "build/cache.bin", 260, 2)
    (root / "empty/archive").mkdir(parents=True, exist_ok=True)


if __name__ == "__main__":
    with TemporaryDirectory() as temp_dir:
        demo_root = Path(temp_dir)
        _create_demo_workspace(demo_root)
        report = build_audit_report(demo_root, oldest_after_days=30)
        print(format_report(report))