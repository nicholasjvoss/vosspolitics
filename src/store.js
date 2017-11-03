import { observable, action, runInAction } from 'mobx';
import { civicInfoApiKey, congressApiKey } from './secret/APIKeys';
// import queryString from 'query-string';

class PoliticsStore {
    @observable navIsVisible = false;
    @observable currentTab = 0;
    @observable fetched = false;
    @observable repData = {
        myReps: {
            house: [],
            senate: [],
        },
    };
    @observable selectedRep = {};
    @observable userData = {};
    @observable myRepresentatives = {
        showRepDetail: false,
    }
    @observable showRepDetail = false;

    @action
    repDetailIsVisible(isToggled) {
        this.myRepresentatives.howRepDetail = isToggled;
    }

    // ===== Get district info / get all reps / get just user reps =====

    @action
    fetchDataFromAddress(address) {
        const request = new Request(`https://www.googleapis.com/civicinfo/v2/representatives?address=${ address }&key=${ civicInfoApiKey }`);
        const options = {
            method: 'GET',
            cache: 'default',
            json: true,
        }

        fetch(request, options)
            // convert to JSON
            .then(response => response.json())

            // get and set 'state' and 'district' for userData
            .then((data) => {
                const userDistrictInfo = this.getDistrictInfo(data);

                runInAction(() => {
                    this.fetched = true;
                    this.userData = { ...this.userData, ...userDistrictInfo };
                });

                return userDistrictInfo;
            })

            // get my house and senate reps
            .then((userDistrictInfo) => {
                const { state, district } = userDistrictInfo;
                this.fetchCongress('house');
                this.fetchCongress('senate');
                this.fetchMyReps(state, district);

                runInAction(() => {
                    this.fetched = true;
                });

            })

            .catch((error) => {
                runInAction(() => {
                    this.fetched = false;
                });
            })
    }

    // ===== Get all congressional representatives from both chambers =====

    @action fetchCongress(chamber) {
        const request = new Request(`https://api.propublica.org/congress/v1/115/${chamber}/members.json`, {
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
            .then(response => response.json())
            .then(data => {
                runInAction(() => {
                    this.repData[chamber] = data.results[0];
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // ===== Get all user's representatives based on district information =====

    @action
    fetchMyReps(state, district) {
        const reqHeaders = {
            headers: new Headers({ 'X-API-Key': congressApiKey}),
        };

        const options = {
            method: 'GET',
            cache: 'default',
            json: true,
        };

        const myHouseRepsRequest = new Request(`https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`, reqHeaders);
        const mySenateRepsRequest = new Request(`https://api.propublica.org/congress/v1/members/senate/${state}/current.json`, reqHeaders);

        // fetch and set user senators
        const mySenateRepsResponse = fetch(mySenateRepsRequest, options)
            .then(response => response.json())
            .then(data => {
                runInAction(() => {
                    this.repData.myReps.senate = data.results;
                });
            })
            .catch((error) => {
                console.log(error)
            })

        const myHouseRepsResponse = fetch(myHouseRepsRequest, options)
            .then(response => response.json())
            .then(data => {
                runInAction(() => {
                    this.repData.myReps.house = data.results;
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
                    this.repData.derp = data.results;
                    // this.repData.myReps.senate = data.results[0];
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    fetchMyHouse(state, district) {
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
                    this.repData.myReps.house = data.results[0];
                });
            })

            .catch((error) => {
                console.log(error)
            })
    }

    getDistrictInfo(data) {
        const { normalizedInput } = data;

        const divisions = Object.keys(data.divisions);
        const lastDivision = divisions[2]; // this one has state and district info

        // break apart the string and create an array with
        const lastDivisionArr = lastDivision.split('state:');
        const newDivisionArr = lastDivisionArr[1].split('/cd:');

        const divisionIds = {
            state: newDivisionArr[0],
            district: newDivisionArr[1],
        };
        const newdata = { ...this.userData, ...divisionIds, ...normalizedInput, };

        // dis
        return newdata;
    }

    @action getRepDetail(repId) {
        const request = new Request(`https://api.propublica.org/congress/v1/members/${ repId }.json`, {
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
            .then(response => response.json())
            .then(data => {
                // console.log('selectedRep:', data.results[0]);
                runInAction(() => {
                    this.selectedRep = data.results[0];
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

let store = window.store = new PoliticsStore();

export default store;
