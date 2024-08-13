// Promises are only syntactical sugar to 

const fs = require('fs')

function callbackFn(data) {
    console.log(data)
}

// This is said to be an ugly way to implement
// and lead to a condition that is callback hell 

function myReadFile(callbackFn) {
    fs.readFile('a.txt', 'utf-8', function(err, data){
        callbackFn(data)
    })
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

myReadFile().then(callbackFn)

// async await
function myReadFile() {
    return new Promise(function(resolve) {
        fs.readFile('a.txt', 'utf-8', function(err, data) {
            resolve(data)
        })
    })
}

async function main() {
    let value = await myReadFile()
    value.callbackFn(value)
}