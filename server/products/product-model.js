const mongoose = require( 'mongoose' );

const Product = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true
		},
		description: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true,
			min: 0
		},
		imageUrl: {
			type: String,
			required: true
		}
	}
);


module.exports = mongoose.model( 'Product', Product );
