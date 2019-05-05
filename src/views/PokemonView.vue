<template>
<div id="div-list">
 <PokemonList :pokemons="pokemons"/>
</div>

</template>

<script>

import PokemonList from '@/components/PokemonList';

export default {
  components: {PokemonList},
  data(){
    return {
      pokemons: [],
    }
  },
  mounted(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(pokemon => {

      this.pokemons = pokemon.results
    })
  }
}
</script>

<style lang="css" scoped>

#div-list{
  flex-direction: column, row;
  padding-top: 500px;
  font-family: 'VT323', monospace;
}

</style>
