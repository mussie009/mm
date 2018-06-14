const express = require('express');
require('./services/passport');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const cors = require('cors');
// const corsPrefetch = require('cors-prefetch-middleware');


const app = express();
// app.use('/static', express.static('./server/static'));
//
// app.use(corsPrefetch);
app.use(cors());

app.use(cookieSession({
  maxAge: 30*24*60*60*1000,
  keys:[keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


var port = 5000;
app.listen(port, () => {
  console.log("listening on port:", port);
})
