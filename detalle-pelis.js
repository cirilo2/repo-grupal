let qsObject = new URLSearchParams(location.search)
let movie_id = qsObject.get("id")

let movie = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US`



fetch(movie)
.then(function(response){
  return response.json();
})
.then(function(data){
    console.log(data);
      
    let detallePelisSection = document.getElementById("detallePelis")
    let detallePelis = ""
    

      
      detallePelis += 
      `<h2 class="tit">${data.name}</h2>
      <img class="pelicula-principal" src="https://image.tmdb.org/t/p/original${data.poster_path}"/>
      <h4 class="descrip"> ${data.overview}</h4>
      <h4 class="calificacion"><u>Fecha de estreno:</u> ${data.first_air_date}</h4>
      <h4 class="calificacion"><u>Calificación:</u> ${data.vote_average}</h4>
      <h4 class="generos"><u>Género: ${data.genres}</u> </h4>`
          
    
    
    
    
    detallePelisSection.innerHTML = detallePelis
    })
        


.catch(function(error){
    console.log(error);
      
})
      