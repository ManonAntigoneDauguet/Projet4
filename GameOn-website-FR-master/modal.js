// responsive nav wrap
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
const formDataInputs = document.querySelectorAll(".formData input");
const closeBtn = document.querySelectorAll(".close");
const locationInputs = document.querySelectorAll('input[name="location"]');
const conditionsInput = document.querySelector("#checkbox1");

// launch modal (event)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal (function)
function launchModal() {
  modalbg.style.display = "block";
}

// close modal (event)
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal (function)
function closeModal() {
  modalbg.style.display = "none";
}

// say if a location is selected (function)
function isLocationSelected() {
  for (let i = 0; i < locationInputs.length; i++) {
    if (locationInputs[i].checked) {
      return true;
    }
  }
  return false;
}

// say if conditions-checkbox is checked (function)
function isConditionAccepted() {
  if (conditionsInput.checked) {
    return true;
  } 
  return false;   
}

// say if an input is valide (function)
function isInputValid(input) {
  let inputValue = input.value.trim();
    if (inputValue === "") {
      return false;
    } 
    if (input.type == "text" && inputValue.length < 2) {
      return false;
    }
    if (input.type == "number") {
      if (inputValue < 0 || inputValue > 99) {
        return false;
      }
    }
  return true;
}

// say if all inputs are valide (function)
function isAllInputsValid() {
  for (let i = 0; i < formDataInputs.length; i++) {
    let input = formDataInputs[i];
    if (!isInputValid(input)) {
      return false;
    }
  }
  return true;
}

// validation message (function)
function validate(event) {
  event.preventDefault();
  for (let i = 0; i < formDataInputs.length; i++) {
    let formDataInput = formDataInputs[i];
    letErrorMessage(formDataInput);
  }
  if (isAllInputsValid() && isConditionAccepted() && isLocationSelected()) {
    alert("Merci pour votre inscription !");
    closeModal();
  }
}

// error message on inputs (function)
function letErrorMessage(input) {
    let inputId = input.id;
    let inputRecommendation = "";
    switch (inputId) {
      case 'first':
        if (!isInputValid(input)) {
          inputRecommendation = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';  
        }
        break;

      case 'last':
        if (!isInputValid(input)) {
          inputRecommendation = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        }
        break;

      case 'email':
        if (!isInputValid(input)) {
          inputRecommendation =  'Veillez rentrer un mail valide.';
        }
        break;

      case 'birthdate':
        if (!isInputValid(input)) {
          inputRecommendation = 'Veillez entrer votre date de naissance.';
        }
        break;

      case 'quantity':
        if (!isInputValid(input)) {
          inputRecommendation = 'Veillez répondre à la question.';
        }
        break;

      case 'checkbox1':
        if (!isConditionAccepted()) {
          inputRecommendation = 'Veillez accepter les termes et conditions d\'utilisation';          
        }
        break;
    } 
    input.setCustomValidity(inputRecommendation);
    input.reportValidity();
}

// error message on inputs (event)
for (let i = 0; i < formDataInputs.length; i++) {
  let formDataInput = formDataInputs[i];
  formDataInput.addEventListener('change', () => {
    letErrorMessage(formDataInput);
  });
}