// 
// Template.loginFormSignUpView.events({
//   "click .signup": function (event) {
//     // Prevent default browser form submit
//     // alert('button clicked');
//     event.preventDefault();
//
//     // Get value from form element
//     var user_name = event.target.username.value;
//     // var user_name  = $('.username').val();
//     // Insert a task into the collection
//     Meteor.users.update(Meteor.userId(),
//     {$set: {'profile.name': user_name}}
//     );
//
//     // Clear form
//     event.target.username.value = "";
//   }
// });
// "submit .last-name": function (event) {
//   // Prevent default browser form submit
//   event.preventDefault();
//
//   // Get value from form element
//   var last_name = event.target.last_name.value;
//
//   // Insert a task into the collection
//   Meteor.users.update(Meteor.userId(),
//   {$set: {'profile.last_name': last_name}}
//   );
//   // Clear form
//   event.target.last_name.value = "";
// },
