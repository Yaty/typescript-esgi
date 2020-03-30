import { givenPokemon } from './utils';

describe('Pokemon', () => {
  describe('Is dead', () => {
    it('should return true when hp is === 0', () => {
      const pokemon = givenPokemon();
      pokemon.hp = 0;
      expect(pokemon.isDead()).toBeTruthy();
    });

    it('should return true when hp is < 0', () => {
      const pokemon = givenPokemon();
      pokemon.hp = -1;
      expect(pokemon.isDead()).toBeTruthy();
    });
  });

  describe('Remove HP', () => {
    it('should remove the correct amount of HP', () => {
      const pokemon = givenPokemon({
        hp: 100,
      });

      pokemon.removeHp(50);
      expect(pokemon.hp).toEqual(50);
    });

    it('should not remove more hp after 0', () => {
      const pokemon = givenPokemon({
        hp: 10,
      });

      pokemon.removeHp(50);
      expect(pokemon.hp).toEqual(0);
    });
  });
});
