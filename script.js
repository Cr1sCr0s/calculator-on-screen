let term1, operator, term2;

const digitBtns = Array.from(
  (document.querySelector('.calcu-input'))
  .querySelectorAll('button'));

const displayExpr = document.querySelector('.calcu-expr');

for(const btn of digitBtns){
  btn.addEventListener('click', () => {
    displayExpr.textContent += btn.textContent;
    term1 = +(displayExpr.textContent);
  });
}

function operate(operator, term1, term2) {
  switch(operator) {
    case '+':
      add(term1, term2);
    case '-':
      subtract(term1, term2);
    case '×':
      multiply(term1, term2);
    case '÷':
      divide(term1, term2);
  }
}

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
