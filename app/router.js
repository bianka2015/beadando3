import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('alapanyagok', function() {
    this.route('new');
    this.route('list');
    this.route('edit', {path: '/edit/:alapanyag_id'});
  });

  this.route('receptek', function() {
    this.route('new');
    this.route('list');
    this.route('edit', {path: '/edit/:recept_id'});
  });
  
});

  

export default Router;
