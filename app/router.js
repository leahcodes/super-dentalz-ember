import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rentals');
  this.route('about');
  this.route('contact');
  this.route('brush-types');
});

export default Router;
