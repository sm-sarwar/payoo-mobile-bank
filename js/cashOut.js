document.getElementById('btn-cash-out').addEventListener('click', function(event) {
    event.preventDefault();
    
    const cashOutInput = document.getElementById('Cash-out-input').value;
    const cashInputPin = document.getElementById('cash-input-pin-number').value;

    if(cashInputPin === '1234') {
        const currentBalance = document.getElementById('current-balance').innerText;
        console.log(currentBalance);

        const currentBalanceNumber = parseFloat(currentBalance);
        const cashOutInputNumber = parseFloat(cashOutInput);
        
        if(currentBalanceNumber >= cashOutInputNumber) {
            const newBalance = currentBalanceNumber - cashOutInputNumber;
            document.getElementById('current-balance').innerText = newBalance;
        }
        else {
            alert('Insufficient funds');
        }
    }
    else {
        alert('something failed');
    }
})