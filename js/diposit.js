document.getElementById("btn-diposit").addEventListener('click',function(){
    // console.log("Deponsit button click")
    const depositfiend = document.getElementById("deposit");
    const NewDepositAmountSting = depositfiend.value;
    const newDipositAmount = parseFloat(NewDepositAmountSting);

    depositfiend.value = '';

    if(isNaN(newDipositAmount)){
      alert("Please Provide a number");
      return;
  }


    
    
    const depositTotalElement = document.getElementById('deposit-total');
      const  previcDepositTotalString  = depositTotalElement.innerText;
      const previousDepositAmount = parseFloat(previcDepositTotalString)

  


    const currentDipositTotal = previousDepositAmount + newDipositAmount;
      depositTotalElement.innerText = currentDipositTotal;

   


      // get current total balance 
    const previousTotalElement  =  document.getElementById('balanceTotal');
    const previouseTotalString = previousTotalElement.innerHTML
    const previousTotalbalance = parseFloat(previouseTotalString);

    //calculat total current balance
    const newtotalBalance = previousTotalbalance + newDipositAmount;


    //set the balance total
    previousTotalElement.innerText = newtotalBalance;

})