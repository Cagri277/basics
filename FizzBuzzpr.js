function fizzBuzz(input) {

    if (input % 15 === 0){
        return `FizzBuzz`
    }
    if (input % 3 === 0){
        return `Fizz`
    }
    if (input % 5 === 0){
        return `Buzz`
    }
    if (input % 3 !== 0, input % 5 !== 0, input % 15 !== 0, typeof input === `number`){
        return input
    }
    else return `Not a Number`
}
console.log(fizzBuzz(9));