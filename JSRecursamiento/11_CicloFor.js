/*
El ciclo for lo utilizamos cuadno queremos repetir una accion un determiado numero de veces, 
este ciclo en particular lo utilizamos cuando sabemos con exactitud el numero de veces que 
queremos que se ejecute

sintaxis:

            for (inincializacion; condicion; actualizacion) {
                Sentencia a ejecutar en cada iteracion
            }

Inicializacion: Esta se ejecuta en la primera iteracion del bucle, aqui podemos colocar la variable
            que utilizaremos para llevar la cuenta de las veces que se ejecuta el bucle

Condicion: Esta se evaluara cada vez que comience una iteracione en el bucle y es la condicion que se debe
            cumplir para continuar la ejecucion del bucle, es decir nos tiene que dar "true" para continuar
            con la ejecucion y en el momento que de "false" el bucle se detiene.

Actualizacion: Indica los cambios que queramos ejecutar en las variables cada vez que termina la 
            iteracion del bucle

Entre llaves se colocan las sentencias a ejecutar en cada iteracion ejempplo:
*/

for (let i = 0;i <= 20;i++) {
    console.log(i)
}

/*
En ejemplo anterior declaramos "i" con "let" y la inicializamos con un valor de "0", acontinuacion
tenemos la condicion que si "i" es menor o igual a "20", este aumentara su valor en "1" (i++) y 
procedera a hacer una "console.log()" de "i"
*/