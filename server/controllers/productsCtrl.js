const mongojs = require( 'mongojs' );
const db      = mongojs( 'ecommerce', [ 'products' ] );

module.exports = {
	getProducts( req, res, next ){
		db.products.find(
			{}, ( err, resp ) =>{
				if( err ){
					return res.status( 500 )
					          .json( err );
				}
				return res.json( resp );
			}
		);
	},
	getProduct( req, res, next ){
		let idObj = { _id: mongojs.ObjectId( req.params.id ) };
		db.products.findOne(
			idObj, ( err, resp ) =>{
				if( err ){
					return res.status( 500 )
					          .json( err );
				}
				return res.json( resp );
			}
		);
	},
	createProduct( req, res, next ){
		db.products.save(
			req.body, ( err, resp ) =>{
				if( err ){
					return res.status( 500 )
					          .json( err );
				}
				return res.json( resp );
			}
		);
	},
	updateProduct( req, res, next ){
		if( !res.params.id ){
			return res.status( 400 )
			          .send( `id query needed` );
		}
		let query = {
			_id: mongojs.ObjectId( req.params.id )
		};
		db.products.update(
			query, req.body, function( err, resp ){
				if( err ){
					return res.status( 500 )
					          .json( err );
				}
				return res.json( resp );
			}
		);
	},
	deleteProduct( req, res, next ){
		if( !req.params.id ){
			return res.status( 400 )
			          .send( 'id query needed' );
		}
		let query = {
			_id: mongojs.ObjectId( req.params.id )
		};
		db.products.remove(
			query, function( error, response ){
				if( error ){
					return res.status( 500 )
					          .json( error );
				} else{
					return res.json( response );
				}
			}
		);
	}
};