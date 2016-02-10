var inboxController = angular.module('inboxController', []);

inboxController.controller('InboxCtrl', function ($scope) {
   // initialize the title property to an array for the view to use
   $scope.title = "This is a title";
});