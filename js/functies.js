console.log("Reality Check");

var favoriteButtons = document.querySelectorAll("main footer div");
var favoriteCounter = document.getElementById("counter");
var downloadIcoon = document.getElementById("downloadIcoon");
var likeButton = document.querySelector("main button");
var likeCounter = document.getElementById("likeCounter");
var thumbsUp = document.querySelector("main div img");
var favoriteLink = document.getElementById("favorietenIcoon");
var siteCounter = document.getElementById("counter");
var counter = 0;

function toggleSideBar() {
    document.getElementsByTagName("aside")[0].classList.toggle("open")
    document.getElementsByTagName("main")[0].classList.toggle("open")
}

var i;
for (i = 0; i < favoriteButtons.length; i++) {
    const button = favoriteButtons[i].querySelector("img");
    favoriteButtons[i].addEventListener("click", function () {
        button.classList.toggle("klopAnimatie");
        if (button.src.endsWith("images/favorite.png")) {
            button.src = "images/favorite-active.png";
            counter += 1;
            siteCounter.innerHTML = counter;
            if (favoriteLink.className == "klopAnimatie") {
                favoriteLink.className = "klopAnimatie2"
            } else {
                favoriteLink.className = "klopAnimatie"
            }

        } else {
            button.src = "images/favorite.png";
            counter -= 1;
            siteCounter.innerHTML = counter;
            document.querySelector("div").innerHTML = counter;
        }
    });
}

function downloadStatus() {
    downloadIcoon.classList.toggle("zichtbaar");

    var circleFill = document.querySelector("svg.circleFill");
    if (circleFill.getAttribute("class") === "circleFill") {
        circleFill.setAttribute("class", "circleFill filled");
    } else {
        circleFill.setAttribute("class", "circleFill");
    }
}

function likeToggle() {
    var thumbsUp = document.querySelector("main div img");
    likeButton.classList.toggle("active");
    thumbsUp.classList.toggle("thumbsUpAnimatie");
    if (likeCounter.innerText.trim() === "65") {
        likeCounter.innerHTML = likeCounter.innerHTML.replace(likeCounter.innerText.trim(), 66);
    } else {
        likeCounter.innerHTML = likeCounter.innerHTML.replace(likeCounter.innerText.trim(), 65);
    }
}
