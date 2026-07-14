let num = document.getElementById("angka");
const generator = document.getElementById("btn-generate");

generator.addEventListener("click", () => {
    let min = Number(document.getElementById("box-min").value);
    let max = Number(document.getElementById("box-max").value);
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
});

num.value = ranNum;