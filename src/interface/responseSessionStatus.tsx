import { IResponse } from './base';

export enum IStatusCode {
  QUEUING = 'QUEUING',
  ONGOING = 'ONGOING',
  SUCCESS = 'SUCCESS',
  CLIENT_STOP_QUEUING = 'CLIENT_STOP_QUEUING',
  CLIENT_CANCELLED = 'CLIENT_CANCELLED',
  AGENT_CANCELLED = 'AGENT_CANCELLED',
  NOT_FOUND = 'NOT_FOUND',
  NULL = 'NULL',
}

interface IStatus {
  status: IStatusCode;
  sessionId: string;
}

type IResponseSessionStatus = IResponse<IStatus>;

export { IResponseSessionStatus };
