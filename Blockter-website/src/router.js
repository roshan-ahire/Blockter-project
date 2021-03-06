import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Blockter-website",
      name: "Blockter-website",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Blockter-website.vue")
    },
    {
      path: "/example",
      name: "example",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/example.vue")
    },
    {
      path: "/new-modal-page",
      name: "new-modal-page",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/new-modal-page.vue")
    },
    {
      path: "/login-page",
      name: "login-page",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/login-page.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
