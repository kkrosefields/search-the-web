<template>
  <section>
    <h2>Welcome to Pokemon!</h2>
    <router-link to="/pokemon">search pokemon</router-link>
  </section>
</template>

<script>
export default {
props: {
    selected: Object,
    onSelect: Function
  },
  methods: {
    handleClick(){
      this.onSelect(this.pokemonCard);
    }
  }
};
</script>