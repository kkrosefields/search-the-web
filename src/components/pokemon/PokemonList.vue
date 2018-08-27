<template>
    <li> 
        <router-link :to="`/pokemon/${pokemon.id}`">
        {{pokemonList.name}} 
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        pokemonList: Object
    }

};
</script>

<style>

</style>
