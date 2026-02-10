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

// Validación simple del formulario de cotización
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("cotizacionForm");
  if (!form) return;

  var telefono = document.getElementById("telefono");
  var phoneCountry = document.getElementById("phoneCountry");

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
    var producto = document.getElementById("producto");

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

    // Producto
    if (!producto.value) {
      producto.classList.add("is-invalid");
      isValid = false;
    } else {
      producto.classList.remove("is-invalid");
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

  producto.addEventListener("change", function () {
    if (producto.classList.contains("is-invalid")) {
      producto.classList.remove("is-invalid");
    }
  });

  // Scroll to Top functionality
  const scrollToTopBtn = document.getElementById("scrollToTop");
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

  // Navbar scroll spy efecto activo
  const sections = ["inicio", "productos", "servicios", "nosotros", "contacto"];
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function onScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;
    let found = false;
    sections.forEach((id, idx) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop - 80;
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
