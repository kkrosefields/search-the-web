<template>
<div class="filter-sort">
    <select v-model="sort" v-on:change="handleChange">
        <option value="pokemon">Sort By Name</option>
        <option value="Type_1">Sort By `Type</option>
        <option value="species_id">Species</option>
    </select>
     <label>
      <input type="radio" value="1"
       name="direction" v-model="direction"
       v-on:change="handleChange"> asc
    </label>
    <label>
      <input type="radio" value="-1" 
      name="direction" v-model="direction"
      v-on:change="handleChange"> desc
    </label>

</div>
</template>

<script>
export default {
  props: {
    onSort: Function
  },
  data() {
    return {
      sort: 'pokemon',
      direction: 1
    };
  },
  methods: {
    handleChange() {
      this.onSort({
        sort: this.sort, 
        direction: this.direction
      });
    }
  }
};
</script>

<style>

</style>