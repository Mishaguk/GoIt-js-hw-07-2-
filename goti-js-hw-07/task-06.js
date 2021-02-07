'use strict'
let inputValid = document.getElementById("validation-input");

let totalLength = inputValid.getAttribute('data-length')
let intTotalLenght = parseInt(totalLength, 6);

inputValid.input = () => {
  if (Number(inputValid.value.length) === Number(totalLength)) {
    inputValid.classList.remove("invalid");
    inputValid.classList.add("valid");
    }
  };

 console.log(inputValid.value)