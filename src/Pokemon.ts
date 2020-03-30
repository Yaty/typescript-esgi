import { Attack } from './Attack';

export enum PokemonType {
  WATER = 'WATER',
  GRASS = 'GRASS',
  FIRE = 'FIRE',
  BUG = 'BUG',
}

export class Pokemon {
  constructor(
    public readonly name: string,
    public readonly type: PokemonType,
    public hp: number,
    public level: number,
    public readonly attack: number,
    public readonly defense: number,
    public readonly speed: number,
    public readonly attacks: Attack[],
  ) {}

  public removeHp(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
  }

  public isDead(): boolean {
    return this.hp <= 0;
  }
}
