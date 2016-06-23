'use strict';

angular.module('codeCareerHunt2App')
  .config(function($stateProvider) {
    $stateProvider.state('detail', {
       url: '/detail',
       template: '<detail></detail>'
    });
  });
