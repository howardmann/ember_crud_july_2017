// import Ember from 'ember';

// let director = Ember.Object.extend({
//   id: '',
//   name: '',
//   age: ''
// });

// let movie = Ember.Object.extend({
//   id: '',
//   title: '',
//   year: '',
//   director: null
// });

// let steven = director.create({id: 1, name: 'steven spielberg', age: 60});
// let ridley = director.create({id: 2, name: 'ridley scott', age: 70});

// let jaws = movie.create({id: 1, title: 'jaws', year: 1970, director: steven});
// let alien = movie.create({id: 2, title: 'alien', year: 1975, director: ridley});
// let jurassic = movie.create({id: 3, title: 'jurassic park', year: 1995, director: steven});

// let movies = [jaws, alien, jurassic];
// let directors = [steven, ridley];

// export default Ember.Service.extend({
//   findAll(table){
//     switch(table){
//       case 'movies':
//         return movies;
//       case 'directors':
//         return directors;
//     }
//   },
//   findRecord(table, value){
//     switch(table){
//       case 'movies':
//         return movies.find(item => item.id == value);
//       case 'directors':
//         return directors.find(item => item.id == value);
//     }
//   }
// });
