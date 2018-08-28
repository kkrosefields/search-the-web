import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Pokemon from './components/pokemon/Pokemon.vue';
import PokemonCard from './components/pokemon/PokemonCard.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/pokemon', component: Pokemon },
    { path: '/pokemon/:id', component: PokemonCard},
    { path: '*', redirect: '/' }
  ]
});