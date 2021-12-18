const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]


// Tras no conseguir sacarlo, he copiado ele ejercicio de las clases:

// let categoriesOfMovies = []
// for (let key of movies){
//     if (key.categories !== undefined){
//         categoriesOfMovies.push(key.categories)
//     }
// }
// let arrayCategories = categoriesOfMovies.flat()

let movieCategories = []

for (let key of movies){
    for (let category of key.categories){
        if(!movieCategories.includes(category)){
            movieCategories.push(category)
        }
    }
}

console.log(movieCategories)