import { getPokemon, getPokemons, getPokemonsAbilities } from './fetchAsync/pokeApi'

// getPokemon('132').then(poke => console.log(poke.name));
getPokemons().then(pokemons => pokemons.map(pokemon => console.log(pokemon.id)));
getPokemonsAbilities().then(pokemons => pokemons.map(pokemon => console.log(pokemon)));


