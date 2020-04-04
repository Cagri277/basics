function checkSpeed(speed) {
    if (Math.floor(speed) <= 70){
        return `Ok`
    }
    if (Math.floor(speed) >= 75 && Math.floor(speed) <= 130){
        return (Math.floor(speed) - 70) / 5 + ` ` + `Point`
    }
    else return `License Suspended`

}
console.log(checkSpeed(131));