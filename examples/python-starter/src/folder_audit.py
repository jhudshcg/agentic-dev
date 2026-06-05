"""Folder audit helpers for a small CLI starter app.

This demo models a believable early slice of a utility tool. Given a folder, it
finds the largest files, flags older files, lists empty directories, and turns
that information into a short report a developer could act on.
"""

from datetime import datetime, timezone
from pathlib import Path
from typing import TypedDict


class FileReport(TypedDict):
    """A single file entry included in the audit output."""

    path: str
    size_bytes: int
    modified_days_ago: int


class AuditReport(TypedDict):
    """The summary returned for one audited folder."""

    scanned_root: str
    file_count: int
    total_size_bytes: int
    largest_files: list[FileReport]
    old_files: list[FileReport]
    empty_directories: list[str]


def _relative_path(path: Path, root: Path) -> str:
    """Return a stable forward-slash path for readable reports and tests."""

    return str(path.relative_to(root)).replace("\\", "/")


def _file_report(file_path: Path, root: Path, now: datetime) -> FileReport:
    """Build one file report entry from a real file on disk."""

    stats = file_path.stat()
    modified_at = datetime.fromtimestamp(stats.st_mtime, tz=timezone.utc)
    return {
        "path": _relative_path(file_path, root),
        "size_bytes": stats.st_size,
        "modified_days_ago": max(0, (now - modified_at).days),
    }


def _empty_directories(root: Path) -> list[str]:
    """List directories that currently contain no files or child directories."""

    empty = []
    for path in root.rglob("*"):
        if path.is_dir() and not any(path.iterdir()):
            empty.append(_relative_path(path, root))
    return sorted(empty)


def build_audit_report(
    root: Path,
    *,
    oldest_after_days: int = 30,
    limit: int = 3,
    now: datetime | None = None,
) -> AuditReport:
    """Audit one folder and return a small action-focused summary."""

    resolved_root = root.resolve()
    audit_time = now or datetime.now(timezone.utc)
    files = sorted(path for path in resolved_root.rglob("*") if path.is_file())
    file_reports = [_file_report(file_path, resolved_root, audit_time) for file_path in files]

    largest_files = sorted(file_reports, key=lambda item: (-item["size_bytes"], item["path"]))[:limit]
    old_files = sorted(
        [item for item in file_reports if item["modified_days_ago"] >= oldest_after_days],
        key=lambda item: (-item["modified_days_ago"], item["path"]),
    )[:limit]

    return {
        "scanned_root": str(resolved_root),
        "file_count": len(file_reports),
        "total_size_bytes": sum(item["size_bytes"] for item in file_reports),
        "largest_files": largest_files,
        "old_files": old_files,
        "empty_directories": _empty_directories(resolved_root),
    }


def format_report(report: AuditReport) -> str:
    """Turn an audit report into CLI-friendly text output."""

    lines = [
        f"Audit root: {report['scanned_root']}",
        f"Files scanned: {report['file_count']}",
        f"Total size: {report['total_size_bytes']} bytes",
        "",
        "Largest files:",
    ]

    if report["largest_files"]:
        for item in report["largest_files"]:
            lines.append(f"- {item['path']} ({item['size_bytes']} bytes)")
    else:
        lines.append("- None")

    lines.append("")
    lines.append("Older files:")
    if report["old_files"]:
        for item in report["old_files"]:
            lines.append(f"- {item['path']} ({item['modified_days_ago']} days old)")
    else:
        lines.append("- None")

    lines.append("")
    lines.append("Empty directories:")
    if report["empty_directories"]:
        for directory in report["empty_directories"]:
            lines.append(f"- {directory}")
    else:
        lines.append("- None")

    return "\n".join(lines)