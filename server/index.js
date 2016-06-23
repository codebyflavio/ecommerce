const express    = require( 'express' );
const bodyParser = require( 'body-parser' );
const session    = require( 'express-session' );
const routes     = require( './mainRoutes' );

const mongoose = require( 'mongoose' );
const mongoUri = `mongodb://localhost:27017/ecommerce`;

const app  = express();
const port = 8080;

app.use( bodyParser.json() );

app.use( express.static( `${__dirname}/../public` ) );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use(
	session(
		{
			secret: `my-secret`,
			name: `ninja-cookie`,
			resave: true,
			saveUninitialized: true
		}
	)
);

app.get(
	`/`,
	( req, res ) => {
		if( req.session.logged_in ){
			return res.redirect( '/home' );
		} else{
			return res.redirect( '/login' );
		}
	}
);

app.get( `/login`, ( req, res ) => res.sendFile( `${__dirname}/../public/login.html` ) );

app.get( `/home`, ( req, res ) => res.sendFile( `${__dirname}/../public/logout.html` ) );

app.get(
	`/logout`, ( req, res ) => {
		req.session.logged_in = false;
		return res.redirect( `/` );
	}
);

app.post(
	`/login`,
	( req, res ) => {
		if( req.body.username == 'test' && req.body.password == 'test' ){
			req.session.logged_in = true;
			return res.redirect( `/home` );
		} else{
			return res.redirect( `/login` );
		}
	}
);

routes( app );

mongoose.connect( mongoUri );
mongoose.connection.once( `open`, () => console.log( `Mongo connected at ${mongoUri}` ) );

app.listen( port, () => console.log( `Listening on ${port}` ) );
