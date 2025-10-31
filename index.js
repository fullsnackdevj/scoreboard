let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

let homeStartingScore = 0
let guestStartingScore = 0

function homePlusOne(){
    homeResult = homeStartingScore += 1
    homeScoreEl.textContent = homeResult
}

function homePlusTwo(){
    homeResult = homeStartingScore += 2
    homeScoreEl.textContent = homeResult
}

function homePlusThree(){
    homeResult = homeStartingScore += 3
    homeScoreEl.textContent = homeResult
}


function guestPlusOne(){
    guestResult = guestStartingScore += 1
    guestScoreEl.textContent = guestResult
}

function guestPlusTwo(){
    guestResult = guestStartingScore += 2
    guestScoreEl.textContent = guestResult
}

function guestPlusThree(){
    guestResult = guestStartingScore += 3
    guestScoreEl.textContent = guestResult
}