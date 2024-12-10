const fetchButton = document.getElementById("fetchButton");
const postContainer = document.getElementById("postContainer");

fetchButton.addEventListener("click", () => {
    const postId = document.getElementById("postId").value;
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

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
            postContainer.innerHTML = `<h2>${datos.title}</h2><p>${datos.body}</p>`;
        })
        .catch(error => {
            postContainer.innerHTML = `<p>${error.message}</p>`;
            console.error(error);
        });
});
