const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const endpoint= 'https://github.com/sab99r/Indian-States-And-Districts/blob/master/states-and-districts.json';
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));


function findMatches(wordToWatch, cities) {
    return cities.filter(place => {
        //here we need to figure out if the city or state matches what was searched.
        const regex = new RegExp(wordToWatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);


    })
}
let matchArray;
function displayMatches(){
    matchArray = findMatches(this.value,cities);
    
    const html = matchArray.map(place => {
        return ` <li>
        <span class='name'>${place.city}, ${place.state}</span>
        <span class='population'>${place.population}</span>
         </li>` ;
       
    }).join('');
    suggestions.innerHTML=html;

}


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);