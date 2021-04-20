// ES6 syntax
// ES5, ES6 , 7,8,9,10,11;
// ES5 function

// Declaration
// Expression
// var x = 56;
// // Declaration;
// function myFunction(){ // obj
//     var obj = {
//         ner: 'Bat',
//         nas: 23
//     }

//     var obj1 = {
//         mergejil: 'Engineer',
//         hobby: 'nom unshih'
//     }

//     return obj1;
// };

// x = myFunction();

// // Expression
// var myfunction1 = function(){ // anonymous function
//     var y = 23;
//     return y;
// }

// var bla;


// ES6;

// const testingES6Function = () => {
//     var text = "Dummy text";
//     return text;
// };


// Abstraction => arg in function
// Parameter, 5ax - 2a = 8; x = 2
// var on = prompt('tursun onoo oruul');
// function nasTootsoh(tursunOn){
//     return 2021 - tursunOn;
// }

// console.log(nasTootsoh(on));

// const nasTootsoh = tursunOn => 2021 - tursunOn;

// console.log(nasTootsoh(on));




// orolt: arr = [6,5,12,2,8,7], target = 9;
// garalt: [3,5];

// 

// const niilber = (arr, target) => {
//     let result = [];
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 result.push(i,j);
//             }
//         }

//         // console.log('neg loop duuslaaa...--------------')
//     }

//     return result;
// }


// let arr = [
//     {
//         ner: 'Bat',
//         nas: 23
//     },
//     {
//         ner: 'John',
//         nas: 30
//     },
//     {
//         ner: 'Jessica',
//         nas: 20
//     }
// ];

// push, shift, pop, splice, filter, concat, find, findIndex, slice, join

// [{}, {}, {}, {}]

// const user = arr.findIndex(el => el.ner === 'Jessica')

// console.log(arr[user]);

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const huis = document.querySelector('#huis');
const registrate = document.querySelector('#registrate');
const userContainer = document.querySelector('.users');

// const data = [];

// registrate.addEventListener('click', () => {
//     let user = {
//         username: username.value,
//         email: email.value,
//         number: number.value,
//         huis: huis.value,
//         id: Math.random().toString().split('.')[1],
//         genPass: function(){
            // this.password;
            // let firstLetter = this.username.toUpperCase()[0];
            // this.password = firstLetter + this.number;
//         },
//         displayUser: function(){
//             const user = document.createElement('p');
//             user.className = 'user';
//             user.id = this.id;
//             user.textContent = this.username;
//             userContainer.appendChild(user);
//         }
//     }
//     user.genPass();

//     data.push(user);

//     user.displayUser();

//     reset();
// });

// function reset(){
//     username.value = '';
//     number.value = null;
//     email.value = '';
//     huis.value = 'male'
// }

// document.addEventListener('click', e => {
//     if(e.target.classList.contains('user')){
//         const existingUser = data.find(el => el.id === e.target.id);
//         const existingUserIndex = data.findIndex(el => el.id === e.target.id);

//         if(!existingUser){
//             alert('hereglegch oldsongui...');
//             return false;
//         }
//         // console.log(existingUser);
//         data.splice(existingUserIndex, 1);

//         e.target.remove();
//     }
// })

// Class => Object uusgeh zagvar

class User {
    constructor(username, number, huis, email){
        this._username = username;
        this._number = number;
        this._huis = huis;
        this._email = email;
    }

    generatePass(){
        this.password;
        let firstLetter = this._username.toUpperCase()[0];
        this.password = firstLetter + this._number;
    }
}

const db = [];

registrate.addEventListener('click', () => {
    let user = new User('Narada', 88662233, 'Male', 'narada@mail.com');
    db.push(user);
});


// user.generatePass();

// console.log(user);