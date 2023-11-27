async function poke() {
    const id = Math.floor(Math.random() * 1017) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
}

function crearCarta(pokemon) {
    let cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
        <div class="card">
            <img src=" ${ pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
            <div>
                <h2>${pokemon.name}</h2>
            </div>
            <div>
                <h4>#${pokemon.id}</h4>
            </div>

        </div>
    `;
    return cardDiv;
}

async function displayRandomPokemon() {
    const randomPokemon = await poke();
    const pokemonCard = crearCarta(randomPokemon);
    const container = document.getElementById("carta");
    container.innerHTML = '';
    container.appendChild(pokemonCard);
}

displayRandomPokemon();
