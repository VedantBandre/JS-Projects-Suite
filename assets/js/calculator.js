let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// input operable string
let string = "";

// Iterating over the buttons pressed and perfoming evaluation
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        const value = e.target.innerHTML;

        if (value === '='){
            try {
                // Input Validation: Check if legal expression
                if (!string || (string !== '0' && !/[\d]/.test(string))) {
                    string = 'Invalid'; // Set to 0 for invalid expressions
                    input.value = string;
                } else {
                    string = math.evaluate(string);
                    input.value = string;
                }
            } catch (error) {
                input.value = string;
                string = ''; // Fallback to 0 if math.evaluate fails
            }
        }

        else if(value == 'AC'){
            string = '';
            input.value = string;
            lastWasInvalid = false;
        }

        else if(value == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
            lastWasInvalid = false;
        }

        else{
            string += value;
            input.value = string;
            lastWasInvalid = false;
        }
    })
})