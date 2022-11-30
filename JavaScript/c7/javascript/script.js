/* var h2tag = document.querySelector("h2");
// kreiraj
setTimeout(function() {
    h2tag.classList.add("heading");
}, 3000);
// izbrisi
setTimeout(function() {
    h2tag.classList.remove("heading");
}, 6000);
// id
var image = document.querySelector("img");
image.setAttribute("id", "bird-image");
// image.removeAttribute("id", "bird-image"); to remove the attribut id.

var anotherh2 = document.querySelector(".simple-h2");
// kako da se pisuva css vojavascript, property se pisuva vo Cemal case
anotherh2.style.backgroundColor = "red"; */

/*
// kreiranje html elementi vo javascript (so metod, ne so properti)

var h2 = document.createElement("h2");
var value = document.createTextNode("Hello World");

h2.appendChild(value);

document.body.appendChild(h2);
*/

// Web Storage

// var eMail = "ele.vasevska@gmail.com";

// localStorage.setItem('E_mail', eMail);


var theme_changer_light = document.getElementById("theme_changer_light");
var theme_changer_dark = document.getElementById("theme_changer_dark");

theme_changer_light.addEventListener("click", function(){
    localStorage.setItem('Theme', 'light');
    let theme = localStorage.getItem("Theme");
    ListenForThemeChange(theme);
});

theme_changer_dark.addEventListener("click", function(){
    localStorage.setItem('Theme', 'dark');
    let theme = localStorage.getItem("Theme");
    ListenForThemeChange(theme);
});
// moze i const mesto function
const ListenForThemeChange = (theme) => {
    if(theme === "dark") {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
} ;

var theme_on_load = localStorage.getItem("theme");
ListenForThemeChange(theme_on_load);



