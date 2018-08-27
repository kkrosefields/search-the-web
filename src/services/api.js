
export default {
    getPokemon(searchTerm='') {
    
        return fetch(`https://pokeapi.co/api/v2/pokemon?seach=${encodeURIComponent(searchTerm)}`)

        .then(response => response.json());
    }
};