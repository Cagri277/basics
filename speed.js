function showNumbers(numbers){
    for (let i = 0; i <= numbers; i++){
    if (i % 2 === 0)
    console.log(i, 'EVEN');
    else
    console.log(i, 'ODD');}
}
showNumbers(10)