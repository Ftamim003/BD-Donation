
// First Donation Button
document.getElementById('first-donate-btn').addEventListener('click',function(){
    commonFunctionForAllDonateButton('first-input-btn','first-amount','main-balance','noakhali-flood')
})


// Second Donate Button
document.getElementById('second-donate-btn').addEventListener('click', function(){
    commonFunctionForAllDonateButton('second-input-btn','second-amount','main-balance','feni-flood')
})


// Third Donate Button

document.getElementById('third-donate-btn').addEventListener('click', function(){
    commonFunctionForAllDonateButton('third-input-btn','third-amount','main-balance','movement-injured')
})



// History Button
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-btn').classList.remove('bg-btnColor');

    document.getElementById('donation-btn').classList.add('bg-white');

    document.getElementById('history-btn').classList.remove('bg-white');
    document.getElementById('history-btn').classList.add('bg-btnColor','text-gray-800');

    document.getElementById('history-container').classList.remove('hidden');

    document.getElementById('donation-info-container').classList.add('hidden');

    document.getElementById('footer').classList.add('hidden');

})


// Donation Button
document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-btn').classList.remove('bg-btnColor','text-gray-800');

    document.getElementById('history-btn').classList.add('bg-white','text-gray-500')
    document.getElementById('donation-btn').classList.remove('bg-white');

    document.getElementById('donation-btn').classList.add('bg-btnColor');


    document.getElementById('history-container').classList.add('hidden');

    document.getElementById('donation-info-container').classList.remove('hidden');
    

    document.getElementById('footer').classList.remove('hidden');

})