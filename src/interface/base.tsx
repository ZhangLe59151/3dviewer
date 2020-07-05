export enum IResponseCode {
  SUCCESS = 'SUCCESS',
  FAIL = 'FAILED',
  COMPLETED = 'COMPLETED',
  TOKENEXISTED = 'TOKEN_EXISTED',
  NULL = 'NULL',
}

export enum IMessageCode {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  INITIATE = 'INITIATE',
  PROCESSING = 'PROCESSING',
  NULL = 'NULL',
}

export enum IAgentRole {
  AGENT = 'AGENT',
  ADMIN = 'ADMIN',
}

export enum ISessionStatusCode {
  CLIENTSTOPQUEUING = 'CLIENT_STOP_QUEUING',
  AGENTCANCELLED = 'AGENT_CANCELLED',
  QUEUING = 'QUEUING',
  ONGOING = 'ONGOING',
  SUCCESS = 'SUCCESS',
  CLIENTCANCELLED = 'CLIENT_CANCELLED',
  NOT_FOUND = 'NOT_FOUND',
}

export enum IRegisterCode {
  USERNAMEEXIST = 'Username already exist',
}

export interface IResponse<D, E = null> {
  [x: string]: any;
  code: IResponseCode;
  message: string;
  data: D;
}

// ##############  Object #####################
export interface IAgent {
  id: string;
  name: string;
  role: string;
}
