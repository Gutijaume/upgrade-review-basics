let animalsArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

let findArrayIndex = (array, text) =>{
    for (let i = 0; i < array.length; i++){
        if (array[i] === text){
            console.log(i)
            break
        }
    }
}

findArrayIndex(animalsArray, "Salamandra") // Si modificamos salamandra por otro de los animales funciona correctamente

