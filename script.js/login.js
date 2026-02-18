console.log('coming')

document.getElementById('login-btn').addEventListener('click',function(){
//1 - get the mobile number input
const numberInput =  document.getElementById('input-mobile')
const contactNumber = numberInput.value ;
console.log(contactNumber);

// 2 - get the pin
const inputPin = document.getElementById ('input-pin')
const pin = inputPin.value;
console.log(pin);

// 3 match pin and mobile number
if(contactNumber=='01234567890' && pin=='1234'){



// 3-1 true alert>homepage
alert('login Success') ;

window.location.assign('./index.html')
}
// 3-2 true alert > return
else{
    alert('login fail')
    return;
}

})