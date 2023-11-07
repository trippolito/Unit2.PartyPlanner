const h2 = document.createElement('h2');
const main = document.querySelector('main');
const ol = document.createElement('ol');
const nameArtist = document.createElement('p');
const description = document.createElement('p');
const image = document.createElement('img');


const getAllArtists = async () => {
  h2.innerText = 'Artists';
  main.appendChild(h2);
  main.appendChild(ol);
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/artists');
  const artistsInfo = await response.json();

  for (let i = 0; i < artistsInfo.data.length; i++) {
    const li = document.createElement('li');
    li.innerText = artistsInfo.data[i].name;
    li.addEventListener('click', () => {
      main.innerHTML = '';
      nameArtist.innerText = artistsInfo.data[i].name;
      main.appendChild(nameArtist);

      // main.innerHTML = '';
      console.log(artistsInfo.data[i]);
    });
    ol.appendChild(li); //maybe goes up in for loop?
  }
}






getAllArtists();