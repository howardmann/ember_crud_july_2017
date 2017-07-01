import DS from 'ember-data';

export default DS.Serializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    if (requestType == 'queryRecord') {
      return this.normalizeQueryRecordResponse(...arguments);
    }
  },
  normalizeQueryRecordResponse(store, primaryModelClass, payload, id){
    return {
      data: this.normalize(primaryModelClass, payload)
    }
  },
  normalize(typeClass, hash){
    return {
      id: 1,
      type: typeClass.modelName,
      attributes: {
        latitude: hash.latitude,
        longitude: hash.longitude,
        timezone: hash.timezone,
        time: hash.currently.time,
        current: hash.hourly.summary,
        outlook: hash.daily.data                  
      }
    }
  }
});
