    const btn = document.querySelector('button');
    const para = document.querySelector('p');
    function promptNumber() {
        const myNumber =  prompt('number', '');
        const answer = factorial(myNumber);
        const equation = arrayFunction(myNumber);
        console.log(equation);
        para.innerText = `${equation.replaceAll(",", " x ")} = ${answer}`;        
    };
    function factorial(n) {
        if (n < 0) {
            return undefined
        } else if (n == 0) {
            return 1
        } else {
            return n * factorial(n - 1)
        }
    };
    function arrayFunction(n) {
        if (n < 0) {return "undefined"}
        if (n == 0) {return "0"}
        let myArray = []
        for (let i = 0; i <= n; i++) {
            if (i != 0) {
                myArray.push(i)
            }
        }
        return myArray.reverse().toString();
    };
    btn.addEventListener("click", promptNumber);

