const express = require( 'express' );
const { json }  = require( 'body-parser' );
const routes  = require( './mainRoutes' );

const app  = express();
const port = 8080;

app.use( json() );

app.use( express.static( `${__dirname}/public` ) );

routes( app );

app.listen( port, () => console.log( `Listening on ${port}` ) );
