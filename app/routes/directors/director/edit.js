import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition){
    // Workaround to get parent route params
    let directorId = transition.params['directors.director'].director_id;
    return Ember.RSVP.hash({
      director: this.store.findRecord('director', directorId),
      movies: this.store.findAll('movie')
    })
  },
  actions: {
    updateDirector(model){
      model.save().then(director => this.transitionTo('directors.director', director));
    }
  }
});
