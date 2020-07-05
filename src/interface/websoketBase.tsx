export interface IStorm<D> {
  messageType: string;
  data: D;
}
export enum IwsEvent {
  AGENT_CANCEL_EVENT = 'AGENT_CANCEL_EVENT',
  AGENT_PAUSE_EVENT = 'AGENT_PAUSE_EVENT',
  CLIENT_CANCEL_EVENT = 'CLIENT_CANCEL_EVENT',
  NULL = 'NULL',
}
