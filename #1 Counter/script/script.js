let hitungan = 0;
const plusBtn = document.getElementById("pluss"); 
const minBtn = document.getElementById("minuss"); 
const resetBtn = document.getElementById("reset"); 
let hasil = document.getElementById("angka");

plusBtn.addEventListener("click", () => {
    hitungan++;
    update();
});

minBtn.addEventListener("click", () => {
    hitungan--;
    update();
});

resetBtn.addEventListener("click", () => {
    hitungan = 0;
    update();
});

function update(){
    hasil.textContent = hitungan;
}
