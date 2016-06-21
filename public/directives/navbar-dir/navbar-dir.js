angular.module( 'eCommerceApp')

.directive('navbar', function(){
	return {
		templateUrl: `./directives/navbar-dir/navbar-dir.html`,
		restrict: `E`
	};
});
