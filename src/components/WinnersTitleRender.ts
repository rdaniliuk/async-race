import GarageAPI from './GarageAPI';

export default class WinnersTitleRender {
  template: string;

  constructor() {
    this.template = `
    <p class="title" id="winners"></p>
    <p class="title" id="page"></p>
       `;
  }

  async render() {
    const garageAPI = new GarageAPI();
    const winnersCount = await garageAPI.getWinners();
    const pageNumber = 1;
    const nav = document.querySelector('.nav');
    const title = document.createElement('div');
    title.innerHTML = this.template;
    title.classList.add('page__title');
    nav?.append(title);
    const winners = title.querySelector<HTMLParagraphElement>('#winners');
    const page = title.querySelector<HTMLParagraphElement>('#page');
    if (winners !== null && page !== null) {
      winners.innerHTML = `Winners (${winnersCount.length})`;
      page.innerHTML = `Page #${pageNumber}`;
    }
  }
}
