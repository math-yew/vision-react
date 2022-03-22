const Service = {
  a: "apple",
  b: "banana",
  c: function (x) {
    return "hi " + x;
  },
  getData: function() {
      let storage = window.localStorage;
      return storage.getItem("vision");
  },
  setData: function(data) {
      let storage = window.localStorage;
      return storage.setItem("vision", data);
  },
  getPexelPics: function() {
    let url = ;
    await fetch(url)
    .then((data)=>return data);
  }
}

export default Service;
