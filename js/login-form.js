

document.getElementById('btn-login').addEventListener('click', function(event){
    const userEmail = document.getElementById('emailInput')
    console.log(userEmail.value);
    const userPass = document.getElementById('passInput');
    console.log(userPass.value)
    if(userEmail.value === 'rakib@gmail.com' && userPass.value === 'hellothere'){
        window.location.href = 'bank-calculation.html';
    }
    else{
        alert('please provide valid input or password')
    }
    event.preventDefault();   // don't let refresh the page
})