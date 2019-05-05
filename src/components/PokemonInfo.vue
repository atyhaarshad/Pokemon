<template lang="html">
 <div id="pokemon-info" v-if="pokemon && pokemonInfo">
   <!-- <h2>Name: {{pokemon.name.substring(0, 1).toUpperCase() + pokemon.name.substring(1)}}</h2> -->
   <img id="poke-pic" @mouseover="changeSprite()" @mouseleave="changeSprite()" :src="this.sprite"/>
<p>Abilities:</p><li v-for="ability in pokemonInfo.abilities">{{ability.ability.name}}</li>
<p>Base Exp: {{pokemonInfo.base_experience}}</p>
<p>Height: {{pokemonInfo.height}}</p>
<p>Weight: {{pokemonInfo.weight}}</p>
<label for="all-moves">Moves: </label>
<select id="moves-list"><option id="all-moves" v-for="move in pokemonInfo.moves">{{move.move.name}} </option></select>
<label for="type">Type: </label>
<button id="type" v-for="type in pokemonInfo.types">{{type.type.name}} </button>



 </div>
</template>

<script>

export default {
  data(){
    return {
      pokemonInfo: null,
      sprite: null
    }
  },
  methods: {changeSprite() {

    if (this.sprite == this.pokemonInfo.sprites.front_default) {
      this.sprite = this.pokemonInfo.sprites.back_default;
    } else {
      this.sprite = this.pokemonInfo.sprites.front_default
    }
  }},
  props: ['pokemon'],
  mounted(){

    if(!this.pokemon) this.$router.push('/');
    if(!this.pokemon.url) this.$router.push('/');

    fetch(this.pokemon.url)
      .then(res => res.json())
      .then(pokemonInfo => {

        this.pokemonInfo = pokemonInfo
        this.sprite = pokemonInfo.sprites.front_default
      })

  }
}
</script>

<style lang="css" scoped>

#pokemon-info{
  width: 100%;
  flex: 1, 30px;
  border: 2mm ridge #1F4788;
  font-family: 'VT323', monospace;
  padding: 20px;
  padding-right: 5px;
  border-radius: 10px;
  background-color: #005DAF;
  color: #ffcc03;
}
#poke-pic {
  justify-content: center;
  height: 200px;
  width: 200px;
}

#type {
  background-color: lightyellow;
  border-radius: 12px;
  background-color: #ffcc03;
  font-family: 'VT323', monospace;
  font-size: 15px;
  color: #005DAF;
}

#moves-list {
color: #005DAF;
background-color: #ffcc03;
}

#all-moves {
color: #005DAF;
background-color: #ffcc03;
}


</style>
