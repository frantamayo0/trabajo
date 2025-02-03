    document.write ("<br>");
            document.write ("<br>");
            var numero =  prompt("Introduce un número entre 1 y 100:"); 
            numero = Number(numero); 

           
            while (numero < 1 || numero > 100) {
            numero = prompt("Número inválido. Introduce un número entre 1 y 100:");
            numero = Number (numero); // Convertimos el texto a numero
            }
                     

