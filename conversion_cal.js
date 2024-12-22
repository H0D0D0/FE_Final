
let inputElement = document.getElementById('input');
let outputElement = document.getElementById('output');
let submitButton = document.getElementById('submit');


function cmToInchConverter() {
    
    let cmValue = parseFloat(inputElement.value);
    
  
    if (isNaN(cmValue)) {
        outputElement.innerText = "변환할 숫자를 입력해주세요.";
        return;
    }
    
    let inchValue = parseFloat((cmValue * 0.393701).toFixed(10));
    
    outputElement.innerText = `${cmValue}cm는 ${inchValue}inch 입니다.`;
}


submitButton.addEventListener('click', cmToInchConverter);
