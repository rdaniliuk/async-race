import './global.scss';
import PageButtonRender from './components/PageButtonRender';
import NavRender from './components/NavRender';
import TitleRender from './components/TitleRender';
import CarRender from './components/CarsRender';
import switchPage from './components/pageSwitch';
import createNewCar from './components/createNewCar';
import removeCar from './components/removeCar';
import updateCar from './components/updateCar';
import startStopButton from './components/startStop';
import generateCars from './components/generateCars';
import race from './components/race';

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

//  init aplication
