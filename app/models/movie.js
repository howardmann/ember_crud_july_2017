import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  year: DS.attr('number'),
  boxOffice: DS.attr('number'),
  status: Ember.computed('boxOffice',function(){
    if (this.get('boxOffice') > 10000000) {
      return 'success';
    } else {
      return 'flop';
    }
  }),
  director: DS.belongsTo('director')
});
