const express  = require( 'express' );
const { json }  = require( 'body-parser' );
const routes   = require( './mainRoutes' );

const mongoose = require( 'mongoose' );
const mongoUri = `mongodb://localhost:27017/ecommerce`;

const app  = express();
const port = 8080;

app.use( json() );

app.use( express.static( `${__dirname}/../public` ) );

routes( app );

mongoose.connect( mongoUri );
mongoose.connection.once( `open`, () => console.log( `Mongo connected at ${mongoUri}` ) );

app.listen( port, () => console.log( `Listening on ${port}` ) );
