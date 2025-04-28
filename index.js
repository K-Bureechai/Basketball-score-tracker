//home Btns
let addOnePointBtn = document.getElementById("plus-one")
let defultScoreHome = document.getElementById("home-score")

let beforeScoreHome = 0

function addOnePointHome() {
    beforeScoreHome += 1
  defultScoreHome.textContent = beforeScoreHome
}

function addTwoPointHome() {
    beforeScoreHome += 2
  defultScoreHome.textContent = beforeScoreHome
}

function addThreePointHome() {
    beforeScoreHome += 3
  defultScoreHome.textContent = beforeScoreHome
}

//guest Btns
let defultScoreGuest = document.getElementById("guest-score")
let beforeScoreGuest = 0

function addOnePointGuest() {
    beforeScoreGuest += 1
  defultScoreGuest.textContent = beforeScoreGuest
}
function addTwoPointGuest() {
    beforeScoreGuest += 2
  defultScoreGuest.textContent = beforeScoreGuest
}
function addThreePointGuest() {
    beforeScoreGuest += 3
  defultScoreGuest.textContent = beforeScoreGuest
}