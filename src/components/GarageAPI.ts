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
    const data = await response.json();
    console.log(data, 'create');
    return data;
  }

  async deleteCar(id: number) {
    const response = await fetch(`${this.baseUrl}${this.path.garage}/${id}`, {
      method: 'DELETE',
    });
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
    const data = await response.json();
    return data;
  }

  async startStop(id: number, status: string) {
    const response = await fetch(`${this.baseUrl}${this.path.startStop}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const data = await response.json();
    return data;
  }

  async driveMod(id: number, status: string) {
    const response = await fetch(`${this.baseUrl}${this.path.startStop}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const data = await response.json();
    return data;
  }

  async getWinner(id: number) {
    const response = await fetch(`${this.baseUrl}${this.path.winners}/${id}`);
    const data = await response.json();
    return data;
  }

  async createWinner(newWinner: {id: number, wins: number, time: number}) {
    const response = await fetch(
      `${this.baseUrl}${this.path.winners}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWinner),
      },
    );
    const data = await response.json();
    return data;
  }

  async updateWinner(id: number, updateWinner: {wins: number, time: number}) {
    const response = await fetch(`${this.baseUrl}${this.path.winners}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateWinner),
    });
    const data = await response.json();
    return data;
  }

  async deleteWinner(id: number) {
    const response = await fetch(`${this.baseUrl}${this.path.winners}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
}
