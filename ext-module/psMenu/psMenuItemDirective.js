"use strict";

angular.module('psMenu').directive('psMenuItem', function(){
  return {
    require: '^psMenu',
    scope: {
        label: '@',
        icon: '@'
    },
    transclude: true,
    templateUrl: 'ext-module/psMenu/psMenuItemTemplate.html',
    link: function(scope, el, attr, ctrl){
    }
  };
});
