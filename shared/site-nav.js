/* ============================================
   SITE-NAV.JS — Shared header/footer injector for netlink-token public pages
   Usage: add <div id="site-header"></div> right after <body>
          and <div id="site-footer"></div> before closing </body>,
          then include shared/site-nav.js before </body>.
   ============================================ */
(function () {
  'use strict';

  const path = window.location.pathname;
  const isIndex = path === '/' || path.endsWith('/') || /\/?index\.html$/.test(path);
  const HOME = isIndex ? '' : 'index.html';

  // Anchors (#ecosystem, #technology, #tokenomics, #roadmap) only exist on index.html.
  // Other pages (whitepaper.html, company.html, etc.) get index.html prefixed.
  function link(href) {
    if (href.indexOf('http') === 0 || href.indexOf('.html') !== -1) return href;
    return HOME + href;
  }

  const homeHref = isIndex ? '#' : 'index.html';
  const LOGO = '/assets/net-logo-bgdark.png';
  // Temporary: the app isn't live on its custom domain yet, so "Launch App"
  // points to the local coming-soon page instead of netlink.bio/login.html.
  const APP_URL = 'app.html';

  const headerHTML = `
    <nav class="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/50 transition-all duration-300" id="navbar">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-18 py-3">
          <a href="${homeHref}" class="flex items-center gap-3 group">
            <img src="${LOGO}" class="h-9 w-auto transition-transform group-hover:scale-105" alt="Netlink">
          </a>
          <div class="hidden md:flex items-center gap-8">
            <a href="${homeHref}" class="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 font-medium">Home</a>
            <a href="about.html" class="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 font-medium">About</a>
            <a href="${link('#ecosystem')}" class="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 font-medium">Ecosystem</a>
            <a href="${link('#technology')}" class="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 font-medium">Technology</a>
            <a href="${link('#tokenomics')}" class="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 font-medium">Tokenomics</a>
            <a href="${link('#roadmap')}" class="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 font-medium">Roadmap</a>
            <a href="whitepaper.html" class="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 font-medium">Whitepaper</a>
          </div>
          <a href="${APP_URL}" class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:-translate-y-0.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            Launch App
          </a>
          <button class="md:hidden text-slate-300 hover:text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden bg-slate-900 border-t border-slate-800">
        <div class="px-4 py-4 space-y-3">
          <a href="${homeHref}" class="block text-slate-400 hover:text-teal-400 py-2">Home</a>
          <a href="about.html" class="block text-slate-400 hover:text-teal-400 py-2">About</a>
          <a href="${link('#ecosystem')}" class="block text-slate-400 hover:text-teal-400 py-2">Ecosystem</a>
          <a href="${link('#technology')}" class="block text-slate-400 hover:text-teal-400 py-2">Technology</a>
          <a href="${link('#tokenomics')}" class="block text-slate-400 hover:text-teal-400 py-2">Tokenomics</a>
          <a href="${link('#roadmap')}" class="block text-slate-400 hover:text-teal-400 py-2">Roadmap</a>
          <a href="whitepaper.html" class="block text-slate-400 hover:text-teal-400 py-2">Whitepaper</a>
          <a href="${APP_URL}" class="block w-full text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold">Launch App</a>
        </div>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-16">
          <div class="col-span-2 md:col-span-1">
            <img src="${LOGO}" class="h-10 w-auto mb-5" alt="Netlink">
            <p class="text-slate-500 text-sm leading-relaxed">NET (Netlink Ecosystem Token) is a utility token within the Netlink ecosystem for all members, unlocking access to services, receiving discounts, reward programs, and real participation in ecosystem growth.</p>
          </div>
          <div>
            <p class="text-white font-semibold mb-5 text-lg">Resources</p>
            <ul class="space-y-3">
              <li><a href="whitepaper.html" class="text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm">Whitepaper</a></li>
              <li><a href="https://docs.netlinktoken.com" target="_blank" rel="noopener" class="text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm">Documentation</a></li>
              <li><a href="https://github.com/netlinklabs/netlink-token" target="_blank" rel="noopener" class="text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm">Github</a></li>
              <li><a href="https://github.com/netlinklabs/netlink-token/tree/main/audits" target="_blank" rel="noopener" class="text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm">Audit & Security</a></li>
            </ul>
          </div>
          <div>
            <p class="text-white font-semibold mb-5 text-lg">Legal</p>
            <ul class="space-y-3">
              <li><a href="company.html" class="text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm">Company</a></li>
              <li><a href="https://forms.zohopublic.com/labsnetlinkteamgm1/form/InvestorPartnershipInquiry/formperma/sn2mTI_Z151GVLTqLG0mk8Dt5XT4qG_78xr8LckrHNc" target="_blank" rel="noopener" class="text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm">Investor</a></li>
              <li><a href="privacy-policy.html" class="text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm">Privacy Policy</a></li>
              <li><a href="terms.html" class="text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm">Terms of Use</a></li>
            </ul>
          </div>
          <div class="col-span-2 md:col-span-1">
            <p class="text-white font-semibold mb-5 text-lg">Contact</p>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-slate-500 text-sm group">
                <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                contact@netlinktoken.com
              </li>
              <li>
                <a href="https://t.me/netlinktoken" target="_blank" class="flex items-center gap-3 text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm group">
                  <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <svg class="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </div>
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/netlinktoken" target="_blank" class="flex items-center gap-3 text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm group">
                  <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <svg class="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/netlinktoken" target="_blank" class="flex items-center gap-3 text-slate-500 hover:text-teal-400 transition-colors duration-200 text-sm group">
                  <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <svg class="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  </div>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-800 pt-8 text-center">
          <p class="text-slate-600 text-sm mb-2">Copyright 2026 — Netlink Labs All Rights Reserved</p>
          <p class="text-slate-700 text-xs">PT. Netlink Labs Global</p>
        </div>
      </div>
    </footer>
  `;

  function mount() {
    const headerMount = document.getElementById('site-header');
    const footerMount = document.getElementById('site-footer');
    if (headerMount) headerMount.innerHTML = headerHTML;
    if (footerMount) footerMount.innerHTML = footerHTML;

    initScrollShadow();
  }

  function initScrollShadow() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) nav.classList.add('shadow-lg');
      else nav.classList.remove('shadow-lg');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
