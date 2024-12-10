const url = "https://jsonplaceholder.typicode.com/posts/1"
fetch(url)
    .then(respuesta => {
        console.log("Status de la petición:", respuesta.status);
        if (respuesta.ok) {
            return respuesta.json();
        } else {
            throw new Error("Error: " + respuesta.status);
        }
    })
    .then(datos => {
        document.getElementById("postContainer").innerHTML = `<h2>${datos.title}</h2><p>${datos.body}</p>`;
    })
    .catch(error => {
        document.getElementById("postContainer").innerHTML = `<p>${error.message}</p>`;
        console.error(error);
    });
