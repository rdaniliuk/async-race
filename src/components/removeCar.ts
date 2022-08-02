import GarageAPI from './GarageAPI';

// const carId = document.querySelector(`#${id}`);
async function removeCar(/* id:number */) {
  const { body } = document;
  const garageAPI = new GarageAPI();
  body.addEventListener('click', async (event) => {
    await garageAPI.deleteCar(1);
    const b = await garageAPI.getCars();
    const a = event.target;
    console.log(a, 'target');
    console.log(b, 'after delete');
    return a;
  });
}
export default removeCar;
