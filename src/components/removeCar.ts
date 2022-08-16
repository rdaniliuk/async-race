import GarageAPI from './GarageAPI';

async function removeCar() {
  const BUTTON_CAR_REMOVE_ID = 'remove';
  const { body } = document;
  const garageAPI = new GarageAPI();
  body.addEventListener('click', async (event) => {
    const removeButton = <HTMLButtonElement>event.target;
    const buttonId = removeButton.id.split('.')[1];
    if (removeButton.id.split('.')[0] === BUTTON_CAR_REMOVE_ID) {
      await garageAPI.deleteCar(+buttonId);
      await garageAPI.deleteWinner(+buttonId);
      await garageAPI.getCars();
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  });
}
export default removeCar;
