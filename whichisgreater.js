function whichisgreater(number1, number2) {

    if (number1 > number2) {
        return number1
    }
    else if (number2 > number1) {
        return number2
    }
    else return `equal`
}
console.log(whichisgreater(10, 25));