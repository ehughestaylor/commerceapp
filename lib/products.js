userProducts = new Mongo.Collection('userProducts');

userProducts.allow({
  update: ownsDocument,
  remove: ownsDocument
});
userProducts.allow({
  update: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

userProducts.deny({
  update: function(userId, product, fieldNames){
    //may only edit the following three fields
    return (_.without(fieldNames, 'name', 'link_id', 'price', 'description', 'condition', 'type', 'size', 'color', 'category', 'image').length > 0);
  }
});

Meteor.methods({
  product: function(productAttributes){
    var user = Meteor.user(),
      productWithSameName= userProducts.findOne({name: productAttributes.name});

      // ensure the user is logged in
      if(!user)
        throw new Meteor.Error(401, "You need to login to post products");

      // ensure the product has a name
      if(!productAttributes.name)
        throw new Meteor.Error(422, 'Please fill in a name');

      //check that there are no previous posts with the same name
      if(productAttributes.name && productWithSameName){
        throw new Meteor.Error(302,
          'This product has already been posted',
          productWithSameName._id);
      }

      //pick out the whitelisted keys
      var product = _.extend(_.pick(productAttributes, 'name', 'price', 'description', 'type', 'size', 'color', 'category','image'), {
        userId: Meteor.userId(),
        author: user.profile.name,
        submitted: new Date().getTime(),
        commentsCount: 0
      });

      var productId = userProducts.insert(product);

      return productId;
  }
});
