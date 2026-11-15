(() => {
  "use strict";
  const body = document.body;
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("menu-toggle");
  const backdrop = document.getElementById("mobile-backdrop");
  const progress = document.getElementById("reading-progress");
  const backToTop = document.querySelector(".floating-top");
  const navLinks = [...document.querySelectorAll(".sidebar-nav .nav-link")];
  const sections = [...document.querySelectorAll("main > section[id]")];

  const closeMenu = () => {
    sidebar.classList.remove("open");
    toggle.classList.remove("open");
    backdrop.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "메뉴 열기");
    body.classList.remove("menu-open");
  };
  const openMenu = () => {
    sidebar.classList.add("open");
    toggle.classList.add("open");
    backdrop.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "메뉴 닫기");
    body.classList.add("menu-open");
  };
  toggle.addEventListener("click", () => {
    sidebar.classList.contains("open") ? closeMenu() : openMenu();
  });
  backdrop.addEventListener("click", closeMenu);
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("open")) {
      closeMenu();
      toggle.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && sidebar.classList.contains("open")) closeMenu();
  });

  const updateScroll = () => {
    const currentY = window.scrollY || window.pageYOffset;
    const maxY = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.width = Math.min(100, Math.max(0, currentY / maxY * 100)) + "%";
    let selectedId = sections[0] && sections[0].id;
    const guide = Math.min(220, window.innerHeight * .36);
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= guide) selectedId = section.id;
    }
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === "#" + selectedId;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    backToTop.classList.toggle("visible", currentY > 600);
  };
  let scheduled = false;
  window.addEventListener("scroll", () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateScroll();
      scheduled = false;
    });
  }, { passive: true });
  updateScroll();

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    document.documentElement.classList.add("js-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("visible");
          observer.unobserve(target);
        }
      });
    }, { rootMargin: "0px 0px -30px 0px", threshold: .08 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }
  const currentYear = String(new Date().getFullYear());
  document.querySelectorAll("#year, .footer-year").forEach((el) => {
    el.textContent = currentYear;
  });
})();