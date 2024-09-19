document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-amount').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;

    if(inputPinNumber === '1234'){
        const currentBalance = (document.getElementById('current-balance').innerText);
        const currentBalanceNumber = parseFloat(currentBalance)
        const addMoneyNumber = parseFloat(addMoneyInput)
        const totalAmount = currentBalanceNumber + addMoneyNumber;
        console.log(totalAmount);
        document.getElementById('current-balance').innerText = totalAmount;
    }
    else{
        alert('Invalid PIN number');
    }
})