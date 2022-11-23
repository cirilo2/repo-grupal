let query = location.search
let QSobject = new URLSearchParams(query)
let search = QSobject.get("search")
console.log(search)

let busqueda = document.querySelector(".resultadosBusqueda")
busqueda.innerHTML += `Resultados para ${search}:`

let resultPeli = `https://api.themoviedb.org/3/search/movie?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1&include_adult=false&query=${search}`

fetch(resultPeli)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let resultados = document.querySelector(".resultadosBusqueda");
        let peliculasBuscadas = document.querySelector(".peliculasBuscadas")
        
        
        if (data.results.length==0){
            resultados.innerText = `No hubo resultados para su busqueda`
        } 

        
        else{
            for(i=0; i<5; i++) {
        
            peliculasBuscadas.innerHTML += 
            
            
            `
            <article class="item-1">
            <a class = "titulo" href="./detalles-pelis.html?id=${data.results[i].id}">
            <img class="a" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
            <p class = "margen">${data.results[i].original_title}</p>
            </a>
            </article>
            `
        


        
            }}
    })
    .catch(function(error){
        console.log(error)
    })

let resultSerie = `https://api.themoviedb.org/3/search/tv?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1&include_adult=false&query=${search}`

fetch(resultSerie)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let resultados = document.querySelector(".resultadosBusqueda");
        let serieBbuscadas = document.querySelector(".peliculasBuscadas")
        
        
        if (data.results.length==0){
            resultados.innerText = `No hubo resultados para su busqueda`
        } 

        else{
            for(i=0; i<5; i++) {
            seriesBuscadas.innerHTML += 
            
            `
            <article class="item-1">
            <a class = "titulo" href="./detalles-series.html?id=${data.results[i].id}">
            <img class="a" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
            <p class = "margen">${data.results[i].original_name}</p>
            </a>
            </article>
            `
          
        


            }}
    })
    .catch(function(error){
        console.log(error)
    })