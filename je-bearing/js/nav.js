/* ── Navigation injection ─────────────────────────────── */
(function () {
  const pages = [
    { label: "Home",          href: "index.html" },
    { label: "The Problem",   href: "problem.html" },
    { label: "Module 0",      href: "module0.html" },
    { label: "Module 1",      href: "module1.html" },
    { label: "Same/Similar",  href: "same-similar.html" },
    { label: "Impact",        href: "impact.html" },
    { label: "My Role",       href: "my-role.html" },
    { label: "Appendix",      href: "appendix.html" }
  ];

  const current = window.location.pathname.split("/").pop() || "index.html";

  const linksHTML = pages.map(p => {
    const active = (current === p.href || (current === "" && p.href === "index.html")) ? "active" : "";
    return `<a href="${p.href}" class="${active}">${p.label}</a>`;
  }).join("");

  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML = `
    <div class="nav-inner">
      <a class="nav-logo" href="index.html">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="#38BDF8" stroke-width="1.5"/>
          <circle cx="10" cy="10" r="4" fill="none" stroke="#38BDF8" stroke-width="1.5"/>
          <line x1="1" y1="10" x2="6" y2="10" stroke="#38BDF8" stroke-width="1.5"/>
          <line x1="14" y1="10" x2="19" y2="10" stroke="#38BDF8" stroke-width="1.5"/>
          <line x1="10" y1="1" x2="10" y2="6" stroke="#38BDF8" stroke-width="1.5"/>
          <line x1="10" y1="14" x2="10" y2="19" stroke="#38BDF8" stroke-width="1.5"/>
        </svg>
        OI <span>Platform</span>
      </a>
      <div class="nav-links">${linksHTML}</div>
      <a class="nav-cta btn btn-primary btn-sm" href="module1.html">Live Demo →</a>
    </div>`;

  document.body.insertBefore(nav, document.body.firstChild);
})();

/* ── Footer injection ────────────────────────────────── */
(function () {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <div class="footer-left">
          <div style="font-family:var(--ff-head);font-weight:600;color:var(--accent);margin-bottom:4px">Operations Intelligence Platform</div>
          <div>A portfolio project by Anmol Gill — Human-Constrained CNC Decision Support</div>
        </div>
        <nav class="footer-nav">
          <a href="problem.html">Problem</a>
          <a href="module0.html">Module 0</a>
          <a href="module1.html">Module 1</a>
          <a href="same-similar.html">Same/Similar</a>
          <a href="impact.html">Impact</a>
          <a href="appendix.html">Appendix</a>
        </nav>
      </div>
    </div>`;
  document.body.appendChild(footer);
})();

/* ── Scroll reveal ───────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

  // counter animation
  document.querySelectorAll(".count-up").forEach(el => {
    const target = parseFloat(el.dataset.target || el.textContent);
    const decimals = (el.dataset.target || "").includes(".") ? 1 : 0;
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 1200, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + (target * ease).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
});
