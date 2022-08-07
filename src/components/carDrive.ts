interface CarDriveProps {
  carId: number,
  requestAnimationIds: {[key: string]: number},
  distance: number,
  carImage: HTMLElement,
  duration: number,
  timeResult?: {[key: string]: number}
  onFinish?: (carId: number) => void
}

function getWinner(timeResult: {[key: string]: number}) {
  const timeArray = Object.entries(timeResult);
  timeArray.sort((a, b) => a[1] - b[1]);
  return +timeArray[0][0];
}

function carDrive({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  duration, distance, carImage, carId, requestAnimationIds, timeResult = {}, onFinish = () => {},
}: CarDriveProps) {
  const START = 0;
  const FRAMES = 5.8;

  if (carImage) {
    let currentX = START;
    const framesCount = duration / FRAMES;
    const dx = (distance - START) / framesCount;
    const tick = () => {
      currentX += dx;
      // eslint-disable-next-line no-param-reassign
      carImage.style.transform = `translateX(${currentX}px)`;
      if (currentX < distance) {
        const requestAnimationId = requestAnimationFrame(tick);
        // eslint-disable-next-line no-param-reassign
        requestAnimationIds[carId] = requestAnimationId;
      } else if (getWinner(timeResult) === carId) {
        onFinish(carId);
      }
    };
    tick();
  }
}
export default carDrive;
