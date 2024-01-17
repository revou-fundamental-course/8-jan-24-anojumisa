const hitungLuas = document.getElementById("hitung");
const reset = document.getElementById("reset");
const sisiPersegi = document.getElementById("sisiPersegi");
const luasPersegiResult = document.getElementById("luas-persegi-result");
const sisixsisi = document.getElementById("luas-sisixsisi-result");
const persegix = document.getElementById("luas-persegix-result");


hitung.addEventListener ("click", () => {
    const sisi = sisiPersegi.value;
    const luas = sisi * sisi;

    luasPersegiResult.textContent = `Luas Persegi: ${luas}`;
    sisixsisi.textContent = `L = S X S`;
    persegix.textContent = `L = ${sisi} X ${sisi}`;
});