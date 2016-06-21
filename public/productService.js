angular.module( 'eCommerceApp' )

	.factory(
	   'productService', function($http){
	       return {
		       getProducts(){
		            return $http({
		                method: 'GET',
			            url: '/api/products'
		            }).then(function( productData ){
			            return productData.data;
		            });
		       }
	       };
	   }
	);
