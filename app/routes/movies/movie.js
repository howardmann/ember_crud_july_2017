import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('movies', params.movie_id);
  },
  store: Ember.inject.service()
});
