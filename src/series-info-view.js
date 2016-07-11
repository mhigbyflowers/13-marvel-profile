'use strict';
export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

  }
  render() {
    var image = this.element.querySelector('.series-details__cover-img');
     image.src =this.data.data.results[0].thumbnail.path + '.jpg';
     console.log(this.data.data.results[0].thumbnail.path);
  }

}



//       elm.innerHTML = "  ";
//       elm.innerHTML = `
//
//
// <div class="series-details__cover">
// <img class="series-details__cover-img"  src="${stuff.data.results[0].thumbnail.path}.${stuff.data.results[0].thumbnail.extension}" alt="" class="series-details__cover-img">
// </div>
// <h2 class="series-details__title">${stuff.data.results[0].title}</h2>
// <h3 class="series-details__date"> ${stuff.data.results[0].startYear} - ${stuff.data.results[0].endYear}</h3>
// <h2 class="series-details__creators-title">Creators</h2>
// <div class="series-details__creators">
// `;
//
//       // var creatorsItem = document.createElement('p');
//       var creatorsItemParent = document.querySelector('.series-details__creators');
//
//       // creatorsItem.classList = "series-details__creators-item";
//       for (var i = 0; i < stuff.data.results[0].creators.items.length; i++) {
//         console.log(stuff.data.results[0].creators.items[i].name);
//
//         var elm = document.createElement('p');
//         elm.classList = "series-details__creators-item";
//         elm.innerText = stuff.data.results[0].creators.items[i].name;
//         creatorsItemParent.appendChild(elm);
//
//       }
//
//     });
