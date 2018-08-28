<template>
    <div class ="pokemon">
        <h1> YO POKES! </h1> 

        <PokemonSearch :onSearch="handleSearch"/>

        <Loader :loading="loading"/>

        <pre v-show="error" class="error">
            {{error}}
        </pre>

        <p vi-if="search"> Searching for &quot;{{ search }}&quot; </p>
        <div class="search-container">
             <ul v-if="pokemon">
                 <PokemonList v-for="pokemonList in pokemon"
                    :key="pokemonList.name"
                    :pokemonList="pokemonList"
                />
            </ul>
            <router-view :pokemon="pokemon"></router-view>
        </div>
       

    </div>
</template>

<script>
import api from '../../services/api';
import PokemonList from './PokemonList'
import PokemonCard from './PokemonCard'
import PokemonSearch from './PokemonSearch';
import Loader from './Loader';

export default {
    name:'pokemon',
    data(){
        return {
            pokemon: null,
            loading: false,
            error: null,
            search:'',
            total: 0,
            
        }
    },
    components: {
        PokemonList,
        PokemonCard,
        PokemonSearch,
        Loader 
    },
    methods: {
        handleSearch(search){
            this.search = search;
            this.searchPokemon();
        },
        searchPokemon() {
            this.loading = true;
            this.error = null;

        api.getPokemon(this.search)
            .then(response => {
                this.pokemon = response.pokemon_species;
                this.total = response.count;
                this.loading = false;
            })
            .catch(err => {
                this.error = err.message;
                this.loading = false;
            });
        }
    }

}
</script>

<style>

</style>