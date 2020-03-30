import { Pokemon } from '../src/Pokemon';
import { getFirstAttacker } from '../src/combat';

describe('Combat', () => {
  it('should determine the first attackers which has the most speed', () => {
    const firstPokemon = new Pokemon('Pikachu', 1, 2, 3, 4, 5, 6);
    const secondPokemon = new Pokemon('Herbizarre', 1, 2, 3, 4, 5, 6);
    expect(getFirstAttacker(firstPokemon, secondPokemon)).toBe(secondPokemon);
  });
});
