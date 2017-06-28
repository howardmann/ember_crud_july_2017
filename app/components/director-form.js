import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    componentTrigger(model){
      this.sendAction('dynamicAction', model);
    }
  }
});
