import PageButtonRender from './PageButtonRender';
import NavRender from './NavRender';
import TitleRender from './TitleRender';
import CarRender from './CarsRender';
import switchPage from './pageSwitch';
import createNewCar from './createNewCar';
import removeCar from './removeCar';
import updateCar from './onUpdateCar';
import startStopButton from './startStop';
import generateCars from './onGenereteCars';
import race from './race';

async function initApplication() {
  const pageButton = new PageButtonRender();
  const nav = new NavRender();
  const title = new TitleRender();
  const cars = new CarRender();

  pageButton.render();
  nav.render();
  title.render();
  cars.render();
  switchPage();
  createNewCar();
  removeCar();
  updateCar();
  startStopButton();
  generateCars();
  race();
}
export default initApplication;
