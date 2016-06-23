const mongoose = require('mongoose');

const Order = new mongoose.Schema(
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
		],
		ordered: {
			type: Date,
			default: new Date()
		}
	}
);

module.exports = mongoose.model( 'Order', Order);
