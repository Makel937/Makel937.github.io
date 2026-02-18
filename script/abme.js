
  let sectors = document.getElementById("sectors")
  let homeBtn = document.getElementById("home")
  let skillBtn = document.getElementById("skill")
  let contactBtn = document.getElementById("contact")

  homeBtn.onclick = function() {
    sectors.innerHTML = document.getElementById("homecont").innerHTML
  }

  skillBtn.onclick = function() {
    sectors.innerHTML = document.getElementById("skillcont").innerHTML
  }

  contactBtn.onclick = function() {
    sectors.innerHTML = document.getElementById("contactcont").innerHTML
  }