import Ember from 'ember';
let {$} = Ember;

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.setup();
  },
  setup(){
    this.set('latitude', null);
    this.set('longitude', null);
    this.set('status', null);
  },
  actions: {
    fetch(){
      this.set('status', 'isLoading');
      let URL = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBZK8nJUgGjYtWGPlB5nvhQjKuuUtvjBms"
      $.post(URL)
        .then(data => {
          this.setProperties({
            latitude: data.location.lat,
            longitude: data.location.lng,
            status: 'ok'
          })
        })
        .catch(err => {
          let message = err.responseJSON.error.message;
          this.set('status', message);
        })
    }
  }
});
