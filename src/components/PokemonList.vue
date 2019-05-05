<template lang="html">
<div class="pokemon-list">
  <!-- <input type="text" v-model="search" placeholder="Search a pokemon!" ></input> -->
  <PokemonListItem v-for="pokemon in pokemons" :pokemon="pokemon"/>
</div>
</template>

<script>
import PokemonListItem from '@/components/PokemonListItem';

export default {
  props: ['pokemons'],
  search: '',
  components: {PokemonListItem},
}
</script>

<style lang="css" scoped>

#pokemon-list {
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-family: 'VT323', monospace;
}
</style>
