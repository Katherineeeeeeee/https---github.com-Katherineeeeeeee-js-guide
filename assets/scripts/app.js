const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    // currentResult = currentResult + +userInput.value; = the same
    outputResult(currentResult, '');
}


addBtn.addEventListener('click', add)