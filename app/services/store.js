import Ember from 'ember';

let movie = Ember.Object.extend({
  id: '',
  title: '',
  year: ''
});

let jaws = movie.create({id: 1, title: 'jaws', year: 1970});
let alien = movie.create({id: 2, title: 'alien', year: 1975});
let jurassic = movie.create({id: 3, title: 'jurassic park', year: 1995});

let movies = [jaws, alien, jurassic];

export default Ember.Service.extend({
  findAll(){
    return movies
  },
  findRecord(value){
    return movies.find(function(item){
      return item.id == value;
    });
  }
});
