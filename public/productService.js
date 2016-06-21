angular.module( 'eCommerceApp' )

	.factory(
	   'productService', function($http){
			return {
				getProducts(){
					return $http.get( `/api/products` )
					.then(
						function( productData ){
							return productData.data;
						}
					);
				},
				removeProduct( id ){
					return $http.delete( `/api/products/${id}` )
					.then(
						function( response ){
							return response;
						}
					);
				},
				addProduct( product ){
					return $http.post( `/api/products`, product )
					.then(
						function( response ){
							return response;
						}
					);
				}
	       };
	   }
	);
