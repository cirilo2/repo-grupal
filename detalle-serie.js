let apiKey = "ba0b591fbb4dcbf21e7a279fceca5d5e"
let query = location.search
let qsObject= new URLSearchParams(query)
let detail_id = qsObject.get("id")

let detallSeries = `https://api.themoviedb.org/3/tv/${detail_id}?api_key=${apiKey}&language=en-US`

fetch(detallSeries)
  .then(function(response){
    return response.json();
})

  .then(function(data){
  console.log(data);
  
  let section = document.querySelector(".detalleSerie")

  section.innerHTML +=
  
  `<div class="cont">
        <h3 class="tit1">${data.original_name}</h3>
        <br>
        <img class="pelicula-principal" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"/>
        <br>
        <br>
        <article class="clasificacion">
        <h1 class="tit">Sinopsis:</h1> ${data.overview}
        <h1 class="tit">Valoracion:</h1> ${data.vote_average}
        <h1 class="tit">Fecha de Estreno:</h1> ${data.first_air_date}
        <h1 class="tit ">Genero:</h1><ul class=generos>
                  
        
        </article>
    </div>`

    
    let generosDetalle = document.querySelector(".generos")
    
    let generosDetallesCont=''

    for (let i=0; i<data.genres.length; i++){
        generosDetallesCont +=


    `<li class="genero">-${data.genres[i].name}</li>`
    }

    
    generosDetalle.innerHTML += generosDetallesCont
})
	.catch(function(error){
	console.log(error);
})
