//function ONclick button for reservations pop up calender, with hours and dates, and amount of people
//objet id : name, time, date, how many people

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button-18");

  function onButtonClick() {
    alert("Button clicked!");
  }

  button.addEventListener("click", onButtonClick);
});
