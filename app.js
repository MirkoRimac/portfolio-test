let topBtn = document.querySelector("#topBtn");
let allImages = document.querySelectorAll("img");
document.body.addEventListener("wheel", scrollUp);

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Firefox, Chrome, IE and Opera
}

function scrollUp(event) {
    if(checkScrollUp(event)) {
        let navBar = document.getElementById("navBar");
        navBar.classList.add("sticky-top");
    } else {
        navBar.classList.remove("sticky-top");
    }
}

function checkScrollUp(event) {
    if(event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}