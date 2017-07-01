import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr(),
  longitude: DS.attr(),
  timezone: DS.attr('string'),
  time: DS.attr('date'),
  outlook: DS.attr(),
  current: DS.attr()
});
