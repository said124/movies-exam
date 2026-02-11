import movies from "./movies.js";
let kartochki = document.querySelector('.kartochki')
let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
let selectCategory = document.querySelector('.selectCategory')
let selectSort2 = document.querySelector('.selectSort2')

function generator(massiv) {
    kartochki.textContent = ''
    massiv.forEach(element =>{
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerHTML = `
    <img src="1200x675mf.jpg.png" alt="">
    <h2>${element.Title}</h2>
    <h3>7.4</h3>
    <h3>${element.movie_year}</h3>
    <h3>${element.imdb_rating}</h3>
    <h3 class="category">${element.Categories}</h3>
    <button class="info">More info</button>
    `
    kartochki.appendChild(newCard)
})

}

generator(movies)


btn.addEventListener('click', () => {
    const inputValue = input.value.toLowerCase().trim()

    const filteredMovies = movies.filter(element =>
        element.Title.toLowerCase().includes(inputValue)
        
    )

    console.log(filteredMovies)
    generator(filteredMovies)
})
let sortedMovies = movies
btn.addEventListener('click', ()=>{
    if (selectSort2.value == 'a-z') {
    sortedMovies.sort((a, b)=> a.Title.localeCompare(b.Title))
    } else if (selectSort2.value == 'z-a') {
    sortedMovies.sort((a, b)=> b.Title.localeCompare(a.Title))
    } else if (selectSort2.value == 'top') {
    sortedMovies.sort((a, b)=> parseFloat(a.movie_year)-(b.movie_year))
    } else if (selectSort2.value == 'bottom') {
    sortedMovies.sort((a, b)=> parseFloat(b.movie_year)-(a.movie_year))
    }
    console.log(sortedMovies);
    generator(sortedMovies)
})

selectCategory

btn.addEventListener('click', ()=>{
    const filteredCategory = movies.filter(element =>
        element.Categories.includes(selectCategory.value)
)
    generator(filteredCategory)
})