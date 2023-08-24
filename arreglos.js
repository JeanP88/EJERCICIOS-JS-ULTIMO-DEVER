class Arreglos {
   mayor() {
      /* Presenta el elemento mayor de un arreglo de numeros
      Separar cada numero en un arreglo y presentar el mayor
      12;3;7;23
      [12,3,7,23]
      Respuesta: El mayor es 23 */

      /* 
      
      num = "12;3;7;23"

      // .split() = separa un string en un arreglo
      
      arreglo = num.split(";")

      arreglo = [12,3,7,23]  //Esto es lo que hace el split

      mayor = 0

      para i = 0 hasta arreglo.longitud hacer
         si arreglo[i] > mayor entonces   
            mayor = arreglo[i]    
         fin si
      fin para
      
      // Va recorriendo el arreglo de uno en uno y va comparando el numero con el mayor y si es mayor guarda el numero en la variable mayor

      resp = "El mayor es: " + mayor
      */

      let num = document.getElementById("num1").value;

      let arreglo = num.split(";");

      let mayor = 0;

      for (let i = 0; i < arreglo.length; i++) {
         if (parseInt(arreglo[i]) > mayor) {
            mayor = parseInt(arreglo[i]);
         }
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = "El mayor es: " + mayor;
   }
   menor() {
      // Presenta el elemento menor de un arreglo de numeros

      /*
      num = "12;3;7;23"

      arreglo = num.split(";")

      arreglo = [12,3,7,23]

      menor = 0

      para i = 0 hasta arreglo.longitud hacer
         si arreglo[i] < menor entonces
            menor = arreglo[i]
         fin si
      fin para

      // Va recorriendo el arreglo de uno en uno y va comparando el numero con el menor y si es menor guarda el numero en la variable menor

      resp = "El menor es: " + menor

      */

      let num = document.getElementById("num1").value;
      let arreglo = num.split(";");

      let menor = 0;

      for (let i = 0; i < arreglo.length; i++) {
         if (menor > parseInt(arreglo[i])) {
            menor = arreglo[i];
         }
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `El menor es: ${menor}`;
   }
   promedio() {
      // Se ingresa varios numeros en un arreglo y se pide el promedio de todos ellos

      /* 

      num = "12;3;7;23"

      arreglo = num.split(";")

      arreglo = [12,3,7,23]

      suma = 0

      para i = 0 hasta arreglo.longitud hacer
         suma = suma + arreglo[i]
      fin para

      // Lo que hice primero fue sumar todos los numeros del arreglo

      promedio = suma / arreglo.longitud

      // Luego dividi para la cantidad de numeros que hay en el arreglo usando la longitud (length)

      resp = "El promedio es: " + promedio

      
      */
      let num = document.getElementById("num1").value;
      let arreglo = num.split(";");
      let suma = 0;

      for (let i = 0; i < arreglo.length; i++) {
         suma += parseInt(arreglo[i]);
      }

      let promedio = suma / arreglo.length;
      let resp = document.getElementById("resp");
      resp.innerHTML = `El promedio es: ${promedio}`;
   }
   nombreAlReves() {
      // Dado un arreglo de nombres presentar cada nombre al revés

      /* 
      frase = "Juan;Ricardo;Susana"

      arreglo = frase.split(";")  //arreglo = [Juan,Ricardo,Susana]

      nombreAlReves = []

      para i = 0 hasta arreglo.longitud hacer
         nombre = arreglo[i]  //nombre = Juan
         nombreInverso = ""  
         para j = nombre.longitud - 1 hasta 0 hacer //j=3 j=2 j=1 j=0
            nombreInverso = nombreInverso + nombre[j] 
            //nombreInverso = "" + nombre[3] = "" + n = n
            //nombreInverso = n + nombre[2] = n + a = na
            //nombreInverso = na + nombre[1] = na + u = nau
            //nombreInverso = nau + nombre[0] = nau + J = nauJ
         fin para

         // nombreAlReves.push(nauJ)   //nombreAlReves = [nauJ]
         nombreAlReves.push(nombreInverso)
      fin para

      
      */
      let arreglo = document.getElementById("num1").value.split(";");

      let resp = document.getElementById("resp");

      let nombreAlReves = [];

      for (let i = 0; i < arreglo.length; i++) {
         let nombre = arreglo[i];
         let nombreInverso = "";
         for (let j = nombre.length - 1; j >= 0; j--) {
            nombreInverso += nombre[j];
         }
         nombreAlReves.push(nombreInverso);
      }

      resp.innerHTML = nombreAlReves.join(";");
   }
   buscar() {
      /* 
      Dado un arreglo y elemento a buscar. Se pide presentar la posicion del elemento buscado en el arreglo

      Ejemplo: arreglo=[20,40,60,80] buscado=60 respuesta=2 
      */

      /* 
      arreglo = [20,40,60,80]

      buscado = 60

      para i = 0 hasta arreglo.longitud hacer
         si arreglo[i] == buscado entonces
            posiciones.push(i)  //posiciones = [2]
         fin si
      fin para

      si posiciones.longitud > 0 entonces
         "Se encuentra en la posición: " + posiciones.join(", ")
      sino
         "No se encontró en el arreglo."
      fin si

      .join("") = convierte un arreglo en un string separado por el caracter que se le indique (", ")
      
      */
      let arreglo = document.getElementById("num1").value.split(";");

      let buscado = document.getElementById("num2").value;

      let resp = document.getElementById("resp");

      let posiciones = [];

      for (let i = 0; i < arreglo.length; i++) {
         if (arreglo[i] == buscado) {
            posiciones.push(i);
         }
      }

      if (posiciones.length > 0) {
         resp.innerHTML = `Se encuentra en la posición: ${posiciones.join(
            ", "
         )}`;
      } else {
         resp.innerHTML = "No se encontró en el arreglo.";
      }
   }
   adivinaNumero() {
      /* Generar con random un arreglo de 100 numeros enteros. Se pide presentar la posición ingresar un numero a adivinar si lo encuentra presenta un mensaje de adivinaste caso contrario error no adivinaste */

      let arreglo = [];

      for (let i = 0; i < 100; i++) {
         arreglo.push(parseInt(Math.random() * 100));
      }
      //Cree un ciclo for para crear el arreglo de 100 numeros aleatorios
      // Usando Math.random() * 100 para que me de un numero aleatorio entre 0 y 100
      // Se multiplica por 100 ya que Math.random() me da un numero entre 0 y 1
      // Y al multiplicarlo por 100 me da un numero entre 0 y 100
      // Luego uso parseInt() para convertir el numero en entero y eliminar sus decimales
      // Y finalmente uso push() para agregar al final del arreglo sucesivamente los numeros aleatorios

      let resp = document.getElementById("resp");
      let num = document.getElementById("num1").value;

      let adivinar = false; //Use una bandera

      for (let i = 0; i < arreglo.length; i++) {
         if (arreglo[i] == num) {
            // Si arreglo[i] == num
            adivinar = true; // adivinar = true
         }
      }

      if (adivinar) {
         resp.innerHTML = "Felicitaciones Adivinaste";
      } else {
         resp.innerHTML = "Error No adivinaste";
      }
   }
   insertar() {
      /* Dada un arreglo y un dato a insertar en una posicion del arreglo.
      Se pide insertar el dato en el arreglo a partir de la posicion de indicada
      Ejemplo: arreglo = [20,40,60]  datoInsertar=50 posicionInidicada=2 
      respuesta=[20,40,50,60] 
      */

      /* 
      arreglo = [20,40,60]

      datoInsertar = 50

      posicionIndicada = 2

      nuevoArreglo = []

      para i = 0 hasta arreglo.longitud hacer
         si i == posicionIndicada entonces    //i==2 
            nuevoArreglo.push(datoInsertar) 
         Fin si
         nuevoArreglo.push(arreglo[i])  
      fin para

      resp = nuevoArreglo.join(";")

      .join() = convierte un arreglo en un string separado por el caracter que se le indique (";")
         
      */

      let datos = document.getElementById("num1").value;
      let arreglo = datos.split(";");

      let datoInsertar = document.getElementById("num2").value;

      let posicionIndicada = document.getElementById("num3").value;

      let nuevoArreglo = [];

      for (let i = 0; i < arreglo.length; i++) {
         if (i == posicionIndicada) {
            nuevoArreglo.push(datoInsertar);
         }
         nuevoArreglo.push(arreglo[i]);
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = nuevoArreglo.join(";");
   }
   eliminar() {
      /* Dado un arreglo y un dato a eliminar en un arreglo.
      Se pide eliminar el dato en el arreglo a partir de la posicion encontrada.
      Ejemplo: arreglo = [20,40,60]  eliminar=40
      respuesta = [20, 60]; 
      */

      /* 

      arreglo = [20,40,60]

      eliminar = 40

      nuevoArreglo = []

      para i = 0 hasta arreglo.longitud hacer
         si arreglo[i] != eliminar entonces
            nuevoArreglo.push(arreglo[i])
         fin si
      fin para

      //Si arreglo[i] es diferente a eliminar entonces lo agrega al nuevo arreglo, es decir que voy agregando en un nuevo arreglo todos los numeros que son diferentes al que quiero eliminar

      */

      let datos = document.getElementById("num1").value;
      let arreglo = datos.split(";");

      let eliminar = document.getElementById("num2").value;

      let nuevoArreglo = [];

      for (let i = 0; i < arreglo.length; i++) {
         if (arreglo[i] != eliminar) {
            nuevoArreglo.push(arreglo[i]);
         }
      }

      let resp = document.getElementById("resp");
      resp.innerHTML = nuevoArreglo.join(";");
   }
   base10_2() {
      /* Se ingresa un numero en base 10 y se retorna el numero a base 2
      ejemplo= numBase10="5"   respBase2="101" */

      /* 
      numBase10 = "5"

      resp = ""

      numBase2 = []

      mientras numBase10 > 0 hacer     // 5 > 0  2 > 0  1 > 0  0 > 0
         numBase2.push(numBase10 % 2)  // numBase2 = [1,0,1]
         numBase10 = Math.floor(numBase10 / 2)  // numBase10 = 2  1  0
      fin mientras

       */
      let numBase10 = document.getElementById("num1").value;

      let resp = document.getElementById("resp");

      let numBase2 = [];

      while (numBase10 > 0) {
         numBase2.push(numBase10 % 2);
         numBase10 = Math.floor(numBase10 / 2);
      }

      resp.innerHTML = numBase2.reverse().join("");
   }
   base2_10() {
      /* Se ingresa un numero en base 2 y se retorna el numero a base 10
      ejemplo= numBase2="101"   respBase10="5" */

      /* 
      
      */
      let base2 = document.getElementById("num1").value;

      let base10 = 0;

      let exponente = 0;

      while (base2 > 0) {
         base10 = base10 + (base2 % 10) * 2 ** exponente;
         base2 = Math.floor(base2 / 10);
         exponente++;
      }

      resp.innerHTML = base10;
   }
   sueldosEmpleados() {
      /* 
      Dado un arreglo de empleados se pide el promedio de los sueldos donde el sueldo=valorHora*numeroHoras.

      empleados=[
         {nombre:"ana",vh:5,nh:40},
         {nombre:"ana",vh:10,nh:40},
         {nombre:"ana",vh:2,nh:40}
      ]

      respuesta=(5*40+10*40+2*40)/3
      */

      let nombre = document.getElementById("num1").value;
      //  let nombre = 'Daniel; Ricardo; Ambar'
      let vh = document.getElementById("num2").value;
      //  let vh = '5; 10; 2'
      let nh = document.getElementById("num3").value;
      //  let nh = '40; 40; 40'
      let resp = document.getElementById("resp");

      let name = nombre.split(";");
      let valorHora = vh.split(";");
      let numeroHora = nh.split(";");

      let vt = 0;
      let vtt = 0;
      let valorTotal = 0;
      for (let i = 0; i < numeroHora.length; i++) {
         vt = parseInt(valorHora[i]) * parseInt(numeroHora[i]);
         valorTotal += vt;
      }

      vtt = parseInt(valorTotal / numeroHora.length);
      resp.innerHTML = `El promedio de los sueldos de [${name}] es ${vtt}`;
   }
   sumaDivisores() {
      // Dado un arreglo de números indicar la suma de los divisores de cada número
      let arreglo = document.getElementById("num1").value.split(";");
      let suma = [];

      for (let i = 0; i < arreglo.length; i++) {
         let sumaDivisores = 0;
         for (let j = 1; j < arreglo[i]; j++) {
            if (parseInt(arreglo[i]) % j == 0) {
               sumaDivisores += j;
            }
         }
         suma.push(sumaDivisores);
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `La suma de cada numero es: ${suma.join(", ")}`;
   }
   perfectos() {
      // Dado un arreglo de numeros indicar cuantos son perfectos
      let arreglo = document.getElementById("num1").value.split(";");

      let perfectos = [];

      for (let i = 0; i < arreglo.length; i++) {
         let sumaDivisores = 0;
         for (let j = 1; j < arreglo[i]; j++) {
            if (parseInt(arreglo[i]) % j == 0) {
               sumaDivisores += j;
            }
         }
         if (sumaDivisores == arreglo[i]) {
            perfectos.push(arreglo[i]);
         }
      }

      let resp = document.getElementById("resp");

      if (perfectos.length == 0) {
         resp.innerHTML = "No hay perfectos";
      } else {
         resp.innerHTML = `Perfectos: ${perfectos.join(", ")}`;
      }
   }
   primos() {
      // Dado un arreglo de numeros indicar cuantos son primos
      // Un numero es primo cuando solo es divisible por 1 y por si mismo

      // Ejemplo: 7, 11, 13, 17, 19, 23, 29, 31, 37, 41
      let numeros = document.getElementById("num1").value;

      let arreglo = numeros.split(";");

      let primo = [];

      for (let i = 0; i < arreglo.length; i++) {
         let contador = 0;
         for (let j = 2; j < arreglo[i]; j++) {
            if (parseInt(arreglo[i]) % j == 0) {
               contador++;
            }
         }

         if (contador == 0) {
            primo.push(arreglo[i]);
         }
      }

      let resp = document.getElementById("resp");

      if (primo.length == 0) {
         resp.innerHTML = "No hay primos";
      } else {
         resp.innerHTML = `Primos: ${primo.join(", ")}`;
      }
   }
   repeticion_numero_arreglo() {
      /* Dado un arreglo y un número indicar cuántas veces se repite el numero
      Ejemplo: arreglo=[40,20,30,20,20,10]  numero=20   resp=3 */

      let arreglo = document.getElementById("num1").value.split(";");

      let numero = document.getElementById("num2").value;

      let contador = 0;

      for (let i = 0; i < arreglo.length; i++) {
         if (arreglo[i] == numero) {
            contador++;
         }
      }

      let resp = document.getElementById("resp");

      resp.innerHTML = `El numero ${numero} se repite ${contador} veces`;
   }
   vuelto_billetes() {
      /* Dado un costo y su pago presentar el vuelto en la minima cantidad de billetes 

      billetes: 1,5,10,20,50 hasta 100

      Ejemplo:70.50  
      respuesta="1 billete de 50, 1 billete de 20 y 50 centavos" 

      costo=70.50

      pago=100

      vuelto= 1 billete de 20, 1 billete de 10, 1 billete de 5 y 50 centavos
      
      */

      let costo = parseFloat(document.getElementById("num1").value);
      let pago = parseFloat(document.getElementById("num2").value);
      let vuelto = pago - costo;
      let billetes = [100, 50, 20, 10, 5, 1];
      let monedas = [0.5, 0.25, 0.1, 0.05, 0.01];
      let resp = document.getElementById("resp");
      let respuesta = "";

      for (let i = 0; i < billetes.length; i++) {
         let cantidadBilletes = Math.floor(vuelto / billetes[i]);
         if (cantidadBilletes > 0) {
            if (respuesta !== "") {
               respuesta += ", ";
            }
            respuesta += `${cantidadBilletes} billete de ${billetes[i]}`;
            vuelto -= cantidadBilletes * billetes[i];
         }
      }

      vuelto = Math.round(vuelto * 100) / 100;
      if (vuelto > 0) {
         respuesta += `${respuesta !== "" ? ", " : ""}${vuelto} centavos`;
      }

      vuelto = pago - costo;

      resp.innerHTML = `${vuelto} = ${respuesta}`;
   }
}

const arreglos = new Arreglos();