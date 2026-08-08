document.addEventListener("DOMContentLoaded", () => {
  // 1. Mudança de estado da Navbar ao rolar a página
  const navbar = document.querySelector(".custom-nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Fechar menu mobile ao clicar em um link
  const navLinks = document.querySelectorAll(".custom-nav-link");
  const menuToggle = document.getElementById("navContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle && menuToggle.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, {
          toggle: true,
        });
        bsCollapse.hide();
      }
    });
  });
});
