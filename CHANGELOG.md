# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Planned — 2.1.0
- New `--replace` flag

### Planned — 3.0.0 *(Breaking Change — Docker only)*
- Docker image reworked for improved usability
- ⚠️ Breaking changes affect the Docker image only, npm package is unaffected

### Planned — 4.0.0
- AVIF format support via `--avif` flag

---

## [2.0.2] - 2026-XX-XX

### Added
- `CHANGELOG.md`
- Wiki documentation (English and Spanish)

### Changed
- Improved README structure and clarity
- Documentation
- Updated `--about` flag to include Docker information

---

## [2.0.1] - 2025-07-22

> Published as a fix for an npm publishing issue with 2.0.0. Functionally identical.

### Fixed
- npm publishing issue that prevented 2.0.0 from being properly tagged

---

## [2.0.0] - 2025-07-22

### Added
- New `--auto` flag for automatic mode
- New flags: `--input`, `--output`, `--es`, `--about`
- Multiple language support (English and Spanish)
- Interactive and non-interactive modes
- User-friendly `--version` / `-V` and `--help` / `-h` commands

### Changed
- Improved overall architecture

---

## [1.1.1] - 2025-02-25

> Last release of the v1 series. Closed the first development stage of Webpify.
> v1.0.0 born on February 17, 2025. Exact per-version changes not tracked.

- Fast and efficient PNG and JPG to WebP conversion
- HEIC and HEIF to JPG and WebP conversion
- Simple CLI usage
- Built with Node.js and Sharp
- Image optimization for web performance