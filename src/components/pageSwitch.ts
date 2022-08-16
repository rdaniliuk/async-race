import PageButtonRender from './PageButtonRender';
import NavRender from './NavRender';
import TitleRender from './TitleRender';
import CarRender from './CarsRender';
import WinnersTableRender from './WinnersTableRender';
import WinnersTitleRender from './WinnersTitleRender';
import generateCars from './onGenereteCars';
import race from './race';
import createNewCar from './createNewCar';
import updateCar from './onUpdateCar';
import startStopButton from './startStop';

const pageButton = new PageButtonRender();
const nav = new NavRender();
const title = new TitleRender();
const cars = new CarRender();
const winners = new WinnersTableRender();
const winnersTitle = new WinnersTitleRender();

function switchPage() {
  const garageButton = document.querySelector('#garageButton');
  const winnersButton = document.querySelector('#winnersButton');
  const { body } = document;

  if (garageButton && winnersButton) {
    garageButton.addEventListener('click', () => {
      body.innerHTML = '';
      pageButton.render();
      nav.render();
      title.render();
      cars.render();
      switchPage();
      generateCars();
      race();
      createNewCar();
      updateCar();
      startStopButton();
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
    winnersButton.addEventListener('click', () => {
      body.innerHTML = '';
      pageButton.render();
      winnersTitle.render();
      winners.render();
      switchPage();
    });
  }
}

export default switchPage;
