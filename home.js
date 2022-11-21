let apiKey = "ba0b591fbb4dcbf21e7a279fceca5d5e"
let popular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let seriesPop = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let seriesVal = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`

let primeraSection = document.querySelector(".peliculas-mas-valoradas");
let segundaSection = document.querySelector(".series-mas-populares");
let terceraSection = document.querySelector(".series-mas-valoradas");


fetch(popular)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
      console.log(data)

    let pelismaspop=''; 
    for (let i=0; i<5; i++){
        console.log(data.results[i]);

        let title = data.results[i].title
        let imagenes = data.results[i].poster_path
        let id = data.results[i].id
        let fecha = data.results[i].release_date
        pelismaspop += 
        `<article class="item-1">
        <a class = "titulo" href="./detalles-pelis.html?id=${data.results[i].id}">
        <img class= "a" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
        <p > Titulo: ${title}</p>
        <p  >Fecha : ${fecha}</p>
        </a>
        </article>`

    }
    primeraSection.innerHTML=pelismaspop;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

//

fetch(seriesPop)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
      console.log(data)

    let seriesmaspop=''; 
    for (let i=0; i<5; i++){
        console.log(data.results[i]);

        let title = data.results[i].name
        let imagenes = data.results[i].poster_path
        let id = data.results[i].id
        let fecha = data.results[i].first_air_date
        seriesmaspop += 
        `<article class="item-1">
         <a class = "titulo" href="./detalles-series.html?id=${id}">
        <img class= "a" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
        <p  > Titulo: ${title}</p>
        <p  >Fecha : ${fecha}</p>
        </a>
        </article>`

    }
    segundaSection.innerHTML=seriesmaspop;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

//

fetch(seriesVal)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
      console.log(data)

    let seriesmasval=''; 
    for (let i=0; i<5; i++){
        console.log(data.results[i]);

        let title = data.results[i].name
        let imagenes = data.results[i].poster_path
        let id = data.results[i].id
        let fecha = data.results[i].first_air_date
        seriesmasval += 
        `<article class="item-1">
         <a class = "titulo" href="./detalles-series.html?id=${id}">
        <img class= "a" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
        <p  > Titulo: ${title}</p>
        <p  >Fecha : ${fecha}</p>
        </a>
        </article>`

    }
    terceraSection.innerHTML=seriesmasval;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

