/*

1. Read from right to left
2. Put all the operands to stack
3. If item is operator then pop two operands from stack append the operator and put back to stack and consider this as operand
4. Repeat this process and you will get converted postfix from prefix input

prefix
// *-A/BC-/AKL
postfix
// ABC/-AK/L-*

*/
const isAlphaNumeric = ch => {
    return ch.match(/^[a-z0-9]+$/i) !== null;
};

function readInput(preFix = "*AB") {
    let tempStack = [];
    let preFixArray = Array.from(preFix).reverse();
    // console.log( preFixArray);
    preFixArray.map( item =>  {
            if(!isAlphaNumeric(item)) {
                item = makePostFixOperand(item, tempStack)
            }
        return tempStack.push(item);
    });
    return tempStack[0];
};

console.log("PreFix [ *+AB-CD ], PostFix [", readInput("*+AB-CD") , "]"); // OUTPUT => AB+CD-*
console.log("PreFix [ *-A/BC-/AKL ], PostFix [", readInput("*-A/BC-/AKL") , "]"); //OUTPUT  => ABC/-AK/L-*
console.log("PreFix [ +a*bc ], PostFix [", readInput("+a*bc") , "]"); //OUTPUT  => abc*+

function popTwoElementsFromStack(itemInStack) {
    let temStr ;
    temStr = itemInStack.pop();
    temStr += itemInStack.pop();
    return temStr;
}

function makePostFixOperand(currentItem, itemInStack) {
    let popedValue = popTwoElementsFromStack(itemInStack)
    return popedValue + currentItem;
}
