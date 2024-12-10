//Encontramos el botón en el HTML y añadimos un event listener al botón cuando sea clicado.
button = document.getElementById('button');
button.addEventListener('click', ajaxCheckWeather);

//Creamos la función que hace la consulta a la API para obtener el clima de la ubicación.
function ajaxCheckWeather() {

    //obtenemos el valor de la localización que ha ingresado el usuario.
    var ubicacion = document.getElementById('location').value;

    //Mostramos la ubicación en el documento HTML
    muestraUbicacion(ubicacion);


    /* LLAMADA AJAX*/
    /*usamos la API provista en https://openweathermap.org/current#name */
    //config llamada AJAX
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + ubicacion + "&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d"
    //ejemplo url = "https://api.openweathermap.org/data/2.5/weather?q=Pamplona,es&&lang=es&appid=xxxxxxxx"


    //hacemos llamada AJAX, gestionamos respuesta con responseManager(resp)
    //gestionamos los errores con una alerta
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => responseManager(JSON.parse(result)))
        .catch(error => alert('error', error));
}


/*funcion principal que gestiona la respuesta a la llamada AJAX*/
function responseManager(resp) {
    console.log(resp);
    cambiaIcono(resp.weather[0].icon);
    muestraDesc(resp.weather[0].description);
    muestraHumedad(resp.main.humidity);
    muestraTemperatura(resp.main.temp);
}


/*funciones auxiliares para cambiar el HTML/CSS*/

function cambiaIcono(nombreIco) {
    //añade o cambia el icono que tiene el id icono
    //utiliza iconos que se enecuentran en el directorio "img" y que tienen el nombre en formato  nombreIco@2x.png
    let icono = document.getElementById('icono');
    icono.src = "img/" + nombreIco + "@2x.png";
}

function muestraDesc(desc) {
    //Lleva un texto (que contiene la descripción de la previsión) a la página HTML
    let prev = document.getElementById('prevision');
    prev.innerHTML = desc;
}

function muestraUbicacion(ubicacion) {
    //Lleva un texto (que contiene la ubicación pedida por el usuario) a la página HTML
    let elemento = document.getElementById('ubicacionPedida');
    elemento.innerHTML = ubicacion;
}

function muestraPrevision(prevision) {
    //Lleva un texto (que contiene la previsión pedida por el usuario) a la página HTML
    let elemento = document.getElementById('prevision');
    elemento.innerHTML = prevision;
}

function muestraTemperatura(temperatura) {
    //Lleva un texto (que contiene la temperatura pedida por el usuario) a la página HTML
    let elemento = document.getElementById('temperatura');
    elemento.innerHTML = temperatura;
}

function muestraHumedad(humedad) {
    //Lleva un texto (que contiene la humedad pedida por el usuario) a la página HTML
    let elemento = document.getElementById('humedad');
    elemento.innerHTML = humedad;
}