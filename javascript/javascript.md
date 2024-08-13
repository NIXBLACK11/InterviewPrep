[Basic async, callback theory](https://chatgpt.com/c/2d159940-32e4-4e3c-b9a6-0f140fb62267)

## Some async functions: 
```js
- setTimeout()
- fs.readFile()
- Fetch()
```

best example for all these terms
[loupe](http://latentflip.com/loupe)
- Simple reason is that the callback queue only pushes when all sync operations have been completed
```js
console.log("Hi there");

setTimeout(function() {
    console.log("inside async function");
}, 10000);

let a = 1;
for(let i=0;i<10;i++) {
    a=a+i;
}

console.log(a);
```

Call stack -> stores the currently running task
Callback Queue -> stores the completed tasks
web apis -> completed the async operation detached
