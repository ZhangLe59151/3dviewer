import { observable, action } from 'mobx';
import gMapStore from './gmap';

const STORE_AGENT = 'STORE_PLAYER';

class PlayerStore {
  @observable
  data = [
    {
      playerID: 'p1',
      playerName: 'Player_1',
      playerType: 'Player',
      money: 1500,
      position: 0,
      status: true,
    },
    {
      playerID: 'p2',
      playerName: 'AI_1',
      playerType: 'AI',
      money: 1500,
      position: 0,
      status: true,
    },
    {
      playerID: 'p3',
      playerName: 'AI_2',
      playerType: 'AI',
      money: 1500,
      position: 0,
      status: true,
    },
    {
      playerID: 'p4',
      playerName: 'AI_3',
      playerType: 'AI',
      money: 1500,
      position: 0,
      status: true,
    },
  ];

  @action
  dice = () => {
    if (this.data[0].status) {
      const GrayNumber0 = Math.floor(Math.random() * 12 + 2);
      this.data[0].position = (this.data[0].position + GrayNumber0) % 40;
      gMapStore.updateGMap(playerStore.data[0].playerID, playerStore.data[0].position);
    }
    if (this.data[1].status) {
      const GrayNumber1 = Math.floor(Math.random() * 12 + 2);
      this.data[1].position = (this.data[1].position + GrayNumber1) % 40;
      gMapStore.updateGMap(playerStore.data[1].playerID, playerStore.data[1].position);
    }
    if (this.data[2].status) {
      const GrayNumber2 = Math.floor(Math.random() * 12 + 2);
      this.data[2].position = (this.data[2].position + GrayNumber2) % 40;
      gMapStore.updateGMap(playerStore.data[2].playerID, playerStore.data[2].position);
    }
    if (this.data[3].status) {
      const GrayNumber3 = Math.floor(Math.random() * 12 + 2);
      this.data[3].position = (this.data[3].position + GrayNumber3) % 40;
      gMapStore.updateGMap(playerStore.data[3].playerID, playerStore.data[3].position);
    }
  };

  @action
  updateMoney = (PID: String) => {
    this.data.forEach((element) => {
      if (element.playerID === PID) {
        element.money = element.money - 200;
      }
    });
  };

  @action
  payMoney = (payPID: String, recheivePID: String) => {
    this.data.forEach((element) => {
      if (element.playerID === payPID) {
        element.money = element.money - 15;
      }
      if (element.playerID === recheivePID) {
        element.money = element.money + 15;
      }
    });
  };

  @action
  updatePorpertyMoney = (PID: String) => {
    this.data.forEach((element) => {
      if (element.playerID === PID && element.position in [0, 35]) {
        element.money = element.money + 200;
      }
      if (element.playerID === PID && element.position in [5, 15, 20, 25]) {
        element.money = element.money - 50;
      }
    });
  };

  @action
  fetchPlayerName = (PID: String) => {
    this.data.forEach((element) => {
      if (element.playerID === PID) {
        return element.playerName;
      }
    });
    return 'No Owner';
  };
}

const playerStore = new PlayerStore();

export default playerStore;
