let lisClientes=[];

function sistemaInteractivo(){
    //Inicializacion del programa
    console.log("¡Bienvenido al Sistema Interactivo de Mensajes!");
    
    
    //Captura de datos del programa
    let nombre = prompt("Por favor, Ingresa tu nombre:");
    let edad = prompt("Por favor, Ingresa tu edad:");

    //Codigo para validar 
    if (!nombre || nombre.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
   
    //Convertir edad a numero
    edad = parseInt(edad);
    
    //Codigo para Validacion y Mensajes:
    if (isNaN(edad)){ // NAN -> not a number
        console.error("Error: Por favor, ingresa una edad valida en numeros");
        return
    } else if (edad < 1 || edad > 100){
        alert("Por favor, ingresa una edad valida entre 1 a 100");
        return
    } else if (edad < 18){
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!`);
    } else {
        alert(`Hola ${nombre}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`);
    }
    
    let cliente={};
    cliente.nombre=nombre;
    cliente.edad=edad;
    lisClientes.push(cliente)
    
    
    const lista = document.getElementById("cliente-lista");
    lista.innerHTML = "";

    lisClientes.forEach((cliente,i) =>{
        const listitem = document.createElement("li");
        listitem.textContent = `Nombre:${cliente.nombre} - Edad:${cliente.edad}`;
        lista.appendChild(listitem);
    });

    console.log(lisClientes);

}
