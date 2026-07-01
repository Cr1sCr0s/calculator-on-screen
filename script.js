let term1,operator,term2;
term1 = operator = term2 = '';

const displayExpr = document.querySelector('.calcu-expr');
const digitBtns = Array.from(
  (document.querySelector('.calcu-input'))
  .querySelectorAll('button'));

for(const btn of digitBtns) {
  btn.addEventListener('click', () => {
    if((typeof term1) === 'number') {
      term2 += btn.textContent;
      console.log(`term2: ${term2}`); // console.log
      displayExpr.textContent += btn.textContent;
    }else {
      term1 += btn.textContent;
      console.log(`term1: ${term1}`); // console.log
      displayExpr.textContent += btn.textContent;
    }
  });
}

const opBtns = Array.from(
  (document.querySelector('.calcu-operations'))
  .querySelectorAll('button'));
const displayResult = document.querySelector('.calcu-result');
let ans = 0;
const equalBtn = document.querySelector('.calcu-equal');

for(const btn of opBtns) {
  if(btn.textContent === 'AC') {
    btn.addEventListener('click', () => {
      displayExpr.textContent = '';
      displayResult.textContent = '';
      term1 = operator = term2 = '';
      ans = 0;
    });
    continue;
  }else if(btn.textContent === '=') {
    btn.addEventListener('click', () => {
      if((typeof term2) === 'string') term2 = +(term2);
      ans = operate(operator, term1, term2);
      if(!(Number.isInteger(ans))) ans = ans.toFixed(2);
      console.log(`ans: ${ans}`); // console.log
      displayResult.textContent = ans;
    });
    continue;
  }

  btn.addEventListener('click', () => {
    if(term2 !== '') {
      term2 = +(term2);
      equalBtn.click();
      displayExpr.textContent = ans;
      term1 = ans;
      term2 = '';
    }

    operator = btn.textContent;
    console.log(`operator: ${operator}`); // console.log
    term1 = +(term1);
    displayExpr.textContent += btn.textContent;
  });
}  

function operate(operator, term1, term2) {
  switch(operator) {
    case '+':
      return add(term1, term2);
      break;
    case '-':
      return subtract(term1, term2);
      break;
    case '×':
      return multiply(term1, term2);
      break;
    case '÷':
      return divide(term1, term2);
      break;
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
