# Proposed Maintenance Tasks

## 1) Typo fix task
**Title:** Correct misspellings in visible section headings and content copy

**Problem:** There are user-visible typos such as `Key Achivements` and `Data Sciene`, which reduce professionalism and search quality.

**Evidence:**
- `index.html` uses `Key Achivements`.
- `index-2.html` uses `Achivements` and `Data Sciene` in meta and body content.

**Task:**
- Replace `Achivements` with `Achievements`.
- Replace `Data Sciene` with `Data Science`.
- Run a spellcheck pass over headings/meta descriptions to catch similar issues.

**Suggested acceptance criteria:**
- No occurrence of `Achivements` or `Data Sciene` remains in tracked HTML files.
- Updated text still matches layout constraints at mobile and desktop breakpoints.

---

## 2) Bug fix task
**Title:** Fix incorrect employer hyperlink for Transparency International Bangladesh role

**Problem:** The `Assistant Coordinator (Software) - MIS` role is labeled as Transparency International Bangladesh (TIB), but links to `https://beximcopharma.com/` (a different organization), which is a data correctness bug.

**Evidence:**
- In `index.html`, the role entry for TIB points to the Beximco Pharma URL.

**Task:**
- Update the TIB role hyperlink target to the official TIB website URL.
- Verify the adjacent Beximco role still points to Beximco.

**Suggested acceptance criteria:**
- TIB label resolves to TIB’s official site.
- Beximco label resolves to Beximco’s site.
- External links open successfully and are semantically aligned with their labels.

---

## 3) Documentation/comment discrepancy task
**Title:** Align README with actual project purpose and entry points

**Problem:** `README.md` currently contains only `# portfolio`, which does not document how to run, edit, or validate the site. This is out-of-sync with the actual repository content (multiple HTML entry points and assets).

**Evidence:**
- README is effectively empty while the repo includes `index.html`, `index-2.html`, asset folders, and vendor dependencies.

**Task:**
- Expand README with:
  - Project overview.
  - Which page is canonical (`index.html` vs `index-2.html`).
  - Local preview instructions.
  - Basic content update workflow.
  - Optional lint/validation commands.

**Suggested acceptance criteria:**
- A newcomer can run and verify the site locally in under 5 minutes following README instructions.
- README documents which file should be edited for production content updates.

---

## 4) Test improvement task
**Title:** Add lightweight HTML quality checks in CI (link + structure validation)

**Problem:** The repository has no automated tests/checks; content regressions (broken links, malformed markup, accidental heading typos) can ship unnoticed.

**Task:**
- Add a minimal test/check script (e.g., npm scripts + CI) that runs:
  - HTML validation (`html-validate` or `htmlhint`) on `index.html` and `index-2.html`.
  - Link validation for internal anchors and external URLs.
  - Optional spellcheck for headings/meta descriptions.
- Ensure checks can run locally and in CI.

**Suggested acceptance criteria:**
- A single command (e.g., `npm test` or `npm run check`) returns non-zero on invalid HTML or broken links.
- CI enforces this check on pull requests.

