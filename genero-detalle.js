let apiKey = "ba0b591fbb4dcbf21e7a279fceca5d5e"
let detalleGenero = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
let detalleSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`


let primeraSection =  document.querySelector(".peliculasAccion")
let segundaSection = document.querySelector(".seriesGenero")
let titulos = document.querySelector(".maintitulos")
let query = location.search
let qsObject= new URLSearchParams(query)
let id = qsObject.get("id")
let name = qsObject.get("name")
let type = qsObject.get("type")


titulos.innerText = name 

if(type == "pelicula"){
    fetch(`${detalleGenero}&with_genres=${id}`)
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (data) {
        console.log('Este es el fetch correcto')
        console.log(data)

        let peliculasdeaccion=''; 
        for (let i=0; i<5; i++){
            console.log(data.results[i]);

            let title = data.results[i].title
            let imagenes = data.results[i].poster_path
            let id = data.results[i].id
            console.log(primeraSection)
            peliculasdeaccion += 
            `<article "item-1">
            <a class = "" href="./detalles-pelis.html?id=${data.results[i].id}">
            <img class= "a" src= "https://image.tmdb.org/t/p/w500/${imagenes}"> </a>
            <p class=" titulo">  ${title}</p>
            
            </article>`

        }
        primeraSection.innerHTML=peliculasdeaccion;

    })
    .catch(function (error) {
        console.log(error);
        return error
    })
} else {
    fetch(`${detalleSeries}&with_genres=${id}`)
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (data) {
          console.log('Este es el fetch correcto')
          console.log(data)
    
        let seriesgenero=''; 
        for (let i=0; i<5; i++){
            console.log(data.results[i]);
    
            let title = data.results[i].name
            let imagenes = data.results[i].poster_path
            let id = data.results[i].id
            console.log(segundaSection)
            seriesgenero += 
            `
            <article >
            <a class = "" href="./detalles-series.html?id=${data.results[i].id}">
            <img class= "a" src= "https://image.tmdb.org/t/p/w500/${imagenes}"></a>
            <p class="titulo">  ${title}</p>
            </article>`
    
        }
        segundaSection.innerHTML=seriesgenero;
    
    })
    .catch(function (error) {
        console.log(error);
        return error
    })
}



