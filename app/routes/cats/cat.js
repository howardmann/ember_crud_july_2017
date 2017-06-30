import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    // We rely on different serialziation for findRecord method
    return this.store.findRecord('cat', params.cat_id)
  }
});
