/**
 * Created by sharpie on 10/01/16.
 */
(function () {
    'use strict';

    angular
        .module('datePickerDemo')
        .directive('uibDatepickerPopup', function () {
            return {
                restrict: 'EAC',
                require: 'ngModel',
                link: function (scope, elem, attrs, ngModel) {
                    ngModel.$validators = [];
                }
            }
        });

})();