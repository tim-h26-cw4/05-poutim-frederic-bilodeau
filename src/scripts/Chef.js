import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = document.createElement('div');

    this.init();
  }
  init() {
    console.log('Chef-stance');

    const poutines = this.element.querySelectorAll('.poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];

      new Poutine(poutine);
      this.menu.push(poutine);
    }

    const buttonCMD = this.element.querySelector('.button-secondary');
    buttonCMD.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    console.log('func-sendOrder');
    document.querySelector('.chef-footer').appendChild(this.container);
    this.container.innerText = '';

    const active = this.element.querySelectorAll('.is-active');
    console.log(active.length);

    let p = document.createElement('p');
    p.innerText = `${active.length}`;
    console.log(p.innerText);

    this.container.appendChild(p);
  }
}
