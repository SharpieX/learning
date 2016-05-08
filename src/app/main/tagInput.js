/**
 * Created by sharpie on 07/05/16.
 */
var app = angular.module('datePickerDemo');

app.controller('tagsController', function ($scope) {
  $scope.inputTags = [{name:"foo"},{name:"bar"}];

  $scope.addTag = function () {
    if ($scope.tagText.length == 0) {
      return;
    }

    $scope.inputTags.push({name: $scope.tagText});
    $scope.tagText = '';
  }

  $scope.deleteTag = function (key) {
    if ($scope.inputTags.length > 0 &&
      $scope.tagText.length == 0 &&
      key === undefined) {
      $scope.inputTags.pop();
    } else if (key != undefined) {
      $scope.inputTags.splice(key, 1);
    }
  }
});

app.directive('tagInput', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.inputWidth = 50;

      // Watch for changes in text field
      scope.$watch(attrs.ngModel, function (value) {
        if (value != undefined) {
          var tempEl = $('<span>' + value + '</span>').appendTo('body');
          scope.inputWidth = tempEl.width() + 5;
          tempEl.remove();
        }
      });

      element.bind('keydown', function (e) {
        if (e.which == 9) {
          e.preventDefault();
        }

        if (e.which == 8) {
          scope.$apply(attrs.deleteTag);
        }
      });

      element.bind('keyup', function (e) {
        var key = e.which;

        // Tab or Enter pressed
        if (key == 9 || key == 13) {
          e.preventDefault();
          scope.$apply(attrs.newTag);
        }
      });
    }
  }
});

