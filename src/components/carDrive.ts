interface CarDriveProps {
  carId: number,
  requestAnimationIds: {[key: string]: number},
  distance: number,
  carImage: HTMLElement,
  duration: number,
}

function carDrive({
  duration, distance, carImage, carId, requestAnimationIds,
}: CarDriveProps) {
  if (carImage) {
    const START = 0;
    let currentX = START;
    const framesCount = duration / 5.8;
    const dx = (distance - START) / framesCount;
    const tick = () => {
      currentX += dx;
      // eslint-disable-next-line no-param-reassign
      carImage.style.transform = `translateX(${currentX}px)`;
      if (currentX < distance) {
        const requestAnimationId = requestAnimationFrame(tick);
        // eslint-disable-next-line no-param-reassign
        requestAnimationIds[carId] = requestAnimationId;
      }
    };
    tick();
  }
}
export default carDrive;
