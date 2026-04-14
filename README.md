# Ibrahim Hossain Portfolio

A static, single-page portfolio website for Ibrahim Hossain showcasing experience, education, skills, projects, and resume links.

## Project structure

- `index.html` — **canonical production page** and primary file to edit.
- `index-2.html` — archived/alternate template reference page.
- `css/`, `js/`, `images/`, `img/`, `vendor/` — static assets and third-party dependencies.

## Local preview

You can open `index.html` directly in a browser, but using a local server is recommended.

### Option 1: Python (no install for most systems)

```bash
python3 -m http.server 8080
```

Then open:
- `http://localhost:8080/index.html`

### Option 2: VS Code Live Server

- Open the repo in VS Code.
- Right-click `index.html`.
- Click **Open with Live Server**.

## Content update workflow

1. Edit content in `index.html`.
2. Keep links, headings, and section IDs consistent (e.g., navbar anchors and section IDs must match).
3. If you intentionally update the alternate template, mirror relevant typo/content fixes in `index-2.html`.
4. Run validation checks before committing.

## Validation checks

This repo includes lightweight local checks for HTML structure and links.

### Run checks

```bash
python3 scripts/check_html.py
```

or (if Node is available):

```bash
npm run check
```

Checks include:
- Required document structure and title presence.
- Broken internal anchor links (`href="#..."`).
- External link format checks (`http://` or `https://`).
- Known typo guardrails (`Achivements`, `Data Sciene`).

## CI

GitHub Actions runs these checks on pushes and pull requests via `.github/workflows/html-checks.yml`.
