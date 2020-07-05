import { IResponse } from './base';

export interface ISearchHistory {
  filters: {
    agentId: string;
    clientId: string;
  };
}

export interface ISearchHistoryResult {
  summaries: IHistoryResponseData[];
}

export interface IHistoryData {
  key: string;
  index: string;
  clientId: string;
  agentId: string;
  startTime: string | null;
  endTime: string | null;
  videolength: string[];
  checklist: IChecklist | null;
  status: string;
  videoPath: string;
  photoPath: string;
}

export interface IChecklist {
  [key: string]: boolean;
  // key for dk:
  // consistentAge | consistentFaceWithKTP | consistentMMN | isSelfieWithKTP
}

export interface IHistoryResponseData {
  sessionId: string;
  clientId: string;
  agentId: string;
  status: string;
  checklist: IChecklist;
  startTime: string;
  endTime: string;
  videoPath: string;
  photoPath: string;
}

export interface IDownload {
  links: string[];
}

// export interface ICheckList {
//   consistentFaceWithKTP: boolean;
//   isSelfieWithKTP: boolean;
//   consistentAge: boolean;
//   consistentMMN: boolean;
// }

export interface IResponseHistoryPac {
  summaries: IHistoryResponseData[];
}

type IResponseHistory = IResponse<IResponseHistoryPac>;
type IResponseDownload = IResponse<IDownload>;

export { IResponseHistory, IResponseDownload };
