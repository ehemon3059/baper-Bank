

//step 1 add click event handler with this submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //Get the Email Address inside the email input field
    //always remember to use  .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordFild = document.getElementById('pass');
    const password = passwordFild.value;
    
    //DANGER DO NOT VERIFY THIS TYPE OF PROCESS
    if(email === 'eh.emon@gmail.com' && password === '123'){
        window.location.href = 'bank.html'
        console.log("Valied User")
    }else{
        alert("Please Input Valid Information")
    }
}) 

document.getElementById('btn-me').addEventListener('click',function(){
    const maindiv = document.getElementById('para1');
    maindiv.innerText = 'Hello';
})