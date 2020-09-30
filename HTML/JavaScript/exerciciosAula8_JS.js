function soma() {
        var num1 = document.getElementById("numero1").value;
        var num2 = document.getElementById("numero2").value;
        //tenho que converter para int porque senão ele vai concatenar os 2 números
        var calculo = parseInt(num1) + parseInt(num2); 
        //exibe a resposta
        document.getElementById("resposta").innerHTML = "O resultado da soma é igual a " + calculo;
    }

     // cria uma referência ao botão (com id = mostrar)
     var mostrar = document.getElementById("mostrar");
     // registra para o botão mostrar um "ouvinte" para o evento click,
     // que ao ser clicado irá chamar a função soma
     mostrar.addEventListener("click", soma);

    function fatorial() {
        var numero = parseInt(document.getElementById("numerofat").value);
        var resposta = document.getElementById("respostafat");
        var resultado = 1;

        for(var count=1 ; count<=numero ; count++){
            resultado *= count;
        }
        resposta.innerHTML = "O resultado do fatorial é " + resultado;
    }

    // cria uma referência ao botão (com id= mostrarfat)
    var mostrarFat = document.getElementById("mostrarfat");
    // registra para o botão mostrar um "ouvinte" para o evento click,
    // que ao ser clicado irá chamar a função soma
    mostrarFat.addEventListener("click", fatorial);
