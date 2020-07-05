import { observable, action } from 'mobx';

class DashBoardStore {
  @observable
  list: string[] = [];

  fetchList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // do something in async
    this.updateList(['1', '2', '3']);
  };

  @action
  updateList = (payload: string[]) => {
    this.list = payload;
  };
}

const dashBoardStore = new DashBoardStore(); // dashBoardStore is shared within components

export default dashBoardStore;
