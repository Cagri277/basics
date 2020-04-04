function isLandscape(width, height) {
    if (width > height) {
        return `landscape`
    }
    else if (height > width) {
        return `portrait`
    }
    else return `square`
}
console.log(isLandscape(10, 10));