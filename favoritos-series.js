let endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let apiKey = "ba0b591fbb4dcbf21e7a279fceca5d5e"
let container = document.querySelector('.favs-container')
let listContainer = document.querySelector('.list-container')


window.addEventListener('load', function(){
    let favs = getFavsStorage()
    if(favs.length == 0){
        container.innerHTML =
        <li>
            <h4>NO HAY FAVORITOS</h4>
        </li>
    } else {
        listContainer.innerHTML += `
        <h2>
            Tienes ${favs.length} favoritos
        <h2/>
        `
        getAllFavsAndPrint()
    }
})

function getFavsStorage(){
    let storage = localStorage.getItem('favoritos')

    if(storage !== null && storage !== undefined){
        return JSON.parse(storage)
    } else {
        retrun ['']  
    }
}

function getAllFavsAndPrint(arrFavs){
    for(let i = 0; i < arrFavs.lenght ; i++)
    fetch(`"aca va el link"${arrFavs[i].id}`)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        container.innerHTML += `
        <li>
            <article>
                <img class= 'item1' src='${data.image}'> </img>
                <a href=detalle-serie?id=${data.id}'> <h5> ${data.title}</h5> </a>
            </article>
        </li>`
    })
    .catch(function(error){
        console.log(error)
    })
}



