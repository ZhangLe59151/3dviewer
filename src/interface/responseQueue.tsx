import { IResponse } from './base';

interface IQueue {
  waitingNumber: number;
}

type IResponseQueue = IResponse<IQueue>;

export { IResponseQueue };
