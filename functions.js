// Common function for all donate button
function commonFunctionForAllDonateButton(input,amount,balanceAmount,donateType){
    const inputAmount= inputNumberById(input);

    const changeAmount =inputTextById(amount);

    const mainBalance =inputTextById(balanceAmount);

    const totalAmount= parseFloat(inputAmount)+parseFloat(changeAmount);
    
    const remainingBalance= parseFloat(mainBalance)-parseFloat(inputAmount);

    if(inputAmount===""){
        alert("Put an amount");
        return;
    }
    else if(inputAmount<=0 || isNaN(inputAmount) ){
           alert("invalid input");
           return
    }
    else if(remainingBalance<0){

        alert("Insufficient balance!");
           return
    }
 
    else{
        document.getElementById('main-balance').innerText=remainingBalance;
        document.getElementById(amount).innerText=totalAmount;
         const text=document.getElementById(donateType).innerText;
    
        historyTextContainer(inputAmount,text);

        myModal.showModal();

    }

}



// input number function
function inputNumberById(id){

    
    const inputValue= document.getElementById(id).value;
    return inputValue;
}


// inputText
function inputTextById(id){

    const changeAmount = document.getElementById(id).innerText;

    return changeAmount;
}




// History Div Container function
function historyTextContainer(inputAmount,text){
    const historyContainer= document.createElement('div');
    historyContainer.className= "w-4/5 mx-auto border-2 rounded-2xl my-5 p-7 h:48 md:h-32"; 

    const now = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Dhaka', 
        timeZoneName: 'short'
    };

    const formattedDate = now.toLocaleString('en-US', options).replace(',', '');
               
                 historyContainer.innerHTML+= `
                               <p class="font-bold"> ${inputAmount} Taka is Donated for ${text} </p>
                               <p class="mt-3">Date: ${formattedDate} (Bangladesh Standard Time)</p>
                               
    `;

    document.getElementById('history-container').appendChild(historyContainer);
}