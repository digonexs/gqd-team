document.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("header");
  const burger = document.getElementById("burger");
  const nav    = document.getElementById("nav");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = parseInt(entry.target.dataset.d || "0", 10);
      setTimeout(() => entry.target.classList.add("in"), delay);
      revealObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px",
  });

  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.closest("#hero")) {
      const d = parseInt(el.dataset.d || "0", 10);
      setTimeout(() => el.classList.add("in"), d + 80);
    } else {
      revealObserver.observe(el);
    }
  });

  const handleScroll = () => {
    header.classList.toggle("solid", window.scrollY > 40);
    updateActiveNav();
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  const sections = Array.from(document.querySelectorAll("section[id]"));

  function updateActiveNav() {
    const scrollY = window.scrollY + header.offsetHeight + 60;
    let current = "";
    sections.forEach((s) => {
      if (scrollY >= s.offsetTop) current = s.id;
    });
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle("on", link.getAttribute("href") === `#${current}`);
    });
  }

  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight;
      window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
      closeMobileNav();
    });
  });

  function closeMobileNav() {
    nav.classList.remove("open");
    burger.classList.remove("x");
  }

  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    burger.classList.toggle("x");
  });

  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && nav.classList.contains("open")) {
      closeMobileNav();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileNav();
  });

  const tickerTrack = document.querySelector(".ticker-track");
  if (tickerTrack) {
    tickerTrack.parentElement.addEventListener("mouseenter", () => {
      tickerTrack.style.animationPlayState = "paused";
    });
    tickerTrack.parentElement.addEventListener("mouseleave", () => {
      tickerTrack.style.animationPlayState = "running";
    });
  }

});
