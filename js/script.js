document.addEventListener("DOMContentLoaded", function () {
  const serviceBoxes = document.querySelectorAll(".service_section .box");
  const serviceDetails = document.querySelectorAll(".service-detail");

  serviceBoxes.forEach((box) => {
    const logo = box.querySelector(".img-box");
    const name = box.querySelector(".name");
    const serviceType = box.getAttribute("data-service");
    const serviceDetail = document.getElementById(`${serviceType}-detail`);
    const closeButton = serviceDetail.querySelector("button");

    const showServiceDetail = (event) => {
      event.stopPropagation(); // Evitar que el clic en el botón de cierre vuelva a abrir el detalle
      serviceDetails.forEach((detail) => (detail.style.display = "none"));
      serviceDetail.style.display = "block";

      if (window.innerWidth <= 768) {
        // En dispositivos móviles, mostrar el detalle justo debajo del servicio clickeado
        box.parentNode.insertBefore(serviceDetail, box.nextSibling);
      }

      // Desplazarse automáticamente a la información detallada del servicio
      serviceDetail.scrollIntoView({ behavior: "smooth" });
    };

    box.addEventListener("click", showServiceDetail);
    if (logo) logo.addEventListener("click", showServiceDetail);
    if (name) name.addEventListener("click", showServiceDetail);

    // Agregar evento de clic al botón de cierre
    if (closeButton) {
      closeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        serviceDetail.style.display = "none";
      });
    }
  });
});
