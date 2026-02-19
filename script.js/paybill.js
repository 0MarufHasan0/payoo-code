document.getElementById('pay-btn').addEventListener('click', function(){

// pay bill acc

const payAccount  = getValueFormInput('pay-money-list');
if(payAccount==='Select pay'){
    alert('please select a  pay list')
    return;
}

const payNumber=getValueFormInput('pay-number');
if(payNumber.length != 11){
    alert('Invalid Pay Number')
}

const payAmount = getValueFormInput('pay-amount')

const currentBalance = getBalance();

const newBalance= currentBalance- Number(payAmount);

const payPin = getValueFormInput('pay-pin');
if(payPin==='1234'){

    alert('pay bill successful')
    setBalance(newBalance);

    
     const history =document.getElementById('history-container');
     const newHistory = document.createElement('div');
     
     newHistory.innerHTML = `
     
     <div class="transaction-card p-5 b-base-400">
       Pay Bill
       Account Number : ${payNumber}, 
       Amount ${payAmount} ,
       at ${new Date()}
       Success
     </div>
     
     
     `
     history.append(newHistory);




}

else{
    alert('Invalid Pin')
    return;
}




})