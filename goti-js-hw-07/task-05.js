'use strict'
let input = document.getElementById('name-input');
let nameOutPut = document.getElementById('name-output')

input.oninput = function () {
    if (input.value === '') {
        nameOutPut.innerHTML = 'Незнакомец'
    } else {
        nameOutPut.innerHTML = input.value
    }
}