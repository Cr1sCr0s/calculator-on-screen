let term1, operator, term2;

function operate(operator, term1, term2){
  switch(operator){
    case '+':
      add(term1, term2);
    case '-':
      subtract(term1, term2);
    case '*':
      multiply(term1, term2);
    case '/':
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
