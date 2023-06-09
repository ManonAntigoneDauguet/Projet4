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
const modalContent = document.querySelector(".modal-inputs");
const formData = document.querySelectorAll(".formData");
const formDataInputs = document.querySelectorAll(".formData input");
const closeBtn = document.querySelectorAll(".close");
const locationInputs = document.querySelectorAll('input[name="location"]');
const conditionsInput = document.querySelector("#checkbox1");
const form = document.querySelector('form[name="reserve"]');
const validationMessage = document.querySelector(".validationMessage");
const submitBtn = document.querySelector(".btn-submit");

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

// say if an input is valide (function)
function isInputValid(input) {
  let inputValue = input.value.trim();
    if (inputValue === "") {
      return false;
    } 
    switch(input.type) {
      case 'text':
        if (inputValue.length < 2) {
          return false;
        }
        break;

      case 'number':
        if (inputValue < 0 || inputValue > 99) {
          return false;
        }    
        break;    

      case 'email':
        let emailRegExp = new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")
        if (!emailRegExp.test(inputValue)) {
          return false;
        }     
        break;   
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
function validate() {
  for (let i = 0; i < formDataInputs.length; i++) {
    let formDataInput = formDataInputs[i];
    if (!showErrorMessage(formDataInput)){
      break;
    }
  }
  if (isAllInputsValid() && conditionsInput.checked && isLocationSelected()) {
    modalContent.innerHTML = 
      `<div class="validationMessage">
        <p>Merci pour<br> votre inscription</p>
      </div>`;
    submitBtn.value = "Fermer";
    submitBtn.addEventListener("click", closeModal);
  }
}

// validation message (event)
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
})

// error message on inputs (function)
function showErrorMessage(input) {
    let inputName = input.name;
    let recommendationSpace = document.querySelector(`.${inputName}`);
    let inputRecommendation = "";
    switch (inputName) {
      case 'first':
        if (!isInputValid(input)) {
          inputRecommendation = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';  
        } else {
          recommendationSpace.setAttribute("data-error-visible", "false");
        }
        break;

      case 'last':
        if (!isInputValid(input)) {
          inputRecommendation = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        } else {
          recommendationSpace.setAttribute("data-error-visible", "false");
        }
        break;

      case 'email':
        if (!isInputValid(input)) {
          inputRecommendation =  'Veillez rentrer un mail valide.';
        } else {
          recommendationSpace.setAttribute("data-error-visible", "false");
        }
        break;

      case 'birthdate':
        if (!isInputValid(input)) {
          inputRecommendation = 'Veillez entrer votre date de naissance.';
        } else {
          recommendationSpace.setAttribute("data-error-visible", "false");
        }
        break;

      case 'quantity':
        if (!isInputValid(input)) {
          inputRecommendation = 'Veillez sélectionner un nombre en 1 et 99.';
        } else {
          recommendationSpace.setAttribute("data-error-visible", "false");
        }
        break;

      case 'location':
        if (!isLocationSelected()) {
          inputRecommendation = 'Veillez choisir un tournois';
        } else {
          recommendationSpace.setAttribute("data-error-visible", "false");
        }
        break;
       
      case 'checkbox1':
        if (!conditionsInput.checked) {
          inputRecommendation = 'Veillez accepter les termes et conditions d\'utilisation';          
        } else {
          recommendationSpace.setAttribute("data-error-visible", "false");
        }
        break;
    } 
    if (inputRecommendation !== "") {
      recommendationSpace.setAttribute("data-error", inputRecommendation);
      recommendationSpace.setAttribute("data-error-visible", "true");
    }
    return inputRecommendation === "";
}

// error message on inputs (event)
for (let i = 0; i < formDataInputs.length; i++) {
  let formDataInput = formDataInputs[i];
  formDataInput.addEventListener('change', () => {
    showErrorMessage(formDataInput);
  });
}