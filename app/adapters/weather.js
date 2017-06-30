import DS from 'ember-data';
let {$} = Ember;

// Using default adapter, writing our own adapter from scratch
export default DS.Adapter.extend({
  queryRecord(store, type, query){
    let latitude = query.latitude;
    let longitude = query.longitude;
    return $.ajax({
      url: `https://api.darksky.net/forecast/438668b8945bed8564ce3ecc62112a27/${latitude},${longitude}`,
      type: "GET",
      dataType: "jsonp"
    })
  }
});