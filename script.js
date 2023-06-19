//sidemenu stuff

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

function iconFunction() {

}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
