
export default function lookUp(){
  fetch(`https://gateway.marvel.com:443/v1/public/series/9856?apikey=8be059c834a0a9f027edb55cfd615ec6`)
    .then((res) => res.json())
    .then((data) => {
var elm = document.querySelector('.series-details');
console.log(data);

elm.innerHtml=`


<div class="series-details__cover">
<img class="series-details__cover-img"  src="" alt="" class="series-details__cover-img">
</div>
<h2 class="series-details__title">Spider-Girl (2010-2011)</h2>
<h3 class="series-details__date"> 2010 - 2011</h3>
<div class="series-details__creators">
<h2 class="series-details__creators-title">Creators</h2>
<p class="series-details__creators-item">Tom</p>
<p class="series-details__creators-item">Mike</p>
<p class="series-details__creators-item">Clayton</p>
<p class="series-details__creators-item">Barry</p>
<p class="series-details__creators-item">Jelena</p>
<p class="series-details__creators-item">Paul</p>

`
    });
}
