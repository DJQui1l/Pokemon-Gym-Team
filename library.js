<<<<<<< HEAD
class Pokemon {
  constructor(name, sprite, hp, attack, defense, abilities) {
    this.name= name;
    this.sprite= sprite;
    this.hp= hp;
    this.attack= attack;
    this.defense= defense;
    this.ability= ability;

    this.container = document.querySelector('#pokemonStats');
    this.element = document.createElement("div")
  }
  display(){
    let pokeImage = document.getElementById('Img'+ this.page);
    pokeImage.src = this.sprite;

    let name = document.createElement('h2')
    name.innerHTML = "Name: " + this.name
    this.element.appendChild(name)
    this.container.appendChild(this.element)

    let hp = document.createElement('h3')
    hp.innerHTML = "HP: " + this.hp
    this.element.appendChild(hp)
    this.container.appendChild(this.element)

    let attack = document.createElement('h3')
    attack.innerHTML = "Attack: " + this.attack
    this.element.appendChild(attack)
    this.container.appendChild(this.element)

    let defense = document.createElement('h3')
    defense.innerHTML = "Defense: " + this.defense
    this.element.appendChild(defense);
    this.container.appendChild(this.element)

    let abilities = document.createElement('h3')
    abilities.innerHTML = "Ability: " + this.ability
    this.element.appendChild(ability)
    this.container.appendChild(this.element)
=======
class Trainer {
  constructor(name){
    this.name
    this.team = []
>>>>>>> 3a58634708923aa2cab5f73d1d041f9e897e9d46
  }
}
