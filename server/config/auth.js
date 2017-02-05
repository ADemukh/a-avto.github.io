// expose our config directly to our application using module.exports
module.exports = {
    // twitterAuth: {
    //     consumerKey: 'your-consumer-key-here',
    //     consumerSecret: 'your-client-secret-here',
    //     callbackURL: 'http://localhost:3000/auth/twitter/callback'
    // },
    // googleAuth: {
    //     clientID: 'your-secret-clientID-here',
    //     clientSecret: 'your-client-secret-here',
    //     callbackURL: 'http://localhost:3000/auth/google/callback'
    // },
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
};