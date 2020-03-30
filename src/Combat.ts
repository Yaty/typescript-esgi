import { Pokemon } from './Pokemon';
import { Attack } from './Attack';

export type RandomFn = () => number;

export class Combat {
  public attacker: Pokemon;
  public defender: Pokemon;

  constructor(
    private readonly firstPokemon: Pokemon,
    private readonly secondPokemon: Pokemon,
    randomFn?: RandomFn,
  ) {
    this.attacker = this.getFirstAttacker(randomFn);
    this.defender =
      this.attacker === firstPokemon ? secondPokemon : firstPokemon;
  }

  private getFirstAttacker(randomFn: RandomFn = Math.random): Pokemon {
    if (this.firstPokemon.speed > this.secondPokemon.speed) {
      return this.firstPokemon;
    } else if (this.firstPokemon.speed < this.secondPokemon.speed) {
      return this.secondPokemon;
    }

    return randomFn() > 0.5 ? this.firstPokemon : this.secondPokemon;
  }

  private switchPokemons(): void {
    const tmp = this.attacker;
    this.attacker = this.defender;
    this.defender = tmp;
  }

  private getAttackDamage(
    attack: Attack,
    crititalRandomFn: RandomFn = Math.random,
  ): number {
    let offensiveStat = this.attacker.attack;
    const defensiveStat = this.defender.defense;
    const isCritical = crititalRandomFn() > 0.9;

    if (isCritical) {
      offensiveStat *= 3;
    }

    return (
      Math.floor(
        Math.floor(
          (Math.floor((2 * this.attacker.level) / 5 + 2) *
            offensiveStat *
            attack.basePower) /
            defensiveStat,
        ) / 50,
      ) + 2
    );
  }

  attack(attack: Attack, crititalRandomFn: RandomFn = Math.random): void {
    if (!this.attacker.attacks.includes(attack)) {
      throw new Error('Invalid attack');
    }

    const damageDealt = this.getAttackDamage(attack, crititalRandomFn);
    this.defender.removeHp(damageDealt);

    if (this.defender.isDead()) {
      // TODO
    }

    this.switchPokemons();
  }
}
