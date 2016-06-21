angular.module( 'eCommerceApp' )

.directive(
   'products', function(){
       return {
	       templateUrl: `./directives/products-dir/products-dir.html`,
	       restrict: `E`
       };
   }
);
