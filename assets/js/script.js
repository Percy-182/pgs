// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission
// document
//   .getElementById("cotizacionForm")
//   ?.addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert(
//       "¡Gracias por su solicitud! Nos pondremos en contacto a la brevedad."
//     );
//     this.reset();
//   });

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  }
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      document.querySelector(".navbar-toggler").click();
    }
  });
});
