var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser  = require('body-parser');

var app = express();
var productSchema = {
  name: String,
  Id: String,
 
};

mongoose.connect('mongodb://localhost/productDetails');
var products = mongoose.model('products', productSchema, 'product');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/product', function (req, res) {
  console.log('Finding product with filter: ', req.query);
  products.find({}, function (err, doc) {
    res.send(doc);
  });
});

app.get('/product/:id', function (req, res) {
  console.log('Finding products with ID: ', req.params.id);
  products.findById(req.params.id, function (err, foundDocument) {
    res.send(foundDocument);
  });
});

app.post('/product', function (req, res) {
  console.log('Creating products: ', req.body);
  new products(req.body).save(function (err, doc) {
    res.send(doc);
  });
});

app.delete('/product/:id', function(req, res){
  console.log('Deleting products with ID: ' + req.params.id);
  products.remove({_id: req.params.id}, function (err, doc) {
    res.send(doc);
  });
});

app.listen(3000);