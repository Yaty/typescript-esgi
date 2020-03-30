import { Pokemon } from '../src/Pokemon';
import { getFirstAttacker } from '../src/combat';

describe('Combat', () => {
  it('should determine the attackers which has the most speed (1)', () => {
    const firstPokemon = new Pokemon('Pikachu', 1, 2, 3, 4, 5, 6);
    const secondPokemon = new Pokemon('Herbizarre', 1, 2, 3, 4, 5, 7);
    expect(getFirstAttacker(firstPokemon, secondPokemon)).toBe(secondPokemon);
  });

  it('should determine the attackers which has the most speed (2)', () => {
    const firstPokemon = new Pokemon('Pikachu', 1, 2, 3, 4, 5, 7);
    const secondPokemon = new Pokemon('Herbizarre', 1, 2, 3, 4, 5, 6);
    expect(getFirstAttacker(firstPokemon, secondPokemon)).toBe(firstPokemon);
  });

  it('should determine the attackers randomly when the speed is the same (1)', () => {
    const firstPokemon = new Pokemon('Pikachu', 1, 2, 3, 4, 5, 6);
    const secondPokemon = new Pokemon('Herbizarre', 1, 2, 3, 4, 5, 6);
    const randomFn = (): number => 0.3;

    expect(getFirstAttacker(firstPokemon, secondPokemon, randomFn)).toBe(
      secondPokemon,
    );
  });

  it('should determine the attackers randomly when the speed is the same (2)', () => {
    const firstPokemon = new Pokemon('Pikachu', 1, 2, 3, 4, 5, 6);
    const secondPokemon = new Pokemon('Herbizarre', 1, 2, 3, 4, 5, 6);
    const randomFn = (): number => 0.7;

    expect(getFirstAttacker(firstPokemon, secondPokemon, randomFn)).toBe(
      firstPokemon,
    );
  });
});
