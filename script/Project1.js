let username
let year

document.getElementById("btn").onclick = function(){
    username = document.getElementById("name").value
    year = 18 - document.getElementById("age").value
    document.getElementById("words").textContent = `Welcome ${username} you are ${year} years from 18` 
}