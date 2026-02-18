document.getElementById('cashout-btn').addEventListener('click', function  (){

// step -1 ==> get the  agent number $ validate
    const cashOutNumber =    document.getElementById('cashout-number');
    const  cashoutNumber = cashOutNumber.value;
    console.log(cashoutNumber);


// get step -2 ==> the  amount input ,

const casOutAmount= document.getElementById('cashout-amount');
const cashoutAmount =casOutAmount.value;
console.log(cashoutAmount);

// validate
if(cashoutAmount.length !=11){
    alert('invalid Agent  Number')
    return;
}


// get step -3   get the  current Balance,
const  balanceElement  = document.getElementById('balance')
const balance = balanceElement.innerText;
console.log (balance)

// get step -4  calculate new Balance
const  newBalance =Number(balance) - Number(cashoutAmount)


// Balance 0 theke soto hole validate
if(newBalance <  0){
    alert('Invalid Ammount')
    return;
}

console.log ('new Balance', newBalance) ;
// get the pin and verify

const  cashoutPinInput=document.getElementById('cashoutut-pin')
 const pin  = cashoutPinInput.value

 if(pin===  '1234'){
    // true ===> alert ===> add  new  balance
    alert('Cash Out Successfull')

    // current balaance show
    balanceElement.innerText=newBalance ;

 }

// true show another alert > return
else{
    alert('Invalid Pin');
    return
}


});