<template lang="html">
  <div id="listItem" class="pokemon-list-item">
    <div>
      <h1 id="h1">{{pokemon.name.substring(0, 1).toUpperCase() + pokemon.name.substring(1)}}</h1>
      <button id="moreInfoBtn" v-on:click="handleClick(pokemon)"> More Info </button>
    </div>

    <div>
      <PokemonInfo v-if="showInfo" :pokemon="pokemon"> </PokemonInfo>
    </div>


  </div>
</template>

<script>

import PokemonInfo from '@/components/PokemonInfo';

export default {
  data(){
    return {
      showInfo: false,
    }
  },
  props: ['pokemon'],
  methods: {handleClick(pokemon) {

    this.showInfo = !this.showInfo

  }},
  components: {PokemonInfo}
}
</script>

<style lang="css" scoped>

#h1{
  margin-top: 0;
}
#listItem {
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: 'VT323', monospace;
  width: 100%;
}

#moreInfoBtn{
  box-shadow: black;
  border-radius: 12px;
  background-color: #005DAF;
  font-family: 'VT323', monospace;
  font-size: 15px;
  color: #ffcc03;
}
</style>
