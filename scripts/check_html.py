#!/usr/bin/env python3
"""Lightweight HTML checks for this portfolio repo."""

from html.parser import HTMLParser
from pathlib import Path
import sys

FILES = [Path("index.html"), Path("index-2.html")]
BANNED_TERMS = ["Achivements", "Data Sciene"]


class LinkAndIdParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.hrefs = []
        self.has_title = False
        self._in_title = False
        self.title_text = ""

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == "title":
            self._in_title = True
            self.has_title = True

        element_id = attrs_dict.get("id")
        if element_id:
            self.ids.add(element_id)

        href = attrs_dict.get("href")
        if href:
            self.hrefs.append(href)

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False

    def handle_data(self, data):
        if self._in_title:
            self.title_text += data


def check_file(path: Path) -> list[str]:
    errors: list[str] = []

    if not path.exists():
        return [f"{path}: missing file"]

    content = path.read_text(encoding="utf-8", errors="replace")

    if "<!DOCTYPE html>" not in content:
        errors.append(f"{path}: missing <!DOCTYPE html>")

    lowered = content.lower()
    if "<html" not in lowered or "</html>" not in lowered:
        errors.append(f"{path}: missing root <html> element")

    for term in BANNED_TERMS:
        if term in content:
            errors.append(f"{path}: contains banned typo '{term}'")

    parser = LinkAndIdParser()
    parser.feed(content)

    if not parser.has_title or not parser.title_text.strip():
        errors.append(f"{path}: missing non-empty <title>")

    for href in parser.hrefs:
        if href.startswith("#"):
            anchor_id = href[1:]
            if anchor_id and anchor_id not in parser.ids:
                errors.append(f"{path}: broken internal anchor '#{anchor_id}'")
            continue

        if href.startswith(("mailto:", "tel:", "javascript:", "data:")):
            continue

        if "//" in href and not href.startswith(("http://", "https://")):
            errors.append(f"{path}: malformed external URL '{href}'")

    return errors


def main() -> int:
    all_errors: list[str] = []
    for file_path in FILES:
        all_errors.extend(check_file(file_path))

    if all_errors:
        print("HTML checks failed:")
        for err in all_errors:
            print(f"- {err}")
        return 1

    print("HTML checks passed for:")
    for file_path in FILES:
        print(f"- {file_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
