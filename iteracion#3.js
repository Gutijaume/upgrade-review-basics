const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// let favSounds = (data) => {
//   let repeatedSounds = {};
//   for (let user of data) {
//     for (let sound in user.favoritesSounds) {
//       if (repeatedSounds[sound] === undefined) {
//         repeatedSounds[sound] = 1;
//       } else {
//         repeatedSounds[sound]++;
//       }
//     }
//   } return repeatedSounds
// };

// let repeatedFavoriteSounds = favSounds(users)
// console.log(repeatedFavoriteSounds)
let favSounds = (data) => {
    let repeatedSounds = {};
    for (let user of data) {
      for (let sound in user.favoritesSounds) {
        if (sound === waves) {
         repeatedSounds++;
        }
      }
    } return repeatedSounds
  };
  
  let repeatedFavoriteSounds = favSounds(users)
  console.log(repeatedFavoriteSounds)