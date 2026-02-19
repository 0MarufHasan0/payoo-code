document.getElementById('add-money-btn').addEventListener('click', function(){
console.log('add money  button clicked')
// 1- get Bank  account
const bankAccount  = getValueFormInput('add-money-bank');
if(bankAccount==='Select bank'){
    alert('please select a  Bank')
    return;
}

// 2-get bank account number  and validation
const accno = getValueFormInput  ('add-money-number')
if(accno.length !=11){
    alert ('Invalid  Acount  Number');
    return;
}

// 3-get ammount
const ammount =  getValueFormInput('add-money-amount')
const currentBalance =getBalance ()
const newBalance =currentBalance + Number(ammount)

const pin   = getValueFormInput('add-money-pin')
if(pin=='1234'){
    alert(`Add money  success form =>
        
    ${bankAccount} at  ${new Date()}`);
    setBalance(newBalance)
    // jekhane rakbo  history container k dhore nia asbo
    const history = document.getElementById('history-container') ;

    // 2  new div make korbo
    const  newHistory = document.createElement('div')
    // 3 new div inner html select korbo

    newHistory.innerHTML =`
    
     <div class="transaction-card p-5 b-base-400">
     Add money  success form =>

        ${bankAccount} ,acc-no ${accno} at  ${new Date()},  Added ammount ${ammount}taka
     </div>
    
    `;
    // history container e newdiv append korbo
    history.append(newHistory);
}
else{
    alert("invalid pin")
    return;
}

})