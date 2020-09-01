/* function User (name, id) {
    this.name= name;
    this.id = id;
    this.human = true;
}

const ivan = new User('Ivan', 26);
const alex = new User('Tolya' ,24);

console.log (ivan)
console.log (alex) */

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

/* const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout()
    }
};

obj.sum(); */

 


// 1. Обычная функция :  this = window, но если стоит use strict - underfined
// 2. Контекст у методов объекта - сам объект
// 3. this в конструкторах и классах - это новый экземпляр объекта
// 4. Ручная привязка this : call, apply, bind