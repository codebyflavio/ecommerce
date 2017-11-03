const express  = require( 'express' );
const { json }  = require( 'body-parser' );
const routes   = require( './mainRoutes' );

const mongoose = require( 'mongoose' );

const app  = express();
const port = 8080;

app.use( json() );

app.use( express.static( `${__dirname}/../public` ) );

routes( app );

mongoose.connect( process.env.MONGO_URI );
mongoose.connection.once( `open`, () => console.log( 'Mongo connected' ) );

app.listen( port, () => console.log( `Listening on ${port}` ) );
