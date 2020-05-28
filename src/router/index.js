import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import VueLearn from "../views/vue/VueLearn.vue";

import Jenkins from "../views/Jenkins.vue";

import Vuejs from "../views/VueJs/index.vue";
import VueBasic from "../views/VueJs/views/VueBasic.vue";
import VueApiCall from "../views/VueJs/views/VueApiCall.vue";
import VueComponent from "../views/VueJs/views/VueComponent.vue";
import VueX from "../views/VueJs/views/VueX.vue";

import Javascript from "../views/Javascript/index.vue";
import JavascriptBasic from "../views/Javascript/views/JavascriptBasic.vue";
import JavascriptObjects from "../views/Javascript/views/JavascriptObjects.vue";
import JavascriptArray from "../views/Javascript/views/JavascriptArray.vue";
import JavascriptES6 from "../views/Javascript/views/JavascriptES6.vue";
import JavascriptRegex from "../views/Javascript/views/JavascriptRegex.vue";

import GitGithub from "../views/GitGithub/index.vue";
import GGBasic from "../views/GitGithub/GGBasic.vue";
import Git from "../views/GitGithub/Git.vue";
import Github from "../views/GitGithub/Github.vue";

import CSS from "../views/CSS/index.vue";
import CSSAnimation from "../views/CSS/views/Animation.vue";
import CSS3 from "../views/CSS/views/CSS3.vue";
import Flexbox from "../views/CSS/views/Flexbox.vue";
import Grid from "../views/CSS/views/Grid.vue";
import Scss from "../views/CSS/views/Scss.vue";
import Less from "../views/CSS/views/Less.vue";

import Jquery from "../views/Jquery/index.vue";
import JqueryDetails from "../views/Jquery/views/Jquery.vue";

import Html from "../views/Html.vue";
import Resume from "../views/Resume.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/jquery",
    component: Jquery,
    children: [
      {
        path: "/",
        redirect: "JqueryDetails",
        label: "Jquery",
        name: "jquery"
      },
      {
        path: "JqueryDetails",
        component: JqueryDetails,
        name: "jquery-details"
      }
    ]
  },
  {
    path: "/css",
    component: CSS,
    children: [
      {
        path: "/",
        redirect: "css3",
        label: "css3",
        name: "css"
      },
      {
        path: "css3",
        component: CSS3,
        name: "css3"
      },
      {
        path: "cssanimation",
        component: CSSAnimation,
        name: "css-animation"
      },
      {
        path: "flexbox",
        component: Flexbox,
        name: "flexbox"
      },
      {
        path: "grid",
        component: Grid,
        name: "grid"
      },
      {
        path: "scss",
        component: Scss,
        name: "scss"
      },
      {
        path: "less",
        component: Less,
        name: "less"
      }
    ]
  },
  {
    path: "/javascript",
    component: Javascript,
    children: [
      {
        path: "/",
        redirect: "basic",
        label: "basic",
        name: "javascript"
      },
      {
        path: "basic",
        component: JavascriptBasic,
        name: "javascript-basic"
      },
      {
        path: "array",
        component: JavascriptArray,
        name: "javascript-array"
      },
      {
        path: "object",
        component: JavascriptObjects,
        name: "javascript-objects"
      },
      {
        path: "es6",
        component: JavascriptES6,
        name: "javascript-es6"
      },
      {
        path: "regex",
        component: JavascriptRegex,
        name: "javascript-regex"
      }
    ]
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
      },
      {
        path: "vue",
        component: VueLearn,
        name: "vue-learn"
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
        redirect: "ggbasic",
        label: "ggbasic",
        name: "gitgithub"
      },
      {
        path: "ggbasic",
        component: GGBasic,
        name: "git-github-basic"
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
  {
    path: "/jenkins",
    name: "Jenkins",
    component: Jenkins
  },
  {
    path: "/vuejs",
    component: Vuejs,
    children: [
      {
        path: "/",
        redirect: "vuebasic",
        label: "vuebasic",
        name: "Vuejs"
      },
      {
        path: "vuebasic",
        component: VueBasic,
        name: "vue-basic"
      },
      {
        path: "vueapicall",
        component: VueApiCall,
        name: "vue-api-call"
      },
      {
        path: "vuecomponent",
        component: VueComponent,
        name: "vue-component"
      },
      {
        path: "vuex",
        component: VueX,
        name: "vuex"
      }
    ]
  },
  {
    path: "/html",
    name: "Html",
    component: Html
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
