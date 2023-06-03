const romanToInteger = (roman) => {
    const intVal = [] // initializing an array that will hold the integer values of the given roman numeral
    const romanList = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000} // List of roman numerals and their integer value

    const romanArray = [...roman] // initializing an array of characters with the given roman numeral (e.g. if given 'MCMXC' this array will be ['M', 'C', 'M', 'X', 'C'])

    romanArray.map((char, index) => { // inserting the integer value of each given roman numeral into the intVal array (e.g. if given 'III' the intVal array will be [1, 1, 1])
        intVal.push(romanList[char])
    })

    for(let i=0; i<intVal.length; i++) { // looks for integers that are smaller than the next element, subtracts that value from the next value and removes the smaller integer (e.g. [1, 5] would be transformed into [4])
        if(intVal[i] < intVal[i+1]) {
            intVal[i+1] = intVal[i+1] - intVal[i]
            intVal.splice(i, 1)
        }
    }

    value = intVal.reduce((result, current) => { return result + current }) // uses the reduce function to add all elements of the intVal array
    console.log(`${roman} as an integer is ${value}`)

    return value
}

romanToInteger('MCMXC')
romanToInteger('MCMXCIV')