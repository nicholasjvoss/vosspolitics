import { observable, autorun } from 'mobx';

class PoliticsStore {
  @observable userData = {};
  @observable repData = {};
}

let store = window.store = new PoliticsStore();

export default store;
