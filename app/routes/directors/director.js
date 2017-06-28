import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('director', params.director_id);
  },
  actions: {
    destroyDirector(director){
      director.destroyRecord().then(()=> this.transitionTo('directors'));      
    }
  }
});
