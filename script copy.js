const decrement = (incdec , itemPrice) => {
    var textbox = document.querySelector(incdec);
    var itemval = document.querySelector(itemPrice);
    itemval.innerHTML = parseInt(itemval.innerHTML) - 15;
    // if (textbox.value > 1) {
    //     textbox.value--;
    // }
    if(textbox.value <= 0){
        textbox.value = 0;
        alert('nagative values are not allowed')
    }else{
        textbox.value = parseInt(textbox.value) -1 ;
        textbox.style.background = 'white';
        textbox.style.color = 'black';
    }
}
const increment = (incdec , itemPrice) => {
    var textbox = document.querySelector(incdec);
    var itemval = document.querySelector(itemPrice);
    // if (textbox.value < 5 ) {
    //     textbox.value++;
    // }
    if(textbox.value >=5){
        // textbox.value = 10;
        textbox.style.background = 'red';
        textbox.style.color = 'white';
        // alert('maximum quantity is 5')
    }else {
        textbox.value = parseInt(textbox.value) +1 ;
        itemval.innerHTML = parseInt(itemval.innerHTML) + 15;
    }
}
// document.body.style.background = 'red';