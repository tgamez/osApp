// angular.module('searchApp',['ngResource', 'ui.router', 'ui.bootstrap'])
// 		  //.config(function($routeProvider) {
// 		 // 	$routeProvider
// 		 // 		.when('/events', {templareUrl: 'partials/events.html'});
// 		 // })
// 		.config(['$urlRouterProvider','$stateProvider',
// 			function($urlRouterProvider,$stateProvider){
// 				$urlRouterProvider.otherwise('/');

// 				$stateProvider
// 					.state('home', {
// 						url: '/',
// 						templareUrl: 'templates/home.html'
// 					})
// 			}]) 
// 		.controller("SearchCtrl", function($scope, $resource) {
// 			EventApi = $resource('/Search/api/Event:tags');
// 			window.EventApi = EventApi;
// 			$scope.ev = [];


// 			$scope.placeholder = "palabra para buscar ...";

// 			$scope.alerts = [
// 			    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
// 			    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
// 			];

// 			$scope.search = function() {

// 			}

// 			$scope.addAlert = function() {
// 				$scope.alerts.push({msg: "Another alert!"});
// 			};

// 			$scope.closeAlert = function(index) {
// 				$scope.alerts.splice(index, 1);
// 			};

//     $scope.ofertas = [{num: "1234", cliente: "100", estado:"pen_oferta", fecha: "11/01/2014"},
//     				  {num: "1235", cliente: "100", estado:"pen_acept", fecha: "08/01/2014"},
//     				  {num: "1236", cliente: "100", estado:"rechazado", fecha: "02/02/2014"},
// 					 ];

// 	$scope.opcion = "Gestion Ofertas";

//     $scope.myData = [{name: "Moroni", age: 50},
//                      {name: "Tiancum", age: 43},
//                      {name: "Jacob", age: 27},
//                      {name: "Nephi", age: 29},
//                      {name: "Enos", age: 34}];

//     var gridOptions1 = {
//         data: 'myData',
//         columnDefs: [
//             { field:"name", displayName: "NAME"},
//             { field:"age", displayName: "AGE"}],
//         multiSelect: true,
//         selectedItems: $scope.selected
//     };
                     
//     var gridOptions2 = {
//         data: 'myData',
//         columnDefs: [
//             { field:"name", displayName: "Name"},
//             { field:"age", displayName: "Age"}],
//         multiSelect: false,
//         selectedItems: $scope.selected
//     };
                           
//    $scope.filterTabs = [{grid: gridOptions1}, {grid: gridOptions2}];



// });