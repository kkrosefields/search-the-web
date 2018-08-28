<template>
  <div class="filter-sort">
    <div>
        <select v-model="selected" v-on:change="handleChange">
          <option value=""> Filter by Type</option>
          <option v-for="type_1 in types" 
          v-bind:key="type_1">
           {{ type_1 }}
           </option>
        </select>
    
          <input class="filter-input" placeholder="Filter By Attack" v-model="attack" v-on:keyup="handleChange"/>

    </div>
  </div>
</template>

<script>
import pokemonData from '../../pokedex.js';

export default {
  props:{ 
    onFilter: Function
  },

  data(){
    return {
      types: pokemonData.getTypes(),
      selected:'',
      attack:''
    };
  },
  methods:{
    handleChange() {
      const filter = {
        type: this.selected,
        attack: this.attack
      };
      this.onFilter(filter);
    }
  }
};
</script>

<style>
</style>