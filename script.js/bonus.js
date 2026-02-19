console.log('HI')
 document.getElementById('transfer-btn').addEventListener('click',  function(){
 const getBonus = getValueFormInput('get-bonus-money');
 const balance = getBalance();
 const updateBalance=balance ;
 if(getBonus==='Eid-Bonus-2026'){
    const newBalance = updateBalance + 100000 ;
    alert('Mobarak ! apni 10 lakh taka redeem korsen')
    console.log(newBalance)
     setBalance(newBalance)


 // jekhane rakbo  history container k dhore nia asbo
    const history = document.getElementById('history-container') ;

    // 2  new div make korbo
    const  newHistory = document.createElement('div')
    // 3 new div inner html select korbo

    newHistory.innerHTML =`
    
     <div class="transaction-card p-5 b-base-400">
      Bonus rcv 1000000 Taka from ${getBonus}
     </div>
    
    `;
    // history container e newdiv append korbo
    history.append(newHistory);


     
 } else if(getBonus==='Bonus'){
     const newBalance = updateBalance + 10000 ;
    alert('Mobarak ! apni 10 hajar taka redeem korsen')
    console.log(newBalance)
     setBalance(newBalance);

 // jekhane rakbo  history container k dhore nia asbo
    const history = document.getElementById('history-container') ;

    // 2  new div make korbo
    const  newHistory = document.createElement('div')
    // 3 new div inner html select korbo

    newHistory.innerHTML =`
    
     <div class="transaction-card p-5 b-base-400">
      Bonus rcv 10000 Taka from ${getBonus}
     </div>
    
    `;
    // history container e newdiv append korbo
    history.append(newHistory);


 }
 else{
    alert('invalid cuppon');
    return;
 }


 })
