import {createWebHistory,createRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';
import Mount from './components/Mount';
import Signup from './components/signup.vue';
import Compute from './components/compute.vue';
import DataBind from './components/DataBind';
import Cal from './components/cal';
import Java from './components/java';
import Php from './components/php';
import Slote from './components/Slote';
import Update from './components/Update';
import child from './components/child';
import Watch from './components/watch'
import pagenot from './components/pagenot';
import createpost from './components/createpost'
import comp1 from './components/comp1'
import comp2 from './components/comp2';
import get from './components/get'
import customed from './components/customed'
import search from './components/search'
import filterc from './components/filterc'
import mixa from './components/mixa'
import mixb from './components/mixb'




const routes=[
    {
        name:'hello',
        path:'/',
        component:HelloWorld
    },
    {
        name:'Mount',
        path:'/Mount/:name',
        component:Mount
    },
    {
        name:'signup',
        path:'/signup',
        component:Signup
    },
    {
        name:'compute',
        path:'/compute',
        component:Compute
    },
    {
        name:'DataBind',
        path:'/DataBind',
        component:DataBind
    },
    {
        name:'cal',
        path:'/cal',
        component:Cal
    },
    {
        name:'java',
        path:'/java',
        component:Java
    },
    {
        name:'php',
        path:'/php',
        component:Php
    },
    {
        name:'slote',
        path:'/Slote',
        component:Slote
    },
    {
        name:'update',
        path:'/Update',
        component:Update
    },
    {
        name:'child',
        path:'/child',
        component:child
    },
    {
        name:'watch',
        path:'/Watch',
        component:Watch
    },
    {
        name:'pagenot',
        path:'/:pathMatch(.*)*',
        component:pagenot
    },
    {
        name:'createpost',
        path:'/createpost',
        component:createpost
    },
  
    {
        name:'comp1',
        path:'/comp1',
        component:comp1
    },
    {
        name:'comp2',
        path:'/comp2',
        component:comp2
    },
    {
        name:'get',
        path:'/get',
        component:get
    },
    {
        name:'customed',
        path:'/customed',
        component:customed
    },
    {
        name:'search',
        path:'/search',
        component:search
    },
    {
        name:'filterc',
        path:'/filterc',
        component:filterc
    },
    {
        name:'mixa',
        path:'/mixa',
        component:mixa
    },
    {
        name:'mixb',
        path:'/mixb',
        component:mixb
    },



];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;