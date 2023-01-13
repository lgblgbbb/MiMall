import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Cart from './pages/cart'
import Order from './pages/order'
// import OrderList from './pages/orderList'
// import OrderConfirm from './pages/orderConfirm'
// import OrderPay from './pages/orderPay'
// import Alipay from './pages/alipay'
// import Login from './pages/login'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'index',
                    name:'index',
                    component:Index,
                },
                {
                    path:'product/:id',
                    name:'product',
                    component:()=>import('@/pages/product')
                },
                {
                    path:'detail/:id',
                    name:'detail',
                    component:()=>import('@/pages/detail')
                },
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:()=>import('@/pages/cart')
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'list',
                    name:'orderList',
                    component:()=>import('@/pages/orderList')
                },
                {
                    path:'confirm',
                    name:'orderConfirm',
                    component:()=>import('@/pages/orderConfirm')
                },
                {
                    path:'pay',
                    name:'orderPay',
                    component:()=>import('@/pages/orderPay')
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:()=>import('@/pages/alipay')
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component:()=>import('@/pages/login')
        }
    ]
})