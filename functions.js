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
    historyContainer.className= "w-4/5 mx-auto border-2 rounded-lg my-5 p-5"; 
               
                 historyContainer.innerHTML+= `
                               <p class="font-bold"> ${inputAmount} Taka is Donated for ${text} </p>
                               <p>${new Date().toLocaleDateString()}</p>
                               
    `;

    document.getElementById('history-container').appendChild(historyContainer);
}