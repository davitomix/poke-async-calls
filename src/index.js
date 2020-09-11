import getPokemons from "./fetchAsync/pokeApi";
import { getPokemon } from './fetchAsync/pokeApi'

getPokemon('132').then(poke => console.log(poke.name));
getPokemons().then(pokemons => pokemons.map(pokemon => console.log(pokemon.name)));


