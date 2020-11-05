"use strict";

/*let persone = {
    name: "John",
    age: 25,
    isMarried: false
}
*/

// alert("Hello World!");

// let answer = confirm("Are you here?");
//console.log(answer);

//let answer = +prompt("Jste zletily?", "Ano");
//console.log(typeof(answer));

//console.log("arr" + "- object");

// let incr = 10,
// decr = 10;


/*console.log(++incr);
console.log(--decr);

let isChecked = true;
isClose = true;

console.log(isChecked || isClose);
*/


/*let money = prompt("Ваш бюджет на месяц?", ""),
time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   timeData: time,
   savings: false 
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
a2 = prompt("Во сколько обойдется?", ""),
a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
a4 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);*/

let num = 50;

if (num < 49) {
    console.log("Spatne")
} else if (num >100) {
    console.log("Hodne!")
} else {
    console.log ("Spravne")
}
(num == 50) ? console.log("Spranve") : console.loge("Nespravne"); //druha varianta


switch (num) {
    case num <49:
        console.log("Spatne");
        break;
    case num >100:
        console.log("Hodne!");
        break;
    case num >80:
        console.log("Stale hodne");
        break;
    case num ==50:
        console.log("Spravne");
        break;
    default:
        console.log("Neco je spatne");
        break;
          

}

//циклы
let num = 50;
/*while(num <55) {
    console.log(num);
    num++;
}*/

do {
    console.log(num);
    num++;
}
while (num <55); //тот же цикл, но для того чтоб что то сделать а потом условие проверить

for (let i = 1; i < 8; i++) {
    if (i == 6) {
    continue
    }
    console.log(i)
}