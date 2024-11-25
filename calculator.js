const inputElement = document.querySelector('.numberOutput');
const buttons = document.querySelectorAll('.btn')
const plus = document.querySelector('.plus')

let valueArr = [];
let numberIncrement;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
    let innerButton = buttons[i].textContent;
    // clearBTN condition
    if(innerButton === 'C'){
        valueArr = [];
        inputElement.value = '';
    }
        else if(innerButton === '='){
            console.log(numberIncrement);
            // eval, evaluates the operator present in either a string or numbers and do the calculations according to the operator it found between the numbers;
            inputElement.value = eval(numberIncrement)
        }
    else{
        valueArr.push(innerButton);
        numberIncrement = valueArr.join('');
        inputElement.value =  numberIncrement;
        }
})
}
/* buttons.forEach(addEventListener('click', function(){
    console.log('clicked')
})) */