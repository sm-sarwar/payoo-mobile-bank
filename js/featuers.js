document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    document.getElementById('cash-form').classList.remove('hidden');
    document.getElementById('add-form').classList.add('hidden');
})

document.getElementById('btn-show-add-money').addEventListener('click', function(){
    document.getElementById('cash-form').classList.add('hidden');
    document.getElementById('add-form').classList.remove('hidden');
})