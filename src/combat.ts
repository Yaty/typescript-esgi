import { Pokemon } from './Pokemon';

/**
 * Get first attacker for a combat
 * @param firstPokemon
 * @param secondPokemon
 * @param random inject function that returns a number between 0 and 1
 */
export function getFirstAttacker(
  firstPokemon: Pokemon,
  secondPokemon: Pokemon,
  random?: () => number,
): Pokemon {
  if (firstPokemon.speed > secondPokemon.speed) {
    return firstPokemon;
  } else if (firstPokemon.speed < secondPokemon.speed) {
    return secondPokemon;
  }

  const randomFn = random ?? Math.random;
  return randomFn() > 0.5 ? firstPokemon : secondPokemon;
}
