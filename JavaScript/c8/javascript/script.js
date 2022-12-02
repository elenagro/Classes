// JavaScript Object Notation

// let person = `{
//     "name": "Elena Grozdanoska",
//     "location": "Aerodrom, Skopje, Macedonia",
//     "age": 31,
//     "hobbies": ["javascript", "film", "photography"],
//     "address": {
//         "street": "Bul. Jane Sandanski 1000",
//         "appartment": 18
//     },
//     "has_drivers_license": true
     
// }`;

// console.log(JSON.parse(person));

//  Promise

// const promise = new Promise((resolve, reject) => {
//     let result = 5;
//     if(2 + 3 === result) {
//         resolve('Promise RESOLVED');
//     } else {
//         reject('Promise REJECTED');
//     }
// });

// promise.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });



// const hotel = new Promise((resolve, reject) =>{
//     let availability = true;
//     if(availability === true) {
//         setTimeout(() => {
//             resolve('Book your room.');
//         }, 3000);
//     } else {
//         setTimeout(() => {
//             reject(`At the moment we don't have available rooms.`);
//         }, 3000);
//     }
// });

// hotel.then(room => {
//     console.log(room);
// }).catch(error_ => {
//     console.log(error_);
// });

// Fetch

fetch("https://www.boredapi.com/api/activity")
.then(res => {
    if(res.ok) {
        return res.json();
    }
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});