
// Exemplo de um código que ficaria mais simples com TypeScript

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let btnCalculate = document.getElementById('calculate');
let res = document.getElementById('result');


function calculate (n1, n2) {
    if (typeof n1 == 'number'&& typeof n2 == 'number') {

        return n1 + n2;
    } else {
        /* n1 = parseInt(n1);
        n2 = parseInt(n2); */
        return +n1 + +n2;
    }
};

btnCalculate.addEventListener('click', function() {
    res.innerHTML = calculate(number1.value, number2.value);
});