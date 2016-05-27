Template.commentSubmit.events({
    'submit form': function(e, template) {
      e.preventDefault();

      var $body = $(e.target).find('[name=body]');
      var comment = {
        body: $body.val(),
        productId: template.data._id
      };

      Meteor.call('comment', comment, function(error, commentId){
        if (error){
          throw new Meteor.error(error.reason);
        } else {
          $body.val('');
        }
      });
    }
});
