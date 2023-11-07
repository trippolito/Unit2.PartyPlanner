const h2 = document.createElement('h2');
const main = document.querySelector('main');

const getAllArtists = async () => {
  h2.innerText = 'Artists';
  main.appendChild(h2);
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/artists');
  const artistsInfo = await response.json();
  for (let i = 0; i < artistsInfo.data.length; i++) {
    console.log(artistsInfo.data[i].name);
  }
}
getAllArtists();


// for (let i = 0; i < artistsInfo.data.length; i++) {
//   console.log(artistsInfo.data[i].name);
// }