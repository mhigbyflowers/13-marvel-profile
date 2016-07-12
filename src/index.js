'use strict';
import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';
import ComicListView from 'comic-list-view';

export default function(element) {


  fetch(`https://gateway.marvel.com:443/v1/public/series/9856?apikey=8be059c834a0a9f027edb55cfd615ec6`)
    .then((res) => res.json())
    .then((data) => {
      var x = new SeriesInfoView(element, data);
      x.render();
    });


    fetch(`https://gateway.marvel.com:443/v1/public/series/9856?apikey=8be059c834a0a9f027edb55cfd615ec6`)
      .then((res) => res.json())
      .then((data) => {
        var y = new CharacterListView(element, data);
        y.render();
      });
      fetch(`https://gateway.marvel.com:443/v1/public/series/9856?apikey=8be059c834a0a9f027edb55cfd615ec6`)
        .then((res) => res.json())
        .then((data) => {
          var z = new ComicListView(element, data);
          z.render();
        });




}
