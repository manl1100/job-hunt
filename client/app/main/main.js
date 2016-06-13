'use strict';

angular.module('codeCareerHunt2App')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main></main>'
    });

    $stateProvider.state('apps', {
      url: '/apps',
      template: '<jobapps></jobapps>'
    });
  });
