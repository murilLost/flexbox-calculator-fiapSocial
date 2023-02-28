const display = document.querySelector("#display");
const keys = document.querySelectorAll("[id*=tecla]");//pega atributos conforme o parametro enviado no querySelectorAll, trazendo assim uma lista, tudo que contem a palavra tecla no id
const operators = document.querySelectorAll("[id*=operador]");//pega atributos conforme o parametro enviado no querySelectorAll, trazendo assim uma lista, tudo que contem a palavra operador no id

let newNumber = true;
let operator;
let previousNumber;

function updateDisplay(numero) {
    if(newNumber){
        display.textContent = numero;
        newNumber = false;
    } else{
        display.textContent += numero;
    }
}

const insertNumber = (number) => updateDisplay(number);//ao clicar no insertNumer, irá atualizar o display com o número da tecla.

keys.forEach( function(key){ //Para cada tecla(array key), ele irá atribuir a chamada ao insertNumber para o evento de click, de cada tecla.
   key.addEventListener("click", function(event){
    insertNumber(event.target.textContent);//Pega o texto do objeto que executou o evento.
   })
});

const selectOperator = (event) => {
    previousNumber = display.textContent; //Guarda o numero do display
    operator = event.target.textContent;//Guarda o operador clicado.
    newNumber = true; //Ativa o newNumber, para quando clicar em um novo número, ele limpar a tela.
}

operators.forEach(
    (key) => key.addEventListener("click", (event) => {
        selectOperator(event) //Chama o método selectOperator, passando o evento.
    })
);

const calculate = () => {
    const actualNumber = display.textContent;
    const result = eval(previousNumber + operator + actualNumber);//Executa a operação, por conta do eval.
    newNumber = true;
    updateDisplay(result);//Apresenta o resultado na tela.
}

const equal = document.querySelector("#igual");

equal.addEventListener('click', calculate);//quando o atributo equal do HTML for "clicado", chama o método calculate.

const clearDisplay = () => display.textContent = "";//Limpa o display

document.querySelector("#limparDisplay").addEventListener("click", clearDisplay);

const clearCalc = () => {
    newNumber = true;
    operator = undefined;
    previousNumber = undefined;
    clearDisplay();
}; 

document.querySelector("#limparCalculo").addEventListener("click", clearCalc);

const removeLastNumber = () => {
    newNumber = true;
    updateDisplay(display.textContent.slice(0, -1));
};

document.querySelector("#apagar").addEventListener("click", removeLastNumber);

const invertSignal = () => {}

document.querySelector("#inverter").addEventListener("click", invertSignal);