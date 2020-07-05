import { IResponse, IMessageCode } from './base';

export interface IResClient {
  waitingNumber: number;
  status: IMessageCode;
  sessionId: string;
  clientId: string;
  apiKey: string;
  returnUrl: string;
}

export interface IResToken {
  sessionId: string;
  token: string;
}

export interface IRClient {
  clientId: string;
  clientName: string;
  gender: string;
  birthdate: string;
  mothermaidenname: string;
  photo1: string;
  photo2: string;
  sessionId: string;
  waitedTime: number;
  placeofbirth: string;
  id1: string;
  city: string;
  country: string;
}

type IResponseSession = IResponse<IResClient>;
type IResponseToken = IResponse<IResToken>;
type IResponseClient = IResponse<IRClient>;

export { IResponseSession, IResponseToken, IResponseClient };
