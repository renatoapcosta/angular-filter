
var app = angular.module('app',[]);

app.controller('firstCtrl', function($scope) {
  $scope.messages = [
	  {
    	  "id": 1,
		  "name": "Renato",
		  "queried": false

  	  }, 
	  {
    	  "id": 2,
		  "name": "Mari",
		  "queried": true
  	  },
	  {
    	  "id": 3,
		  "name": "Bia",
		  "queried": true
  	  }
  ];
  
  $scope.items = {
	  NAO: {
		  value: false,
		  text: "não"
	  },
	  SIM: {
		  value: true,
		  text: "sim"
	  }
  };
});
