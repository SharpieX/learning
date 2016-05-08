(function() {
  'use strict';

  angular
    .module('datePickerDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
