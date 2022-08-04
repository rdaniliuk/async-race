export default class GarageAPI {
  baseUrl: string;

  path: {garage: string, winners: string, startStop: string};

  constructor() {
    this.baseUrl = 'http://localhost:3000';
    this.path = {
      garage: '/garage',
      winners: '/winners',
      startStop: '/engine',
    };
  }

  async getCars() {
    const response = await fetch(`${this.baseUrl}${this.path.garage}`);
    const carsList = await response.json();
    console.log(carsList);
    return carsList;
  }

  async getWinners() {
    const response = await fetch(`${this.baseUrl}${this.path.winners}`);
    const data = await response.json();
    return data;
  }

  async getCarsCount() {
    return (await this.getCars()).length;
  }

  async createCar(newCar: {name: string, color: string}) {
    const response = await fetch(
      `${this.baseUrl}${this.path.garage}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar),
      },
    );
    console.log(response);
    const data = await response.json();
    return data;
  }

  async deleteCar(id: number) {
    const response = await fetch(`${this.baseUrl}${this.path.garage}/${id}`, {
      method: 'DELETE',
    });
    console.log(response, 'delete');
    const data = await response.json();
    return data;
  }

  async updateCar(id: number, updateCar: {name: string, color: string}) {
    const response = await fetch(`${this.baseUrl}${this.path.garage}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateCar),
    });
    console.log(response, 'update');
    const data = await response.json();
    return data;
  }

  async startStop(id: number, status: string) {
    const response = await fetch(`${this.baseUrl}${this.path.startStop}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    console.log(response, 'startStop');
    const data = await response.json();
    console.log(data, 'startStopDATA');
    return data;
  }
}
