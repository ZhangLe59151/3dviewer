import { IResponse } from './base';

interface IClient {
  clientId: string;
  clientName: string;
  gender: string;
  birthdate: string;
  mothermaidenname: string;
  clientphoto: string;
  idphoto: string;
  sessionId: string;
  address?: string;
}

interface IFaceresult {
  transactionId: string;
  similarity: number;
}

type IResponseClient = IResponse<IClient>;
type IResponseAIFace = IResponse<IFaceresult>;

export { IResponseClient, IResponseAIFace };
