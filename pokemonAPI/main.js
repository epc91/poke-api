const pokemonContainer = document.querySelector('.pokemon-container')

const url = 'https://pokeapi.co/api/v2/pokemon'

// Pokemon Response By ID
function fetchPokemon(id) {
    fetch(`${url}/${id}/`)
    .then(response => response.json())
    .then(data => {
        createPokemon(data)
    })
}

// Group Of Pokemons
function fecthPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i)
    }
}

// Create Pokemon
function createPokemon(pokemon) {
    const card = document.createElement('div')
    card.classList.add('pokemon-block')

    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite)

    const number = document.createElement('p')
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`

    const name = document.createElement('p')
    name.textContent = pokemon.name 

    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name)

    pokemonContainer.appendChild(card)
}

fecthPokemons(9)