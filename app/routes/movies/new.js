import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // Create a new empty model, we will use this to capture data from the form properties
    return this.store.createRecord('movie');
  },
  deactivate(){
    // The deactive hook is executed when the router completey exits this route. Then we run rollbackAttributes() on the model, which will undo any unpersisted models
    // Purpose is to avoid empty null state models when we visit the new route
    this.get('currentModel').rollbackAttributes();
  },
  actions: {
    createMovie(model){
      // Save the model and then transition to Movies route
      model.save().then(() => this.transitionTo('movies'));
    }
  }
});
