export default class ComicListView {
  constructor(element, data) {

    this.element = element.querySelector('.comic');
    this.data = data.data.results[0];
console.log(this.data);
  }
  render(){
    this.element.innerHTML = ' ';

    this.data.comics.items.forEach((comics) => {
      var img = document.createElement('img');
      img.classList = 'component-list__item-img';

      img.src = comics.resourceURI + '.jpg';

      var title = document.createElement('p');
      title.classList = 'component-list__item-title';

      var item = document.createElement('div');
      item.classList = 'component-list__item';
      title.innerText = comics.name;

      this.element.appendChild(item);
      item.appendChild(img);
      item.appendChild(title);
      // console.log(characters.name);

    });


  }
}
