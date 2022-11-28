// document.write('Hello World');

// var heading = document.getElementById('heading');
// console.log(heading.id);

// heading.innerHTML = "Elena Vasevska";

// var image = document.getElementsByClassName('image');
// console.log(image);
// image[0].src = "https://i.picsum.photos/id/481/536/354.jpg?hmac=8KlUlt-yAkcZj63IpHvqUtlW08ZbkdlTM41GKairF1E";

// var heading = document.getElementsByClassName('h2-tag');
// console.log(heading);
// heading[0].innerHTML = "This is h2 #1";
// heading[1].innerHTML = "This is h2 #1";
// heading[2].innerHTML = "This is h2 #1";
// heading[3].innerHTML = "This is h2 #1";
// for(let i = 0; i < heading.length; i++) {
//     heading[i].innerHTML = `This is h2 #${i+1}`;
// }

// var paragraph = document.getElementsByTagName("p");
// console.log(paragraph);


// 
// var paragraph = document.querySelector("#imeto na id");
// var paragraph = document.querySelectorAll(".imeto na klasata");
// var paragraph = document.querySelectorAll("p");

// var paragrph =document.querySelectorAll('p');
// console.log(paragrph);

// varijabla.id = "adhahfad"????

// var button = document.querySelector("button");
// var result = document.getElementById("result");

// ime na nastan i sto sakame da se sluci otkako kje se ispolni toj 
// button.addEventListener("click", function(){
//     result.innerHTML = new Date();
// });
// list of javascript events

var button = document.querySelector("button");
var photo = document.querySelector(".slika");

button.addEventListener("mouseover", function(){
    photo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTK500IQ_2NpiNk7Ed_4phbWDtLSZ7QGWuNA&usqp=CAU";
})


