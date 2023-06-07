function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const locationInput = document.querySelectorAll('input[name="location"]');
const conditionsInput = document.querySelector("#checkbox1");
const form = document.querySelector('form[name="reserve"]');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// say if a location is selected
function isLocationSelected() {
  for (let i = 0; i < locationInput.length; i++) {
    if (locationInput[i].checked) {
      return true;
    }
  }
  alert("Veillez choisir un tournois");
  return false;
}

// say if conditions-checkbox is checked
function isConditionAccepted() {
  if (conditionsInput.checked) {
    return true;
  } 
  alert("Veillez accepter les conditions d'utilisation"); 
  return false;   
}

// validation modal form
function validate(event) {
  if (!isLocationSelected() || !isConditionAccepted()) {
    event.preventDefault();
  }
}

// errors messages on input modal
function isInputValid(inputId, inputRecommendation) {
  const input = document.querySelector(inputId);
  if (input.validity.valueMissing) {
    input.setCustomValidity(inputRecommendation);
  } else {
    input.setCustomValidity("");
  }  
}