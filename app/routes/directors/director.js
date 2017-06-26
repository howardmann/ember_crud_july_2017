import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('directors', params.director_id);
  },
  store: Ember.inject.service()
});
