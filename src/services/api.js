
export default {
    getPokemon(searchTerm='') {
    
        return fetch(`https://pokeapi.co/api/v2/pokemon?search=${encodeURIComponent(searchTerm)}`)

        .then(response => response.json());
    }
};