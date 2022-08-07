import GarageAPI from './GarageAPI';
import carDrive from './carDrive';
import stopDrive from './stopDrive';
import checkEngine from './checkEngine';

async function onFinish(carId: number) {
  const garageAPI = new GarageAPI();
  const carsList = await garageAPI.getCars();
  let carName;
  carsList.forEach((car: {id: number, color: string, name: string}) => {
    if (car.id === carId) {
      carName = car.name;
    }
  });
  const { body } = document;
  const winnerWindow = document.createElement('p');
  winnerWindow.innerHTML = `Winner is ${carName}`;
  winnerWindow.classList.add('winnerWindow');
  body.append(winnerWindow);
}

async function race() {
  const timeResult: {[key: string]: number} = {};
  const requestAnimationIds: {[key: string]: number} = {};
  const raceButton = document.querySelector('#race');
  const raceResetButton = document.querySelector('#reset');
  const garageAPI = new GarageAPI();
  const carsList = await garageAPI.getCars();
  const CAR__LENGTH = 100;

  raceButton?.addEventListener('click', async () => {
    carsList.forEach(async (car: {name:string, color: string, id: number}) => {
      const carImage = document.getElementById(`image.${car.id}`);
      if (carImage) {
        const carRoad = <HTMLDivElement>carImage.parentNode;
        const roadDistance = carRoad.offsetWidth - CAR__LENGTH;
        const response = await garageAPI.startStop(car.id, 'started');
        const duration = response.distance / response.velocity;
        timeResult[car.id] = duration;
        raceButton.setAttribute('disabled', 'true');
        raceResetButton?.removeAttribute('disabled');
        carDrive({
          duration,
          distance: roadDistance,
          carImage,
          carId: car.id,
          requestAnimationIds,
          timeResult,
          onFinish,
        });
        await checkEngine(car.id, requestAnimationIds, timeResult);
      }
    });
  });
  raceResetButton?.addEventListener('click', async () => {
    carsList.forEach(async (car: {name:string, color: string, id: number}) => {
      const carImage = document.getElementById(`image.${car.id}`);
      if (carImage) {
        stopDrive(requestAnimationIds, car.id, carImage);
      }
    });
  });
}
export default race;
