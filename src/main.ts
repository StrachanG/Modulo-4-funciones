//1 - Definir la funcionalidad deseada:
    //  Queremos crear un contador de turnos para una clínica que permita:

        // Avanzar (2), Retroceder (2) y Reiniciar el contador (3).

//2 - Identificar los elementos necesarios:
    //  numero-turno (1) boton-siguiente (2) boton-anterior (3) y boton-reset (4)



//3 - Definir las funciones necesarias:


    //3.1 - Definimos la función para obtener el valor del contador de turno
    function obtenerValorTurno(): number {
        // Obtenemos el valor del contador de turno del elemento HTML con id "numero-turno"
        const valorTurnoElement = document.getElementById('numero-turno');
        //Verificamos que el elemento obtenido no es null ni undefined, lo que indica que existe en el DOM
        if (valorTurnoElement !== null && valorTurnoElement !== undefined) {
            //Si el valor existe, obtenemos el valor del elemento a traves de .textContent y lo 
            //convertimos en número usando parseInt.
            return parseInt(valorTurnoElement.textContent || '0');
        } else {
            return 0; // Si no se puede encontrar el elemento, devolvemos 0
        }
    }

    //3.2 - Definimos la función para actualizar el contador de turno
    function actualizarTurno(nuevoValor: number): void {
        // Obtenemos el valor del contador de turno del elemento HTML con id "numero-turno"
        const valorTurnoElement = document.getElementById('numero-turno');
        // Verificamos que el elemento obtenido no es null ni undefined, lo que indica que existe en el DOM
        if (valorTurnoElement !== null && valorTurnoElement !== undefined) {
            //Si el valor existe en el DOM, actualizamos su contenido utilizando .textContent con el nuevo
            //valor proporcionado. Además utilizamos .padStart para asegurarnos que el número tenga al menos
            //dos dígitos, rellenando con ceros a la izquierda si es necesario
            valorTurnoElement.textContent = nuevoValor.toString().padStart(2, '0');
        }
    }

    //3.3 - Definimos la función para el turno siguiente
    function turnoSiguiente(): void {
        //Utiliza la funcion obtenerValorTurno para obtener el valor actual del turno
        const valorActual = obtenerValorTurno();
        //Incrementa el valor del turno en uno 
        const nuevoValor = valorActual + 1;
        //Llama a la función actualizarTurno para actualizar el display con el nuevo valor
        actualizarTurno(nuevoValor);
    }

    //3.4 - Definimos la función para el turno anterior
    function turnoAnterior(): void {
        //Utiliza la funcion obtenerValorTurno para obtener el valor actual del turno
        const valorActual = obtenerValorTurno();
        // Verifica si el valor actual es mayor que 1.
        if (valorActual > 1) {
            // Si es así, disminuye el valor del turno en uno
            const nuevoValor = valorActual - 1;
            // Llama a la función actualizarTurno para actualizar el display con el nuevo valor
            actualizarTurno(nuevoValor);
        }
    }

    //3.5 - Definimos la función para reiniciar el contador de turnos
    function resetTurno(): void {
        //Llama a la función actualizarTurno con el valor 1.
        actualizarTurno(1);
    }


    //  RETOS & CHALLENGES

    //3.6 - Definimos la función para cambiar el turno a un valor especificado por el operario
    function cambiarTurnoManualmente(): void {
        //Obtenemos el valor del input HTML con id "nuevo-turno"
        const valorInput = document.getElementById("nuevo-turno") as HTMLInputElement;
        //Verificamos que el elemento no sea null ni que no tenga valor, lo que indica que existe en el DOM
        if (valorInput !== null && valorInput.value !== '') {
            //Nos aseguramos que el nuevo valor sea numérico
            const nuevoValor = parseInt(valorInput.value);
            //Establecemos un condicional. 
                //Si nuevoValor es un número, actualizamos el turno con el nuevo valor proporcionado por el operario.  
                //Ademas limpiamos el valor de la caja de texto despues de actualizar el turno
            if (!isNaN(nuevoValor)) {
                actualizarTurno(nuevoValor);
                valorInput.value = ''; 
            }
        }
    }


//4 - Agregar event listeners a los botones:


    //4.1 - Event listeners para el botón siguiente
        //Seleccionamos el botón siguiente del DOM con el id "boton-siguiente".
    const botonSiguiente = document.getElementById('boton-siguiente');
        // Si el elemento existe en el DOM
    if (botonSiguiente !== null) {
        // Llamamos a las funciones
        botonSiguiente.addEventListener('click', turnoSiguiente);
    }
    //4.2 - Event listeners para el botón anterior
        //Seleccionamos el botón anterior del DOM con el id "boton-anterior".
    const botonAnterior = document.getElementById('boton-anterior');
        // Si el elemento existe en el DOM
    if (botonAnterior !== null) {
        // Llamamos a las funciones
        botonAnterior.addEventListener('click', turnoAnterior);
    }
    //4.3 - Event listeners para el botón reset
        //Seleccionamos el botón reset del DOM con el id "boton-reset".
    const botonReset = document.getElementById('boton-reset');
        // Si el elemento existe en el DOM
    if (botonReset !== null) {
        // Llamamos a las funciones
        botonReset.addEventListener('click', resetTurno);
    }
    //4.4 - Event listeners para el botón de cambio manual de turno
    const botonCambiarTurno = document.getElementById("boton-cambiar-turno");
        // Si el elemento existe en el DOM
    if(botonCambiarTurno !== null) {
        // Llamamos a la funcion cambiarTurnoManualmente con el evento click 
        botonCambiarTurno.addEventListener('click', cambiarTurnoManualmente);
    }