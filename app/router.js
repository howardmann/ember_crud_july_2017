import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movies', function() {
    this.route('movie', {
      path: ':movie_id'
    }, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('directors', function() {
    this.route('director', {
      path: ':director_id'
    }, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('cats', function() {
    this.route('cat', {
      path: ':cat_id'
    });
    this.route('new');
  });
  this.route('weather', function(){});
});

export default Router;
