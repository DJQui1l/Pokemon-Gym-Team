class Trainer{
  constructor(){
    this.pokemon=[];
  }
  all(){
    return this.pokemon;
  }
  add(pokemons){

    // axios.get(`https://fizal.me/pokeapi/api/v2/name/${pokemons}.json`)
    //   .then( (answer) =>{
      // console.log(answer.data);

      // let Pangoro = new Pokemon(name);
      //  Pangoro.page = '1';
      //  Pangoro.name = answer.data.name;
      //  Pangoro.sprite = answer.data.sprites.front_default;
      //  Pangoro.hp = answer.data.stats[5].base_stat;
      //  Pangoro.attack =  answer.data.stats[4].base_stat;
      //  Pangoro.defense = answer.data.stats[3].base_stat;
     //
     // for (let i in answer.data.abilities){
     //   Pangoro.ability.push(answer.data.abilities[i].ability.name)
     // }

      // Pangoro.display();

      // this.add(Pangoro)
      // console.log(this);
    //   this.pokemon.push(Pangoro);
    // })

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
        pokeImage.style.width = '60px'
        pokeImage.style.height = '60px'
    let name = document.createElement('p')
    name.innerHTML = "Name: " + this.name
    name.style.color='#eee'
    this.element.appendChild(name)
    this.container.appendChild(this.element)

    let hp = document.createElement('p')
    hp.innerHTML = "HP: " + this.hp
    hp.style.color = "#eee"
    this.element.appendChild(hp)
    this.container.appendChild(this.element)

    let attack = document.createElement('p')
    attack.innerHTML = "Attack: " + this.attack
    attack.style.color = "#eee"
    this.element.appendChild(attack)
    this.container.appendChild(this.element)

    let defense = document.createElement('p')
    defense.innerHTML = "Defense: " + this.defense
    defense.style.color = "#eee"
    this.element.appendChild(defense);
    this.container.appendChild(this.element)

    let abilities = document.createElement('p')
    abilities.innerHTML = "Ability: " + this.abilities
    abilities.style.color = "#eee"
    this.element.appendChild(abilities)
    this.container.appendChild(this.element)


  }
}

axios.get("https://fizal.me/pokeapi/api/v2/name/lucario.json")
  .then(function (answer){
  console.log(answer);
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let page = '4'
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
  let page = '5'
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
  let page = '6'
  let decidueye = new Pokemon( name, sprite, hp, attack ,defense, ability, page);
      decidueye.display();
  // Mukete = new Trainer()
  // Mukete.add(Entei)

})









function start() {
  let clicklightning = document.getElementById('lightning-bolt');
  let clicktitle = document.getElementById('title');
  let clickgrid = document.getElementById('title-grid');
  let collapseableGrid = document.getElementById('collapseable-grid');

  clicklightning.addEventListener("click", function() {

    clicklightning.style.animation = "fade-out 1s ease-out";

    setTimeout(() => {
      clicklightning.style.display = "none";
      clicktitle.style.display = "flex";
      clicktitle.style.animation = "fade-in 1s ease-in, scale 4s ease-out";
    }, 1004)

    setTimeout(() => {
      clicktitle.style.animation = "fade-out 1s ease-in, scale 4s ease-out";
    }, 4000)

    setTimeout(() => {
      clicktitle.style.display = "none";
      clickgrid.style.display = "none";
      clicktitle.remove()
      clickgrid.remove()

      collapseableGrid.style.display = "flex"
      collapseableGrid.style.animation = "fade-in 1s ease-in"
    }, 5000)

  })
}
