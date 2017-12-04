/*eslint strict:0  */
var passport, responseHelper;

passport = require('passport');
responseHelper = require('../helpers/response');

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.send(401);
    }
}

function singOut(req, res) {
    req.logOut();
    res.send(200);
}

function authenticate(passportStrategy) {
    return function passportWrapper(req, res, next) {
        passport.authenticate(passportStrategy, onAuthenticated(req, res, next))(req, res, next);
    };
}

function onAuthenticated(req, res, next) {
    return function onAuthCompleted(err, user, alert) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return responseHelper(res).error(alert);
        }

        req.logIn(user, function onLoginnedIn(loginErr) {
            if (loginErr) {
                return next(loginErr);
            }
            return responseHelper(res).success(user);
        });
    };
}

function authenticateSocial(passportStrategy, options) {
    return passport.authenticate(passportStrategy, options);
}

function authenticateSocialCallback(passportStrategy) {
    return function passportWrapper(req, res, next) {
        passport.authenticate(passportStrategy, onAuthenticatedSocial(req, res, next))(req, res, next);
    };
}

function onAuthenticatedSocial(req, res) {
    return function onAuthCompleted(err, user, alert) {
        var responseData;

        if (err) {
            responseData = {
                message: err
            };
        } else if (!user) {
            responseData = responseHelper(res)
        } else {
            req.logIn(user, function onLoginnedIn(loginErr) {
                if (loginErr) {
                    responseData = {
                        message: loginErr
                    };
                }

                responseData = { item: user };
            });
        }

        // return response.alert ? res.redirect('/#!/login') : res.redirect('/#!/');
        res.send(postMessageResponse(responseData));
    };
}

function postMessageResponse(response) {
    var jsonData;

    jsonData = JSON.stringify(response);

    return '<script>' +
        'window.opener.postMessage(' + jsonData + ', "*");' +
        'setTimeout(function() { window.close(); }, 50);' +
        '</script>';
}

module.exports = {
    isAuthenticated: isAuthenticated,
    signIn: authenticate('signin'),
    signOut: singOut,
    signUpClient: authenticate('signupclient'),
    signUpShop: authenticate('signupshop'),
    authFacebook: authenticateSocial('facebook', {
        scope: 'email'
    }),
    authFacebookCallback: authenticateSocialCallback('facebook'),
    authVk: authenticateSocial('vk', {
        scope: 'email'
    }),
    authVkCallback: authenticateSocialCallback('vk')
};