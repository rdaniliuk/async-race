import './global.scss';
import NavRender from './components/NavRender';
import TitleRender from './components/TitleRender';
import CarRender from './components/CarsRender';
import switchPage from './components/pageSwitch';
import createNewCar from './components/createNewCar';

const nav = new NavRender();
const title = new TitleRender();
const cars = new CarRender();

nav.render();
title.render();
cars.render();
switchPage();
createNewCar();

// const car = document.querySelector<HTMLImageElement>('#car');
// const buttonStart = document.querySelector<HTMLButtonElement>('#start');
// const buttonStop = document.querySelector<HTMLButtonElement>('#stop');

// const start = 0;
// const finish = 500;
// const duration = 10000;

// function carDrive() {
//   if (car) {
//     let currentX = start;
//     const framesCount = duration / (1000);
//     const dx = (finish - start) / framesCount;

//     const tick = () => {
//       currentX += dx;
//       car.style.transform = `translateX(${currentX}px)`;

//       if (currentX < finish) {
//         requestAnimationFrame(tick);
//       }
//     };
//     tick();
//   }
// }

// if (buttonStart) {
//   buttonStart.addEventListener('click', carDrive);
// }
// if (buttonStop) {
//   buttonStop.addEventListener('click');
// }
