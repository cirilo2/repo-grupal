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
    let favoritos = getStorage()
    let estaLaSerie = favoritos.includes(data.id)
    let textoInicial = ''

    if(estaLaSerie){  //solo para cuando esta renderizado
      textoInicial = 'Sacar de Favoritos'   
    }else{
      textoInicial = 'Agregar a Favoritos'
    }

  

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
        <br>
        <h1 class="tit">Valoracion:</h1> ${data.vote_average}
        <br>
        <h1 class="tit">Fecha de Estreno:</h1> ${data.first_air_date}
        <br>
        <h1 class="tit ">Genero:</h1><ul class=generos>
        <button class='btnfav'>${textoInicial}</button>
        
        </article>
    </div>`
    let btnFavs = document.querySelector('.btnfav')

    btnFavs.addEventListener('click',function(){
      let favoritos = getStorage()                    //storage
      let estaLaSerie = favoritos.includes(data.id)   //validacion

      if(estaLaSerie){
        removeFavorite(data.id,favoritos)
        e.target.innerHTML = 'Agregar de Favoritos'
      }else{
        addFavorite(data.id,favoritos)
        e.target.innerHTML = 'Sacar a Favoritos'
      }

    })
    
    let generosDetalle = document.querySelector(".generos")
    
    let generosDetallesCont=''

    for (let i=0; i<data.genres.length; i++){
        generosDetallesCont +=

      
    `<a class="generos4" href="detalle-genero.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=tv"><li class="genero">${data.genres[i].name}</li>`
      

    
    }

    
    generosDetalle.innerHTML += generosDetallesCont
})
	.catch(function(error){
	console.log(error);
})

function getStorage(){
  let storage = localStorage.getItem('favoritos-series')

  if(storage!== null && storage !== undefined){
    return JSON.parse(storage)
  } else{
    return []
  }
}

function addFavorite(id, storage){
  storage.push(id)
  let storageToString = JSON.stringify(storage)
  localStorage.setItem('favoritos-series',storageToString)
}

function removeFavorite(id, storage){
  let position = storage.indexOf(id)
  storage.splice(position,1)
  let storageToString = JSON.stringify(storage)
  localStorage.setItem('favoritos-series',storageToString)
}


let provedorSeries = `https://api.themoviedb.org/3/tv/${detail_id}/watch/providers?api_key=${apiKey}`

fetch (provedorSeries)
.then (function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)

    let provedoresSection = document.querySelector(".provedores")
    let provedores = ""
    for (i=0; i< data.results.US.flatrate.length; i++){
        provedores += 
        `
        <img class= "plataforma" src="https://image.tmdb.org/t/p/w500/${data.results.US.flatrate[i].logo_path}" alt='${data.results.US.flatrate[i].provider_name}' />
        `
    }
    provedoresSection.innerHTML = provedores
})
.catch(function(error){
    console.log(error)
})


let review = `https://api.themoviedb.org/3/tv/${detail_id}/reviews?api_key=${apiKey}&language=en-US&page=1`
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
let trailer = `https://api.themoviedb.org/3/tv/${detail_id}/videos?api_key=${apiKey}&language=en-US`
            
fetch (trailer)
    .then (function(resp){
        return resp.json()
})
    .then (function(data){
    console.log(data)
        for (i=0; i< 1;i++){
        trailersCont +=
         `         
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.results[i].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    }
    sectionTrailers.innerHTML = trailersCont
})
 .catch (function(error){
    console.log(error)
 })




let boton = document.querySelector('.botonRecom')

boton.addEventListener('click', function(){
  let img = `https://image.tmdb.org/t/p/original`
  let recomendacionesSeriesSection = document.getElementById("recomendacionesSerie")
  if (boton.innerText == "Ver Recomendaciones"){

    let recomendaciones = `https://api.themoviedb.org/3/tv/${detail_id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
    fetch(recomendaciones)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      
      let contenido = ""

      for (let i = 0; i < 5; i++){
            
        contenido += 
        `
          <a class = "" href="./detalles-series.html?id=${data.results[i].id}">   
          <img src="${img + data.results[i].poster_path}" class="fotoSerie"/>   
          </a>
        `
      }

      recomendacionesSeriesSection.innerHTML = contenido

    })
    .catch(function(error){
        console.log(error);
    })

    this.innerText = 'Ocultar Recomendaciones';
  }
  else{


    let contenido = ""

    recomendacionesSeriesSection.innerHTML = contenido
  
    this.innerText = 'Ver Recomendaciones';

  }
})