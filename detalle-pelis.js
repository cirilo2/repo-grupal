let apiKey = "ba0b591fbb4dcbf21e7a279fceca5d5e"
let query = location.search
let qsObject= new URLSearchParams(query)
let movie_id = qsObject.get("id")

let url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`

fetch(url)
  .then(function(response){
    return response.json();
})

  .then(function(data){
  console.log(data);
  
  let sectionPeli = document.querySelector(".detallePelis")

  sectionPeli.innerHTML += 
      
  `<div class="cont">
        <h3 class="tit1">${data.title}</h3>
        <br>
        <img class="pelicula-principal" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"/>
        <br>
        <br>
        <article class="clasificacion">
        <h1 class="tit">Sinopsis:</h1> ${data.overview}
        <h1 class="tit">Duracion:</h1> ${data.runtime} minutos
        <h1 class="tit">Valoracion:</h1> ${data.vote_average}
        <h1 class="tit">Fecha de Estreno:</h1> ${data.release_date}
        <h1 class="tit ">Generos:</h1>
          <ul class=generos>
            
          </ul>
                  
        
        </article>
        </div>`
        let generosDetalle = document.querySelector(".generos")
    
        let generosDetallesCont=''
    
        for (let i=0; i<data.genres.length; i++){
            generosDetallesCont +=
    
            `<a class="generos4" href="detalle-genero.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=pelicula"> <li class="genero">${data.genres[i].name}</li>`
          
    
        
        }
    
        
        generosDetalle.innerHTML += generosDetallesCont


})
.catch(function(error){
console.log(error);
})




fetch (`https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${apiKey}`)
.then (function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    
    let pelisSection = document.querySelector(".provedores")
    let pelisProv = ""
    for (i=0; i< data.results.US.flatrate.length; i++ ){
        pelisProv +=
         `
        <img class="plataforma" src="https://image.tmdb.org/t/p/w500/${data.results.US.flatrate[i].logo_path}" alt='${data.results.US.flatrate[i].provider_name}' />
        `
   
    }
    pelisSection.innerHTML = pelisProv

})
.catch(function(error){
    console.log(error)
})


let review = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${apiKey}&language=en-US&page=1`
    fetch(review)
      .then(function(response){
        return response.json();
      })
      .then(function(review_data){
        console.log(review_data);
        if(review_data.results.length > 0){


          let reviewSerieSection = document.querySelector(".reviews")
          let reviewSerieContent = ``

          reviewSerieContent += 
              `<h4 class="descrip"><u>${review_data.results[0].author}:</u> ${review_data.results[0].content}}</h4>
              `
            
              reviewSerieSection.innerHTML = reviewSerieContent   
        }
      })

    
let sectionTrailers = document.querySelector(".trailers")
let trailersCont = ""
let trailer = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}&language=en-US`
      
    fetch (trailer)
      .then (function(resp){
          return resp.json()
      })
      .then (function(data){
          console.log(data)
          for (i=0; i< 1;i++){
              trailersCont += `
             
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.results[i].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              `
          }
          sectionTrailers.innerHTML = trailersCont
      })
      .catch (function(error){
          console.log(error)
      })
      
      