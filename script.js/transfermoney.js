console.log('check')

// start

document.getElementById('transfer-money-btn').addEventListener('click',function(){

    // user account number dhora
    const userAccNo = getValueFormInput('transfer-money-number');
    // Validaation
    if(userAccNo.length != 11){
        alert('Invalid User Account Number')
        return;
    }
    // Amount value  ber kora

    const transferAmount = getValueFormInput('transfer-money-amount');
    

    // current  amount  

    const balance =  getBalance();

    //  calculate the new balance

    const newBalance  =  balance - Number(transferAmount);
    console.log(newBalance)  ;
    if(newBalance < 0){
        alert ('add money ')

    }

    // pin set validation new balance k main balance show kora lagbe and transaction history added:

    const pin = getValueFormInput('transfer-money-pin')
    if(pin==='1234'){
        alert('Transfer Money successful')
     setBalance (newBalance)

     const history =document.getElementById('history-container');
     const newHistory = document.createElement('div');
     
     newHistory.innerHTML = `
     
     <div class="transaction-card p-5 b-base-400">
       Transfer Money  ${transferAmount} Taka success to ${userAccNo} at ${new Date()}
     </div>
     
     
     `
     history.append(newHistory);



    }






})