import GarageAPI from './GarageAPI';
import carDrive from './carDrive';

async function startStopButton() {
  const requestAnimationIds: {[key: string]: number} = {};
  const { body } = document;
  const garageAPI = new GarageAPI();
  const CAR__LENGTH = 100;
  body.addEventListener('click', async (event) => {
    const carButton = <HTMLButtonElement>event.target;
    const carId = carButton.id.split('.')[1];
    const carImage = document.getElementById(`image.${carId}`);
    if (carButton.id.split('.')[0] === 'start') {
      if (carImage) {
        const carRoad = <HTMLDivElement>carImage.parentNode;
        const roadDistance = carRoad.offsetWidth - CAR__LENGTH;
        const response = await garageAPI.startStop(+carId, 'started');
        const duration = response.distance / response.velocity;
        document.getElementById(`start.${carId}`)?.setAttribute('disabled', 'true');
        document.getElementById(`stop.${carId}`)?.removeAttribute('disabled');
        carDrive({
          duration, distance: roadDistance, carImage, carId: +carId, requestAnimationIds,
        });
        try {
          await garageAPI.driveMod(+carId, 'drive');
        } catch (err: any) {
          if (err.message === 'Unexpected token C in JSON at position 0') {
            cancelAnimationFrame(requestAnimationIds[carId]);
            await garageAPI.startStop(+carId, 'stopped');
          }
        }
      }
    } else if (carButton.id.split('.')[0] === 'stop') {
      if (carImage) {
        cancelAnimationFrame(requestAnimationIds[carId]);
        const response = await garageAPI.startStop(+carId, 'stopped');
        carImage.style.transform = `translateX(${response.velocity}px)`;
        document.getElementById(`stop.${carId}`)?.setAttribute('disabled', 'true');
        document.getElementById(`start.${carId}`)?.removeAttribute('disabled');
      }
    }
  });
}
export default startStopButton;
