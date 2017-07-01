import Ember from 'ember';

export function fahrenheitCelsius(params/*, hash*/) {

  switch(params[1]){
    case 'toCelsius':
      var celsius = (params[0] - 32)*(5/9);
      return `${celsius.toFixed(1)} \xB0C`;
    case 'toFahrenheit':
      var fahrenheit = (params[0] - 32)*(5/9);
      return `${fahrenheit.toFixed(1)} \xB0F`;
    default:
      return params[0];      
  }  
}

export default Ember.Helper.helper(fahrenheitCelsius);
