const maxWealth = (accounts) => {
    let totalArray = []
    accounts.map((acct, idx)=>{
        totalArray.push(acct.reduce((res, curr)=>{return res + curr}))
    })
    let max = 0
    for(let i=0; i<totalArray.length; i++) {
        if(totalArray[i] >= max) {
            max = totalArray[i]
        }
    }
    return max
}

console.log(maxWealth([[1,2,3], [3,2,1]]))
console.log(maxWealth([[1,5], [7,3], [3,5]]))
console.log(maxWealth([[2,8,7], [7,1,3], [1,9,5]]))