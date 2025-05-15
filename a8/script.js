function calculate(op) {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let result;

           
                switch(op) {
                    case '+': result = `Addition: ${num1 + num2}`; 
                    break;
                    case '-': result = `Subtraction: ${num1 - num2}`; 
                    break;
                    case '*': result = `Multiplication: ${num1 * num2}`; 
                    break;
                    case '/': 
                        result = num2 !== 0 ? `Division: ${num1 / num2}` : "Cannot divide by zero";
                        break;
                }
            
            document.getElementById("result").innerText = result;
        }