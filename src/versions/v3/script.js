document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar State Changer (Detecção de Scroll)
  const navbar = document.querySelector(".pixel-nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Comportamento de clique e rolagem limpa (Menu Mobile)
  const navLinks = document.querySelectorAll(".pixel-nav-link");
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
