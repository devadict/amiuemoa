import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Products from "../views/Products.vue";
import Profile from "../views/Profile.vue";
import Register from "../views/Register.vue";
import Table from "../views/Table.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/table",
    name: "Table",
    component: Table,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const Access = ["/login", "/register"];
  const pagesVerif = !Access.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (pagesVerif && !loggedIn) {
    return next("/login");
  }
  next();
});
export default router;
