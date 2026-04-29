 let firstName = document.querySelector("#firstname");
 let email = document.querySelector("#email");
 let btn = document.querySelector("#submit");
 let tname = document.querySelector("#nam");
 let temail = document.querySelector("#em");

 btn.onclick = function(){
    let namval = firstName.value;
    tname.innerText = namval ;
    let emval = email.value;
    temail.innerText = emval;
 } 