// build an express app and host it on a cloud function

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51K9nLZSB7wA8NC1k3c4NU4c74e0LIoOIRyPwBRoMmt6FMiYQitQXPY2VYoD3HytRCIO9RCY4ek49UNrRm1WgaWQO00NrOVynES");

// API SETUP

// - app config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
// eslint-disable-next-line max-len
app.get("/", (request, response) => response.status(200).send("hello world")); /* dummy route */

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('payment req recieved for', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,         //subunits of the currency
        currency: "usd",
        // "payment_method_types[]": card,
        confirm: true,
        
    });
    
    //ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// - listen command
exports.api = functions.https.onRequest(app);


// eslint-disable-next-line max-len
// example end pt. - for when we want to call the API ROUTES- below one is default for our dummy route
// http://localhost:5001/fir-44ef9/us-central1/api
