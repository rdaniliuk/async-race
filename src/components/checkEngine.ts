import GarageAPI from './GarageAPI';

async function checkEngine(
  carId: number,
  requestAnimationIds: {[key: string]: number},
  timeResult?: {[key: string]: number},
) {
  const garageAPI = new GarageAPI();
  try {
    await garageAPI.driveMod(+carId, 'drive');
  } catch (err) {
    if ((err as Error).message === 'Unexpected token C in JSON at position 0') {
      cancelAnimationFrame(requestAnimationIds[carId]);
      // eslint-disable-next-line no-param-reassign
      delete timeResult?.[carId];
      await garageAPI.startStop(+carId, 'stopped');
    }
  }
}
export default checkEngine;
