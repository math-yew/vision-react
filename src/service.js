// import { createClient } from 'pexels';
import key from './key.js';
// const client = createClient(key);

let ready = true;

const Service = {
  blankBoard: {name:"New",photos:[]},
  getData: function(id) {
      console.log("getData");
      let storage = window.localStorage;
      let storageStr = storage.getItem("vision");
      let parsed = JSON.parse(storageStr);
      if(id > -1) return parsed[id];
      return parsed;
  },
  setData: function(data) {
    let prepped = JSON.stringify(data);
    let storage = window.localStorage;
    let response = storage.setItem("vision", prepped);
  },
  getPexelPics: function(search) {
    // let url = "https://api.pexels.com/v1/search?query=people";
    console.log("getPexelPics: " + search);
    let searchPrepped = search.replace(/\s/gi, "+");
    console.log(searchPrepped);
    let url = "https://api.pexels.com/v1/search?query=" + searchPrepped;
  // {
  //     method: "GET",
  //     headers: {
  //       Authorization: key
  //     }
  //   }
    if(ready){
      ready = false;
    return fetch(url, {
          method: "GET",
          headers: {
            Authorization: key
          }
        }).then(resp => {
        console.log("fetched");
       return resp.json()
      })
      .then(data => {
       console.log("#: " + data.photos);
       ready = true;
       return data.photos;
      })
    }
  }
}

export default Service;
