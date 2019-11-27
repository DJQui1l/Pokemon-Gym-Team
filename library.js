class Pokemon {
  constructor(name, sprite, hp, attack, defense, abilities, page) {
    this.name= name;
    this.sprite= sprite;
    this.hp= hp;
    this.attack= attack;
    this.defense= defense;
    this.abilities= abilities;
    this.page = page

    this.container = document.getElementById('pokdex-grid'+this.page);
    console.log(this.container);
    this.element = document.createElement("div")
  }
  display(){
    let pokeImage = document.getElementById('Img'+ this.page);
        pokeImage.src = this.sprite;
    let name = document.createElement('p')
    name.innerHTML = "Name: " + this.name
    this.element.appendChild(name)
    this.container.appendChild(this.element)

    let hp = document.createElement('p')
    hp.innerHTML = "HP: " + this.hp
    this.element.appendChild(hp)
    this.container.appendChild(this.element)

    let attack = document.createElement('p')
    attack.innerHTML = "Attack: " + this.attack
    this.element.appendChild(attack)
    this.container.appendChild(this.element)

    let defense = document.createElement('p')
    defense.innerHTML = "Defense: " + this.defense
    this.element.appendChild(defense);
    this.container.appendChild(this.element)

    let abilities = document.createElement('p')
    abilities.innerHTML = "Ability: " + this.abilities
    this.element.appendChild(abilities)
    this.container.appendChild(this.element)


  }
}

axios.get("https://fizal.me/pokeapi/api/v2/name/mudkip.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '4'
  let Pikachu = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      Pikachu.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})
axios.get("https://fizal.me/pokeapi/api/v2/name/sneasel.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '5'
  let Pikachu = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      Pikachu.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})
axios.get("https://fizal.me/pokeapi/api/v2/name/buizel.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '6'
  let Pikachu = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      Pikachu.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})
