'use strict';

class NavbarController {

  constructor() {
      this.menu = [
        {
          title: 'Apps',
          state: 'apps'
        }
      ];
  }

}

//end-non-standard

angular.module('codeCareerHunt2App')
  .controller('NavbarController', NavbarController);
