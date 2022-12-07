/* Напишете Javascript код кој при клик на копче со класа .btn ќе ги пронајде сите слики (кои ги имате поставено во HTML-от) и со помош на Javascript ќе им додадете сенка (box-shadow) и заоблување (border-radius) на нивните агли/ќошиња за 5 пиксели. 

Прикачете ги фајловите (html & javascript) на Slack во приватна порака.
 */
var button = document.querySelector(".btn");
var image = document.querySelectorAll("img");

button.addEventListener("click", function() {
    for(var i = 0; i < image.length; i++) {
        image[i].classList.toggle("photo");
    }
});



