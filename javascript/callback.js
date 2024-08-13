function sum(num1, num2, display) {
    ans = num1+num2
    display(ans)
}

function display1(data) {
    console.log("First: "+data)
}

function display2(data) {
    console.log("Second: "+data)
}

sum(1, 2, display2)