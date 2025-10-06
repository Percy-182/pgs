// Animación de conteo para estadísticas en la sección experiencia

function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseInt(stat.textContent.replace(/\D/g, ""));
    const isPercent = stat.textContent.includes("%");
    const isPlus = stat.textContent.includes("+");
    const isSlash = stat.textContent.includes("/");
    let start = 0;
    let end = target;
    let duration = 1200;
    let step = Math.ceil(end / (duration / 16));
    if (isSlash) {
      // Para 24/7, no animar
      return;
    }
    function update() {
      start += step;
      if (start >= end) {
        stat.textContent = end + (isPercent ? "%" : "") + (isPlus ? "+" : "");
      } else {
        stat.textContent = start + (isPercent ? "%" : "") + (isPlus ? "+" : "");
        requestAnimationFrame(update);
      }
    }
    stat.textContent = "0" + (isPercent ? "%" : "") + (isPlus ? "+" : "");
    setTimeout(update, 200);
  });
}

// Detectar si la sección está en pantalla
function statsInView() {
  const section = document.querySelector(".stats-section");
  if (!section) return false;
  const rect = section.getBoundingClientRect();
  return rect.top < window.innerHeight - 80 && rect.bottom > 80;
}

let statsAnimated = false;
window.addEventListener("scroll", function () {
  if (!statsAnimated && statsInView()) {
    animateStats();
    statsAnimated = true;
  }
});
window.addEventListener("DOMContentLoaded", function () {
  if (statsInView()) {
    animateStats();
    statsAnimated = true;
  }
});
