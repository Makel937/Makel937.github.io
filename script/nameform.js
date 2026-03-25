let nava = document.getElementById("name");
let submit = document.getElementById("btn");
let cleanName = document.getElementById("cleanName");
let noc = document.getElementById("numOfCharacters");
let fic = document.getElementById("firstCharacter");
let lac = document.getElementById("lastCharacter");

submit.onclick = function() {
    let trimmedName = nava.value.trim().toLowerCase();
    cleanName.innerText = trimmedName;
    noc.innerText = trimmedName.length;
    fic.innerText = trimmedName.charAt(0);
    lac.innerText = trimmedName.charAt(trimmedName.length - 1);
};
