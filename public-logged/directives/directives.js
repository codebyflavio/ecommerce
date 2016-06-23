angular.module( 'eCommerceApp' )

.directive(
	'navbar', function(){
		return {
			templateUrl: `./directives/navbar-dir.html`,
			restrict: `E`
		};
	}
)

.directive(
	'product', function(){
		return {
			templateUrl: `./directives/product-dir.html`,
			restrict: `E`
		};
	}
)

.directive(
	'products', function(){
		return {
			templateUrl: `./directives/products-dir.html`,
			restrict: `E`
		};
	}
)

.directive(
	'addProduct', function(){
		return {
			templateUrl: `./directives/add-product-dir.html`,
			restrict: 'E'
		};
	}
);
