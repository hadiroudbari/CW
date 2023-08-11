// part 01

// const playlist = [
//   "Court and Spark - Joni Mitchell",
//   "Big Yellow Taxi - Joni Mitchell",
//   "Court and Spark - Joni Mitchell",
// ];

// function removeDuplicates(list) {
//   const uniqueArray = [...new Set(list)];
//   return uniqueArray;
// }
// console.log(removeDuplicates(playlist));

// part 02
// const playlist = [
//   "The Fashion Show - Grace Jones",
//   "Dr. Funkenstein - Parliament",
// ];

// //=> true

// function hasTrack(list, track) {
//   return list.includes(track);
// }
// console.log(hasTrack(playlist, "Dr. Funkenstein - Parliament"));
// console.log(hasTrack(playlist, "Walking in the Rain - Grace Jones"));

// part 03
// const playlist = [
//   "The Fashion Show - Grace Jones",
//   "Dr. Funkenstein - Parliament",
// ];

// const newTrack = "shadmehr";

// function addTrak(list, track) {
//   const newList = [...list, track];
//   return newList;
// }
// console.log(addTrak(playlist, newTrack));

// part04
// const playlist = [
//   "The Fashion Show - Grace Jones",
//   "Dr. Funkenstein - Parliament",
//   "shadmehr",
// ];
// const delTrack = "shadmehr";
// function deleteTrack(list, track) {
//   const newTrackArray = list.filter((track) => track !== delTrack);
//   return newTrackArray;
// }

// console.log(deleteTrack(playlist, delTrack));

// part05

const playlist = [
  "All Mine - Portishead",
  "Sight to Behold - Devendra Banhart",
  "Sour Times - Portishead",
];

listArtists(playlist);

function listArtists(list) {
  let artists = [];
  list.forEach((track) => {
    const artist = track.split(" - ")[1];
    artists.push(artist);
  });
  const newArtists = [...new Set(artists)];
  return newArtists;
}

console.log(listArtists(playlist));
