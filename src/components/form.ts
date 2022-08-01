function createCarName() {
  const inputName = document.querySelector<HTMLInputElement>('#nameInput');
  if (inputName !== null) {
    inputName.addEventListener('input', (event) => {
      if (event.target !== null) {
        const nameValue = (<HTMLInputElement>event.target).value;
        console.log(nameValue);
      }
    });
  }
}

export default createCarName;
