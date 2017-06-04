(function StarRatingComponentInit() {
  'use strict';

  angular.module(WEBUI_MODULE_NAME)
    .component('qStarRating', {
      controller: 'controllers.starrating',
      templateUrl: 'webui/common/star-rating/star-rating.tmpl.html',
      bindings: {
        raiting: '<',
        max: '<',
        readonly: '<',
        onSelect: '&'
      }
    });
})();