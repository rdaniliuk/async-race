import GarageAPI from './GarageAPI';
import renderCarImage from './carImage';

export default class CarRender {
  renderTemplate(color: string) {
    return `<div class="button__change">
    <button id="select" >select</button>
    <button id="remove" >remove</button>
    </div>
    <p id="car-name"></p>
    <div class="button__drive">
    <button id="start">A</button>
    <button id="stop">B</button>
    </div>
    <div class="item__car">
    ${renderCarImage(color)}
    </div>`;
  }

  async render() {
    const garageAPI = new GarageAPI();
    const carsList = await garageAPI.getCars();
    const { body } = document;
    const cars = document.createElement('div');
    cars.classList.add('cars');
    if (carsList !== null) {
      carsList.forEach((elem: {name: string, color: string, id: number}) => {
        const { color } = elem;
        const car = document.createElement('div');
        car.classList.add('car');
        car.innerHTML = this.renderTemplate(color);
        body.append(car);
        const carName = car.querySelector<HTMLParagraphElement>('#car-name');
        if (carName !== null) {
          carName.innerHTML = elem.name;
        }
      });
    }
  }
}
