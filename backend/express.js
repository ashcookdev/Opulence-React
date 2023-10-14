const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const app = express();

app.use(cors());
app.use(express.json());
app.use(compression()); // compress all responses
app.use(helmet()); // helps secure Express apps with various HTTP headers

app.post('/charge', async (req, res) => {
    const { stripeId, amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'gbp',
            customer: stripeId,
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the payment.' });
    }
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));
