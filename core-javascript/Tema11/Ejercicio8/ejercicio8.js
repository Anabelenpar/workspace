const url = "https://jsonplaceholder.typicode.com/posts";
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
    document.getElementById("postCount").innerText = `Número total de artículos: ${datos.length}`;
    const postTableBody = document.getElementById("postTableBody");
    datos.forEach(post => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${post.title}</td><td>${post.body}</td>`;
        postTableBody.appendChild(row);
    });
})
.catch(error => {
    document.getElementById("postCount").innerText = `Error: ${error.message}`;
    console.error(error);
});
