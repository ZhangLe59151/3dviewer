import { observable, action } from 'mobx';
import { IClientObj } from 'interface/storageObj';
import { IClientInfo } from 'interface/responseClientInfo';
import { IRClient } from 'interface/responseClientObj';

const STORE_CLIENT_PICK = 'STORE_CLIENT_PICK';

class ClientStore {
  @observable
  data: IClientObj = {
    clientId: '',
    clientName: '',
    gender: '',
    birthdate: '',
    mothermaidenname: '',
    placeofbirth: '',
    id1: '',
    photo2: '',
    photo1: '',
    takephoto1: '',
    takephoto2: '',
    waitingSec: 0,
    clientStatus: false,
  };

  @action
  getData = () => {
    let data;
    const dataStr = sessionStorage.getItem(STORE_CLIENT_PICK);
    if (!dataStr) {
      data = {
        clientId: '',
        clientName: '',
        gender: '',
        birthdate: '',
        mothermaidenname: '',
        placeofbirth: '',
        id1: '',
        photo2: '',
        photo1: '',
        takephoto1: '',
        takephoto2: '',
        waitingSec: 0,
        clientStatus: false,
      };
    } else {
      data = JSON.parse(dataStr);
    }
    this.data = data;
    return this.data;
  };

  @action
  addClient = (payload: IRClient) => {
    this.data = this.getData();
    this.data.clientId = payload.clientId;
    this.data.clientName = payload.clientName;
    this.data.photo2 = payload.photo2;
    this.data.photo1 = payload.photo1;
    this.data.gender = payload.gender;
    this.data.mothermaidenname = payload.mothermaidenname;
    this.data.id1 = payload.id1;
    this.data.placeofbirth = payload.placeofbirth;
    this.data.birthdate = payload.birthdate;
    this.data.waitingSec = payload.waitedTime;
    this.setDataToSessionStorage(this.data);
  };

  @action
  updateClient = (payload: IClientInfo) => {
    this.data = this.getData();
    this.data.clientId = payload.clientId;
    this.data.clientName = payload.clientName;
    this.data.photo2 = payload.photo2;
    this.data.photo1 = payload.photo1;
    this.data.gender = payload.gender;
    this.data.mothermaidenname = payload.mothermaidenname;
    this.data.id1 = payload.id1;
    this.data.placeofbirth = payload.placeofbirth;
    this.data.birthdate = payload.birthdate;
    this.setDataToSessionStorage(this.data);
  };

  @action
  fetchClientPhotolink = () => {
    return this.getData().photo2;
  };

  @action
  fetchIdPhotolink = () => {
    return this.getData().photo1;
  };

  @action
  fetchClientId = () => {
    return this.getData().clientId;
  };

  @action
  fetchClientName = () => {
    return this.getData().clientName;
  };

  @action
  fetchGender = () => {
    return this.getData().gender;
  };

  @action
  fetchMMN = () => {
    return this.getData().mothermaidenname;
  };

  @action
  fetchNIK = () => {
    return this.getData().id1;
  };

  @action
  fetchPOB = () => {
    return this.getData().placeofbirth;
  };

  @action
  fetchBirthDate = () => {
    return this.getData().birthdate;
  };

  @action
  fetchWaitingSec = () => {
    return this.getData().waitingSec;
  };

  @action
  fetchTakePhoto1 = () => {
    return this.getData().takephoto1;
  };

  @action
  fetchTakePhoto2 = () => {
    return this.getData().takephoto2;
  };

  @action
  updateTakePhoto1 = (payload: string) => {
    this.data = this.getData();
    this.data.takephoto1 = 'data:image/png;base64,' + payload;
    this.setDataToSessionStorage(this.data);
  };

  @action
  updateTakePhoto2 = (payload: string) => {
    this.data = this.getData();
    this.data.takephoto2 = 'data:image/png;base64,' + payload;
    this.setDataToSessionStorage(this.data);
  };

  @action
  removeClient = () => {
    let data = {
      clientId: '',
      clientName: '',
      gender: '',
      birthdate: '',
      mothermaidenname: '',
      placeofbirth: '',
      id1: '',
      photo2: '',
      photo1: '',
      takephoto1: '',
      takephoto2: '',
      waitingSec: 0,
      clientStatus: false,
    };
    this.data = data;
    this.setDataToSessionStorage(this.data);
  };

  @action
  setDataToSessionStorage = (payload: IClientObj) => {
    const dataStr = JSON.stringify(payload);
    sessionStorage.setItem(STORE_CLIENT_PICK, dataStr);
  };
}

const clientStore = new ClientStore();

export default clientStore;
