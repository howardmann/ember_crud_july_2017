import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // Create a new empty model, we will use this to capture data from the form properties
    return this.store.createRecord('movie');
  },
  actions: {
    createMovie(model){
      // Save the model and then transition to Movies route
      model.save().then(() => this.transitionTo('movies'));
    }
  }
});
