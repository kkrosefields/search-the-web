<template>
    <div v-if="pokemon">
        <li class="pokemon-card">
            <h2> {{pokemon.name}} </h2>
            <h2> {{pokemon.attack}}</h2>
            <img class="pokemon-img" :src=pokemon.url_image>
     </li>   
    </div>
</template>

<script>
import api from '../../services/api';
import Loader from './Loader';

export default {

  data(){
    return {
      pokemon: null,
      loading: false,
      error: null,
      search:'',

    
    };
  },
  
  created() {
    this.search = this.$route.params.pokemon;
    this.searchPokemon();
  },
  components: {
    Loader
  },
  methods: {
    searchPokemon() {
      this.loading = true;
      this.error = null;
      api.getDetails(this.search)
        .then(response => {
          this.pokemon = response.results[''];
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    }
  }
};

</script>