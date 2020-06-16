const express = require("express");
const bodyParser = require('body-parser');
const app = express();

var cors = require("cors");
app.use(cors());

const PORT = 4090;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var plaid = require("plaid");
require("dotenv").config();
var PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
var PLAID_SECRET = process.env.PLAID_SECRET;
var PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY;
var PLAID_ENV = "sandbox";

var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

// Initialize the Plaid client
var client = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_PUBLIC_KEY,
    plaid.environments[PLAID_ENV],
    { version: "2019-05-29", clientApp: "Plaid Quickstart" }
);


const {
    receivePublicToken,
    getTransactions,
} = require("./controllers/controller");

// Get the public token and exchange it for an access token
app.post("/auth/public_token", receivePublicToken);

// Get Transactions
app.get("/transactions", getTransactions);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
