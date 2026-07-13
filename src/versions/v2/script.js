document.addEventListener("DOMContentLoaded", () => {
  // 1. Efeito Dinâmico na Navbar ao rolar a página
  const navbar = document.querySelector(".dynamic-navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Configuração do ScrollReveal para Animações Premium
  // Garante que o script só execute as animações se a biblioteca ScrollReveal estiver carregada
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "30px",
      duration: 1000,
      delay: 200,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      reveal: true,
    });

    // Aplicação das animações por direções e contextos
    sr.reveal(".sr-bottom", { interval: 100 });

    sr.reveal(".sr-left", {
      origin: "left",
      distance: "40px",
    });

    sr.reveal(".sr-right", {
      origin: "right",
      distance: "40px",
    });
  }

  // 3. Fechamento automático do menu hamburguer (mobile) ao clicar em um link
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const menuToggle = document.getElementById("navContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(menuToggle);
        bsCollapse.hide();
      }
    });
  });
});
