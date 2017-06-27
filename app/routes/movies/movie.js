import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('movie', params.movie_id);
  },
  actions: {
    deleteMovie(movie){
      movie.destroyRecord().then(()=> this.transitionTo('movies'));
    },
    updateMovie(model){
      model.save().then(movie => this.transitionTo('movies.movie', movie));
    }
  }
});
