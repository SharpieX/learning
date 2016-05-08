/**
 * Created by sharpie on 10/01/16.
 */
(function () {
    'use strict';

    angular
        .module('datePickerDemo')
        .controller('DatePickerController', function () {
            var vm = this;
            vm.today = function() {
                vm.dt = new Date();
            };
            vm.today();

            vm.clear = function() {
                vm.dt = null;
            };

            // Disable weekend selection
            vm.disabled = function(date, mode) {
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            };

            vm.toggleMin = function() {
                vm.minDate = vm.minDate ? null : new Date();
            };

            vm.toggleMin();
            vm.maxDate = new Date(2020, 5, 22);

            vm.open1 = function() {
                vm.popup1.opened = true;
            };

            vm.open2 = function() {
                vm.popup2.opened = true;
            };

            vm.setDate = function(year, month, day) {
                vm.dt = new Date(year, month, day);
            };

            vm.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
            vm.altInputFormats = ['M!/d!/yyyy'];

            vm.popup1 = {
                opened: false
            };

            vm.popup2 = {
                opened: false
            };

            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            var afterTomorrow = new Date();
            afterTomorrow.setDate(tomorrow.getDate() + 1);
            vm.events =
                [
                    {
                        date: tomorrow,
                        status: 'full'
                    },
                    {
                        date: afterTomorrow,
                        status: 'partially'
                    }
                ];

            vm.getDayClass = function(date, mode) {
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0,0,0,0);

                    for (var i = 0; i < vm.events.length; i++) {
                        var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);

                        if (dayToCheck === currentDay) {
                            return vm.events[i].status;
                        }
                    }
                }

                return '';
            };
        });

})();
