let Count = 0;

const Teks_Angka= document.getElementById('angka');
const Tombol = document.getElementById('click-button');

Tombol.addEventListener('click', function() {
    Count = Count + 1;

    Teks_Angka.textContent = Count;
});
