import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://pokeapi.co/api/v2/';

const getPokemonsArray = () => {
  const max = 200; const min = 1;
  const pokeIdArray = [];
  let randId;
  for (let i = 0; i < 16; i += 1) {
    randId = Math.floor(Math.random() * (max - 1)) + min;
    pokeIdArray.push(randId);
  }
  return pokeIdArray.filter((a, b) => pokeIdArray.indexOf(a) === b);
};

export const getPokemon = async pokemon => {
  try {
    const response = await fetch(`${baseUrl}pokemon/${pokemon}`);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getPokemonAbility = async pokemon => {
  try {
    const response = await fetch(`${baseUrl}ability/${pokemon}`);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const pokeIdArray = getPokemonsArray();
export const getPokemons = async () => Promise.all(pokeIdArray.map(pokeId => getPokemon(pokeId)));
export const getPokemonsAbilities = async () => Promise.all(pokeIdArray.map(pokeId => getPokemonAbility(pokeId)));

