//selectores
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

// Datos para la busqieda
const datosBusqueda={
    // colocamos las comillas vacias ya que no sabesmos lo que ingresará el usuario nilas especificaciones
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}
// crear años
const years=document.createElement('option')
const max=new Date().getFullYear(); //2023,2022,2021, 2019, 2018 ... 2013 //-Usa el tiempo local, en donde nos encontramos 
const min=max-10 //2023-10 //pone un rango min y busca la info

//de i depende la vuelta del ciclo
for(let i=max ; i > min; i--){
    const option=document.createElement('option')
    option.value=i
    option.innerHTML=i //option ya tiene agreagda la info de i 
    document.querySelector('#year').appendChild(option)
}

//DOMContenLoaded nos hacer cargar todos los elementos de la pág
document.addEventListener('DOMContentLoaded', () =>{
    mostarAutos()
}) //

//crando eventos para los input /formulario
marca.addEventListener('input' , e=>{ //cada que reaccione mandara el valor 
   datosBusqueda.marca = e.target.value;

    filtrarAuto()
 })

year.addEventListener('input' ,e=>{
    datosBusqueda.year =e.target.value

    filtrarAuto()
})

minimo.addEventListener('input' ,e=>{
    datosBusqueda.minimo =Number(e.target.value)

    filtrarAuto()
})

maximo.addEventListener('input' ,e=>{
    datosBusqueda.maximo =Number(e.target.value)

    filtrarAuto()
})

puertas.addEventListener('input' ,e=>{
    datosBusqueda.puertas =Number(e.target.value)

    filtrarAuto()
})

transmision.addEventListener('input' ,e=>{
    datosBusqueda.transmision =e.target.value

    filtrarAuto()
})

color.addEventListener('input' ,e=>{
    datosBusqueda.color=e.target.value

    filtrarAuto()
})

//creando eventos
//va a mandar a llamar todas las funciones (prpiedades) y se ejecutara una vez, en vez de estar por funcion
/*function filtrarAuto(){
    const resultado=autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmicion).filter(filtrarColor)
    console.log(resultado)
}*/

function mostarAutos(autos){
    //leer resultado
    const contenedor=document.querySelector('#resultado')
///////
    autos.forEach(auto =>{
        const autoHTML = document.createElement('p')
        autoHTML.innerHTML=`
        <p> ${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puerta} Puertas - Transmision ${auto.transmision} - Precio ${auto.precio} - Color ${auto.color}</p>
        
        `
        contenedor.appendChild(autoHTML)
    });
}

function limpiarHTML(){
    //leemos el elemento Resultado 
    const contenedor = document.querySelector('#resultado')

    //Limpiar los resultados anteriores
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

//no hay resultados 
function noResultado(){
    limpiarHTML()
    const noResultado=document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.appendChild(document.createTextNode('No se obtuvo ningun resultado'))
    document.querySelector('#resultado').appendChild(noResultado);

}   
//va a mandar a llamar todas las funciones (prpiedades) y se ejecutara una vez, en vez de estar por funcion
function filtrarAuto(){
    const resultado=autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmicion).filter(filtrarColor)
    
    //console.log(resultado)
    if(resultado.length){
        mostarAutos(resultado)
    }else{
        noResultado()//div con alerta de "No se obtuvo ningun resultado"
    }

}

//funciones para aplicar los filtros 

//entrada-proceso-salida
//es importante mandar a llamar para hacer referencia la otro codigo
function filtrarMarca(auto){
    //
    datosBusqueda.marca
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca     
    }
    return auto;
}
//entrada ("") ¿que se necsita?
function filtrarYear(auto){
    if (datosBusqueda.year) {
                            //es igual a.posicion
        return auto.year ===datosBusqueda.year
    }
    return auto
}
//minimo
function filtrarMinimo(auto){
    if (datosBusqueda.minimo) {
        return auto.minimo ===datosBusqueda.minimo
    }
    return auto
}
//maximo
function filtrarMaximo(auto){
    if (datosBusqueda.maximo) {
                            //es igual a.posicion
        return auto.maximo ===datosBusqueda.maximo
    }
    return auto
}
//puertas
function filtrarPuertas(auto){
    if (datosBusqueda.puertas) {
                            //es igual a.posicion
        return auto.puertas ===datosBusqueda.puertas
    }
    return auto
}
//transmicion
function filtrarTransmicion(auto){
    if (datosBusqueda.transmision) {
                            //es igual a.posicion
        return auto.transmision ===datosBusqueda.transmision
    }
    return auto
}
//
function filtrarColor(auto){
    if (datosBusqueda.color) {
                            //es igual a.posicion
        return auto.color ===datosBusqueda.color
    }
    return auto
}