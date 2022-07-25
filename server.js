require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(
  cors({
    origin: "http://order.raydensmenu.com:5500",
  })
)
app.use(express.static('public'));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 500, name: "Raydens Premium" }],
])

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "ideal", "bancontact", "p24", "sofort", "giropay", "eps", "alipay"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "eur",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `http://order.raydensmenu.com:3000/success.html`,
      cancel_url: `http://order.raydensmenu.com:3000/failed.html`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(3000)