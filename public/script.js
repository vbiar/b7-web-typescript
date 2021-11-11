var numero1 = document.getElementById('number1');
var numero2 = document.getElementById('number2');
var btnCalculate = document.getElementById('calculate');
var res = document.getElementById('result');

function calculate(n1, n2) {
    return n1 + n2;
}
;
btnCalculate.addEventListener('click', function () {
    res.innerHTML = calculate(parseFloat(numero1.value), parseFloat(numero2.value)).toString();
});
