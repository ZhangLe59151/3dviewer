/* eslint-disable @typescript-eslint/no-invalid-this */
import { observable, action } from 'mobx';
import i18n from 'i18n';

const LANGUAGE = 'LANGUAGE';

class SetLanguage {
  @observable
  data: any = {
    id: 'en',
    en: 'id',
    current: 'id',
  };

  @action
  getData = () => {
    let data;
    const dataStr = sessionStorage.getItem(LANGUAGE);
    if (!dataStr) {
      data = {
        id: 'en',
        en: 'id',
        current: 'id',
      };
    } else {
      data = JSON.parse(dataStr);
    }
    this.data = data;
    return this.data;
  };

  @action
  fetchLanguage = () => {
    return this.getData().current;
  };

  @action
  updateLang = () => {
    const lan = this.getData().current;
    i18n.changeLanguage(this.data[lan]);
    this.getData().current = this.data[lan];
    this.setDataToSessionStorage(this.data);
  };

  @action
  selectLang = (lang: string) => {
    i18n.changeLanguage(lang);
    this.getData().current = lang;
    this.setDataToSessionStorage(this.data);
  };

  @action
  setDataToSessionStorage = (payload: any) => {
    const dataStr = JSON.stringify(payload);
    sessionStorage.setItem(LANGUAGE, dataStr);
  };
}

const setLan = new SetLanguage();

export default setLan;
