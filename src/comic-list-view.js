export default class ComicListView {
  constructor(element, data) {

    this.element = element.querySelector('.comic');
    this.data = data.data;

console.log(this.data);
  }
  render(){
    this.element.innerHTML = ' ';

    this.data.results.forEach((comics) => {
      var img = document.createElement('img');
      img.classList = 'component-list__item-img';

      img.src = comics.thumbnail.path + '.jpg';

      var title = document.createElement('p');
      title.classList = 'component-list__item-title';

      var item = document.createElement('div');
      item.classList = 'component-list__item';
      title.innerText = comics.title;

      var showMore = document.createElement('button');
      showMore.innerText = 'Show Moar'
      showMore.classList ='show-more-btn';

      this.element.appendChild(item);
      item.appendChild(img);
      item.appendChild(title);
      item.appendChild(showMore);
      // console.log(characters.name);
      showMore.addEventListener('click', ()=>
      {
        var displayCard = this.element.querySelector('.overlay');
        // var infoTex = this.element.querySelector('.overlay__card-text');
        console.log(comics.description);
        // infoTex.innerText = comics.description;
        displayCard.classList.remove('.hidden');
        displayCard.classList.add('.active');

      })
    });


  // console.log('ckick');





  }
}
