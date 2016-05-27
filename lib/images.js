Images = new Mongo.Collection('images');

Images.attachSchema(new SimpleSchema({
  image: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
  }
}));
// Images.allow({
//   insert: function(userId, doc) {
//     // only allow posting if you are logged in
//     return !! userId;
//   }
// });
profileImages = new Mongo.Collection('profileImages');
profileImages.attachSchema(new SimpleSchema({
  image: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
  }
}));
