// SetTineout()
function findSumTill(n) {
    let ans = 0
    for(let i=0;i<n;i++) {
        ans+=i
    }
    return ans
}

function findSum() {
    console.log(findSumTill(10))
}

setTimeout(findSum, 1000)
console.log("hello") 

// ---------------------------------------------------
// readFile()
const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data) {
    if(err) {
        console.error("Error in file reading")
    } else {
        console.log(data)
}
})

console.log("hello there")


