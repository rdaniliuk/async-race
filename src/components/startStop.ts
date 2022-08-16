import GarageAPI from './GarageAPI';
import carDrive from './carDrive';
import stopDrive from './stopDrive';
import checkEngine from './checkEngine';

async function startStopButton() {
  const BUTTON_CAR_START_ID = 'start';
  const BUTTON_CAR_STOP_ID = 'stop';
  const requestAnimationIds: {[key: string]: number} = {};
  const { body } = document;
  const garageAPI = new GarageAPI();
  const CAR__LENGTH = 100;
  body.addEventListener('click', async (event) => {
    const carButton = <HTMLButtonElement>event.target;
    const carId = carButton.id.split('.')[1];
    const carImage = document.getElementById(`image.${carId}`);
    if (carButton.id.split('.')[0] === BUTTON_CAR_START_ID) {
      if (carImage) {
        const carRoad = <HTMLDivElement>carImage.parentNode;
        const roadDistance = carRoad.offsetWidth - CAR__LENGTH;
        const response = await garageAPI.startStop(+carId, 'started');
        const duration = response.distance / response.velocity;
        document.getElementById(`${BUTTON_CAR_START_ID}.${carId}`)?.setAttribute('disabled', 'true');
        document.getElementById(`${BUTTON_CAR_STOP_ID}.${carId}`)?.removeAttribute('disabled');
        carDrive({
          duration, distance: roadDistance, carImage, carId: +carId, requestAnimationIds,
        });
        checkEngine(+carId, requestAnimationIds);
      }
    } else if (carButton.id.split('.')[0] === BUTTON_CAR_STOP_ID) {
      if (carImage) {
        stopDrive(requestAnimationIds, +carId, carImage);
      }
    }
  });
}
export default startStopButton;
