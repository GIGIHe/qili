import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const components = {
  index:()=>import("@/components/Index"),
  shopCar: () => import("@/components/ShopCar")
};

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/shopcar",
      name: "shopCar",
      component: components.shopCar
    },
     {
      path: "/index",
      name: "index",
      component: components.index
    }
  ]
});
