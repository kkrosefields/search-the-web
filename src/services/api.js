
export default {

    getDetails(searchTerm='') {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(searchTerm)}`)
        .then(response => response.json());
    },

    getPokemon(searchTerm='') {
        return fetch(`https://pokeapi.co/api/v2/pokemon-color/${encodeURIComponent(searchTerm)}`)
        .then(response => response.json());
    }
};