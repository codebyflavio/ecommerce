angular.module( 'eCommerceApp' )

	.directive(
	   'product', function(){
	       return {
		       templateUrl: `./directives/product-dir/product-dir.html`,
		       restrict: `E`
	       };
	   }
	);
