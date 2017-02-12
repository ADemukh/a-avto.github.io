module.exports = {
    auth: {
        googleAuth: {
            clientID: 'your-secret-clientID-here',
            clientSecret: 'your-client-secret-here',
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        facebookAuth: {
            clientID: '406613229679562',
            clientSecret: 'be49d52505c31424b794d19ed48e499c',
            callbackURL: 'http://localhost:3000/auth/facebook/callback'
        },
        vkontakteAuth: {
            clientID: 'your-consumer-key-here',
            clientSecret: 'your-client-secret-here',
            callbackURL: 'http://localhost:3000/auth/vk/callback'
        }
    },
    user: {
        roles: {
            CLIENT: 'client',
            SHOP: 'shop',
            ADMIN: 'admin'
        }
    },
    db: {
        options: {
            server: {
                connectTimeoutMS: 10000
            }
        },
        connectionString: 'mongodb://aavto_admin:aavto_admin@ds141098.mlab.com:41098/a_avto_dev'
    },
    bcrypt: {
        salt: 10
    }
};