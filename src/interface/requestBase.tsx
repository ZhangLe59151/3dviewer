export interface Ilogin {
  username: string;
  password: string;
}

export interface IReqSession {
  appSession: string;
}

export interface IReqToken {
  sessionId: string;
  clientId: string;
}
