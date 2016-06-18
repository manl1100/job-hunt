'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.company && this.position) {
        this.$http.post('/api/things', {
          company: this.company,
          position: this.position
        });
        this.company = '';
        this.position = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('codeCareerHunt2App')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

  angular.module('codeCareerHunt2App')
    .component('jobapps', {
      templateUrl: 'app/main/jobapp.html',
      controller: MainController
    });

})();
