import GarageAPI from './GarageAPI';

export default class TitleRender {
  template: string;

  constructor() {
    this.template = `
    <p class="title" id="garage"></p>
    <p class="title" id="page"></p>
       `;
  }

  async render() {
    const garageAPI = new GarageAPI();
    const carCount = await garageAPI.getCarsCount();
    const pageNumber = 1;
    const nav = document.querySelector('.nav');
    const title = document.createElement('div');
    title.innerHTML = this.template;
    title.classList.add('page__title');
    nav?.append(title);
    const garage = title.querySelector<HTMLParagraphElement>('#garage');
    const page = title.querySelector<HTMLParagraphElement>('#page');
    if (garage !== null && page !== null) {
      garage.innerHTML = `Garage (${carCount})`;
      page.innerHTML = `Page #${pageNumber}`;
    }
  }
}
