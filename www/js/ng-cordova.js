angular.module('ngCordova', [
  'ngCordova.plugins'
]);

angular.module('ngCordova.plugins', [
   'datePicker'
]);

angular.module('ngCordova.plugins.datePicker', [])
  .factory('$cordovaDatePicker', ['$window', '$q', function ($window, $q) {
    return {
      show: function (options) {
        var q = $q.defer();
        options = options || {date: new Date(), mode: 'date'};
        $window.datePicker.show(options, function (date) {
          q.resolve(date);
        });
        return q.promise;
      }
    };
  }]);
