let numero1 = document.getElementById('number1') as HTMLInputElement;
let numero2 = document.getElementById('number2') as HTMLInputElement;
let btnCalculate = document.getElementById('calculate');
let res = document.getElementById('result');


function calculate (n1, n2) {

        return n1 + n2;
};

btnCalculate.addEventListener('click', function() {
    res.innerHTML = calculate(numero1.value, numero2.value);
});