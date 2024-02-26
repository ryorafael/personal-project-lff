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
    if (validateReservation()) {
      closeModal();
    }
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

function validateReservation() {
  const numPeople = parseInt(document.getElementById("people").value);
  const reservationTime = document.getElementById("time").value;
  const reservationDate = new Date(document.getElementById("date").value);
  const reservationDay = reservationDate.getDay(); // 0 = Sunday, 1 = Monday

  // Check if the number of people exceeds the limit
  if (numPeople > 10) {
    alert(
      "The maximum number of people per reservation online is 10, please contact us if you would like to book more than 10 people."
    );
    return false;
  }

  // Check if the time is within the allowed range (5:30 pm to 9:30 pm)
  const [hours, minutes] = reservationTime.split(":").map(Number);
  if (
    hours < 17 ||
    (hours === 17 && minutes < 30) ||
    hours > 21 ||
    (hours === 21 && minutes < 30)
  ) {
    alert("We only take reservations from 5:30 pm to 9:30 pm.");
    return false;
  }

  if (reservationDay === 1) {
    alert("Sorry, we are closed on Mondays.");
    return false;
  }

  // If all checks pass, return true
  return true;
}

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
