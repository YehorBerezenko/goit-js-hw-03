// function getElementWidth(content, padding, border) {
//     const contentToNumber = Number.parseFloat(content);
//     const paddingToNumber = Number.parseFloat(padding);
//     const borderToNumber = Number.parseFloat(border);
//     const elementWidth = (contentToNumber + (paddingToNumber + borderToNumber) * 2);
//     return elementWidth;
    
// }

// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px"));
// console.log(getElementWidth("200px", "0px", "0px"));




const blackListedWord1 = 'spam';
const blackListedWord2 = 'sale';


function checkForSpam(message) { 
    if (message.toLowerCase().includes(blackListedWord1.toLowerCase()) ||
        message.toLowerCase().includes(blackListedWord2.toLowerCase())) {
        return true;
    } else { 
        return false;
    }

   
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true