import Vue from "vue";
import VueRouter from "vue-router";
import DefaultPage from "@/layout/default";
import BlankPage from "@/layout/blank";
import Index from "@/page/index";
import changeCity from "@/page/changeCity";
import goodsList from "@/page/goodList";
import login from "@/page/login";
import register from "@/page/register";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "DefaultPage",
        component: DefaultPage,
        redirect: "/index",
        children: [{
                path: "/index",
                name: "index",
                component: Index,
            },
            {
                path: "/changeCity",
                name: "changeCity",
                component: changeCity,
            },
            {
                path: "/s/:name",
                name: "goods",
                component: goodsList,
            },
        ]
    },
    {
        path: "/blank",
        name: "BlankPage",
        component: BlankPage,
        children: [{
                path: "login",
                name: "login",
                component: login,
            },
            {
                path: "register",
                name: "register",
                component: register,
            }
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;