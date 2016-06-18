/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      company: 'Google',
      position: 'Software Engineer'
    }, {
      company: 'Uber',
      position: 'Platform Engineer'
    }, {
      company: 'Amazon',
      position: 'Full Stack Engineer'
    });
  });
