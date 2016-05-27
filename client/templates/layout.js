/*
 * This is an example of a customized template.
 * This layout replaces the "coreLayout" template defined in the reactioncommerce:core package.
 * https://github.com/reactioncommerce/reaction-core/blob/master/client/templates/layout/layout.html
 * To use custom template in layout.html uncomment
 *
 *     Template.layout.replaces "coreLayout"
 */


// Template.layout.replaces("coreLayout");

// when adding new tags comment out

Template.layout.replaces("coreLayout");

Template.layoutHeaderNew.replaces("layoutHeader");

// Template.landingPro.replaces("products");
// Template.loginFormNew.replaces("loginFormSignUpView");

Template.productDetailNew.replaces("productDetail");

Template.layoutHeaderNew.replaces("checkoutHeader");
