    document.write ("<br>");
            document.write ("<br>");
            var numero =  prompt("Introduce un número entre 1 y 100:"); 
            numero = Number(numero); 

           
            while (numero < 1 || numero > 100) {
            numero = prompt("Número inválido. Introduce un número entre 1 y 100:");
            numero = Number (numero); // Convertimos el texto a numero
            }
                     
          
            var suma = 0; 
            var i = 1;

           
            for (i = 1; i <= numero; i++) {
            suma = suma + i;
            document.write ("<br>La suma de todos los numeros introducidos entre 1 y " + i + " es: " + suma);
            }

           
            document.write ("<br><br>La suma TOTAL de todos los numeros introducidos entre 1 y " + numero + " es: " + suma);
