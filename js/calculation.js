
function givenData(elementId) {
    const givenElementData = document.getElementById(elementId);
    const givenMoneyString = givenElementData.innerText;
    const givenMoney = parseFloat(givenMoneyString);
    return givenMoney;
}

function inputData(inputId) {
    const inputValueData = document.getElementById(inputId);
    const inputMoneyString = inputValueData.value;
    const inputMoney = parseFloat(inputMoneyString);
    inputValueData.value = '';
    return inputMoney;
}

function add(number1, number2) {
    const addResult = number1 + number2;
    return addResult;
}

function substract(number1, number2) {
    const addResult = number1 - number2;
    return addResult;
}


// document.getElementById('deposit-btn').addEventListener('click', function(event){

//     const givenBalance = givenData('balance');
//     const givenDeposit = givenData('deposit');
//     const inputDeposit = inputData('deposit-input');

//     document.getElementById('deposit').innerText = add(givenDeposit, inputDeposit);
//     document.getElementById('balance').innerText = add(givenBalance, inputDeposit);

//     event.preventDefault();
// });

document.getElementById('deposit-btn').addEventListener('click', function (event) {

    const givenBalance = givenData('balance');
    const givenDeposit = givenData('deposit');
    const inputDeposit = inputData('deposit-input');

    if (isNaN(inputDeposit) == false) {
        document.getElementById('deposit').innerText = add(givenDeposit, inputDeposit);
        document.getElementById('balance').innerText = add(givenBalance, inputDeposit);
    } else {
        alert('please provide valid input');
    }

    event.preventDefault();
});


// document.getElementById('withdraw-btn').addEventListener('click', function(event){

//     const givenBalance = givenData('balance');
//     const givenWithdrew = givenData('withdraw');
//     const inputWithdraw = inputData('withdraw-input');

//     document.getElementById('withdraw').innerText = add(givenWithdrew, inputWithdraw);
//     document.getElementById('balance').innerText = substract(givenBalance, inputWithdraw);

//     event.preventDefault();
// });

document.getElementById('withdraw-btn').addEventListener('click', function (event) {

    const givenBalance = givenData('balance');
    const givenWithdrew = givenData('withdraw');
    const inputWithdraw = inputData('withdraw-input');

    if (isNaN(inputWithdraw) == false) {
        if (givenBalance > inputWithdraw) {
            document.getElementById('withdraw').innerText = add(givenWithdrew, inputWithdraw);
            document.getElementById('balance').innerText = substract(givenBalance, inputWithdraw);
        }
        else{
            alert('sorry! you do not have enough money')
        }
    } else {
        alert('please provide valid input');
    }

    event.preventDefault();
});