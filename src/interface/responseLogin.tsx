import { IResponse, IAgent } from './base';

interface ILogin {
  waitingCustomerNo: number;
  apiKey: string;
  agent: IAgent;
  accessToken: string;
  status: string;
}

interface ISession {
  sessionId: string;
  token: string;
}

export type IResponseLogin = IResponse<ILogin>;
export type IResponseToken = IResponse<ISession>;
