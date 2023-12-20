//tab links stuff

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//sidemenu bar

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

//header, footer, and scroll-up button

let mybutton = document.getElementById("myBtn");
let footer = document.getElementById('down');
let iconstop = document.getElementById('topper');

window.onscroll = function () { scrollFunction(), myFunction(), iconFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
        mybutton.style.pointerEvents = "auto";
        iconstop.style.opacity = 1;
        iconstop.style.pointerEvents = "auto";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.pointerEvents = "none";
        iconstop.style.opacity = 0;
        iconstop.style.pointerEvents = "none";
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        footer.style.opacity = 0;
        footer.style.pointerEvents = 'none';
    } else {
        footer.style.opacity = 1;
        footer.style.pointerEvents = "auto";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let darkmodebtn = document.getElementById("dm-btn");
let header = document.getElementById("headertop")
let nameText = document.querySelector('#headertop nav .name a');
let tabLinks = document.querySelectorAll('.tab-links');
let projImg = document.querySelectorAll('.work img:not(:last-child)')
let menuButton = document.querySelector('.fas.fa-bars')
let contactForm = document.querySelectorAll('.container form input, textarea, button');
let count = 0;

function darkmode() {
    count++;
    if (count % 2 == 1) {
        enableDarkMode();
        localStorage.setItem('darkModeEnabled', 'true');
    }
    else {
        disableDarkMode();
        localStorage.setItem('darkModeEnabled', 'false');
    }
}

function enableDarkMode() {
    var body = document.body;
    body.style.backgroundColor = "black";
    body.style.color = "white";
    header.style.background = 'black';
    nameText.style.color = "white";
    darkmodebtn.style.color = 'white';
    tabLinks.forEach(function (link) {
        link.style.color = 'white';
    })
    projImg.forEach(function (img) {
        img.style.border = '10px solid #DCDCDC';
    })
    menuButton.style.color = 'white';
    contactForm.forEach(function (element) {
        element.style.color = 'white';
        element.style.border = '1px solid white'
    })
    darkmodebtn.style.border = 'transparent';
    mybutton.style.border = 'transparent';
    mybutton.style.color = 'white';

    localStorage.setItem('darkModeEnabled', 'true');
}

function disableDarkMode() {
    var body = document.body;
    body.style.backgroundColor = "white";
    body.style.color = "black";
    header.style.background = 'white';
    nameText.style.color = "black";
    darkmodebtn.style.color = 'black';
    tabLinks.forEach(function (link) {
        link.style.color = 'black';
    })
    projImg.forEach(function (img) {
        img.style.border = '10px solid black';
    })
    menuButton.style.color = 'black';
    contactForm.forEach(function (element) {
        element.style.color = 'black';
        element.style.border = '1px solid black'
    })
    darkmodebtn.style.border = 'transparent';
    mybutton.style.border = 'transparent';
    mybutton.style.color = 'white';
    localStorage.setItem('darkModeEnabled', 'false');
}

window.addEventListener('load', function () {
    var darkModePreference = this.localStorage.getItem('darkModeEnabled');
    if (darkModePreference === 'true') {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
})