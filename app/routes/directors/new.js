import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // Return 2 models one for directors and the other for movies where we will set our associations
    // Ember RSVP hash allows us to make multiple server requests
    // Alternative to creating an empty record is setting an empty object to capture our form properties
    return Ember.RSVP.hash({
      director: {},
      movies: this.store.findAll('movie')
    })
  },
  actions: {
    createDirector(){
      let params = this.get('currentModel.director');
      let director = this.store.createRecord('director', params);
      // Get value of movie id selected
      let movieId = Ember.$('select option:selected').val();
      // Get the movieObject from the store
      let movie = this.store.peekRecord('movie', movieId);
      // Add movie to director model
      director.set('movies', [movie]);
      // Persist both models
      director.save()
      .then(() => movie.save())
      .then(() => this.transitionTo('directors'))
    }
  }
});