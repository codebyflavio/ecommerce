angular.module( 'eCommerceApp' )

.controller(
	'adminCtrl', function( $scope, $state, getProducts, productService ){

		$scope.products      = getProducts;

		$scope.removeProduct = function( id ){
			productService.removeProduct( id );
			$state.go( $state.current, {}, { reload: true } );
		};

		$scope.addProduct    = function(title, price, description, imageUrl){
			productService.addProduct(
				{
					title,
					price,
					description,
					imageUrl
				}
			)
			.then( () => $state.go( $state.current, {}, { reload: true } ) );
		};

		$scope.updateProduct = function( product ){
			productService.updateProduct( product )
			.then( () => $state.go( $state.current, {}, { reload: true } ) );
		};

	}
);
