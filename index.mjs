const pBox = document.getElementById("P");
const rBox = document.getElementById("r");
const answerSpan = document.querySelector("span");

const calc = function(){
    const principal = Number(pBox.value);

    const yearlyRate = Number(rBox.value);
    const r = (yearlyRate / 100) / 12;

    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const n = Number(selectedRadio.value) * 12;

    const mp = (principal * r) / (1 - (1 + r) ** -n);
    answerSpan.textContent = "$" + mp.toFixed(2);
};

window.calc = calc;