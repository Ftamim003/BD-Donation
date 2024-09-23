// First Donation Button
document.getElementById('first-donate-btn').addEventListener('click',function(){

    const inputAmount= inputNumberById('first-input-btn');

    const changeAmount =inputTextById('first-amount');

    const mainBalance =inputTextById('main-balance');

    const totalAmount= inputAmount+changeAmount;
    
    const remainingBalance= mainBalance-inputAmount;

    if(inputAmount<0 || isNaN(inputAmount) ){
           alert("invalid input");
           return
    }
    else if(remainingBalance<0){

        alert("Insufficient balance!");
           return
    }
 
    else{
        document.getElementById('main-balance').innerText=remainingBalance;
        document.getElementById('first-amount').innerText=totalAmount;
         const text=document.getElementById('noakhali-flood').innerText;
    
        historyTextContainer(inputAmount,text);

    }




})


// Second Donation Button

document.getElementById('second-donate-btn').addEventListener('click',function(){

    const inputAmount= inputNumberById('second-input-btn');

    const changeAmount =inputTextById('second-amount')

    const mainBalance =inputTextById('main-balance');

    const totalAmount= inputAmount+changeAmount;

    const remainingBalance= mainBalance-inputAmount;

    
    
    if(inputAmount<0 || isNaN(inputAmount)){
        alert("invalid input");
        return
 }
 else if(remainingBalance<0){

    alert("Insufficient balance!");
       return
}
 
else{
    document.getElementById('main-balance').innerText=remainingBalance;
    document.getElementById('second-amount').innerText=totalAmount;


    const text=document.getElementById('feni-flood').innerText;

    historyTextContainer(inputAmount,text);

    
}
  


});



// Third DOnation Button

document.getElementById('third-donate-btn').addEventListener('click',function(){

    const inputAmount= inputNumberById('third-input-btn');

    const changeAmount =inputTextById('third-amount');

    const mainBalance =inputTextById('main-balance');

    const totalAmount= inputAmount+changeAmount;

    const remainingBalance= mainBalance-inputAmount;

    if(inputAmount<0 || isNaN(inputAmount)){
        alert("invalid input");
        return
 }
 else if(remainingBalance<0){

    alert("Insufficient balance!");
       return
}
    else{
        const text=document.getElementById('movement-injured').innerText;


    document.getElementById('main-balance').innerText=remainingBalance;
    document.getElementById('third-amount').innerText=totalAmount;

    
    historyTextContainer(inputAmount,text);
    }
});




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