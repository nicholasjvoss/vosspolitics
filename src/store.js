import { observable, action, runInAction } from 'mobx';
import { civicInfoApiKey, congressApiKey } from './secret/APIKeys';
import queryString from 'query-string';

class PoliticsStore {
    @observable currentTab = 0;
    @observable fetched = false;
    @observable repData = {};
    @observable myReps = {};
    @observable allReps = {};
    @observable userData = {};

    @action
    fetchDistricInfoFromAddress(address) {
        const request = new Request(`https://www.googleapis.com/civicinfo/v2/representatives?address=${ address }&key=${ civicInfoApiKey }`);
        const options = {
            method: 'GET',
            cache: 'default',
            json: true,
        }

        const fetchResponse = fetch(request, options)
            // convert to JSON
            .then(response => response.json())

            // get and set 'state' and 'district' for userData
            .then((data) => {
                const userDistrictInfo = this.getDistrictInfo(data);

                runInAction(() => {
                    this.fetched = true;
                    this.userData = { ...this.userData, ...userDistrictInfo };
                    // this.repData = data;
                });

                return userDistrictInfo;
            })

            // get my house and senate reps
            .then((userDistrictInfo) => {
                const { state, district } = userDistrictInfo;
                this.fetchAllHouse();
                this.fetchAllSenate();
                this.fetchMySenate(state);
                this.fetchMyHouse(state, district);

                console.log(userDistrictInfo);
            })

            // get all house and senate reps
            .then(() => {

            })

            .catch((error) => {
                runInAction(() => {
                    this.fetched = false;
                });
            })
    }







    // @action
    // async fetchReps(address) {
    //     try {
    //         const request = new Request(`https://www.googleapis.com/civicinfo/v2/representatives?address=${ address }&includeOffices=true&levels=country&key=${ civicInfoApiKey }`); //5925+Weddington+Dr
    //         const options = {
    //             method: 'GET',
    //             cache: 'default',
    //             json: true,
    //         }
    //         const response = await fetch(request, options);
    //         const json = await response.json();
    //
    //         // grab the state and district for this address
    //         const userDistrictInfo = this.getDistrictInfo(json);
    //         const { state, district } = userDistrictInfo;
    //
    //         // get reps from each chamber
    //         const house = this.getHouse(state, district);
    //         const senate = this.getSenate(state);
    //
    //
    //         const newRepData = {
    //             house: house,
    //             senate: senate,
    //         };
    //
    //         runInAction(() => {
    //             this.fetched = true;
    //             this.repData = json;
    //         });
    //
    //         const userState = this.userData.state;
    //         const userDistrict = this.userData.district;
    //         // console.log(this.repData);
    //     }
    //
    //     catch(error) {
    //         runInAction(() => {
    //             this.fetched = false;
    //         });
    //     }
    // }



    @action
    fetchAllHouse() {
        const request = new Request(`https://api.propublica.org/congress/v1/115/house/members.json`, {
            headers: new Headers({
                'X-API-Key': congressApiKey
            }),
        });

        const options = {
            method: 'GET',
            cache: 'default',
            json: true,
        }

        const fetchResponse = fetch(request, options)
            // convert to JSON
            .then(response => response.json())
            .then(data => {
                runInAction(() => {
                    this.allReps = data.results;
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    @action
    fetchAllSenate() {
        const request = new Request(`https://api.propublica.org/congress/v1/115/senate/members.json`, {
            headers: new Headers({
                'X-API-Key': congressApiKey
            }),
        });

        const options = {
            method: 'GET',
            cache: 'default',
            json: true,
        }

        const fetchResponse = fetch(request, options)
            // convert to JSON
            .then(response => response.json())
            .then(data => {
                runInAction(() => {
                    this.allReps = data.results;
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    @action
    fetchMySenate(state) {
        const request = new Request(`https://api.propublica.org/congress/v1/members/senate/${state}/current.json`, {
            headers: new Headers({
                'X-API-Key': congressApiKey
            }),
        });

        const options = {
            method: 'GET',
            cache: 'default',
            json: true,
        }

        const fetchResponse = fetch(request, options)
            // convert to JSON
            .then(response => response.json())
            .then(data => {
                runInAction(() => {
                    this.myReps.senate = data.results;
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async fetchMyHouse(state, district) {
        const request = new Request(`https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`, {
            headers: new Headers({
                'X-API-Key': congressApiKey
            }),
        });

        const options = {
            method: 'GET',
            cache: 'default',
            json: true,
        }

        const fetchResponse = fetch(request, options)
            // convert to JSON
            .then(response => response.json())

            .then(data => {
                runInAction(() => {
                    this.myReps.house = data.results;
                });
            })

            .catch((error) => {
                console.log(error)
            })
    }

    getDistrictInfo(data) {
        const divisions = Object.keys(data.divisions);
        const lastDivision = divisions[2]; // this one has state and district info

        // break apart the string and create an array with
        const lastDivisionArr = lastDivision.split('state:');
        const newDivisionArr = lastDivisionArr[1].split('/cd:');

        const divisionIds = {
            state: newDivisionArr[0],
            district: newDivisionArr[1],
        };
        const newdata = { ...this.userData, ...divisionIds };

        // dis
        return newdata;
    }
}

let store = window.store = new PoliticsStore();

export default store;
