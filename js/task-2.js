// function getShippingMessage(country, price, deliveryFee) {
//     const orderMsg = `"Shipping to ${country} will cost ${price + deliveryFee} credits"`;
//     return orderMsg;
// }

// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));

function formatMessage(message, maxLength) {
    
    const msglength = message.length;
    if (msglength <= maxLength) { 
        return message;
    }
    if (msglength > maxLength) { 
        return message.slice(0, maxLength) + '...';
    }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


const username = 'jacob mercer';
username.length
