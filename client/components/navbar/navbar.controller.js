'use strict';

class NavbarController {

  constructor() {
      this.menu = [
        {
          title: 'Apps',
          state: 'apps'
        },{
          title: 'Detail',
          state: 'detail'
        }
      ];
  }

}

//end-non-standard

angular.module('codeCareerHunt2App')
  .controller('NavbarController', NavbarController);
