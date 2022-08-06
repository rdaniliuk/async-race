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
      }
    } else if (carButton.id.split('.')[0] === 'stop') {
      if (carImage) {
        cancelAnimationFrame(requestAnimationIds[carId]);
        carImage.style.transform = 'translateX(0px)';
        document.getElementById(`stop.${carId}`)?.setAttribute('disabled', 'true');
        document.getElementById(`start.${carId}`)?.removeAttribute('disabled');
      }
    }
  });
}
export default startStopButton;

// const car = document.querySelector<HTMLImageElement>('#image');
// const buttonStart = document.querySelector<HTMLButtonElement>('#start');
// const buttonStop = document.querySelector<HTMLButtonElement>('#stop');

// const start = 0;
// const finish = 500;
// const duration = 10000;

// function carDrive() {
//   if (car) {
//     let currentX = start;
//     const framesCount = duration / (1000);
//     const dx = (finish - start) / framesCount;

//     const tick = () => {
//       currentX += dx;
//       car.style.transform = `translateX(${currentX}px)`;

//       if (currentX < finish) {
//         requestAnimationFrame(tick);
//       }
//     };
//     tick();
//   }
// }

// if (buttonStart) {
//   buttonStart.addEventListener('click', carDrive);
// }
// if (buttonStop) {
//   buttonStop.addEventListener('click');
// }
