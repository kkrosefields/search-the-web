<template>
    <li class="pokemon-card">
        <h2> {{pokemonList.pokemon}} </h2>
        <img class="pokemon-img" :src=pokemonList.url_image>
        <p> <span class="type">Type: {{pokemonList.type_1}}</span> <span class="species"> Species: {{pokemonList.species_id}}</span></p>
    </li>   
</template>

<script>
export default {
  props: {
    PokemonList: Object,
  
  },
};
</script>
