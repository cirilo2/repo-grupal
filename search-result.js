let endpoint = "https://api.themoviedb.org/3/search/multi"
let apiKey = "?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e"

let movie = location.search
console.log(location)
let objMovie = new URLSearchParams(movie)
let keyword = objMovie.get("q")

fetch(`${endpoint}${apiKey}&query=${keyword}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data);
    let personajes = data.results
    let a = document.querySelector(".characterList")
    let characters = ""

    for (i = 0 ; i < personajes.length ; i ++){
        characters += `<article>
        <img src= ${personajes[i].image} alt="" />
        <a href="./detalle.html?id=${personajes[i].id}" ><p>Name:${personajes[i].name}</p></a>
        <p>Status: ${personajes[i].status} </p>
        </article>`
    }
    a.innerHTML = characters;

})
.catch(function(error){
    console.log("Error:" + error);
})