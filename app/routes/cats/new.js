import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {}
  },
  actions: {
    create(){
      let cat = this.store.createRecord('cat', this.get('currentModel'));
      cat.save().then(()=> this.transitionTo('cats'));
    }
  }
});
