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

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

let mybutton = document.getElementById("myBtn");
let footer = document.getElementById('down');
let moveUp = document.getElementById('up');

window.onscroll = function () { scrollFunction(), myFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
        mybutton.style.pointerEvents = "auto";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.pointerEvents = "none";
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        footer.style.opacity = 0;
        footer.style.pointerEvents = 'none';
    }
    else {
        footer.style.opacity = 1;
        footer.style.pointerEvents = "auto";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
