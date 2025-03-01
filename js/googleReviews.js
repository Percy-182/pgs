function initMap() {
  const placeId = "YOUR_PLACE_ID"; // Reemplaza con tu Place ID
  const apiKey = "YOUR_API_KEY"; // Reemplaza con tu clave API

  fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const reviews = data.result.reviews;
      const reviewsContainer = document.getElementById("reviews-container");

      reviews.forEach((review) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `
          <div class="client-id">
            <div class="img-box">
              <img src="${review.profile_photo_url}" alt="${review.author_name}" />
            </div>
            <div class="name">
              <h5>${review.author_name}</h5>
              <h6>${review.relative_time_description}</h6>
            </div>
          </div>
          <div class="detail-box">
            <p>${review.text}</p>
          </div>
        `;
        reviewsContainer.appendChild(reviewElement);
      });
    })
    .catch((error) => console.error("Error fetching reviews:", error));
}

// Llama a la función initMap cuando la página se haya cargado completamente
window.onload = initMap;
