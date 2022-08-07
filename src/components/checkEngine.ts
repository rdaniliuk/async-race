import GarageAPI from './GarageAPI';

async function checkEngine(carId: number, requestAnimationIds: {[key: string]: number}) {
  const garageAPI = new GarageAPI();
  try {
    await garageAPI.driveMod(+carId, 'drive');
  } catch (err: any) {
    if (err.message === 'Unexpected token C in JSON at position 0') {
      cancelAnimationFrame(requestAnimationIds[carId]);
      await garageAPI.startStop(+carId, 'stopped');
    }
  }
}
export default checkEngine;
