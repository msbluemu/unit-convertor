/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-num")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let buttonEl = document.getElementById("button")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204
        
button.addEventListener('click', function () {
    
let baseValue = inputEl.value

lengthEl.innerHTML = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(3)} meters`
volumeEl.innerHTML = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons= ${(baseValue/literToGallon).toFixed(3)} liters`
massEl.innerHTML = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue/kiloToPound).toFixed(3)} kilos`
        })

