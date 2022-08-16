import GarageAPI from './GarageAPI';

async function stopDrive(
  requestAnimationIds: {[key: string]: number},
  carId: number,
  carImage: HTMLElement,
) {
  const garageAPI = new GarageAPI();
  const raceButton = document.querySelector('#race');
  const raceResetButton = document.querySelector('#reset');

  cancelAnimationFrame(requestAnimationIds[carId]);
  const response = await garageAPI.startStop(+carId, 'stopped');
  // eslint-disable-next-line no-param-reassign
  carImage.style.transform = `translateX(${response.velocity}px)`;
  document.getElementById(`stop.${carId}`)?.setAttribute('disabled', 'true');
  document.getElementById(`start.${carId}`)?.removeAttribute('disabled');
  raceResetButton?.setAttribute('disabled', 'true');
  raceButton?.removeAttribute('disabled');
}
export default stopDrive;
