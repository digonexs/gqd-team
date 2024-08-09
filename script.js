document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });

  window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  });

  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetId === "#plans") {
        const offset = 50;
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Menu Hambúrguer
  const menuToggle = document.createElement("div");
  menuToggle.className = "menu-toggle";
  menuToggle.innerHTML = "<div></div><div></div><div></div>";
  document.querySelector("header").appendChild(menuToggle);

  const navMenu = document.querySelector("nav ul");
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
