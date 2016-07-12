'use strict';
export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;


  }
  render() {

    var image = this.element.querySelector('.series-details__cover-img');
    image.src = this.data.data.results[0].thumbnail.path + '.jpg';

    var title = this.element.querySelector('.series-details__title');
    title.innerText = this.data.data.results[0].title;

    var date = this.element.querySelector('.series-details__date');
    date.innerText = `${this.data.data.results[0].startYear} - ${this.data.data.results[0].endYear}`;
    console.log(this.data.data.results[0].startYear);



    var creatorsList = this.element.querySelector('.series-details__creators');
    creatorsList.innerHTML = ' ';
    for (var i = 0; i < this.data.data.results[0].creators.items.length; i++) {
      var item = document.createElement('p');
      item.classList = "series-details__creators-item";
      item.innerText = this.data.data.results[0].creators.items[i].name;
      creatorsList.appendChild(item);

    }
    console.log(creatorsList);
  };

}
