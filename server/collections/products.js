// userProducts = new Mongo.Collection('userProducts');
Meteor.publish('userProducts', function(){
  return userProducts.find();
});
