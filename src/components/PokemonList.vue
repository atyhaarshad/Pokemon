<template id="template" lang="html">
<div class="pokemon-list" v-if="pokemons.length > 0">
  <input id="searchBar" type="text" v-model="searchQuery" placeholder="Search a pokemon!" ></input>
  <PokemonListItem v-for="pokemon in filteredPokemons()" :pokemon="pokemon"/>
</div>
</template>

<script>
import PokemonListItem from '@/components/PokemonListItem';

export default {
  methods: {filteredPokemons() {

    if (this.searchQuery == '') {
      return this.pokemons;
    } else {

      return this.pokemons.filter(pokemon => pokemon.name.includes(this.searchQuery));
    }
  }},
  data(){
    return {
      searchQuery: '',
    }
  },
  props: ['pokemons'],
  components: {PokemonListItem},
}
</script>

<style lang="css" scoped>

#pokemon-list {
  margin: 20px auto;
  width: 100%;
  max-width: 150px;
  height: 40px;
  text-align: center;
  /* flex-direction: row;
  justify-content: center;
  width: 100%;
  font-family: 'VT323', monospace; */
}

#searchBar{
  margin-left: 23%;
  padding: 10px;
  margin-bottom: 5%;
  background-color: #005DAF;
  color: #ffcc03;
  font-size: 100%;
  border-radius: 50px;
  height: 400%;
  width: 50%;
    /* display: block; */
  font-family: 'VT323', monospace;
}

#template{
  background-color: #005DAF;
}
</style>
