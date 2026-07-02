let term1 = ''; 
let operator = '';
let term2 = '';

const displayExpr = document.querySelector('.calcu-expr');
const digitBtns = makeArray(getBtns('.calcu-input'));

for(const btn of digitBtns) {
  btn.addEventListener('click', (evt) => {

    const inTerm1 = ((typeof term1) === 'string');
    const inTerm2 = ((typeof term1) === 'number');
    const clickedDecimal = (evt.target.textContent === '.');

    if(inTerm1) {
      if((hasDecimal(term1) || term1 === '') && clickedDecimal
      ) return;
      term1 += btn.textContent;
      console.log(`term1: ${term1}`); // console.log
      displayExpr.textContent += btn.textContent;

    }
    
    if(inTerm2) {
      if((hasDecimal(term2) || term2 === '') && clickedDecimal
      ) return;
      term2 += btn.textContent;
      console.log(`term2: ${term2}`); // console.log
      displayExpr.textContent += btn.textContent;
    }

  });
}

const opBtns = makeArray(getBtns('.calcu-operations'));
const displayResult = document.querySelector('.calcu-result');
const equalBtn = document.querySelector('.calcu-equal');
const acBtn = document.querySelector('.calcu-all-clear');
let ans = 0;

for(const btn of opBtns) {
  btn.addEventListener('click', (evt) => {
    const clickedAc = (evt.target.textContent === 'AC');
    const clickedEqual = (evt.target.textContent === '=');

    if(clickedAc) {
      displayExpr.textContent = '';
      displayResult.textContent = '';
      term1 = operator = term2 = '';
      ans = 0;
  
    }else if(clickedEqual) {
      const isExpression = !(operator === '');
      if(!(isExpression)) return;

      const canComputeExpr = ((typeof term2) === 'string');
      if(canComputeExpr) term2 = +(term2);

      ans = operate(operator, term1, term2);

      if(ans === 'divBy0'){
        acBtn.click();
        displayResult.textContent = 'Nice try loser';
        return;
      }

      const isDecimal = !(Number.isInteger(ans));
      if(isDecimal) ans = ans.toFixed(2);

      console.log(`ans: ${ans}`); // console.log
      displayResult.textContent = ans;

    }else { // clicked operator btns
      const hasTerm1 = !(term1 === '');
      if(!(hasTerm1)) return;

      const hasOperator = !(operator === '');
      if(hasOperator)
        displayExpr.textContent = removeLastChar(displayExpr.textContent);

      const hasTerm2 = !(term2 === '');
      if(hasTerm2) {  
        term2 = +(term2);
        equalBtn.click(); 
        
        const cleared = (term1 === '');
        if(cleared) return; // ac clicked

        displayExpr.textContent = ans;
        term1 = ans;
        term2 = '';
      }
  
      operator = btn.textContent;
      console.log(`operator: ${operator}`); // console.log
      term1 = +(term1);
      displayExpr.textContent += btn.textContent;
    }
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

function getBtns(nodeClass) {
  const node = document.querySelector(nodeClass);
  return node.querySelectorAll('button');
}

function makeArray(iterable) {
  return Array.from(iterable);
}

function removeLastChar(string) {
  return string.slice(0, -1);
}

function hasDecimal(term) {
  return (/\./).test(term);
}
