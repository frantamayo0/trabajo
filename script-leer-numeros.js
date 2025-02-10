   var numero =  prompt("Introduce un número entre 1 y 10000:");
            numero = Number(numero);
            while (numero < 1 || numero > 10000)
                        {
  numero = prompt("Número inválido. Introduce un número entre 1 y 100:");
  numero = Number (numero);
                        }
            document.write ("<br>");
