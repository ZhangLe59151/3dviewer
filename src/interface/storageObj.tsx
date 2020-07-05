import { IMessageCode } from './base';
import { IwsEvent } from './websoketBase';
import { IStatusCode } from './responseSessionStatus';

export interface IClientVideo {
  waitingNumber: number;
  status: IMessageCode;
  sessionId: string;
  clientId: string;
  apiKey: string;
  token: string;
  subscriber: boolean;
  wsEvent: IwsEvent;
  callstatus: IStatusCode;
}

export interface IClientObj {
  clientId: string;
  clientName: string;
  gender: string;
  birthdate: string;
  mothermaidenname: string;
  placeofbirth: string;
  id1: string;
  photo2: string;
  photo1: string;
  takephoto1: string;
  takephoto2: string;
  waitingSec: number;
  clientStatus: boolean;
}

export interface IAgentObj {
  agentId: string;
  agentName: string;
  agentSessionId: string;
  agentApiKey: string;
  AccessToken: string;
  role: string;
  hasClient: boolean;
  pickedClientId: string;
  queueNumber: number;
  agentToken: string;
  agentSessionStatus: IwsEvent;
  wsDisconnect: boolean;
}

export interface IAgentInfo {
  id: string;
  name: string;
  role: string;
}

export interface IloginObj {
  waitingCustomerNo: number;
  apiKey: string;
  accessToken: string;
  agent: IAgentInfo;
}
