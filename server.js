const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MOKwySBDi8P3MJyYJprownQKrbOW7mpy6OK46q4GmCKccIabx2GOPuYT9SwzlE4W9shwpJtFoftQOBOWCZodTwi00Mk8zh6pv');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    console.log(items)
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.idx,
                quantity: item.id
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/cart",
        cancel_url: "http://localhost:3000/cart"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));