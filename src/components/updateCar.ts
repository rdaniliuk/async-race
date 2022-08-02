import GarageAPI from './GarageAPI';

// const carId = document.querySelector(`#${id}`);
async function updateCar(/* id:number */) {
  const { body } = document;
  const garageAPI = new GarageAPI();
  body.addEventListener('click', async (event) => {
    await garageAPI.updateCar(1, { name: 'dsf', color: 'sdasd' });
    const b = await garageAPI.getCars();
    const a = event.target;
    console.log(a, 'target');
    console.log(b, 'after update');
    return a;
  });
}
export default updateCar;
