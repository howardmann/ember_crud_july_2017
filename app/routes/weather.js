import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.queryRecord('weather', {latitude: '54.35', longitude: '18.6667'});
  }
});