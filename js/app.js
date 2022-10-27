console.log(`Aplicacion Principal`);

//array que va a guardar los objetos de tipo persona
const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Maria', 'Duarte')
];

console.log(personas);


// con el metodo mostarPersona() vamos a recuperar el elemento ul y vamos a agregar una variable texto que va a contener un li donde 
// se van a anexar los valores de los objetos persona que se van a ir sumando a la lista
// al final lo asociamos texto con el innerhtml de la lista (ul) de id ''personas

function mostrarPersona(){
    console.log('metodo mostrar Personas');
    let texto = '';
   
    
    for(let persona of personas){
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
        console.log(persona);
    }

    document.getElementById('personas').innerHTML = texto;

        
}

// con el objeto document.forms recuperamos el fomulario con id forma- recupero los inputs con id nombre y apellido- luego crear un
// nuevo Objeto de tipo persona con los valores de nombre y apellido (nombre.value, apellido.value)
// luego hacer el push al array personas creado fuera de las funciones
// luego llamar a mostarPersona() de vuelta para que se haga el recorrido de la lista nuevamente
// 

function agregarPersona(){
    console.log('funcion agregar personas');
    
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const persona = new Persona(nombre.value, apellido.value);
    if(nombre.value != '' && apellido.value != ''){
        personas.push(persona);
        mostrarPersona();
    }
    else{
        console.log('No se han ingresado el nombre y el apellido');
        alert('Por favor, ingresa el nombre y el apellido');
        
    }

    
    

}