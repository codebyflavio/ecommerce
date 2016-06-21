angular.module('eCommerceApp')
.controller('mainCtrl', function( $scope ){
	$scope.isAdmin = false;
	$scope.checkIsAdmin = ( bolean ) => {
		$scope.isAdmin = bolean;
	};

});
