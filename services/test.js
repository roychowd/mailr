// write a function to retrieve json
// make a ajax request
// use the 'fetch' function
//https://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   fetch("https://rallycoding.herokuapp.com/api/music_albums")
//     .then(res => res.json())
//     .then(json => console.log(json));
// }
// or const fetchAlbums = async () => { code }
async function fetchAlbums() {
    const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums")
    const json = await res.json();
    console.log(json);
}

fetchAlbums();
console.log("SDA")