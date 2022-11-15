let endpoint = "https://api.themoviedb.org/3/movie/popular"
let apiKey = "?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e"

window.addEventListener("load",function(){
document.querySelector(".peliculas")
let info = ""
inicioPelis(listContainer, info)
}) 



function inicioPelis (container,infoToPrint)
    fetch("https://api.themoviedb.org/3/movie/popular")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        for(let i = 0; i<data.length ; i++){
            infoToPrint += 
    
        }
        container.innerHTML = infoToPrint
    })
    .catch(function(error){
        console.log(error)
    })
