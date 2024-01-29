document.addEventListener('DOMContentLoaded', function () {


    let myButton = document.getElementById('myButton');

    let numeroAleatorio = Math.floor(Math.random() * 10);

    const resultMessage = document.querySelector('.result_message');

    console.log("O número aleatório gerado é: " + numeroAleatorio);

    function result() {
        let guess = Number(document.getElementById('guess').value); // Usando .value para obter o valor do elemento de entrada, presumindo que seja um <input>

        if (guess === numeroAleatorio) {
            resultMessage.innerText = 'Você acertou!';

            document.getElementById('guess').value = '';

            numeroAleatorio = Math.floor(Math.random() * 10);
            console.log("O número aleatório gerado é: " + numeroAleatorio);
        }
        else {
            resultMessage.innerText = 'Você errou, tente novamente!';
            
            document.getElementById('guess').value = '';
        }
    }

    myButton.addEventListener('click', result);

});