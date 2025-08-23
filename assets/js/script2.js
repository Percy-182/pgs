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
document
  .getElementById("contactoForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "¡Gracias por su solicitud! Nuestro equipo IT se pondrá en contacto con usted en las próximas 24 horas."
    );
    this.reset();
  });

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-it");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    navbar.style.backgroundColor = "rgba(2, 81, 89, 0.98)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    navbar.style.backgroundColor = "rgba(2, 81, 89, 0.95)";
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

// Scrollspy para resaltar la sección actual
document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    "inicio",
    "servicios",
    "experiencia",
    "testimonios",
    "contacto",
  ];
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function onScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;
    let found = false;

    sections.forEach((id, idx) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach((l) => l.classList.remove("selected"));
          navLinks[idx].classList.add("selected");
          found = true;
        }
      }
    });

    if (!found) {
      navLinks.forEach((l) => l.classList.remove("selected"));
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});
