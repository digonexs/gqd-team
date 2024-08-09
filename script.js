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
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu-open");
    menuToggle.classList.toggle("active"); // Adiciona animação ao botão
  });
});
