import { Pokemon } from './Pokemon';

export function getFirstAttacker(
  firstPokemon: Pokemon,
  secondPokemon: Pokemon,
): Pokemon {
  return firstPokemon.speed > secondPokemon.speed
    ? firstPokemon
    : secondPokemon;
}
