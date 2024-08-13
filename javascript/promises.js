// Promises are only syntactical sugar to 


// This is said to be an ugly way to implement
// and lead to a condition that is callback hell 
const fs = require('fs')

function myReadFile(callbackFn) {
    fs.readFile('a.txt', 'utf-8', function(err, data){
        callbackFn(data)
    })
}

function callbackFn(data) {
    console.log(data)
}

myReadFile(callbackFn)

// We can use promises  
function myReadFile() {
    return new Promise(function(resolve) {
        fs.readFile('a.txt', 'utf-8', function(err, data){
            resolve(data)
        })
    })
}

function callbackFn(data) {
    console.log(data)
}

myReadFile().then(callbackFn)