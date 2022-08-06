export default class PageButtonRender {
  template: string;

  constructor() {
    this.template = `
       <div class="pages">
          <button id="garageButton">to Garage</button>
          <button id="winnersButton">to Winners</button>  
       </div>
       `;
  }

  render() {
    const { body } = document;
    const nav = document.createElement('div');
    nav.innerHTML = this.template;
    nav.classList.add('nav');
    body.prepend(nav);
  }
}
