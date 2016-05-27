
//go to the right route when user clicks closet for first time
Template.layoutHeader.events({
  'click .profile-button':function(event){
      var str = Meteor.user().emails[0].address;
      str = str.split("@");
      userName = str[0];

      Router.go('/profile/' + userName);

  }
});

//on click set up username so search function works showing username rather than email
Template.layoutHeader.events({
  'click .profile-button':function(event){
    if (Meteor.user().profile == undefined){
      var str = Meteor.user().emails[0].address;
      str = str.split("@");
      userName = str[0];
      Meteor.users.update(Meteor.userId(),{$set: {'profile.username': userName}});
      Meteor.users.update(Meteor.userId(),{$set: {'profile.name': Meteor.user().emails[0].address}});

    }
  }
});


Template.layoutHeader.onRendered(function(){
  //on click close menu
  $('.nav-item').on('click',function(){
    $('.navbar-collapse').removeClass('in');
  });

  Meteor.subscribe("directory");

  Meteor.typeahead.inject();
  $('.typeahead').bind('typeahead:select', function(ev, suggestion){
    console.log('Selection: ' , suggestion.value);
    Router.go('/profile/'+ suggestion.value);
  });
});

Template.layoutHeader.helpers({
  username: function(){
    var str = Meteor.user().emails[0].address;
    str = str.split("@");
    userName = str[0];
    return userName;
  },
  profileImage: function(){
    return Meteor.user().profile.profile_pic
  },
  usernames: function(){
    return Meteor.users.find().fetch().map(function(user){

      var userProfile = user.profile;

      var amountOfUser = Meteor.users.find().fetch().length;


      for(var i= 0; i <= amountOfUser; i++){
        if (userProfile !== undefined) {
          return user.profile.username;

          // return user.profile.name;
          // console.log(user);
        }
      }

      // if (user.profile.name == undefined){
      //   // Meteor.users.update(Meteor.userId(),
      //   // {$set: {'profile.name': 'default'}}
      //   // );
      //   this.
      // } else {
      //   return user.profile.name;
      // }
    });
  }
});
