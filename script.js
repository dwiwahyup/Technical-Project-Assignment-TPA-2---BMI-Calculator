var tinggiBadan = document.querySelector(".tinggi-badan");
var beratBadan = document.querySelector(".berat-badan");
var hitungBmi = document.querySelector(".hitung");
var hasil = document.querySelector(".hasil");
var deskripsi = document.querySelector(".deskripsi");
var BMI, tinggiBadan, beratBadan;

hitungBmi.addEventListener("click", () => {

    tinggiBadan = tinggiBadan.value;
    beratBadan = beratBadan.value;
    BMI = beratBadan / ((tinggiBadan / 100) ** 2);
    hasil.innerText = BMI;

    if (BMI < 18.5) {
        deskripsi.innerText = "Underweight";
    } else if ((BMI > 18.5) && (BMI <= 24.9)) {
        deskripsi.innerText = "Normal Weight";
    } else if ((BMI >= 25) && (BMI <= 29.9)) {
        deskripsi.innerText = "Overweight";
    } else if (BMI >= 30) {
        deskripsi.innerText = "Obesity";
    }
});