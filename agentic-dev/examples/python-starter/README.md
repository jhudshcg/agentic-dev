# Python Starter

This demo is a small folder-audit CLI tool.

It represents a believable early app slice for a practical developer utility. It is not about project planning. It scans a folder, highlights large and older files, and points out empty directories that may need attention.

## What The Demo Does

The demo works with a real folder on disk and reports:

- the largest files in the tree
- older files that may need review or cleanup
- empty directories that may be dead weight
- overall file count and total size

From that, it can:

- scan a folder recursively
- turn raw file data into a short action-focused report
- format the report for terminal output
- give the user something immediately useful without extra setup

This is concrete enough to feel useful, but still small enough to inspect and extend.

## Example Output

Running the demo produces output shaped like this:

```text
Audit root: C:/.../tmpabcd
Files scanned: 4
Total size: 980 bytes

Largest files:
- media/preview.mov (420 bytes)
- build/cache.bin (260 bytes)
- logs/error.log (180 bytes)

Older files:
- exports/report.csv (42 days old)
- logs/error.log (35 days old)

Empty directories:
- empty/archive
```

That gives the user an immediate answer to a real question: what in this folder is worth checking first?

## Why This Fits The Harness

This is the kind of result you could plausibly get after the first few prompts with this template:

1. tighten the app requirements
2. plan the smallest useful slice
3. implement one real behaviour with tests

The harness stays focused on requirements, checkpoints, and workflow. The demo code becomes a genuine part of the app.

## Plausible Prompt Sequence

First prompt, after typing `/` and choosing `Tighten Requirements`:

```text
The project is a CLI tool that audits folders.
I want must-have features, things the first version will deliberately leave out, and success checks for a simple first release.
```

Second prompt, after typing `/` and choosing `Plan Next Slice`:

```text
I want one practical feature that gives the user value quickly.
For this project, the next slice should focus on scanning one folder and reporting the largest files.
Name one validation check too.
```

Third prompt:

```text
Read requirements.md and checkpoint.md, then implement a small Python helper for a folder audit CLI.
Scan a folder, report the largest files, flag older files, and list empty directories.
Add focused tests and run the narrowest relevant check.
```

Using a saved prompt here is helpful because it keeps the early workflow consistent and reduces the chance of drifting into vague one-off requests.

## Files

- `src/folder_audit.py`: documented scanning, reporting, and formatting helpers
- `src/demo.py`: small runnable example that creates a demo folder and audits it
- `tests/test_folder_audit.py`: focused tests for the core behaviour

## Run

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m pytest -q
.\.venv\Scripts\python.exe -m src.demo
```