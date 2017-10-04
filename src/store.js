import { observable, action, runInAction } from 'mobx';
import { civicInfoApiKey } from './secret/APIKeys';

class PoliticsStore {
    @observable fetched = false;
    @observable repData = {};

    @action
    async fetchReps(address) {
        try {
            const request = new Request(`https://www.googleapis.com/civicinfo/v2/representatives?address=${ address }&includeOffices=true&levels=country&key=${ civicInfoApiKey }`); //5925+Weddington+Dr
            const options = {
                method: 'GET',
                cache: 'default',
                json: true,
            }
            const response = await fetch(request, options);
            const json = await response.json();
            console.log(json);

            runInAction(() => {
                this.fetched = true;
                this.repData = json;
            });
        }

        catch(error) {
            runInAction(() => {
                this.fetched = false;
            });
        }
    }
}

let store = window.store = new PoliticsStore();

export default store;
