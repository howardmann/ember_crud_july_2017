import Ember from 'ember';

export default Ember.Route.extend({
  // Return multiple models in our model hook (Notice we can use a separate weather model in our google model)
  // Here we pre-load the route with our custom weather model and  set it to the weather property
  // And we set a placeholder object for coordinates
  // For demo purposes our route will render a separate component which will fetch data and trigger a route action to update and set the properties of its parent route -> this follows the DDAU principle
  model(){
    return Ember.RSVP.hash({
      weather: this.store.queryRecord('weather', {latitude: '0', longitude: '0'}),
      coordinates: {lat: '0', lng: '0'}
    })
  }, 
  actions: {
    // This action is passed to the google-geolocator component who is responsible for fetching the data and emitting the action back to the route to handle
    // Here the route will take the params and update the model's coordinate properties
    updateCoordinates(coordinates){
      this.set('currentModel.coordinates', coordinates)
    },
    // This will re-rerun queryRecord based on the latest coordinates
    fetchWeather(){      
      let coordinates = this.get('currentModel.coordinates');
      this.store.queryRecord('weather', {latitude: coordinates.lat, longitude: coordinates.lng});
    }
  }
});

