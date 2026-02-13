document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80; // altura da navbar, ajuste aqui

    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  });
});