var product_amnt = document.querySelector('#product_amnt');
var Shipping_charges = document.querySelector('#Shipping_charges');
var total_car_amt = document.querySelector('#total_car_amt');
var discount_code_input = document.querySelector('#discount_code_input');
var code = document.querySelector('#code');
var error_trw = document.querySelector('#error_trw');


const decrement = (incdec, itemPrice) => {
    var textbox = document.querySelector(incdec);
    var itemval = document.querySelector(itemPrice);
    // if (textbox.value > 1) {
    //     textbox.value--;
    // }
    if (textbox.value <= 1) {
        // textbox.value = 0;
        alert('minimum quantity is 1')
    } else {
        textbox.value = parseInt(textbox.value) - 1;
        textbox.style.background = 'white';
        textbox.style.color = 'black';
        itemval.innerHTML = parseInt(itemval.innerHTML) - 15;
        product_amnt.innerHTML = parseInt(product_amnt.innerHTML) - 15;
        total_car_amt.innerHTML = parseInt(product_amnt.innerHTML) + parseInt(Shipping_charges.innerHTML);
    }
}
const increment = (incdec, itemPrice) => {
    var textbox = document.querySelector(incdec);
    var itemval = document.querySelector(itemPrice);
    // if (textbox.value < 5 ) {
    //     textbox.value++;
    // }
    if (textbox.value >= 5) {
        // textbox.value = 10;
        textbox.style.background = 'red';
        textbox.style.color = 'white';
        alert('maximum quantity is 5')
    } else {
        textbox.value = parseInt(textbox.value) + 1;
        itemval.innerHTML = parseInt(itemval.innerHTML) + 15;
        product_amnt.innerHTML = parseInt(product_amnt.innerHTML) + 15;
        total_car_amt.innerHTML = parseInt(Shipping_charges.innerHTML) + parseInt(product_amnt.innerHTML);
    }
}

var something = true;

const discount_code = () => {
        if (discount_code_input.value === 'owes' && something ) { 
            something = false;
            console.log('match');
            total_car_amt.innerHTML = total_car_amt.innerHTML - 15;
            error_trw.innerHTML = '<span class="text-success"> Hurray! code is vaild </span>'
            discount_code_input.style.display = 'none';
        } else if (something) {
            console.log('not match')
            discount_code_input.value == 'incorrect code';
            error_trw.innerHTML = `code is not match <span class='text-danger'>(owes)</span> `;
        }
}
// document.body.style.background = 'red';