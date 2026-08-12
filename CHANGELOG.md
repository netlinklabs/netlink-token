# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Shared site-nav system (`shared/site-nav.js`): injects the header/footer markup (unchanged Tailwind design) into `<div id="site-header">` / `<div id="site-footer">` mounts, so navbar and footer are maintained in one place instead of duplicated per page. Handles the `#ecosystem` / `#technology` / `#tokenomics` / `#roadmap` anchors being valid only on `index.html` by prefixing them with `index.html` on other pages, and re-wires the existing mobile-menu toggle and navbar scroll-shadow behavior.
- `company.html`: new page for PT Netlink Labs Global company/legal information, the "NET is not equity" disclaimer (cited from `netlink.bio/investor.html`), and a Team section (Ramlan, Yohan, Alex) using photos from `assets/team/`. NIB and SK Menkumham registration numbers are marked "To be published" pending the real values.
- Footer "Legal" links now point somewhere real: "Company" → `company.html` (local), "Investor" → `https://netlink.bio/investor.html` (cross-domain, opens in new tab), "Privacy Policy" → `privacy-policy.html`, "Terms of Use" → `terms.html` (both placeholders — files don't exist yet, links are wired ahead of the pages).
- "Home" link as the first item in the desktop and mobile navbar menus (`index.html`).

### Changed
- `index.html` and `whitepaper.html`: replaced hardcoded `<header>`/`<nav>` and `<footer>` blocks with `shared/site-nav.js` mounts. `whitepaper.html` previously had its own minimal back-to-home nav and copyright-only footer; it now shares the full site nav/footer used on `index.html`.
- Footer "Documentation" link now points to https://docs.netlinktoken.com (previously an empty `#` placeholder).
- Footer "Github" link now points to https://github.com/netlinklabs/netlink-token (previously an empty `#` placeholder).
- Footer "Audit & Security" link now points to the repository's [`audits`](audits) folder (previously an empty `#` placeholder).
- Page `<title>`, `og:title`, and `twitter:title` updated from "Netlink Ecosystem" to "Netlink Ecosystem Token (NET)" for consistency across SEO metadata (`index.html`).
- Added LinkedIn (`https://www.linkedin.com/company/netlinklabs/`) to the `sameAs` array of the JSON-LD `Organization` schema (`index.html`).
