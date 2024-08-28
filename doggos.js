/*
const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';

function addDoggo() {
  // show loading spinner
  fetch(BREEDS_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const img = document.createElement('img');
    img.src = data.message;
    img.alt = 'Cute doggo';

    document.querySelector('.doggos').appendChild(img);

    // stop showing loading spinner
  })
}
  // fetch returns promises 
  // promises are objects that represent a future value
  // fetch is AJAX
document.querySelector('.add-doggo').addEventListener('click', addDoggo);
*/

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //console.log(data);
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    //console.log(Object.keys(data.message));

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  })

  select.addEventListener('change', function(event){
    // console.log(event.target.value);
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

    getDoggo(url);
  })

 

  const img = document.querySelector('.dog-img');
  const spinner = document.querySelector('.spinner');

  function getDoggo(url) {
    spinner.classList.add('show');
    img.classList.remove('show');

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        console.log(data);
        img.src = data.message;
        //spinner.classList.remove('show');
        //img.classList.add('show');
      })
  }

  img.addEventListener("load", function(){
    spinner.classList.remove('show');
    img.classList.add('show');
  })