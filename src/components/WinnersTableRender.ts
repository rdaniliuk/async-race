import GarageAPI from './GarageAPI';
import renderCarImage from './carImage';

export default class WinnersTableRender {
  renderTemplate() {
    return `
    <div class="header">
    <div class="number column">
       <p>#</p>
    </div>
    <div class="carIMAGE column">
       <p>car</p>
    </div>
    <div class="name column">
       <p>car name</p>
    </div>
    <div class="wins column">
       <p>wins</p>
    </div>
    <div class="time column">
       <p>time</p>
    </div>
 </div>
      `;
  }

  async render() {
    const garageAPI = new GarageAPI();
    const carsList = await garageAPI.getCars();
    const winnersList = await garageAPI.getWinners();
    const nav = document.querySelector('.nav');
    const winnersTable = document.createElement('div');
    winnersTable.classList.add('table');
    nav?.append(winnersTable);
    winnersTable.innerHTML = this.renderTemplate();
    if (carsList !== null && winnersList !== null) {
      winnersList.forEach((elem: {id: number, wins: number, time: number }, index: number) => {
        const { id, wins, time } = elem;
        const { color, name } = carsList
          .find((car: {name: string, color: string, id: number}) => car.id === id);
        const carId = document.createElement('p');
        carId.innerHTML = (index + 1).toString();
        document.querySelector('.number')?.append(carId);
        const carImage = document.createElement('p');
        carImage.innerHTML = renderCarImage(color, id);
        document.querySelector('.carIMAGE')?.append(carImage);
        const carName = document.createElement('p');
        carName.innerHTML = name;
        document.querySelector('.name')?.append(carName);
        const carWins = document.createElement('p');
        carWins.innerHTML = wins.toString();
        document.querySelector('.wins')?.append(carWins);
        const carTime = document.createElement('p');
        carTime.innerHTML = time.toString();
        document.querySelector('.time')?.append(carTime);
      });
    }
  }
}
