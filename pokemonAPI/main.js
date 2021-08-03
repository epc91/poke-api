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
        fetchPokemon(Math.floor(Math.random() * 890))
    }
}

// Create Pokemon
function createPokemon(pokemon) {
    // Card
    const card = document.createElement('div')
    card.classList.add('pokemon-block')

    // Sprite Contanier
    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')

    // Sprite
    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite)

    // ID Pokemon
    const number = document.createElement('p')
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`

    // Name Pokemon
    const name = document.createElement('p')
    name.textContent = pokemon.name 

    // Types Pokemon
    const typeOne = document.createElement('p')
    typeOne.textContent = pokemon.types[0].type.name

    // const typeTwo = document.createElement('p')
    // if (pokemon.types[1].type.name) {
    //     typeTwo.textContent = pokemon.types[1].type.name
    // }
    

    // Add Elements To Card
    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name)
    card.appendChild(typeOne)
    // card.appendChild(typeTwo)

    pokemonContainer.appendChild(card)
}

fecthPokemons(6)