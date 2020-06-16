var plaid = require("plaid");
var moment = require("moment");
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

const receivePublicToken = async (req, res) => {
    console.log('req', req.body);
    try {
        const { public_token } = req.body;
        // First, receive the public token and set it to a variable
        client.exchangePublicToken(public_token, function (error, tokenResponse) {
        // Second, exchange the public token for an access token
            ACCESS_TOKEN = tokenResponse.access_token;
            ITEM_ID = tokenResponse.item_id;

            res.json({
                access_token: ACCESS_TOKEN,
                item_id: ITEM_ID
            });
        });
    } catch (e) {
        console.error(e);
    }
    
};

// const tokenExchange = async (req, res) => {
//     try {
//         const { public_token } = req.body;

//         const { access_token } = await client
//             .exchangePublicToken(public_token)
//             .catch(console.error);

//         const { accounts, item } = await client
//             .getAccounts(access_token)
//             .catch(console.error);

//         const user = await User.findOne().exec();

//         const plaidItem = await new PlaidItem({
//             userId: user._id,
//             availableProducts: item.available_products,
//             billedProducts: item.billed_products,
//             institutionId: item.institution_id,
//             itemId: item.item_id,
//             webhook: item.webhook
//         }).save();

//         console.log({ user, plaidItem });

//         const savedAccounts = accounts.map(
//             async account =>
//                 await new PlaidAccount({
//                     plaidItemId: plaidItem._id,
//                     accountId: account.account_id,
//                     mask: account.mask,
//                     balances: account.balances,
//                     name: account.name,
//                     officialName: account.official_name,
//                     subtype: account.subtype,
//                     type: account.type
//                 }).save()
//         );

//         console.log({
//             savedAccounts
//         });
//     } catch (e) {
//         console.error(e);
//     }
// }

const getTransactions = (req, res, next) => {
    // Pull transactions for the last 30 days
    // const ACCESS_TOKEN = ;
    let startDate = moment()
        .subtract(30, "days")
        .format("YYYY-MM-DD");
    let endDate = moment().format("YYYY-MM-DD");
    console.log("made it past variables", ACCESS_TOKEN);
    client.getTransactions(
        ACCESS_TOKEN,
        startDate,
        endDate,
        {
            count: 250,
            offset: 0
        },
        function(error, transactionsResponse) {
            if (error) {
                console.log('error', error);
                return next;
            }
            
            // TRANSACTIONS LOGGED BELOW!
            // They will show up in the terminal that you are running nodemon in.
            console.log('success', transactionsResponse);
            res.json({ transactions: transactionsResponse });
        }
    );
};

module.exports = {
    receivePublicToken,
    getTransactions,
    // tokenExchange
};
