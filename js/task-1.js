// "use strict";

// const firstName = 'Yehor';
// const secondName = 'Berezenko';
// const fathersName = 'Olehovich';
// const fullName = firstName + ' ' + fathersName + ' ' + secondName;
// console.log(fullName);

// const quantity = 15;
// const orderMsg = `Your ordered ${quantity} bots`;
// console.log(orderMsg);

// const message = 'This string is 28 chars long';
// const char = message[6];
// console.log('char:', char);

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(msg);

// const result = Number.parseInt('25px');
// console.log('result', result);

// function makeTransaction(quantity, pricePerDroid) {
    
//     const orderMsg = `"You ordered ${quantity} droids worth ${quantity*pricePerDroid} credits!"`;
//     return orderMsg;
// }

// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));
let totalPrice = 0;
let orderMsg;
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    totalPrice = quantity * pricePerDroid;
    
    if (customerCredits < totalPrice) {
        return "Insufficient funds!";
    } else { 
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
    
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"