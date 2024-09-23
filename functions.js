function inputNumberById(id){

    const inputValue= parseFloat(document.getElementById(id).value);

    return inputValue;
}


function inputTextById(id){

    const changeAmount = parseFloat(document.getElementById(id).innerText);

    return changeAmount;
}