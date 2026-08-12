# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Shared site-nav system (`shared/site-nav.js`): injects the header/footer markup (unchanged Tailwind design) into `<div id="site-header">` / `<div id="site-footer">` mounts, so navbar and footer are maintained in one place instead of duplicated per page. Handles the `#ecosystem` / `#technology` / `#tokenomics` / `#roadmap` anchors being valid only on `index.html` by prefixing them with `index.html` on other pages, and re-wires the existing mobile-menu toggle and navbar scroll-shadow behavior.
- `company.html`: new page for PT Netlink Labs Global company/legal information, the "NET is not equity" disclaimer (cited from `netlink.bio/investor.html`), and a Team section (Ramlan, Yohan, Alex) using photos from `assets/team/`. NIB and SK Menkumham registration numbers are marked "To be published" pending the real values.
- Footer "Legal" links now point somewhere real: "Company" → `company.html` (local), "Investor" → `https://netlink.bio/investor.html` (cross-domain, opens in new tab), "Privacy Policy" → `privacy-policy.html`, "Terms of Use" → `terms.html` (both placeholders — files don't exist yet, links are wired ahead of the pages).
- "Home" link as the first item in the desktop and mobile navbar menus (`index.html`).

### Fixed
- `company.html`: added `<meta name="format-detection" content="telephone=no">` so mobile browsers stop auto-detecting the NIB digit string as a phone number and prefixing it with a "Nomor telepon" label.

### Changed
- `company.html`: split the Legal Entity "Registered Location" row into "Registered Location" (city/province) and a separate "Country" row for clearer international readability; simplified "Entity Type" to "Perseroan Perorangan (Single Member LLC)".
- `company.html`: Team cards now show full names (Ramlan Hadiansyah, Yohan Benyamin Betty, Alek) and a LinkedIn button (`target="_blank" rel="noopener"`) at the bottom of each card.
- `company.html`: corrected "Entity Type" from "Perseroan Terbatas (PT)" to "Perseroan Perorangan (PT Perorangan)" to match the legal entity type stated in SK Menkumham AHU-A109922.AH.01.30.Tahun 2026; redesigned the Team section from plain photo-and-name rows into individual cards (background, border, shadow, hover lift/glow, teal role badge) in a responsive 3-column desktop / 1-column mobile grid.
- `company.html`: Legal Entity section now shows the actual NIB and SK Menkumham registration numbers (previously "To be published"); Team section adds a role and short bio under each of Ramlan, Yohan, and Alex.
- `index.html` and `whitepaper.html`: replaced hardcoded `<header>`/`<nav>` and `<footer>` blocks with `shared/site-nav.js` mounts. `whitepaper.html` previously had its own minimal back-to-home nav and copyright-only footer; it now shares the full site nav/footer used on `index.html`.
- Footer "Documentation" link now points to https://docs.netlinktoken.com (previously an empty `#` placeholder).
- Footer "Github" link now points to https://github.com/netlinklabs/netlink-token (previously an empty `#` placeholder).
- Footer "Audit & Security" link now points to the repository's [`audits`](audits) folder (previously an empty `#` placeholder).
- Page `<title>`, `og:title`, and `twitter:title` updated from "Netlink Ecosystem" to "Netlink Ecosystem Token (NET)" for consistency across SEO metadata (`index.html`).
- Added LinkedIn (`https://www.linkedin.com/company/netlinklabs/`) to the `sameAs` array of the JSON-LD `Organization` schema (`index.html`).
