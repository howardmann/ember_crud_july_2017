import Ember from 'ember';
let {$} = Ember;

// Simple example of how we can use custom $.ajax requests to fetch and render data
// Standalone UI which uses google geolocate API to performa $.post request to return the current users lat and lng
// We are deliberately not integrating with Ember Data to show how we can still use custom $ ajax
export default Ember.Component.extend({
  // We override the component's init function (must call super) and call a custom setup function
  // This will allow us to set properties to the component as a standalone unique UI
  init(){
    this._super(...arguments);
    this.setup();
  },
  setup(){
    // Set placeholder properties for us to later be able to fetch
    this.set('latitude', null);
    this.set('longitude', null);
    this.set('status', null);
  },
  actions: {
    // Basic ajax request, will post to google and will return lat and lng coordinates
    fetch(){
      this.set('status', 'isLoading');
      let URL = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBZK8nJUgGjYtWGPlB5nvhQjKuuUtvjBms"
      $.post(URL)
        .then(data => {
          let lat = data.location.lat;
          let lng = data.location.lng;
          this.setProperties({
            latitude: lat,
            longitude: lng,
            status: 'ok'
          })
          // Send coordinate up to parent route as params
          // dynamicAction is the name of the action variable we pass the component
          // This is the pub sub pattern where the component has no knowledge of the function. It only knows to sendAction or 'emit' event passing the name of the function and the agreed paramaters
          let coordinates = {lat, lng};
          this.sendAction('dynamicAction', coordinates);
        })
        .catch(err => {
          let message = err.responseJSON.error.message;
          this.set('status', message);
        })
    }
  }
});
