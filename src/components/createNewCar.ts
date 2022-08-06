import GarageAPI from './GarageAPI';

async function createNewCar() {
  const garageAPI = new GarageAPI();
  const formNewCar = document.getElementById('create');
  if (formNewCar) {
    formNewCar.addEventListener('click', async (event) => {
      event.preventDefault();
      const { form } = <HTMLInputElement>event.target;
      if (form) {
        const newCar = {
          name: form.nameInput.value.toString(),
          color: form.colorInput.value.toString(),
        };
        await garageAPI.createCar(newCar);
        form.nameInput.value = '';
        form.colorInput.value = '#000000';
      }
    });
  }
}

export default createNewCar;
