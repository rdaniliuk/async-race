import GarageAPI from './GarageAPI';
import carDrive from './carDrive';

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
        try {
          await garageAPI.driveMod(car.id, 'drive');
        } catch (err: any) {
          if (err.message === 'Unexpected token C in JSON at position 0') {
            cancelAnimationFrame(requestAnimationIds[car.id]);
            await garageAPI.startStop(car.id, 'stopped');
          }
        }
      }
    });
  });
  raceResetButton?.addEventListener('click', async () => {
    carsList.forEach(async (car: {name:string, color: string, id: number}) => {
      const carImage = document.getElementById(`image.${car.id}`);
      if (carImage) {
        cancelAnimationFrame(requestAnimationIds[car.id]);
        const response = await garageAPI.startStop(car.id, 'stopped');
        carImage.style.transform = `translateX(${response.velocity}px)`;
        raceResetButton.setAttribute('disabled', 'true');
        raceButton?.removeAttribute('disabled');
      }
    });
  });
}
export default race;
