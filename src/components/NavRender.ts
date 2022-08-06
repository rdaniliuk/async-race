export default class NavRender {
  template: string;

  constructor() {
    this.template = `
      <form name="formCreate" class="create">
         <input  type="text" name="nameInput" id="nameInput">
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
         <button id="reset" disabled >reset</button>
         <button id="random" >generate cars</button>
      </div>
      `;
  }

  render() {
    const nav = document.querySelector('.nav');
    const option = document.createElement('div');
    option.innerHTML = this.template;
    option.classList.add('option');
    nav?.append(option);
  }
}
