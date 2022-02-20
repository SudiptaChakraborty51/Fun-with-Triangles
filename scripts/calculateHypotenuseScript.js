const sides = document.querySelectorAll('.sides-input');
const calculateHypotenuseBtn = document.querySelector('#calculate-hypo-btn');
const errorMessage = document.querySelector('#error');
const outputMessage = document.querySelector('#output');

calculateHypotenuseBtn.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse(){
    if(Number(sides[0].value)!==0 && Number(sides[1].value)!==0){
        errorMessage.style.display = "none";
        outputMessage.style.display = "block";
        const sumOfSquares = Number(sides[0].value)*Number(sides[0].value) + Number(sides[1].value)*Number(sides[1].value);
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputMessage.innerText = "The length of hypotenuse is = "+lengthOfHypotenuse;
    } else{
        errorMessage.style.display = "block";
        outputMessage.style.display = "none";
        errorMessage.innerText = "Please enter both the values of a & b!";
    } 
}