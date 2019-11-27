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
  constructor(name) {
    this.name= name;

    this.ability=[]

    this.container = document.querySelector('#pokemonStats');
    this.element = document.createElement("div")
  }

  //
  display(){
  //   let pokeImage = document.getElementById('Img'+ this.page);
  //   // pokeImage.src = this.sprite;
  //
  //   let name = document.createElement('h2')
  //   name.innerHTML = "Name: " + this.name
  //   this.element.appendChild(name)
  //   this.container.appendChild(this.element)
  //
  //   let hp = document.createElement('h3')
  //   hp.innerHTML = "HP: " + this.hp
  //   this.element.appendChild(hp)
  //   this.container.appendChild(this.element)
  //
  //   let attack = document.createElement('h3')
  //   attack.innerHTML = "Attack: " + this.attack
  //   this.element.appendChild(attack)
  //   this.container.appendChild(this.element)
  //
  //   let defense = document.createElement('h3')
  //   defense.innerHTML = "Defense: " + this.defense
  //   this.element.appendChild(defense);
  //   this.container.appendChild(this.element)
  //
  //   let abilities = document.createElement('h3')
  //   abilities.innerHTML = "Ability: " + this.ability
  //   this.element.appendChild(ability)
  //   this.container.appendChild(this.element)
    let pokeDexGrid = document.getElementById('pokedex-grid')
    let imgShow1 = document.createElement('img')
    imgShow1.src = `${this.sprite}`
    imgShow1.style.height = '110px';
    imgShow1.style.width = '110px';


    pokeDexGrid.appendChild(imgShow1)

    return "function ran"
  }
}

var page = 1

// let nadira = new Trainer('Nadira')
// nadira.add('eevee')
// nadira.add('jigglypuff')
// nadira.add('growlithe')
//
// setTimeout(() => {
//   nadira.pokemon[0].display()
//   nadira.pokemon[1].display()
//   nadira.pokemon[2].display()
// },1000)
//

let darian = new Trainer("Darian")
darian.add('emboar')
darian.add('lucario')
darian.add('decidueye')

setTimeout(() => {
  darian.pokemon[0].display()
  darian.pokemon[1].display()
  darian.pokemon[2].display()
},500)



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
