// Template.addProduct.helpers({
//   username: function(){
//     return Meteor.user().profile.name;
//   }
// });

Template.addProduct.events({
  'submit form': function(e) {
      e.preventDefault();
      // Meteor.Dropzone.processQueue();

      // add product to product collection and to user closet

      var product = {

        type: $('#sel1').val(),
        category: $(e.target).find('[name=category]').val(),
        size: $(e.target).find('[name=size]').val(),
        color: $(e.target).find('[name=color]').val(),
        condition: $(e.target).find('[name=condition]').val(),
        // type: $(e.target).find('[name=condition]').val(),
        size2: $(e.target).find('[name=size2]').val(),
        description: $(e.target).find('[name=description]').val(),
        name: $(e.target).find('[name=name]').val(),
        price: $(e.target).find('[name=price]').val(),
        image: $('.afCloudinary-thumbnail a').attr('href')

      }

    Meteor.call('product', product, function(error, id){
        if (error){
          // return alert(error.reason);
        }
        Router.go('/products');
        Modal.show('thanksForAdding');
        var productId = userProducts.insert(product);
        console.log(productId);
      });


      // // send email
      var userEmail = Meteor.user().emails[0].address;
      var productName = $('#productName').val();
      var productType = $('#sel1').val();
      var productPrice = $('#productPrice').val();
      var productDesc = $('#product-desc').val();
      var productCondition = $('#productCondition').val();
      var productSize = $('#size').val();
      var productColor = $('#color').val();
      var productCategory = $('#category').val();
      var productImage =  $('.afCloudinary-thumbnail a').attr('href');
      var productImageTwo = $('#imageTwo .afCloudinary-thumbnail a').attr('href');
      var productImageThree = $('#imageThree .afCloudinary-thumbnail a').attr('href');

      // // Send email to huntrs
      Meteor.call('sendEmail', {
        to: 'ikeewell@gmail.com',
        from: 'no-reply@huntrs.com',
        subject: userEmail + ' has added a new product, please review',
        text: 'Mailgun is totally awesome for sending emails!',
        html: '<h1>Product Details </h1> <br> <img style="width:100%" src='+ productImage +'> <img style="width:100%" src='+ productImageTwo +'> <img style="width:100%" src='+ productImageTwo +'> <h2> Product Title: </h2> <p>' + productName + '</p> <br> <h2>Product Price: </h2> <p>' + productPrice +
              '</p> <br> <h2> Product Description: </h2> <p>' + productDesc + ' </p> <br> <h2> Product Condition: </h2> <p>' + productCondition + '</p>'
              + ' </p> <br> <h2> Product Size: </h2> <p>' + productSize + '</p>' + ' </p> <br> <h2> Product Color: </h2> <p>' + productColor + '</p>'
              + ' </p> <br> <h2> Product Category: </h2> <p>' + productCategory + '</p>'
      });

      // Send email to user
      Meteor.call('sendEmail', {
        to: Meteor.user().emails[0].address,
        from: 'no-reply@huntrs.com',
        subject: 'Thank you for adding a product!',
        text: 'Mailgun is totally awesome for sending emails!',
        html: '<table width="100%" bgcolor="#FFF" cellpadding="0" cellspacing="0" border="0">'+
        '    <tbody>'+
        '        <tr>'+
        '            <td style="padding:40px 0;">'+
        '                <!-- begin main block -->'+
        '                <table cellpadding="0" cellspacing="0" width="608" border="0" align="center">'+
        '                    <tbody>'+
        '                        <tr>'+
        '                            <td>'+
        '                                <!-- begin wrapper -->'+
        '                                <table cellpadding="0" cellspacing="0" border="0" width="100%">'+
        '                                    <tbody>'+
        '                                        <tr>'+
        '                                            <td width="8" height="4" colspan="2" style="background:url(http://demo.artlance.ru/email/shadow-top-left.png) no-repeat 100% 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td height="4" style="background:url(http://demo.artlance.ru/email/shadow-top-center.png) repeat-x 0 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="8" height="4" colspan="2" style="background:url(http://demo.artlance.ru/email/shadow-top-right.png) no-repeat 0 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                        '+
        '                                        <tr>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-left-top.png) no-repeat 100% 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td colspan="3" rowspan="3" bgcolor="#FFFFFF" style="padding:0 0 30px;">'+
        '                                                <!-- begin content -->'+
        '                                                <p style="margin:2em 30px 33px; text-align:center; text-transform:uppercase; font-size:24px; line-height:30px; font-weight:bold; color:#484a42;">'+
        '                                                    Thank you for your interest in listing your product on HUNTRS. Our team will now review your product and decide if it meets our quality and condition standards. We want to ensure that items listed on our app is of high-quality and interest to our fellow HUNTRS. You will be informed shortly if your product has made the cut.'+
        '                                                </p>'+
        '                                                <h3 style="margin:2em 30px 33px; text-align:center; text-transform:lowercase; line-height:30px; font-weight:bold; color:#484a42;"> Please allow 3-5 days for us here at huntrs to review your submission</h3>'+
        '                                                <!-- begin articles -->'+
        '                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">'+
        '                                                    <tbody>'+
        '                                                        <tr valign="top">'+
        '                                                            <td width="30"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                                            <td colspan="3">'+
        '                                                                <a style="display:block; margin:0 0 14px;" href="http://huntrsapp-s.herokuapp.com/"><img src="http://huntrsapp-s.herokuapp.com/resources/skate.jpg" width="540" height="auto" alt="More" style="display:block; margin:0; border:0; background:#eeeeee;"></a>'+
        '                                                                <p style="font-size:2em; font-weight:bold; color:#000; margin:0 0 5px;"><a href="http://huntrsapp-s.herokuapp.com/products">In the meantime checkout some of the already listed products here at Huntrs</a></p>'+
        '                                                            </td>'+
        '                                                            <td width="30"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                                        </tr>'+
        '                                                    </tbody>'+
        '                                                <!-- end content --> '+
        '                                            </td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-right-top.png) no-repeat 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                        '+
        '                                        '+
        '                                        <tr>'+
        '                                            <td width="4" style="background:url(http://demo.artlance.ru/email/shadow-left-center.png) repeat-y 100% 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" style="background:url(http://demo.artlance.ru/email/shadow-right-center.png) repeat-y 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                        '+
        '                                        <tr> '+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-left-bottom.png) repeat-y 100% 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-right-bottom.png) repeat-y 0 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                 '+
        '                                        <tr>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-corner-left.png) no-repeat 100% 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-left.png) no-repeat 100% 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-center.png) repeat-x 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-right.png) no-repeat 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-corner-right.png) no-repeat 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                    </tbody>'+
        '                                </table>'+
        '                                <!-- end wrapper-->'+
        ''+
        '                            </td>'+
        '                        </tr>'+
        '                    </tbody>'+
        '                </table>'+
        '                <!-- end main block -->'+
        '            </td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table>'
      });
    }

});
