document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button-18");
  const modal = document.getElementById("reservationModal");
  const form = document.getElementById("reservationForm");
  const closeButton = document.querySelector(".close");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  console.log(button);
  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listener for the "Reservations" button
  button.addEventListener("click", function (event) {
    event.preventDefault();
    openModal();
  });

  // Event listener for the form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    closeModal();
  });

  // Event listener for the close button (x)
  closeButton.addEventListener("click", function () {
    closeModal();
  });

  // Close the modal if the user clicks outside the form
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});

// visibility = hidden css
//$("#myModal").modal();//
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}