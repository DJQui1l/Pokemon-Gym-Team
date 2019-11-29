class Trainer{
  constructor(){
    this.pokemon=[];
  }
  all(){
    return this.pokemon;
  }
  add(pokemons){

    axios.get(`https://fizal.me/pokeapi/api/v2/name/${pokemons}.json`)
      .then( (answer) =>{
      // console.log(answer.data);

      let Pangoro = new Pokemon(name);
       Pangoro.page = '1'
       Pangoro.name = answer.data.name;
       Pangoro.sprite = answer.data.sprites.front_default;
       Pangoro.hp = answer.data.stats[5].base_stat;
       Pangoro.attack =  answer.data.stats[4].base_stat;
       Pangoro.defense = answer.data.stats[3].base_stat;

     for (let i in answer.data.abilities){
       Pangoro.ability.push(answer.data.abilities[i].ability.name)
     }

      // Pangoro.display();

      // this.add(Pangoro)
      // console.log(this);
      this.pokemon.push(Pangoro);
    })

    // console.log('pushed');
  }
  get(name){
    for(let i=0; i<this.pokemon.length; i++){
      if (name === this.pokemon[i].name){
        return this.pokemon[i];
      }
    }
  }
}



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
// --- NADIRA's POKEMON ------
axios.get("https://fizal.me/pokeapi/api/v2/name/eevee.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '7'
  let eevee = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      eevee.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})
axios.get("https://fizal.me/pokeapi/api/v2/name/jigglypuff.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '8'
  let jigglypuff = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      jigglypuff.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})
axios.get("https://fizal.me/pokeapi/api/v2/name/growlithe.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '9'
  let growlithe = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      growlithe.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})
// ------------ DARIAN'S POKEMON ----------
axios.get("https://fizal.me/pokeapi/api/v2/name/lucario.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '10'
  let lucario = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      lucario.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})
axios.get("https://fizal.me/pokeapi/api/v2/name/emboar.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '11'
  let emboar = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      emboar.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})
axios.get("https://fizal.me/pokeapi/api/v2/name/decidueye.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '12'
  let decidueye = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      decidueye.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})
