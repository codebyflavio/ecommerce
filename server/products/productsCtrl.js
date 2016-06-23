const Product = require( './productSchema' );

module.exports = {

	getProducts( req, res ){
		Product.find(
			{},
			( err, resp ) => {
				if( err ){
					return res.status( 500 )
					          .json( err );
				}
				return res.json( resp );
			}
		);
	},

	getProduct( req, res ){
		Product.findById(
			req.params.id,
			( err, resp ) => {
				if( err ){
					return res.status( 500 )
					          .json( err );
				}
				return res.json( resp );
			}
		);
	},

	createProduct( req, res ){
		new Product( req.body ).save(
			( err, resp ) => {
				if( err ){
					return res.status( 500 )
					          .json( err );
				}
				return res.json( resp );
			}
		);
	},

	updateProduct( req, res ){
		if( !req.params.id ){
			return res.status( 400 )
			          .send( `id query needed` );
		}
		Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			( err, resp ) => {
				if( err ){
					return res.status( 500 )
					          .json( err );
				}
				return res.status( 200 )
				.json( resp );
			}
		);
	},

	deleteProduct( req, res ){
		if( !req.params.id ){
			return res.status( 400 )
			          .send( 'id query needed' );
		}
		Product.findByIdAndRemove(
			req.params.id,
			( err, resp ) => {
				if( err ){
					return res.status( 500 )
					          .json( err );
				}
				return res.status( 201 )
				          .json( resp );
			}
		);
	}

};
