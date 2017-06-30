import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  // normalizeResponse is used to normalize/ transform a payload from the server/ api to a JSON:API document
  // Rather than create the JSON:API structure directly, we can instead modify the payload to fit the DS.JSONSerializer structure and call this._super() which will return JSON:API for us. This approach requires less code, as opposed to manipulating the payload to the JSON:API format ourselves.

  // 1) This will serialize the payload to fit into DS.JSONSerializer structure
  // Note use normalizeFindAllReponse to limit normalisation to method findAll()
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType){
    // SOURCE: payload from server looks like below
    // {
    //   cats: [
    //     {
    //       id: 1,
    //       name: "fluffy",
    //       age: 12,
    //       secret: {
    //         color: "purple"
    //       }
    //     },
    //     {
    //       id: 2,
    //       name: "evil kitty",
    //       age: 65,
    //       secret: {
    //         color: "flame"
    //       }
    //     }
    //   ]
    // }
    // The Basic JSON Serializer (not to be confused with the JSON:API Serializer) expect the data in a simpler format
    // [
    //   {id: 1, name: "fluffy", age: 12, color: "purple"},
    //   {id: 2, name: "evil kitty", age: 65, color: "flame"},
    // ]
    // To transform the payload into JSON Serializer we will need to extract the dat from the cats property and then map through and extract the nested properties
    // We can also change the attributes based on the payload (e.g. changing spelling of color to colour)
    let newPayload = payload.cats.map(function(item, i){
      return {
        id: item.id,
        name: item.name,
        age: item.age,
        colour: item.secret.color
      }
    });
    // 2) This will then turn JSONSerializer payload by returning JSON:API format for us
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },
  // Now we normalize the findRecord response as it is a different payload structure to findAll
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType){
    let newPayload = {
      id: payload.id,
      name: payload.name,
      age: payload.age,
      colour: payload.secret.color      
    }
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },
  // Serialize will transform the payload that returns back to the server
  // Here we rename the colour property
  serialize(snapshot, options){
    var payload = this._super(...arguments);
    payload.color = payload.colour;
    delete payload.colour;
    return payload
  }
});