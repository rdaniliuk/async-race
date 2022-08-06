import GarageAPI from './GarageAPI';

async function updateCar() {
  const { body } = document;
  const garageAPI = new GarageAPI();
  const carList = await garageAPI.getCars();
  body.addEventListener('click', async (event) => {
    const removeButton = <HTMLButtonElement>event.target;
    const buttonId = removeButton.id.split('.')[1];
    if (removeButton.id.split('.')[0] === 'select') {
      const formUpdate = <HTMLFormElement>document.querySelector('#formUpdate');
      if (formUpdate) {
        carList.forEach((car: {name: string, color: string, id: number}) => {
          if (car.id === +buttonId) {
            formUpdate.nameInput.value = car.name;
            formUpdate.colorInput.value = car.color;
            formUpdate.nameInput.focus();
          }
          const updateSubmit = formUpdate.querySelector('#update');
          if (updateSubmit) {
            updateSubmit.addEventListener('click', async (e) => {
              e.preventDefault();
              const { form } = <HTMLButtonElement>e.target;
              if (form) {
                const updateCarObj = {
                  name: form.nameInput.value.toString(),
                  color: form.colorInput.value.toString(),
                };
                await garageAPI.updateCar(+buttonId, updateCarObj);
                formUpdate.nameInput.value = '';
                formUpdate.colorInput.value = '#000000';
              }
            });
          }
        });
      }
    }
  });
}
export default updateCar;
