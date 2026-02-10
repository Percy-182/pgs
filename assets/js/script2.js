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
//   .getElementById("contactoForm")
//   ?.addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert(
//       "¡Gracias por su solicitud! Nuestro equipo IT se pondrá en contacto con usted en las próximas 24 horas."
//     );
//     this.reset();
//   });

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

// Validación simple del formulario de contacto IT
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactoForm");
  if (!form) return;

  var telefono = document.getElementById("telefono");
  var phoneCountry = document.getElementById("phoneCountry");
  var scrollToTopBtn = document.getElementById("scrollToTop");

  // Scroll to Top functionality
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Solo filtrar caracteres del teléfono - sin mostrar errores
  telefono.addEventListener("input", function () {
    var original = telefono.value;
    var filtrado = original.replace(/[^0-9+\s\-()\+]/g, "");
    if (original !== filtrado) {
      telefono.value = filtrado;
    }
  });

  // Auto-prepend código de país al perder foco
  telefono.addEventListener("blur", function () {
    var tel = telefono.value.trim();
    if (tel && !tel.startsWith("+") && phoneCountry.value) {
      telefono.value = "+" + phoneCountry.value + tel;
    }
  });

  // Validar SOLO al enviar
  form.addEventListener("submit", function (event) {
    var isValid = true;
    var email = document.getElementById("email");
    var servicio = document.getElementById("servicio");

    // Email con TLD
    if (!email.value.trim()) {
      email.classList.add("is-invalid");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email.value)) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    // Teléfono
    var telRaw = telefono.value.trim();
    if (!telRaw) {
      telefono.classList.add("is-invalid");
      isValid = false;
    } else {
      var digitos = telRaw.replace(/\D/g, "");
      if (digitos.length < 8) {
        telefono.classList.add("is-invalid");
        isValid = false;
      } else {
        telefono.classList.remove("is-invalid");
      }
    }

    // Servicio
    if (!servicio.value) {
      servicio.classList.add("is-invalid");
      isValid = false;
    } else {
      servicio.classList.remove("is-invalid");
    }

    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  });

  // Limpiar errores al escribir
  email.addEventListener("input", function () {
    if (email.classList.contains("is-invalid")) {
      email.classList.remove("is-invalid");
    }
  });

  telefono.addEventListener("input", function () {
    if (telefono.classList.contains("is-invalid")) {
      telefono.classList.remove("is-invalid");
    }
  });

  servicio.addEventListener("change", function () {
    if (servicio.classList.contains("is-invalid")) {
      servicio.classList.remove("is-invalid");
    }
  });
});
