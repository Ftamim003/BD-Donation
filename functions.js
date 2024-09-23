function inputNumberById(id){

    const inputValue= parseFloat(document.getElementById(id).value);
    return inputValue;
}


function inputTextById(id){

    const changeAmount = parseFloat(document.getElementById(id).innerText);

    return changeAmount;
}



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