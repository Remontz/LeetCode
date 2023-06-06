const fizzbuzz = (n) => {
    const fizzArr = new Array(n).fill(0)
    for(let i = 1; i<=n; i++) {
        if(i%3===0) {
            fizzArr[i-1] = 'Fizz'
            if(i%5===0) {
                fizzArr[i-1] = fizzArr[i-1] + 'Buzz'
            }
        } else if(i%5===0) {
            fizzArr[i-1] = 'Buzz'
        } else { fizzArr[i-1] = `${i}` }
    }
    return fizzArr
}

console.log(fizzbuzz(3))
console.log(fizzbuzz(5))
console.log(fizzbuzz(15))