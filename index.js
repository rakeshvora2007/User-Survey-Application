const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

//clientID 33371964461-qj7rq2m6gr34448vb0isk0625rj1d8pi.apps.googleusercontent.com
//client secret ZaKnBmHtYCEVkG7ghGqpCZy4

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
