import GarageAPI from './GarageAPI';
import renderCarImage from './carImage';

export default class CarRender {
  cars: Array<{name: string, color: string, id: number}>;

  constructor() {
    this.cars = [];
  }

  renderTemplate(color: string, id: number) {
    return `<div class="car__info">
    <div class="button__change">
    <button class="select__button" id="select.${id}" >select</button>
    <button class="select__button" id="remove.${id}" >remove</button>
    </div>
    <p class="car__name" id="car-name"></p>
    </div>
    <div class="button__drive">
    <button class="car__button" id="start.${id}">A</button>
    <button class="car__button" disabled id="stop.${id}">B</button>
    </div>
    <div class="item__car">
    ${renderCarImage(color, id)}
    </div>`;
  }

  async render() {
    const garageAPI = new GarageAPI();
    const carsList = await garageAPI.getCars();
    this.cars = carsList;
    const { body } = document;
    const cars = document.createElement('div');
    cars.classList.add('cars');
    if (carsList !== null) {
      carsList.forEach((elem: {name: string, color: string, id: number}) => {
        const { color, id } = elem;
        const car = document.createElement('div');
        car.classList.add('car');
        car.innerHTML = this.renderTemplate(color, id);
        body.append(car);
        const carName = car.querySelector<HTMLParagraphElement>('#car-name');
        if (carName !== null) {
          carName.innerHTML = elem.name;
        }
      });
    }
  }
}
