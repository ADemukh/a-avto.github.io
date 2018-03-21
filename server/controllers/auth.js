const passport = require('passport');
const responseHelper = require('../helpers/response');
const moment = require('../moment');

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

function onAuthenticated(req, res, next) {
    return function onAuthCompleted(err, user, alert) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return responseHelper(res).error(alert);
        }

        return req.logIn(user, (loginErr) => {
            if (loginErr) {
                return next(loginErr);
            }
            return responseHelper(res).success(user);
        });
    };
}

function onAuthenticatedWithoutPassword(req, res, next) {
    return function onAuthCompleted(err, user, alert) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return responseHelper(res).error(alert);
        }

        return req.logIn(user, (loginErr) => {
            if (loginErr) {
                return next(loginErr);
            }
            return responseHelper(res).success(user);
        });

    // send recover password
    };
}

function authenticate(passportStrategy) {
    return function passportWrapper(req, res, next) {
        passport.authenticate(passportStrategy, onAuthenticated(req, res, next))(req, res, next);
    };
}

function authenticateWithoutPassword(passportStrategy) {
    return function passportWrapper(req, res, next) {
        req.body.password = moment.utc().format('YYY-MM-DD HH:mm');
        passport.authenticate(
            passportStrategy,
            onAuthenticatedWithoutPassword(req, res, next),
        )(req, res, next);
    };
}

function authenticateSocial(passportStrategy, options) {
    return passport.authenticate(passportStrategy, options);
}

function postMessageResponse(response) {
    const jsonData = JSON.stringify(response);
    return `${'<script>' +
        'window.opener.postMessage('}${jsonData}, "*");` +
        'setTimeout(function() { window.close(); }, 50);' +
        '</script>';
}

function onAuthenticatedSocial(req, res) {
    return function onAuthCompleted(err, user) {
        let responseData;

        if (err) {
            responseData = {
                message: err,
            };
        } else if (!user) {
            responseData = responseHelper(res);
        } else {
            req.logIn(user, (loginErr) => {
                if (loginErr) {
                    responseData = {
                        message: loginErr,
                    };
                }

                responseData = { item: user };
            });
        }

        // return response.alert ? res.redirect('/#!/login') : res.redirect('/#!/');
        res.send(postMessageResponse(responseData));
    };
}

function authenticateSocialCallback(passportStrategy) {
    return function passportWrapper(req, res, next) {
        passport.authenticate(
            passportStrategy,
            onAuthenticatedSocial(req, res, next),
        )(req, res, next);
    };
}

module.exports = {
    isAuthenticated,
    signIn: authenticate('signin'),
    signOut: singOut,
    signUpClient: authenticate('signupclient'),
    signUpClientPartial: authenticateWithoutPassword('signupclient'),
    signUpShop: authenticate('signupshop'),
    authFacebook: authenticateSocial('facebook', {
        scope: 'email',
    }),
    authFacebookCallback: authenticateSocialCallback('facebook'),
    authVk: authenticateSocial('vk', {
        scope: 'email',
    }),
    authVkCallback: authenticateSocialCallback('vk'),
};
