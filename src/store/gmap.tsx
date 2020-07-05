import { observable, action } from 'mobx';
import playerStore from './player';

const STORE_AGENT = 'STORE_GMAP';

class GMapStore {
  @observable
  data = [
    { ID: '0', BType: 'Go', PID: '0' },
    { ID: '1', BType: 'Property', PID: '0' },
    { ID: '2', BType: 'Property', PID: '0' },
    { ID: '3', BType: 'Property', PID: '0' },
    { ID: '4', BType: 'Property', PID: '0' },
    { ID: '5', BType: 'Gas', PID: '0' },
    { ID: '6', BType: 'Property', PID: '0' },
    { ID: '7', BType: 'Property', PID: '0' },
    { ID: '8', BType: 'Property', PID: '0' },
    { ID: '9', BType: 'Property', PID: '0' },
    { ID: '10', BType: 'Jail', PID: '0' },
    { ID: '11', BType: 'Property', PID: '0' },
    { ID: '12', BType: 'Property', PID: '0' },
    { ID: '13', BType: 'Property', PID: '0' },
    { ID: '14', BType: 'Property', PID: '0' },
    { ID: '15', BType: 'Electricity', PID: '0' },
    { ID: '16', BType: 'Property', PID: '0' },
    { ID: '17', BType: 'Property', PID: '0' },
    { ID: '18', BType: 'Property', PID: '0' },
    { ID: '19', BType: 'Property', PID: '0' },
    { ID: '20', BType: 'Fine', PID: '0' },
    { ID: '21', BType: 'Property', PID: '0' },
    { ID: '22', BType: 'Property', PID: '0' },
    { ID: '23', BType: 'Property', PID: '0' },
    { ID: '24', BType: 'Property', PID: '0' },
    { ID: '25', BType: 'Water', PID: '0' },
    { ID: '26', BType: 'Property', PID: '0' },
    { ID: '27', BType: 'Property', PID: '0' },
    { ID: '28', BType: 'Property', PID: '0' },
    { ID: '29', BType: 'Property', PID: '0' },
    { ID: '30', BType: 'Jail', PID: '0' },
    { ID: '31', BType: 'Property', PID: '0' },
    { ID: '32', BType: 'Property', PID: '0' },
    { ID: '33', BType: 'Property', PID: '0' },
    { ID: '34', BType: 'Property', PID: '0' },
    { ID: '35', BType: 'Gift', PID: '0' },
    { ID: '36', BType: 'Property', PID: '0' },
    { ID: '37', BType: 'Property', PID: '0' },
    { ID: '38', BType: 'Property', PID: '0' },
    { ID: '39', BType: 'Property', PID: '0' },
  ];

  @action
  updateGMap = (PID: string, position: number) => {
    if (
      this.data[position].BType === 'Go' ||
      this.data[position].BType === 'Gas' ||
      this.data[position].BType === 'Jail' ||
      this.data[position].BType === 'Electricity' ||
      this.data[position].BType === 'Fine' ||
      this.data[position].BType === 'Water' ||
      this.data[position].BType === 'Gift'
    ) {
      playerStore.updatePorpertyMoney(PID);
    } else if (this.data[position].PID === '0') {
      this.data[position].PID = PID;
      playerStore.updateMoney(PID);
    } else {
      playerStore.payMoney(PID, this.data[position].PID);
    }
  };
}

const gMapStore = new GMapStore();

export default gMapStore;
