function Settings() {

    let displays = document.getElementsByClassName("Everything")[0];
    displays.style.display = "flex";
}

function Dude() {
    alert("You're about to Re-Direct to Bloxd.io Without Wasting time! Thanks to Arthur and to Other Devs, we got a Game THAT RUNS IN WEB :DD")
}

function e1() {
    let e1 = document.getElementsByClassName("Everything1")[0];
    e1.style.display = "flex";
}

function EverythingMenu3() {
    let EverythingMenu3 = document.getElementById('EverythingMenu3');
    let EverythingMenu2 = document.getElementById('EverythingMenu2');
    let EverythingMenu1 = document.getElementById('EverythingMenu1');
    EverythingMenu3.style.display = "flex";
    EverythingMenu2.style.display = "none";
    EverythingMenu1.style.display = "none";
}

function EverythingMenu2() {
    let EverythingMenu3 = document.getElementById('EverythingMenu3');
    let EverythingMenu2 = document.getElementById('EverythingMenu2');
    let EverythingMenu1 = document.getElementById('EverythingMenu1');
    EverythingMenu3.style.display = "none";
    EverythingMenu2.style.display = "flex";
    EverythingMenu1.style.display = "none";
}

function EverythingMenu1() {
    let EverythingMenu3 = document.getElementById('EverythingMenu3');
    let EverythingMenu2 = document.getElementById('EverythingMenu2');
    let EverythingMenu1 = document.getElementById('EverythingMenu1');
    EverythingMenu3.style.display = "none";
    EverythingMenu2.style.display = "none";
    EverythingMenu1.style.display = "flex";
}

function Display1() {

    let displays = document.getElementsByClassName("Everything")[0];
    let EverythingMenu3 = document.getElementById('EverythingMenu3');
    let EverythingMenu2 = document.getElementById('EverythingMenu2');
    let EverythingMenu1 = document.getElementById('EverythingMenu1');
    EverythingMenu3.style.display = "none";
    EverythingMenu2.style.display = "none";
    EverythingMenu1.style.display = "none";
    displays.style.display = "none";
}

Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
        new Notification("Welcome to Shade's Website!", {
            body: "You might Get Update Notifications Whenever you Opens the Page! Thanks for Visiting!",
            icon: "images/bloxd-icon1.png"
        });
    }
});e