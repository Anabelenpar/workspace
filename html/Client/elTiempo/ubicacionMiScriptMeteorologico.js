// Añadimos un event listener al botón HTML.
const button = document.getElementById('button');
button.addEventListener('click', getLocationAndCheckWeather);

//Creamos función para obtener la ubicación actual del usuario.
function getLocationAndCheckWeather() {
    // Intentamos obtener la ubicación del usuario.
    if (navigator.geolocation) {
        //Si la geolocalización está disponible se obtiene la información.
        navigator.geolocation.getCurrentPosition(
            //Exito: se obtienen las coordenadas de latitud y longitud.
            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                //Llamamos a la función y le pasamos los valores.
                ajaxCheckWeather(lat, lon);
            },
            //Manejo del error.
            error => {
                alert("No se pudo obtener la ubicación. Por favor, activa la ubicación en tu navegador.");//Error si no se puede localizar.
            }
        );
    } else {
        alert("La geolocalización no es compatible con este navegador.");//Error si no soporta la geolocalización.
    }
}

//Función que realiza la llamada a la API de OpenWeatherMap.
function ajaxCheckWeather(lat, lon) {

    /* LLAMADA AJAX*/
    //config llamada AJAX
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    //Construimos la URL con latitud y longitud.
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d`;

//Llamada a la API de OpenWeather y manejo de la respuesta
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => responseManager(JSON.parse(result)))
        .catch(error => alert('error', error));
}


/*Funcion principal que gestiona la respuesta de la API y actualiza el contenido*/
function responseManager(resp) {
    console.log(resp);
    cambiaIcono(resp.weather[0].icon);
    muestraDesc(resp.weather[0].description);
    muestraHumedad(resp.main.humidity);
    muestraTemperatura(resp.main.temp);
    muestraUbicacion(resp.name);
    muestraCoordenadas(resp.coord.lat, resp.coord.lon);
}


/*funciones auxiliares para cambiar el HTML/CSS*/

function cambiaIcono(nombreIco) {
    //Función que cambia el icono del clima usando la información de la API.
    let icono = document.getElementById('icono');
    icono.src = "img/" + nombreIco + "@2x.png";
}

function muestraDesc(desc) {
    //Función que muestra la descripción del clima.
    let prev = document.getElementById('prevision');
    prev.innerHTML = desc;
}

function muestraUbicacion(ubicacion) {
    // Función que muestra la ubicación (nombre de la ciudad o país).
    let elemento = document.getElementById('ubicacionPedida');
    elemento.innerHTML = ubicacion;
}
function muestraCoordenadas(lat, lon) {
    // Función que muestra las coordenadas de la ubicación
    let elemento = document.getElementById('latlong');
    elemento.innerHTML = `(${lat.toFixed(2)}, ${lon.toFixed(2)})`;
}    

function muestraPrevision(prevision) {
    //Función que muestra la previsión de la geolocalización.
    let elemento = document.getElementById('prevision');
    elemento.innerHTML = prevision;
}

function muestraTemperatura(temperatura) {
    //// Función que muestra la temperatura en grados Celsius.
    let temperaturaCelsius = temperatura - 273.15;
    temperaturaCelsius = temperaturaCelsius.toFixed(2);
    let elemento = document.getElementById('temperatura');
    elemento.innerHTML = temperaturaCelsius;
}

function muestraHumedad(humedad) {
    //// Función que muestra la humedad relativa.
    let elemento = document.getElementById('humedad');
    elemento.innerHTML = humedad;
}