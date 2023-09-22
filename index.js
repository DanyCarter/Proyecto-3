// Obtenemos referencias a los elementos HTML
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const operationSelect = document.getElementById("operation");
const resultSpan = document.querySelector(".result span");

// Agregamos eventos click a los botones
document.querySelector(".btn-primary").addEventListener("click", () => {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    const operation = operationSelect.value;
    
    if (isNaN(num1) || isNaN(num2)) {
        resultSpan.textContent = "Por favor, ingrese números válidos.";
        return;
    }

    let result;
    switch (operation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            if (num2 === 0) {
                resultSpan.textContent = "No se puede dividir por cero.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultSpan.textContent = "Operación no válida.";
            return;
    }

    resultSpan.textContent = `Resultado: ${result}`;
});

// Función para reiniciar la calculadora
function reiniciarCalculadora() {
    number1Input.value = "";
    number2Input.value = "";
    operationSelect.selectedIndex = 0;
    resultSpan.textContent = "";
}

// Agregamos evento click al botón "Reiniciar"
document.querySelector(".btn-primary[href='/index.html']").addEventListener("click", reiniciarCalculadora);
