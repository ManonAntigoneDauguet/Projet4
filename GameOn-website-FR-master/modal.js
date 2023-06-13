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
const locationInput = document.querySelectorAll('input[name="location"]');
const conditionsInput = document.querySelector("#checkbox1");

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
  return false;
}

// say if conditions-checkbox is checked
function isConditionAccepted() {
  if (conditionsInput.checked) {
    return true;
  } 
  return false;   
}

// say if inputs are valide
function isInputValid() {
  for (let i = 0; i < formDataInputs.length; i++) {
    let input = formDataInputs[i];
    let inputName = input.name;
    let inputValue = input.value; 
    if (inputValue === "") {
      return false;
    } 
  }
  return true;
}

// validation message
function validate(event) {
  event.preventDefault();
  if (isInputValid() && isConditionAccepted() && isLocationSelected()) {
    alert("Merci pour votre inscription !");
    closeModal();
  } else {
    alert("Le formulaire n'est pas valide");
  }
}

// errors messages on input modal
// function letErrorMessages() {
//   for (let i = 0; i < formDataInputs.length; i++) {
//     let input = formDataInputs[i];
//     let inputName = input.name;
//     let inputValue = input.value; 
//     let inputRecommendation = "";
//     console.log(inputValue);
//       switch (inputName) {
//         case 'first':
//           if (inputValue === "") {
//             inputRecommendation = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';            
//           } 
//           break;

//         case 'last':
//           inputRecommendation = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
//           break;

//         case 'email':
//           inputRecommendation =  'Veillez rentrer un mail valide.';
//           break;

//         case 'birthdate':
//           inputRecommendation = 'Veillez entrer votre date de naissance.';
//           break;

//         case 'quantity':
//           inputRecommendation = 'Veillez répondre à la question.';
//           break;

//         case 'checkbox1':
//           inputRecommendation = 'Veillez accepter les termes et conditions d\'utilisation';
//           break;
        
//         case 'location':
//           if (isLocationSelected()) {
//             document.querySelector("#location1").removeAttribute("required");
//           } else {
//             inputRecommendation = "Veillez choisir un tournois";          
//           }
//           break;

//         default:
//           inputRecommendation = 'Veillez répondre à la question.';
//       }
//     input.setCustomValidity(inputRecommendation);
//   }
// }  

