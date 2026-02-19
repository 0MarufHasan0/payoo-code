console.log('Machine')

// machine id -> input value dibe
function getValueFormInput(id){
const input =document.getElementById(id)
const value = input.value
console.log(id ,value);
return value;

}

// Machine --> balance

function getBalance (){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText ;
    console.log('current balance', Number(balance));
    return Number(balance) ; 
    
}

// machine value ->
 function setBalance (value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value ;
 }



//  machine  id > hide  all >  show id 
function showOnly(id){
    console.log('show  only click hoise')
    const  addmoney=document.getElementById('add-money');
    const  cashout=document.getElementById('cashout');
    const  transfermoney=document.getElementById('transfer');
    const  history=document.getElementById('history');
    const bonus =document.getElementById('bonus')
    const pay =document.getElementById('paybill')

    // console.log(`add money -${addmoney}, cahsout - ${cashout}`);
    // sobaik hide kore daw
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');
    transfermoney.classList.add('hidden');
    bonus.classList.add('hidden')
    pay.classList.add('hidden')

    // id ola class gula show koro
    const selected =document.getElementById(id)
    selected.classList.remove('hidden')

}