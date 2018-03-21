module.exports = {
    auth: {
        googleAuth: {
            clientID: 'your-secret-clientID-here',
            clientSecret: 'your-client-secret-here',
            callbackURL: 'http://localhost:3000/auth/google/callback',
        },
        facebookAuth: {
            clientID: '517608758629291',
            clientSecret: 'd7fe265810485ce22005c455b9b319d7',
            callbackURL: 'http://localhost:3000/auth/facebook/callback',
        },
        vkAuth: {
            clientID: '5819748',
            clientSecret: 'nCcPC2B3vGmmFha42wh0',
            callbackURL: 'http://localhost:3000/auth/vk/callback',
        },
    },
    user: {
        roles: {
            CLIENT: 'client',
            SHOP: 'shop',
            ADMIN: 'admin',
        },
    },
    order: {
        statuses: {
            new: 'new',
            replied: 'replied',
            removed: 'removed',
            closed: 'closed',
        },
    },
    db: {
        options: {
            server: {
                connectTimeoutMS: 10000,
            },
        },
        connectionString: 'mongodb://aavto_admin:aavto_admin@ds141098.mlab.com:41098/a_avto_dev',
    },
    nodemailer: {
        options: {
            service: 'gmail',
            auth: {
                user: 'aleksey.demukh',
                pass: 'aleksey10051990',
            },
        },
        maailFrom: 'a-Aavto.by',
    },
    bcrypt: {
        salt: 10,
    },
    cookie: {
        session: {
            name: 'session',
            keys: ['aavtoSecretKey'],
            cookie: {
                secure: true,
            },
            // 24 hours
            maxAge: 24 * 60 * 60 * 1000,
        },
        parser: 'aavtoSecretKey',
    },
    storage: {
        mode: {
            inCloudinary: true,
            inFileSystem: false,
            inDB: false,
        },
        cloudinary: {
            cloud_name: 'djydlkoln',
            api_key: '323888815778125',
            api_secret: 'Kvhy7BrbTF8wpAHMk1BhzBOWv-o',
        },
    },
    timezone: 'Europe/Minsk',
};
