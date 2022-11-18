let apiKey = "ba0b591fbb4dcbf21e7a279fceca5d5e"
let detalle = `https://api.themoviedb.org/3/tv/${serie_id}?api_key=${apiKey}&language=en-US`
let qsObject= new URLSearchParams(location.search)
let serie_id = qsObject.get("id")

let detalleSerie = `https://api.themoviedb.org/3/tv/${serie_id}?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US`
fetch(detalleSerie)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      console.log(data.title)})

      .catch(function (error) {
        console.log(error);
        return error
    })
let x = `https://api.themoviedb.org/3/tv/${serie_id}/watch/providers?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e`

fetch(x)
    .then(function(response){
        return response.json();
    })
    .then(function(x_data){
        console.log(x_data);
        let detalleSeriesSection = document.getElementById("detalles")
        let serieContenido = ""
        let imgPrinc = `https://image.tmdb.org/t/p/original`

        serieContenido += 
            `<h2 class="tituloPeliculaDetalle">${data.name}</h2>
              <img class="" src="https://image.tmdb.org/t/p/original${data.poster_path}"/>
              <h4 class=""> ${data.overview}</h4>
              <h4 class=""><u>Fecha de estreno:</u> ${data.first_air_date}</h4>
              <h4 class=""><u>Calificación:</u> ${data.vote_average}</h4>
              <h4 class=""><u>Género:</u>`

              for (let i = 0; i< data.genres.length; i++){
                const elemento = data.genres[i];
                serieContenido += `${elemento.name}`
              }})
.catch(function (error) {
    console.log(error);
    return error
})