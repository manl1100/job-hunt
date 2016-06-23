'use strict';

(function() {

  class DetailController {

    constructor($http, $scope, socket) {
       this.$http = $http;
       this.socket = socket;
       this.awesomeThings = [];

    }

  }

   angular.module('codeCareerHunt2App')
         .component('detail', {
           templateUrl: 'app/detail/detail.html',
           controller: DetailController
      });

})();

