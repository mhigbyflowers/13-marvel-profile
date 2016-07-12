export default class CharacterListView {
  constructor(element, data) {

    this.element = element.querySelector('.char');
    this.data = data.data;


  }

  render() {
    this.element.innerHTML = ' ';

    this.data.results.forEach((characters) => {
      var img = document.createElement('img');
      img.classList = 'component-list__item-img';
      img.src = characters.thumbnail.path + '.jpg';

      var title = document.createElement('p');
      title.classList = 'component-list__item-title';

      var item = document.createElement('div');
      item.classList = 'component-list__item';
      title.innerText = characters.name;

      this.element.appendChild(item);
      item.appendChild(img);
      item.appendChild(title);
      // console.log(characters.name);

    });

    // console.log(this.data);

  }
}
