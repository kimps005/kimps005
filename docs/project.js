(() => {
  "use strict";
  const progress = document.getElementById("reading-progress");
  const links = [...document.querySelectorAll(".pd-toc a")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);

  const update = () => {
    const y = window.scrollY || window.pageYOffset;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progress) progress.style.width = Math.min(100, Math.max(0, (y / max) * 100)) + "%";
    let current = sections[0] && sections[0].id;
    const guide = Math.min(200, window.innerHeight * 0.3);
    for (const s of sections) if (s.getBoundingClientRect().top <= guide) current = s.id;
    if (y + window.innerHeight >= document.documentElement.scrollHeight - 4 && sections.length) {
      current = sections[sections.length - 1].id;
    }
    links.forEach((a) => {
      const on = a.getAttribute("href") === "#" + current;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "location");
      else a.removeAttribute("aria-current");
    });
  };
  let queued = false;
  window.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { update(); queued = false; });
  }, { passive: true });
  update();
})();
