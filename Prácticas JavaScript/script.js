const btnBuscar = document.getElementById("btn-buscador"); //botón pokebola para buscar
const PokeName = document.getElementById("PokeName"); //campo escrito para buscar Pókemon
const nombreEnPantalla = document.getElementById("nombre-en-pantalla"); //cambia nombre Pokémon en pantalla
const pokeImg = document.getElementById("pokeImg"); //imagen de Pokémon
const infoPokemon = document.getElementById("info-pokémon"); //Información de Pokémon
// const PokeStats = document.getElementById("stat-pokémon");
const pokeTipo = document.getElementById("pokemon-tipo"); //Tipo de Pokemon
const pokeID = document.getElementById("pokemon-ID");  //número ID Pokémon

const PokemonData = (Pokémon) => {    
    // let PokeName = PokeName.value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${Pokémon}`)
    .then((response) => response.json())
    // const url = `https://pokeapi.co/api/v2/pokemon/${Pokémon}`;
    // fetch(url).then((res) => {
    // return res.json();
    
    /*if(res.status != "200"){
            console.log(res);
            pokeImage("./sad-pikachu.gif");
        }
        else{
            
        }
        //console.log(res);
        
    })*/
    .then((data) => {

        //búsqueda por ID
        let id = ('00' + data.id).slice(-3);
        pokeImg.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
        nombreEnPantalla.innerHTML = data.name;
        pokeTipo.innerHTML = data.types[0].type.name;
        pokeID.innerHTML = `#${data.id}`;
        infoPokemon.innerHTML = `Altura: ${data.height * 10}cm Peso:${data.weight / 10}kg 
                                HP:${data.stats[0].base_stat} Ataque:${data.stats[1].base_stat} 
                                Defensa: ${data.stats[2].base_stat} Ataque-Esp:${data.stats[3].base_stat}
                                Def-Esp: ${data.stats[4].base_stat} Velocidad:${data.stats[5].base_stat}`;
        PokeName.value = '';
    });
}

PokeName.addEventListener('keydown',(event) => event.key === 'Enter' && btnBuscar.click());
btnBuscar.addEventListener('click', () => PokemonData(PokeName.value));
