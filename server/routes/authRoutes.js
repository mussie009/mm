
const passport = require('passport');
const rp = require('request-promise');
//var FormData = require('form-data');
// const corsPrefetch = require('cors-prefetch-middleware');
// const imagesUpload = require('images-upload-middleware');

var fs = require('fs');

module.exports = (app) => {
  app.get('/auth/microsoft',
    passport.authenticate('microsoft', {
      scope: ['openid','User.Read','Contacts.ReadWrite','Files.ReadWrite.All']
    })
  );
  app.get('/auth/microsoft/callback',passport.authenticate('microsoft'), (req, res) => {

    res.redirect(`/contacts?token=${req.user.accessToken}`);
    });

  app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/')
        //res.send(req.user);
      });
    //app.get(' https://graph.microsoft.com/v1.0/me/contacts/?$id=user.id', )
  app.get('/api/current_user', (req, res) => {
      res.send(req.user);
      //res.json(req.session)
    });

};
