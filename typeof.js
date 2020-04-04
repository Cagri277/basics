const film = {
    name: 'Harry Potter',
    rating: 9.8,
    director: 'David Yates',
    year : 2000
}

function showNumbers(object){
    for (value in object){
        if (typeof object[value] === 'string')
            console.log(value)
}
}

showNumbers(film)