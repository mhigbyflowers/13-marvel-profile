export default class ComicListView {
  constructor(element, data) {

    this.element = element.querySelector('.comic');
    this.data = data.data;
    this.element.innerHTML = ' ';
    this.displayCard = element.querySelector('.overlay');
    this.infoTex = element.querySelector('.overlay__card-text');
    this.close = element.querySelector('.overlay__card-x')
    console.log(this.displayCard);

// console.log(this.data);
  }
  render(){

    this.data.results.forEach((comics) => {
      var imgFrame = document.createElement('div');
      imgFrame.classList='image-frame';
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
      imgFrame.appendChild(img);
      item.appendChild(imgFrame);
      item.appendChild(title);
      item.appendChild(showMore);
      // console.log(characters.name);
      showMore.addEventListener('click', ()=>
      {

        this.infoTex.innerText = comics.description;
        this.displayCard.classList.add('active');
      })
      this.close.addEventListener('click',()=>{
          this.displayCard.classList.remove('active');
      })




    });


  // console.log('ckick');





  }
}
