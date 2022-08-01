import NavRender from './NavRender';
import TitleRender from './TitleRender';
import CarRender from './CarsRender';
import WinnersTableRender from './WinnersTableRender';
import WinnersTitleRender from './WinnersTitleRender';

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
      nav.render();
      title.render();
      cars.render();
      switchPage();
    });
    winnersButton.addEventListener('click', () => {
      body.innerHTML = '';
      winners.render();
      winnersTitle.render();
      switchPage();
    });
  }
}

export default switchPage;
