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
const acBtn = document.querySelector('.calcu-all-clear')

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
      if(operator === '') return;
      if((typeof term2) === 'string') term2 = +(term2);

      ans = operate(operator, term1, term2);
      if(ans === 'divBy0'){
        acBtn.click();
        displayResult.textContent = 'Nice try loser';
        return;
      }
      if(!(Number.isInteger(ans))) ans = ans.toFixed(2);

      console.log(`ans: ${ans}`); // console.log
      displayResult.textContent = ans;
    });
    continue;
  }

  btn.addEventListener('click', () => {
    if(term1 === '') return;
    if(!(operator === '')){
      displayExpr.textContent = (displayExpr.textContent).slice(0, -1);
    }
    if(term2 !== '') {  
      term2 = +(term2);
      equalBtn.click();
      if(term1 === '') return; // cleared
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
      return term1 + term2;;
      break;
    case '-':
      return term1 - term2;
      break;
    case '×':
      return term1 * term2;
      break;
    case '÷':
      if(term2 === 0) return 'divBy0';
      return term1 / term2;
      break;
    default:
      console.log('no operator, returning 0');
      return 0;
      break;
  }
}
