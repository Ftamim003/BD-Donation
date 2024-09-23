document.getElementById('first-donate-btn').addEventListener('click',function(){

    const inputAmount= inputNumberById('first-input-btn');

    const changeAmount =inputTextById('first-amount');

    const mainBalance =inputTextById('main-balance');

    const totalAmount= inputAmount+changeAmount;
    
    const remainingBalance= mainBalance-inputAmount;
 
    document.getElementById('main-balance').innerText=remainingBalance;
    document.getElementById('first-amount').innerText=totalAmount;
})


document.getElementById('second-donate-btn').addEventListener('click',function(){

    const inputAmount= inputNumberById('second-input-btn');

    const changeAmount =inputTextById('second-amount')

    const mainBalance =inputTextById('main-balance');

    const totalAmount= inputAmount+changeAmount;

    const remainingBalance= mainBalance-inputAmount;


    document.getElementById('main-balance').innerText=remainingBalance;
    document.getElementById('second-amount').innerText=totalAmount;
})



document.getElementById('third-donate-btn').addEventListener('click',function(){

    const inputAmount= inputNumberById('third-input-btn');

    const changeAmount =inputTextById('third-amount');

    const mainBalance =inputTextById('main-balance');

    const totalAmount= inputAmount+changeAmount;

    const remainingBalance= mainBalance-inputAmount;


    document.getElementById('main-balance').innerText=remainingBalance;
    document.getElementById('third-amount').innerText=totalAmount;
})



document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-btn').classList.remove('bg-btnColor');

    document.getElementById('donation-btn').classList.add('bg-white');

    document.getElementById('history-btn').classList.remove('bg-white');
    document.getElementById('history-btn').classList.add('bg-btnColor','text-gray-800');

})

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-btn').classList.remove('bg-btnColor','text-gray-800');

    document.getElementById('history-btn').classList.add('bg-white','text-gray-500')
    document.getElementById('donation-btn').classList.remove('bg-white');

    document.getElementById('donation-btn').classList.add('bg-btnColor');




})