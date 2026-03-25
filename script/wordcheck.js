let sent = document.getElementById("sentence");
let worda = document.getElementById("word");
let button = document.getElementById("btn");
let word = document.getElementById("display");

button.onclick = function() {
    let besent = sent.value.toLowerCase(); 
    let beword = worda.value.toLowerCase();
    if (besent.includes(beword)) {
        word.innerText = "Your word exists";
    } else {
        word.innerText = "Your word does not exist";
    }
}
