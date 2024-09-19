document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-amount').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput, inputPinNumber) ;
})