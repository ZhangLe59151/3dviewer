import { IResponse } from './base';

export interface IClientInfo {
  clientId: string;
  clientName: string;
  gender: string;
  birthdate: string;
  mothermaidenname: string;
  placeofbirth: string;
  id1: string;
  photo1: string;
  photo2: string;
  city: string;
  country: string;
}

interface ICkecklistRe {
  checklist: IChecklist[];
}

export interface IChecklist {
  id: string;
  text: string;
  textEN?: string;
  textID?: string;
}

export interface IUrl {
  status: string;
  url: string;
}

type IResponseClientInfo = IResponse<IClientInfo>;
type IResponseUrl = IResponse<IUrl>;
type IResponseCheckList = IResponse<ICkecklistRe>;

export { IResponseClientInfo, IResponseUrl, IResponseCheckList };
