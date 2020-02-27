

$(function () {
    $('form').on('submit', function (evento) {
        evento.preventDefault(); // evita que se mande solo
        var dataPoints = [];

        //$('ul').html(``);
        var id = $("#pokeId").val();
        console.log(id);
        $.get(`http://pokeapi.co/api/v2/pokemon/${id}`, function (pokemon) {
            console.log(pokemon);
            var pokeName = pokemon.species.name;
            console.log(pokeName);
         document.getElementById("nombrePokemon").innerHTML = `Este pokemon es el numero ${pokemon.id} y se llama ${pokemon.species.name}`;
        document.getElementById("spritePokemon").innerHTML = `<img src="${pokemon.sprites.front_default}">`;
        //document.getElementById("nombrePokemon").innerHTML = `Este pokemon se llama ${pokemon.species.name}`;
        //console.log(pokemon.stats[0].base_stat);

        var hp = pokemon.stats[5].base_stat;
        var atk = pokemon.stats[4].base_stat;
        var def = pokemon.stats[3].base_stat;
        var sat = pokemon.stats[2].base_stat;
        var sdf = pokemon.stats[1].base_stat;
        var spd = pokemon.stats[0].base_stat;
        console.log(hp);
        document.getElementById("statsPokemon").innerHTML = `
        HP = ${hp} <br>
        Ataque= ${atk} <br>
        Defensa= ${def} <br>
        Ataque Especial = ${sat} <br>
        Defensa Especial = ${sdf} <br>
        Velocidad = ${spd} <br>
        `;
        
        //chart.datasets.label(obj) / data(array)
        var pokeStats = [];
        pokeStats.push(hp, atk, def, sat, sdf, spd);
        console.log(pokeStats);
        //chart.datasets.data.push(hp, atk, def, sat, sdf, spd);
        //console.log(chart.datasets.data);
        //chart.datasets.label.push

        
        var ctx = document.getElementById('chart');

        var chart = new Chart(ctx, {
        type: 'radar',
            data: {
                    datasets: [{
                        label: pokeName, // pokeName
                        data: pokeStats // pokeStats
                    }],
            labels: ['HP', 'Ataque', 'Defensa', 'At. Especial', 'Def. Especial', 'Velocidad']
            },
        options: {

        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 250
            }
        }

}
});


        });
    });
});



/*

//otras formas de partirlo que no utilicé

$.ajax({
    url: "http://pokeapi.co/api/v2/pokemon/";
    
    success: function (response) {
        $.each (response, function (indexInArray,
            valueOfElement) {
                console.log(indexInArray);
                console.log(valueOfElement.name);
            });
    }
});
  $(function(){



    $('form').on('submit', function(evento) {
        evento.preventDefault();
        var valor_numero = $("#pokeId").val();
        console.log(valor_numero);
        //$(".pokeInfo").empty();
        //$(".pStats".empty();
        console.log(valor_numero);
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${valor_numero}`,
        }).done(function ( data ) {
            console.log ("Sample of data", data);
            $(".pokeInfo").append(`${data.name}`);
        });
    });
}

); 
*/