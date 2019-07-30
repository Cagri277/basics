function getPersonDetails(person) {
    return 'Name: ' + person.name + ' ' + person.secondname + ' ' + person.lastname + ' , Age: ' + person.age;
}

let erhan = {
    name: 'Erhan',
    secondname: '',
    lastname: 'Ozdemir',
    age: '56',
};
let ayse = {
    name: 'Ayse',
    secondname: '',
    lastname: 'Ozdemir',
    age: '49',
}
let osman = {
    name: 'Osman',
    secondname: 'Nurullah',
    lastname: 'Ozdemir',
    age: '30',
}
let numan = {
    name: 'Ahmet',
    secondname: 'Numan',
    lastname: 'Ozdemir',
    age: '28',
}
let cagri = {
    name: 'Cagri',
    secondname: 'Fatih',
    lastname: 'Ozdemir',
    age: '15',
}
let efe = {
    name: 'Furkan',
    secondname: 'Efe',
    lastname: 'Ozdemir',
    age: '11',
}

console.log(getPersonDetails(osman));
console.log(getPersonDetails(numan));
console.log(getPersonDetails(cagri));
console.log(getPersonDetails(efe));
console.log(getPersonDetails(ayse));
console.log(getPersonDetails(erhan));