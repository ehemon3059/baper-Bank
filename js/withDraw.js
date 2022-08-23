//add event handelar withdraw button
//get withdraw amount from input field
//now calculate current withdraw balance
//then total balance  = total balance - current withdraw amount

document.getElementById('btn-withdraw').addEventListener('click',function(){
    


    //get withdraw amount from input field
    const withdrawfield = document.getElementById('withdraw-input');
    const withdrawAmountString = withdrawfield.value ;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    withdrawfield.value = '';

    if(isNaN(newWithdrawAmount)){
        alert("Please Provide a number");
        return;
    }

   // console.log(newWithdrawAmount);

  

    //get withdraw box value 
    const withdrawBox = document.getElementById('withdraw-box');
    const withDrawBoxString = withdrawBox.innerText;
    const previousWithdrawBoxAmount = parseFloat(withDrawBoxString);

   

   

      


    //current withdraw balance 

    const currentWithDrawBalance =  newWithdrawAmount + previousWithdrawBoxAmount
    withdrawBox.innerText = currentWithDrawBalance;




    //then total balance  = total balance - current withdraw amount
    const totalCurrentAmount = document.getElementById('balanceTotal');
    const totalCurrentStringAmount = totalCurrentAmount.innerText;
    const totalCurrentAmountFloat = parseFloat(totalCurrentStringAmount);
    
    const nawTotalCurrentBalance = totalCurrentAmountFloat  - newWithdrawAmount
    totalCurrentAmount.innerText = nawTotalCurrentBalance;

    if(newWithdrawAmount > nawTotalCurrentBalance){
        alert("Baper Account a eto taka nai");
        return;
        }

})