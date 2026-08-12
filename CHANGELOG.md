# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- `app.html`: temporary "coming soon" page for the app (dark slate-900 theme, teal/blue gradients matching `index.html`/`company.html`) — hero with the netlink-bio link-in-bio banner (float/glow animation), "In Development" status badge, Q3 2026 timeline note with footnote, a 3-pillar Netlink/Netlink Pay/NET Token grid linking to Docs/Whitepaper, secondary CTAs (Whitepaper, Documentation), and social links pulled from the existing footer (Telegram, X/Twitter, Instagram). Uses this repo's own `shared/site-nav.js` header/footer, not netlink-bio's.
- `privacy-policy.html`: general privacy policy for the netlinktoken.com informational site — visitor analytics/cookies, investor-form data (name/email, if submitted), third-party services used (Google Fonts, Vercel, Zoho Forms), and an explicit statement that this site does not collect KYC or wallet data (handled separately by netlink.bio under its own policy).
- `terms.html`: general terms of use for netlinktoken.com — informational-only / not an investment solicitation, the "NET is not equity" disclaimer (same citation as `company.html`), IP ownership by PT Netlink Labs Global, governing law (Republic of Indonesia), and a pointer to the Whitepaper for technical token details.
- Shared site-nav system (`shared/site-nav.js`): injects the header/footer markup (unchanged Tailwind design) into `<div id="site-header">` / `<div id="site-footer">` mounts, so navbar and footer are maintained in one place instead of duplicated per page. Handles the `#ecosystem` / `#technology` / `#tokenomics` / `#roadmap` anchors being valid only on `index.html` by prefixing them with `index.html` on other pages, and re-wires the existing mobile-menu toggle and navbar scroll-shadow behavior.
- `company.html`: new page for PT Netlink Labs Global company/legal information, the "NET is not equity" disclaimer (cited from `netlink.bio/investor.html`), and a Team section (Ramlan, Yohan, Alex) using photos from `assets/team/`. NIB and SK Menkumham registration numbers are marked "To be published" pending the real values.
- Footer "Legal" links now point somewhere real: "Company" → `company.html` (local), "Investor" → `https://netlink.bio/investor.html` (cross-domain, opens in new tab), "Privacy Policy" → `privacy-policy.html`, "Terms of Use" → `terms.html` (both placeholders — files don't exist yet, links are wired ahead of the pages).
- "Home" link as the first item in the desktop and mobile navbar menus (`index.html`).

### Fixed
- `company.html`: added `<meta name="format-detection" content="telephone=no">` so mobile browsers stop auto-detecting the NIB digit string as a phone number and prefixing it with a "Nomor telepon" label.
- `index.html`: added `will-change: transform` and `transform: translateZ(0)` to `.animate-marquee` (the "Integrates with" logo marquee). On a reported device, the marquee `<img>` logos loaded successfully (confirmed via the browser's own resource inspector) but never painted on screen — the card backgrounds/borders rendered fine while only the `<img>` content stayed blank, and scrolling/rotating didn't force a repaint. That matches a known Chromium/Android compositing issue where images inside a continuously `transform`-animated element aren't reliably promoted to their own GPU layer; explicitly hinting the promotion works around it.

### Changed
- `shared/site-nav.js`: "Launch App" (desktop + mobile) now points to the local `app.html` coming-soon page instead of `https://netlink.bio/login.html`, as a temporary measure until the app is live on its custom domain.
- `shared/site-nav.js`: footer "Legal → Investor" link now points to the Investor/Partnership inquiry form (`forms.zohopublic.com/.../InvestorPartnershipInquiry/...`) instead of `https://netlink.bio/investor.html`, as a temporary redirect. Still opens in a new tab (`target="_blank" rel="noopener"`).
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
- `index.html`: CTA section "Get Started Now" button now points to the local `app.html` coming-soon page instead of `https://netlink.bio` (also dropped `target="_blank" rel="noopener"` since it's now an internal link).
- Renamed `assets/carousel/` to `assets/integrations/` (and updated the 12 `<img src>` references in the "Integrates with" marquee on `index.html`). The word "carousel" in an asset path is a known generic pattern in ad-blocker/privacy filter lists, which can silently drop the subresource request while leaving direct navigation to the same URL unaffected — matching a report of the marquee logos loading fine when opened directly but never rendering inside the page.
