export class Pokemon {
  constructor(
    public readonly name: string,
    public hp: number,
    public readonly attack: number,
    public readonly defense: number,
    public readonly specialAttack: number,
    public readonly specialDefense: number,
    public readonly speed: number,
  ) {}
}
