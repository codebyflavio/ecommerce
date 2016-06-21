angular.module( 'eCommerceApp', ['ui.router'] )

.config( function( $stateProvider, $urlRouterProvider ){

	$urlRouterProvider.otherwise(`/`);

	$stateProvider
		.state(
			`home`, {
				url: `/`,
				templateUrl: `./views/home.html`
			}
		)
		.state(
			`products`, {
				url: `/products/`,
				templateUrl: `./views/products.html`,
				controller: function( $scope, getProducts ){
					$scope.products = getProducts;
				},
				resolve: {
					getProducts: function( productService ){
						return productService.getProducts();
					}
				}
			}
		)
		.state(
			`admin`, {
				url: `/panel`,
				templateUrl: `./views/admin.html`,
				controller: function( $scope, getProducts ){
					$scope.products = getProducts;
				},
				resolve: {
					getProducts: function( productService ){
						return productService.getProducts();
					}
				}
			}
		);
});
