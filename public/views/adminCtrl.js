angular.module( 'eCommerceApp' )

.controller(
	'adminCtrl', function( $scope, $state, getProducts, productService ){

		$scope.products      = getProducts;

		$scope.removeProduct = function( id ){
			productService.removeProduct( id );
			$state.go( $state.current, {}, { reload: true } );
		};

		$scope.addProduct    = function(){
			productService.addProduct(
				{
					title: $scope.title,
					price: $scope.price,
					description: $scope.description,
					imageUrl: $scope.imageUrl
				}
			)
			.then(
				function( response ){
					$state.go( $state.current, {}, { reload: true } );
					return response;
				}
			);
		};

		$scope.updateProduct = function( product ){
			productService.updateProduct( product )
			.then(function(response){
				$state.go( $state.current, {}, { reload: true } );
				return response;
			});
		};

	}
)
