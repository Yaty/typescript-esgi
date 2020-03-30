export class Pokemon {
  constructor(private readonly name: string) {
    this.name = name;
  }
}

const pokemon = new Pokemon('pikachu');
console.log(pokemon);
