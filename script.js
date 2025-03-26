let input = document.getElementById('indexBox')
let buttons = document.querySelectorAll('button')
let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                // Prevent evaluation of invalid expressions
                if (/[\+\-\*\/]{2,}/.test(string) || /[\+\-\*\/]$/.test(string)) {
                    throw new Error("Invalid Expression");
                }
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'Del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            // Prevent adding multiple operators in a row
            if (/[\+\-\*\/]$/.test(string) && /[\+\-\*\/]/.test(e.target.innerHTML)) {
                return;
            }
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})