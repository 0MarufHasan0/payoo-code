
// Machine us id value






document.getElementById('cashout-btn').addEventListener('click', function(){
// get the agent number &  validate

const cashoutNumber= getValueFormInput('cashout-number')
console.log(cashoutNumber)

if(cashoutNumber.length !=11){
    alert('Invalid Number')
    return;
}
// get the amount
const cashoutAmount=getValueFormInput('cashout-amount')

//  get step -3   get the  current Balance,
 const currentBalance =getBalance()

// 4 calculate balance

const newBalance = currentBalance - Number(cashoutAmount)
if(newBalance < 0){
    alert ('Invalid Amount')
    return;
}
// 5 pin

const pin =  getValueFormInput('cashoutut-pin')
if(pin==='1234'){
    alert ('cashout successful');
    setBalance(newBalance);
}

else{
    alert('Wrong pin')
    return;
}

})

















// minimum  2  bar kore likba


// document.getElementById('cashout-btn').addEventListener('click', function  (){

// // step -1 ==> get the  agent number $ validate
//     const cashOutNumber =    document.getElementById('cashout-number');
//     const  cashoutNumber = cashOutNumber.value;
//     console.log(cashoutNumber);
// // validate
// if(cashoutNumber.length !=11){
//     alert('invalid Agent  Number')
//     return;
// }

// // get step -2 ==> the  amount input ,

// const casOutAmount= document.getElementById('cashout-amount');
// const cashoutAmount =casOutAmount.value;
// console.log(cashoutAmount);




// // get step -3   get the  current Balance,
// const  balanceElement  = document.getElementById('balance')
// const balance = balanceElement.innerText;
// console.log (balance)

// // get step -4  calculate new Balance
// const  newBalance =Number(balance) - Number(cashoutAmount)


// // Balance 0 theke soto hole validate
// if(newBalance <  0){
//     alert('Invalid Ammount')
//     return;
// }

// console.log ('new Balance', newBalance) ;
// // get step -5 get the pin and verify

// const  cashoutPinInput=document.getElementById('cashoutut-pin')
//  const pin  = cashoutPinInput.value

//  if(pin===  '1234'){
//     // true ===> alert ===> add  new  balance
//     alert('Cash Out Successfull')

//     // current balaance show
//     balanceElement.innerText=newBalance ;

//  }

// // true show another alert > return
// else{
//     alert('Invalid Pin');
//     return
// }


// });
























// document.getElementById('cashout-btn').addEventListener('click',function(){
// // agent number and validate
// const angentNumber = document.getElementById('cashout-number');
// const cashoutNumber = angentNumber.value
// console.log(cashoutNumber);
// if(cashoutNumber.length !=11){
//     alert('Invalid Number')

//     return;
// }

// // input ammount ,value and  validation
// const amountInput  = document.getElementById('cashout-amount')
// const cashoutAmount  = amountInput.value
// console.log(cashoutAmount);

// // Main balance dhoro 
// const mainBalance= document.getElementById('balance')
// const  balance = mainBalance.innerText
// console.log(balance)
// // main balance Minus Cashout balance validation

// const newBalance= Number(balance) -  Number(cashoutAmount);
// console.log(newBalance)
// if(newBalance < 0){

//     alert('Invalid Amount')
//     return;
// }

// // pin ana validation kora +  current balance change koraa
// const pinInput=document.getElementById('cashoutut-pin')
// const cashoutPin = pinInput.value
// console.log(cashoutPin)

// if(cashoutPin === '1234'){
//     alert('Cash Out Successful')
//     mainBalance.innerText =  newBalance
// }

// else {
//     alert ('you   have 3 attemp')
// }



// })