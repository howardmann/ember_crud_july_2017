import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    // Use peekRecord here to look through the store
    // When visiting the show route 'cats/:cat_id' Ember will make a request to the index route and cache it in the store '/cats'
    // Because the show payload is different the 'serializers/cat.js' will not work
    // We can get around this by not needing to do another server APi request and simply look in the cache store
    return this.store.peekRecord('cat', params.cat_id)
  }
});
