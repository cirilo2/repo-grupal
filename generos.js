let apiKey = "ba0b591fbb4dcbf21e7a279fceca5d5e"
let generos = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
let generos2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`


let section1 = document.querySelector(".generos")
let section2 = document.querySelector(".generos2")
fetch(generos)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
      console.log(data);

      let generosPelis = ""

      for (let i=0; i<8;i++){
        generosPelis += 
      
        ` <a class="generos4" href="detalle-genero.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=pelicula"> <h1  >- ${data.genres[i].name}</h1> </a> `
      }

      section1.innerHTML = generosPelis;
      return data

    })
    .catch(function (error) {
        console.log(error);
        return error
    })

///

fetch(generos2)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
      console.log(data);
      let generoSeries = ""

       for (let i=0; i<8;i++){
        generoSeries += 
        ` <a class="generos4" href="detalle-genero.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=tv"> <h1  >- ${data.genres[i].name}</h1> </a> `
       }
       section2.innerHTML = generoSeries;
       return data
    })
    .catch(function (error) {
        console.log(error);
        return error
    })


    

