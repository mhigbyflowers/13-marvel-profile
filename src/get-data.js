import SeriesInfo from 'series-info-view';
export default function getData() {
      fetch(`https://gateway.marvel.com:443/v1/public/series/9856?apikey=8be059c834a0a9f027edb55cfd615ec6`)
        .then((res) => res.json())
        .then((stuff) => {

          console.log(stuff);


});
}
