<template>
    <li> 
        <router-link :to="`pokemon/${pokemonList.name}`">
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