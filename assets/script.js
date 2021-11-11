const qS = (element) => { document.querySelector(element)};
const qSA = (element) => {document.querySelectorAll(element)};

let number1 = qS('number1');
let number2 = qS('number2');
let btnCalculate = qS('calculate');
let res = qS('result');


function calculate (n1, n2) {
    return n1 + n2;
};

btnCalculate.addEventListener('click', function() {
    res.innerHTML = calculate(number1.value, number2.value);
});