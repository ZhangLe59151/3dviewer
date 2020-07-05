interface Ilogin {
  username: string;
  password: string;
}

interface IRegister {
  agentId: string;
  username: string;
  password: string;
  name: string;
}

interface ISearch {
  agentId: string;
  filters: {
    agentId: string;
    clientId: string;
  };
}

export { Ilogin, IRegister, ISearch };
