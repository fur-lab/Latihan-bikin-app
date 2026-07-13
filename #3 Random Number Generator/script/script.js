let min = document.getElementById("box-min");
let max = document.getElementById("box-max");
let num = document.getElementById("angka");
const generator = document.getElementById("btn-generate");

const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;


generator.addEventListener("click", () => {
    num = ranNum;
});