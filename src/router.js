import Vue from 'vue';
import Router from 'vue-router';
import PokemonView from '@/views/PokemonView';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '',
      name: 'pokemons',
      component: PokemonView
    },
  ]
})
