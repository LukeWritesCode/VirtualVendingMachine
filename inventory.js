var express = require('express');
var router = express.Router();

const products = [
  {
    id: 0,
    name: "Fizz",
    price: 1,
    description: "An effervescent fruity experience with hints of grape and coriander.",
    quantity: 100,
    max_quantity: 100,
    productImageUrl:
      "https://cf.shopee.co.th/file/0ebf66f6f4de6dc6f23668c6d40612a2_tn"
  },
  {
    id: 1,
    name: "Pop",
    price: 1,
    description: "An explosion of flavor that will knock your socks off!",
    quantity: 100,
    max_quantity: 100,
    productImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjE4F_XhWiITiC9z-pyOPt7cCHusdqhdxIMlEYyvOhrjRudfB3"
  },
  {
    id: 2,
    name: "Cola",
    price: 200,
    description: "A basic no nonsense cola that is the perfect pick me up for any occasion.",
    quantity: 200,
    max_quantity: 200,
    productImageUrl:
      "https://fn.lnwfile.com/hot081.jpg"
  },
  {
    id: 3,
    name: "Mega Pop",
    price: 1,
    description: "Not for the faint of heart.  So flavorful and so invigorating, it should probably be illegal.",
    max_quantity: 50,
    quantity: 50,
    productImageUrl:
      "https://static.bigc.co.th/media/catalog/product/cache/2/image/497x497/9df78eab33525d08d6e5fb8d27136e95/8/8/8851959132050_1.jpg"
  }
]

router.get("/decrimentQuantity", function(req,res) {
  let product_id = req.query.id;
  var quantity = products[product_id].quantity
  var empty = false
  if (quantity === 0) {
      empty = true
  }
  else {
  products[product_id].quantity = quantity-=1
  }
  res.send(200,{quantity_of_id:quantity,machine_empty:empty})
})

router.get("/restock",function(req,res) {
  let product_id = req.query.id
  let amount_to_stock = Number(req.query.amount)
  var quantity = Number(products[product_id].quantity)
  var max_quantity = Number(products[product_id].max_quantity)
  if (amount_to_stock + quantity >= max_quantity) {
    products[product_id].quantity = max_quantity
  }
  else {
    products[product_id].quantity = quantity += amount_to_stock
  }  
  res.send(200,{quantity:products[product_id].quantity})
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(products);
});

module.exports = router;
