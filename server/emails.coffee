if Meteor.isServer
        PrettyEmail.options =
          from: 'huntrs@huntrs.co'
          # logoUrl: "http://localhost:3000/resources/huntrs-h.png",
          logoUrl: "http://huntrsapp-s.herokuapp.com/resources/huntrs-h.png"
          companyName: 'huntrs'
          companyUrl: 'http://huntrs.co'
          companyAddress: 'Philadelphia'
          companyTelephone: '+6572294868'
          companyEmail: 'customerservice@huntrs.co'
          siteName: 'huntrs'

        PrettyEmail.defaults.verifyEmail =
          heading: 'Activate your account to start begin the hunt',
          buttonText: 'Activate',
