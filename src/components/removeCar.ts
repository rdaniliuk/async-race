import GarageAPI from './GarageAPI';

async function removeCar() {
  const { body } = document;
  const garageAPI = new GarageAPI();
  body.addEventListener('click', async (event) => {
    const removeButton = <HTMLButtonElement>event.target;
    const buttonId = removeButton.id.split('.')[1];
    if (removeButton.id.split('.')[0] === 'remove') {
      await garageAPI.deleteCar(+buttonId);
      await garageAPI.getCars();
    }
  });
}
export default removeCar;
