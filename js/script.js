const hitungLuas = document.getElementById("hitung");
const resetButton = document.getElementById("reset");
const sisiPersegi = document.getElementById("sisiPersegi");
const sisiKeliling = document.getElementById("sisiKeliling");

const luasPersegiResult = document.getElementById("luas-persegi-result");
const sisixsisi = document.getElementById("luas-sisixsisi-result");
const persegix = document.getElementById("luas-persegix-result");

const hitungKeliling = document.getElementById("hitungKeliling");
const kelilingPersegiResult = document.getElementById("keliling-persegi-result");
const empatxsisi = document.getElementById("keliling-persegix-result");
const kelilingpersegi = document.getElementById("keliling-persegi-result");
const resetKelilingButton = document.getElementById("resetKeliling");


hitungLuas.addEventListener("click", () => {
   const sisi = sisiPersegi.value;
   const luas = sisi * sisi;

   luasPersegiResult.textContent = `Luas Persegi: ${luas}`;
   sisixsisi.textContent = `L = S X S`;
   persegix.textContent = `L = ${sisi} X ${sisi}`;
});

resetButton.addEventListener("click", function() {
   sisiPersegi.value = "";
   luasPersegiResult.textContent = "";
   sisixsisi.textContent = "";
   persegix.textContent = "";
});

hitungKeliling.addEventListener("click", () => {
   const sisiK = sisiKeliling.value;
   const keliling = 4 * sisiK;

   empatxsisi.textContent = `K = 4 X S`;
   kelilingpersegi.textContent = `K = 4 X ${sisiK}`;
   kelilingPersegiResult.textContent = `Keliling Persegi: ${keliling}`;
});

resetKelilingButton.addEventListener("click", function() {
   sisiKeliling.value = "";
   empatxsisi.textContent = "";
   kelilingpersegi.textContent = "";
   kelilingPersegiResult.textContent = "";
});