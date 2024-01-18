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
const kelilingpersegi = document.getElementById("keliling-sisixsisi-result");
const resetKelilingButton = document.getElementById("resetKeliling");


hitungLuas.addEventListener("click", function() {
   const sisi = sisiPersegi.value;
   // Validation
   if (!/^\d+$/.test(sisi) || parseInt(sisi) <= 0) {
      alert("Masukkan nilai sisi yang valid (harus angka positif).");
      return;
  }
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

hitungKeliling.addEventListener("click", function() {
   const sisiK = sisiKeliling.value;
   // Validation
   if (!/^\d+$/.test(sisiK) || parseInt(sisiK) <= 0) {
      alert("Masukkan nilai sisi yang valid (harus angka positif).");
      return;
  }
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

function navigateToLuasPersegi() {
  const luasPersegiSection = document.getElementById("luas-persegi");

  if (luasPersegiSection) {
    luasPersegiSection.scrollIntoView({
      behavior: "smooth",
      block: "start"  
    });
  }
}