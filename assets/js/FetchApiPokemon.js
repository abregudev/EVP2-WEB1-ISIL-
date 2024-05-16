// Ingreso la API en un variable no modificable por buenas practicas.
const URL = "https://pokeapi.co/api/v2/pokemon/";

// Creamos un evento donde al hacer click hacemos peticion del API POKEMON sumandole un numero ramdom de 1 al 152
document.getElementById("getAPIpokemon").addEventListener("click", () => {
    let datoNumeroRamdom = Math.floor(Math.random() * 152);
    fetch(URL + datoNumeroRamdom)
    .then((response) => response.json())
    .then(data => {
        document.getElementById("pokemonSTATS").innerHTML = 
        `
        <p class="pokemon-id">#${datoNumeroRamdom}</p>
        <img class="imgPokemon" src="${data.sprites.front_default}"></img>
        `
        document.getElementById("pokemonStats").innerHTML = 
        `
         <h2>${data.species.name}</h2>
                <div class="tipos">${data.types[0].type.name}</div>
                <div class="col2">
                    <p class="peso infopeso_altura">${data.weight}KG</p>
                    <p class="altura infopeso_altura">${data.height}M</p>
                </div>
        `
    })
})