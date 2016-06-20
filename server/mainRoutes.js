const productsCtrl = require( './controllers/productsCtrl' );

module.exports = ( app ) => {
//	GET
	app.get( `/api/products`, productsCtrl.getProducts );
	app.get( `/api/products/:id`, productsCtrl.getProduct );
//	POST
	app.post( `/api/products`, productsCtrl.createProduct );
//	PUT
	app.put( `/api/products/:id`, productsCtrl.updateProduct );
//	DELETE
	app.delete( `/api/products/:id`, productsCtrl.deleteProduct );
};
