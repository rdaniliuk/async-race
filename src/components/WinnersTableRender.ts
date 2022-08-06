import GarageAPI from './GarageAPI';
import renderCarImage from './carImage';

export default class WinnersTableRender {
  renderTemplate() {
    return `
      <div class="header">
      <p>Number</p>
      <p>Car</p>
      <p>Name</p>
      <p>Wins</p>
      <p>Best time</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
   </div>
      `;
  }

  async render() {
    const table = this.renderTemplate();
    const garageAPI = new GarageAPI();
    const carsList = await garageAPI.getCars();
    const winnersList = await garageAPI.getWinners();
    const nav = document.querySelector('.nav');
    const winnersTable = document.createElement('div');
    winnersTable.classList.add('table');
    if (carsList !== null && winnersList !== null) {
      winnersList.forEach((elem: {id: number, wins: number, time: number }, index: number) => {
        const { id, wins, time } = elem;
        const { color, name } = carsList
          .find((car: {name: string, color: string, id: number}) => car.id === id);
        const carId = document.createElement('p');
        carId.innerHTML = (index + 1).toString();
        const carImage = document.createElement('p');
        carImage.innerHTML = renderCarImage(color, id);
        const carName = document.createElement('p');
        carName.innerHTML = name;
        const carWins = document.createElement('p');
        carWins.innerHTML = wins.toString();
        const carTime = document.createElement('p');
        carTime.innerHTML = time.toString();
        nav?.append(table);
        nav?.append(winnersTable);
        winnersTable.append(carId, carImage, carName, carWins, carTime);
      });
    }
  }
}
