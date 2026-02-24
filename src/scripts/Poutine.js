export default class Poutine {
  constructor(element) {
    this.element = element;
    this.type = element.querySelectorAll('.poutine');
    this.selectedType = '';

    this.init();
  }
  init() {
    console.log('Pout-instance');

    const buttons = this.element.querySelectorAll('.button');

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    console.log('Typ-stanc- wait ctune fonction');

    const buttons = this.element.querySelectorAll('.button');

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];

      button.classList.remove('is-active');
    }
    event.currentTarget.classList.add('is-active');
    //ça marche!

    this.selectedType = event.currentTarget.innerText;
    console.log(this.selectedType);

    this.updatePhoto();
  }

  updatePhoto() {
    console.log('Func-Photo');

    const photo = this.element.querySelector('.poutine__image');
    photo.classList.add('is-active');
    photo.classList.add('is-selected');
    photo.src = `assets/images/${this.selectedType}.png`;
  }
}
