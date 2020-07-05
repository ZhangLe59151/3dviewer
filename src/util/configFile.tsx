enum IEnv {
  STAGINGDK = 'STAGINGDK',
  PROD = 'PROD', //
  SG = 'SG', // Update Jenkins file
  LOCAL = 'LOCAL',
}

const Config = {
  STAGING: {
    DownCount: 10,
    DownCountBreak: 5,
    Language: 'id',
    BASEURL: '/game/v1',
  },
  LOCAL: {
    DownCount: 10,
    DownCountBreak: 5,
    Language: 'en',
    BASEURL: '/game/v1',
  },
};

export const configEnv = {
  configFile: Config.STAGING,
};
