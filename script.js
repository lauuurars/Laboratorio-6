
//creamos la función createPost
function createPost() {

//creamos el ciclo for para recorrer los 826 elementos del API
for (let index = 1; index <= 826; index++) {
    fetch("https://rickandmortyapi.com/api/character/" + index)
    .then((response) => response.json())
    .then(personaje => {
        const div = document.createElement("div");
        div.classList.add("post");

        const imagen = document.createElement("img");
        imagen.setAttribute ("src", personaje.image);
        imagen.setAttribute ("alt", personaje.name);
        div.append(imagen);

        const nombre = document.createElement("h3");
        nombre.innerText = "Character " + index;
        div.append(nombre);

        const texto = document.createElement("p");
        texto.innerText = "Esta es mi publicación número " + index + ". Esto es una prueba de generación de relleno por medio de funciones y ciclos.";
        div.append(texto);

        galeria.append(div);

    });

}

}

createPost();


