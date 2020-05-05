import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import Array from "../views/Array.vue";
import Objects from "../views/Objects.vue";
import Scss from "../views/Scss.vue";
import Flexbox from "../views/Flexbox.vue";
import GitGithub from "../views/Git-Github.vue";
import Git from "../views/Git.vue";
import Github from "../views/Github.vue";
import Jenkins from "../views/Jenkins.vue";
import Vuejs from "../views/Vuejs.vue";
import Javascript from "../views/Javascript.vue";
import Html from "../views/Html.vue";
import Css from "../views/Css.vue";
import Resume from "../views/Resume.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    component: About,
    // beforeEnter: permissionGuard,
    children: [
      {
        path: "/",
        redirect: "services",
        label: "services",
        name: "about"
      },
      {
        path: "services",
        component: Services,
        name: "all-services"
      },
      {
        path: "contact",
        component: Contact,
        name: "contact-details"
      }
    ]
  },
  {
    path: "/gitgithub",
    component: GitGithub,
    // beforeEnter: permissionGuard,
    children: [
      {
        path: "/",
        redirect: "git",
        label: "git",
        name: "git-github"
      },
      {
        path: "git",
        component: Git,
        name: "git-details"
      },
      {
        path: "github",
        component: Github,
        name: "github-details"
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About
  // },
  {
    path: "/array",
    name: "Array",
    component: Array
  },
  {
    path: "/objects",
    name: "Objects",
    component: Objects
  },
  {
    path: "/scss",
    name: "Scss",
    component: Scss
  },
  {
    path: "/flexbox",
    name: "Flexbox",
    component: Flexbox
  },
  // {
  //   path: "/git-github",
  //   component: GitGithub,
  //   children: [
  //     {
  //       path: "/",
  //       redirect: "git",
  //       label: "git",
  //       name: "git-github-details"
  //     },
  //     {
  //       path: "git",
  //       component: "Git",
  //       name: "git-details"
  //     },
  //     {
  //       path: "github",
  //       component: Github,
  //       name: "github-details"
  //     }
  //   ]
  // },
  {
    path: "/jenkins",
    name: "Jenkins",
    component: Jenkins
  },
  {
    path: "/vuejs",
    name: "Vuejs",
    component: Vuejs
  },
  {
    path: "/javascript",
    name: "Javascript",
    component: Javascript
  },
  {
    path: "/html",
    name: "Html",
    component: Html
  },
  {
    path: "/css",
    name: "Css",
    component: Css
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function() {
  //     return import(/* webpackChunkName: "about" */ "../views/About.vue");
  //   }
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
