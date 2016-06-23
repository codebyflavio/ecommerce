const mongoose = require( 'mongoose' );

const Cart = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		products: [
			{
				item: Product,
				quantity: {
					type: Number,
					required: true,
					min: 1
				}
			}
		]
	}
);

module.exports = mongoose.model( 'Cart', Cart );
