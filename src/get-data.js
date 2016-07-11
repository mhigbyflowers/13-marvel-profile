
export default function lookUp(){
  fetch(`https://gateway.marvel.com:443/v1/public/series/9856?apikey=8be059c834a0a9f027edb55cfd615ec6`)
    .then((res) => res.json())
    .then((stuff) => {
var elm = document.querySelector('.series-details');

console.log(stuff.data.results[0].creators.items);
elm.innerHTML= "  ";
elm.innerHTML=`


<div class="series-details__cover">
<img class="series-details__cover-img"  src="${stuff.data.results[0].thumbnail.path}.${stuff.data.results[0].thumbnail.extension}" alt="" class="series-details__cover-img">
</div>
<h2 class="series-details__title">${stuff.data.results[0].title}</h2>
<h3 class="series-details__date"> ${stuff.data.results[0].startYear} - ${stuff.data.results[0].endYear}</h3>
<h2 class="series-details__creators-title">Creators</h2>
<div class="series-details__creators">
`;

for (var i = 0; i < stuff.data.results[0].creators.items.length; i++) {
console.log(stuff.data.results[0].creators.items[i].name);
}

// <p class="series-details__creators-item">Tom</p>
// <p class="series-details__creators-item">Mike</p>
// <p class="series-details__creators-item">Clayton</p>
// <p class="series-details__creators-item">Barry</p>
// <p class="series-details__creators-item">Jelena</p>
// <p class="series-details__creators-item">Paul</p>

    });
    console.log(elm);
}
