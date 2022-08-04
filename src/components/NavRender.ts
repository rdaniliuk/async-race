export default class NavRender {
  template: string;

  constructor() {
    this.template = `
      <div class="pages">
         <button id="garageButton">to Garage</button>
         <button id="winnersButton">to Winners</button>  
      </div>
      <form name="formCreate" class="create">
         <input  type="text" name="nameInput">
         <input type="color" name="colorInput">
         <button type="submit" id="create" name="submitButton" >create</button>
      </form>
      <form name="formUpdate" id="formUpdate">
         <input  type="text" name="nameInput" id="nameInput">
         <input type="color" name="colorInput">
         <button type="submit" id="update" >update</button>
      </form>
      <div class="simulation">
         <button id="race" >race</button>
         <button id="reset" >reset</button>
         <button id="random" >generate cars</button>
      </div>
      `;
  }

  render() {
    const { body } = document;
    const nav = document.createElement('div');
    nav.innerHTML = this.template;
    nav.classList.add('nav');
    body.prepend(nav);
  }
}
