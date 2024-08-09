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

  // Adiciona animações de scroll
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  });

  // Adiciona rolagem suave ao clicar nos links do menu de navegação
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      // Verifica se o link é para a seção de planos
      if (targetId === "#plans") {
        // Adiciona um deslocamento adicional para garantir que o plano e o hero sejam exibidos
        const offset = 50; // ajuste conforme necessário
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
