import { observable, action } from 'mobx';
import { IAgentObj, IloginObj } from '../interface/storageObj';
import { IwsEvent } from '../interface/websoketBase';

const STORE_AGENT = 'STORE_AGENT';

class AgentStore {
  @observable
  data: IAgentObj = {
    agentId: '',
    agentName: '',
    agentSessionId: '',
    agentApiKey: '',
    AccessToken: '',
    role: '',
    hasClient: false,
    pickedClientId: '',
    queueNumber: 0,
    agentToken: '',
    agentSessionStatus: IwsEvent.NULL,
    wsDisconnect: false,
  };

  @action
  fetchAgentId = () => {
    return this.getData().agentId;
  };
  @action
  fetchAgent = () => {
    return this.getData().agentName;
  };
  @action
  fetchAgentApiKey = () => {
    return this.getData().agentApiKey;
  };
  @action
  fetchAgentSessionId = () => {
    return this.getData().agentSessionId;
  };
  @action
  fetchAccessToken = () => {
    return this.getData().AccessToken;
  };
  @action
  fetchRole = () => {
    return this.getData().role;
  };
  @action
  fetchHasClient = () => {
    return this.getData().hasClient;
  };
  @action
  fetchPickedClientId = () => {
    return this.getData().pickedClientId;
  };
  @action
  fetchAgentToken = () => {
    return this.getData().agentToken;
  };
  @action
  fetchwsDisconnect = () => {
    return this.getData().wsDisconnect;
  };
  @action
  fetchQueueNumber = () => {
    return this.getData().queueNumber;
  };

  @action
  agentIsLogin = () => {
    if (this.getData().AccessToken === '') {
      return false;
    } else {
      return true;
    }
  };

  @action
  updateAgentSessionId = (payload: string) => {
    let data = this.getData();
    data.agentSessionId = payload;
    this.data = data;
    this.setDataToSessionStorage(this.data);
  };

  @action
  updateAgentVideoStatus = (payload: IwsEvent) => {
    let data = this.getData();
    data.agentSessionStatus = payload;
    this.data = data;
    this.setDataToSessionStorage(this.data);
  };

  @action
  updateLogin = (payload: IloginObj) => {
    let data = this.getData();
    data.AccessToken = payload.accessToken;
    data.agentId = payload.agent.id;
    data.agentName = payload.agent.name;
    data.role = payload.agent.role;
    data.agentApiKey = payload.apiKey;
    data.queueNumber = payload.waitingCustomerNo;
    this.data = data;
    this.setDataToSessionStorage(data);
  };

  @action
  pickupClient = (clientId: string) => {
    let data = this.getData();
    data.hasClient = true;
    data.pickedClientId = clientId;
    data.wsDisconnect = false;
    this.data = data;
    this.setDataToSessionStorage(this.data);
  };

  @action
  clientLeave = () => {
    let data = this.getData();
    data.hasClient = false;
    data.pickedClientId = '';
    data.wsDisconnect = true;
    this.data = data;
    this.setDataToSessionStorage(this.data);
  };

  @action
  updateQueueNumber = (payload: number) => {
    let data = this.getData();
    data.hasClient = true;
    data.queueNumber = payload;
    data.wsDisconnect = false;
    this.data = data;
    this.setDataToSessionStorage(this.data);
  };

  @action
  updateToken = (payload: string) => {
    let data = this.getData();
    data.agentToken = payload;
    data.wsDisconnect = false;
    this.data = data;
    this.setDataToSessionStorage(this.data);
  };

  @action
  logout = () => {
    sessionStorage.removeItem(STORE_AGENT);
  };

  @action
  removeAgentSession = () => {
    let data = this.getData();
    data.wsDisconnect = false;
    data.hasClient = false;
    data.agentSessionId = '';
    data.agentToken = '';
    data.queueNumber = 0;
    data.agentToken = '';
    data.pickedClientId = '';
    this.data = data;
    this.setDataToSessionStorage(this.data);
  };

  @action
  getData = () => {
    let data;
    const dataStr = sessionStorage.getItem(STORE_AGENT);
    if (!dataStr) {
      data = {
        agentId: '',
        agentName: '',
        agentSessionId: '',
        agentApiKey: '',
        AccessToken: '',
        role: '',
        hasClient: false,
        pickedClientId: '',
        queueNumber: 0,
        agentToken: '',
        agentSessionStatus: IwsEvent.NULL,
        wsDisconnect: false,
      };
    } else {
      data = JSON.parse(dataStr);
    }
    this.data = data;
    return this.data;
  };

  @action
  setDataToSessionStorage = (payload: IAgentObj) => {
    const dataStr = JSON.stringify(payload);
    sessionStorage.setItem(STORE_AGENT, dataStr);
  };
}

const agentStore = new AgentStore();

export default agentStore;
