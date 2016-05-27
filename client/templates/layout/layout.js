// Template.layout.helpers({
//   loggedin: function(){
//     return Meteor.user().username
//   }
// });
// Template.layoutHeaderNew.rendered=function(){
//   Meteor.typeahead.inject();
//   $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
//     console.log('Selection: ', suggestion.value);
//     Router.go('profile', { username: suggestion.value });
//   });
// };
//
// Template.layoutHeaderNew.helpers({
//   usernames: function(){
//     return Meteor.users.find().fetch().map(function(user){
//       return Meteor.user().username
//     });
//   }
// });
