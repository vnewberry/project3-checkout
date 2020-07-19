const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_51GyLRCCbwzanfjldWMo38Ifzwb80MMTDOVAXeULW1zR8DQOETV6WkSKZeqRRsu8HqnzSZRUDWudv4bAQdsSBVLl300V43xNiCY';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;