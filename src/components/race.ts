import GarageAPI from './GarageAPI';
import carDrive from './carDrive';
import stopDrive from './stopDrive';
import checkEngine from './checkEngine';

async function race() {
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
        raceButton.setAttribute('disabled', 'true');
        raceResetButton?.removeAttribute('disabled');
        carDrive({
          duration, distance: roadDistance, carImage, carId: car.id, requestAnimationIds,
        });
        checkEngine(car.id, requestAnimationIds);
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
