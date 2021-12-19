let futvitoPlayers = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

let swap = (array, param1, param2) => {
  for (let i = 0; i < array.length; i++) {
    let savedName = array[param1]
    if (array[i] === array[param1] ) {
      array[i] = array[param2];
      array[param2] = savedName}
    
  } console.log(array)
};

swap(futvitoPlayers, 2, 3);

