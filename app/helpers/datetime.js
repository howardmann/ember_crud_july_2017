import Ember from 'ember';

export function datetime(params/*, hash*/) {
  // API returns datetime in UNIX format, need to multiply by 1000
  let date = new Date(params[0]* 1000);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export default Ember.Helper.helper(datetime);
