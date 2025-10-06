// Lightbox y acordeón de servicios IT para computing.html

const serviciosData = [
  {
    nombre: "Desarrollo Web",
    detalles: [
      {
        titulo: "Páginas Web Estáticas",
        descripcion:
          "Desarrollo con tecnologías puras para máxima velocidad y control. Ideal para sitios corporativos, portfolios y landing pages.",
        tecnologias:
          "HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Tailwind CSS",
      },
      {
        titulo: "Páginas Web Dinámicas & eCommerce",
        descripcion:
          "Plataformas gestionables y tiendas online con todas las funcionalidades.",
        tecnologias:
          "WordPress (Personalización de temas y desarrollo de plugins), WooCommerce, PHP",
      },
      {
        titulo: "Desarrollo a Medida",
        descripcion:
          "Aplicaciones web y soluciones específicas con funcionalidades complejas.",
        tecnologias: "React.js, Vue.js, Node.js",
      },
    ],
  },
  {
    nombre: "Soporte Técnico",
    detalles: [
      {
        titulo: "Soporte Remoto",
        descripcion:
          "Atención inmediata para resolver problemas de software, configuración, virus y malware.",
      },
      {
        titulo: "Soporte Presencial (Santiago)",
        descripcion:
          "Mantenimiento, instalación de software, cambio de componentes (HDD, SSD, RAM), y reparación de equipos.",
      },
      {
        titulo: "Soporte Recurrente",
        descripcion:
          "Planes de mantenimiento mensual para empresas que requieren atención prioritaria y constante.",
      },
    ],
  },
  {
    nombre: "Consultoría IT",
    detalles: [
      {
        titulo: "Ciberseguridad",
        descripcion:
          "Auditorías básicas de seguridad, planificación de backups, configuración de firewalls, y capacitación contra phishing.",
      },
      {
        titulo: "Optimización de Procesos",
        descripcion:
          "Implementación y configuración de herramientas de productividad y gestión (CRMs, automatizaciones).",
      },
      {
        titulo: "Estrategia Digital",
        descripcion:
          "Análisis de su infraestructura actual y planificación de una hoja de ruta tecnológica.",
      },
    ],
  },
  {
    nombre: "Mantenimiento",
    detalles: [
      {
        titulo: "Mantenimiento de Hardware",
        descripcion:
          "Limpieza física interna de equipos, actualización de componentes.",
      },
      {
        titulo: "Mantenimiento de Software",
        descripcion:
          "Actualización de sistemas operativos, parches de seguridad, y optimización del rendimiento.",
      },
    ],
  },
  {
    nombre: "Marketing Digital",
    detalles: [
      {
        titulo: "Gestión de Redes Sociales (Completo)",
        descripcion:
          "Creación de estrategia, diseño de contenido, publicación programada, community management y reportes de analytics.",
      },
      {
        titulo: "Gestión de Redes Sociales (Solo Agente)",
        descripcion:
          "Atención profesional de mensajes y comentarios, cualificación de leads y derivación efectiva al área de ventas.",
      },
      {
        titulo: "SEO (Posicionamiento en Búsquedas)",
        descripcion:
          "Optimización técnica y de contenido para mejorar la visibilidad orgánica en Google.",
      },
    ],
  },
  {
    nombre: "Venta de Hardware y Software",
    detalles: [
      {
        titulo: "Hardware",
        descripcion:
          "Venta de componentes (SSD, RAM, fuentes de poder, etc.) y armado de PCs personalizadas para el hogar, oficina, gaming o diseño.",
      },
      {
        titulo: "Software",
        descripcion:
          "Asesoría en la selección y venta de licencias de software legal (Microsoft Office, Windows, antivirus, etc.).",
      },
    ],
  },
];

// Crear lightbox y acordeón dinámico
(function () {
  // Crear el lightbox HTML y agregarlo al body
  const lightbox = document.createElement("div");
  lightbox.id = "servicio-lightbox";
  lightbox.innerHTML = `
    <div class="slb-backdrop"></div>
    <div class="slb-modal">
      <button class="slb-close" aria-label="Cerrar">&times;</button>
      <div class="slb-content"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  // Estilos rápidos para el lightbox (puedes mover a CSS si prefieres)
  const style = document.createElement("style");
  style.textContent = `
    #servicio-lightbox { display: none; position: fixed; z-index: 2000; top: 0; left: 0; width: 100vw; height: 100vh; }
    #servicio-lightbox.active { display: block; }
    .slb-backdrop { position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(2,81,89,0.55); }
    .slb-modal { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); background: #fff; border-radius: 1.2rem; box-shadow: 0 8px 40px rgba(2,81,89,0.18); max-width: 95vw; width: 420px; max-height: 90vh; overflow-y: auto; padding: 2.2rem 1.5rem 1.5rem; }
    .slb-close { position: absolute; top: 1rem; right: 1.2rem; background: none; border: none; font-size: 2rem; color: #025159; cursor: pointer; }
    .slb-content h2 { font-size: 1.4rem; color: #025159; margin-bottom: 1.2rem; font-family: 'Montserrat',sans-serif; font-weight: 700; }
    .slb-accordion { margin-bottom: 0; }
    .slb-accordion-item { border-bottom: 1px solid #e3eaf7; }
    .slb-accordion-title { cursor: pointer; padding: 0.7rem 0; font-weight: 600; color: #036873; font-family: 'Montserrat',sans-serif; display: flex; align-items: center; justify-content: space-between; }
    .slb-accordion-title .fa { margin-right: 0.7rem; color: #36bfbf; }
    .slb-accordion-content { display: none; padding: 0.5rem 0 1rem 0.5rem; color: #5d8a94; font-size: 1rem; }
    .slb-accordion-content.active { display: block; }
    @media (max-width: 576px) { .slb-modal { width: 98vw; padding: 1.2rem 0.5rem 1rem; } }
  `;
  document.head.appendChild(style);

  // Función para abrir el lightbox con el servicio seleccionado
  window.abrirServicioLightbox = function (servicioIdx) {
    const servicio = serviciosData[servicioIdx];
    const content = lightbox.querySelector(".slb-content");
    let html = `<h2>${servicio.nombre}</h2><div class="slb-accordion">`;
    servicio.detalles.forEach((detalle, idx) => {
      html += `
        <div class="slb-accordion-item">
          <div class="slb-accordion-title" data-idx="${idx}">
            <i class="fa fa-chevron-right"></i> ${detalle.titulo}
          </div>
          <div class="slb-accordion-content" id="slb-acc-${idx}">
            <div>${detalle.descripcion}</div>
            ${
              detalle.tecnologias
                ? `<div class='mt-2'><strong>Tecnologías:</strong> <span style='font-size:0.97em;'>${detalle.tecnologias}</span></div>`
                : ""
            }
          </div>
        </div>
      `;
    });
    html += "</div>";
    content.innerHTML = html;
    lightbox.classList.add("active");

    // Acordeón: solo uno abierto a la vez
    const titles = content.querySelectorAll(".slb-accordion-title");
    titles.forEach((title, idx) => {
      title.addEventListener("click", function () {
        content.querySelectorAll(".slb-accordion-content").forEach((c, i) => {
          if (i === idx) {
            c.classList.toggle("active");
            title.querySelector(".fa").classList.toggle("fa-chevron-down");
            title.querySelector(".fa").classList.toggle("fa-chevron-right");
          } else {
            c.classList.remove("active");
            titles[i].querySelector(".fa").classList.remove("fa-chevron-down");
            titles[i].querySelector(".fa").classList.add("fa-chevron-right");
          }
        });
      });
    });
  };

  // Cerrar lightbox
  lightbox.querySelector(".slb-close").onclick = () =>
    lightbox.classList.remove("active");
  lightbox.querySelector(".slb-backdrop").onclick = () =>
    lightbox.classList.remove("active");
})();

// Asignar evento a las tarjetas de servicios
window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".service-card-it").forEach((card, idx) => {
    card.style.cursor = "pointer";
    card.onclick = () => window.abrirServicioLightbox(idx);
  });
});
