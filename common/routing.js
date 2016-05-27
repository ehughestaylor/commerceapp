/**
 * Reaction App Router
 * Define general app routing.
 * ReactionCore common/routing.js contains the core routes.
 */

// let staticPages = ["about", "team", "faqs", "terms", "privacy" ];

/**
 * app router mapping
 */
// Router.map(function route() {
//   for (let page of staticPages) {
//     this.route(page, {
//       controller: ShopController,
//       name: page
//     });
//   }
//   return this.route("notFound", {
//     path: "/(.*)"
//   });
// });
let staticPages = ["about", "team" ];

Router.map(function route() {
  for (let page of staticPages) {
    this.route(page, {
      controller: ShopController,
      name: page
    });
  }
  return this.route("notFound", {
    path: "/(.*)"
  });
});
Router.map(function route() {
  _.extend(Router.routes.index.options, {
    // Just an example. You can put any Iron Router options here.
    template: 'landingPro'
  });
});
