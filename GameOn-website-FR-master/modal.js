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
const locationInputDiv = document.querySelector('.locationInputs');
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
  return false;
}

// validation modal form
function validate(event) {
  if (!isLocationSelected() || !isConditionAccepted()) {
    event.preventDefault();
  }
}

// errors messages on input modal
function isInputValid(inputName) {
  const input = document.querySelector(`#${inputName}`);
  let inputRecommendation = "";
    switch (inputName) {
      case 'first':
        inputRecommendation = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
        break;

      case 'last':
        inputRecommendation = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        break;

      case 'email':
        inputRecommendation =  'Veillez rentrer un mail valide.';
        break;

      case 'birthdate':
        inputRecommendation = 'Veillez entrer votre date de naissance.';
        break;

      case 'quantity':
        inputRecommendation = 'Veillez répondre à la question.';
        break;

      case 'checkbox1':
        inputRecommendation = 'Veillez accepter les termes et conditions d\'utilisation';
        break;
      
      case 'location1':
        if (isLocationSelected()) {
          document.querySelector("#location1").removeAttribute("required");
        } else {
          inputRecommendation = "Veillez choisir un tournois";          
        }
        break;

      default:
        inputRecommendation = 'Veillez répondre à la question.';
    }
  input.setCustomValidity(inputRecommendation);
}
