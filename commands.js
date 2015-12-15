// https://egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb
// http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/
// https://docs.mongodb.org/manual/reference/mongo-shell/

// Insert some data.
mongoimport --db productDetails --collection product --jsonArray product.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use productDetails

// Check currently selected db
db

// Show all collections
show collections

// Get count.
db.product.count()

// Query all
db.product.find()

// Query all (formatted)
db.product.find().pretty()

// Find one.
db.product.findOne()

// Query.
db.product.find({Id: '67687'}).sort({name: 1}).pretty() // -1 for desc.

// Query with and operator.
db.product.find({
  Id: '67687',
  $and: [{"name": /.*And.*/}]
}).pretty() // -1 for desc.

// Insert.
db.product.insert({
  "name": "Maryland",
  "Id": "67687",

})

// Update.
db.product.update(                  // collection
  {Id: '67687'},           // update criteria
  {$set: {Id: '785442'}},// update action
  {multi: true})                   // update option

// See last insert.
db.product.find().sort({_id: -1}).limit(1)

// Remove all.
db.product.remove({})

// Get count.
db.product.count()

// Exit mongo shell.
quit()

// Drop database.
db.dropDatabase()

// Show DBs
show dbs

// Insert data again.
mongoimport --db productDetails --collection product --jsonArray product.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use productDetails


//load("scripts/myjstest.js")

// Exit.
//quit()


// Sort.
db.restaurants.find().sort({"borough": 1, "address.Id": 1})