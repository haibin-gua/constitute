import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Ip from '../pages/Ip/Ip'
import School from '../pages/School/School'
import Side from '../pages/School/Side'
import Express from '../pages/express/Express'
import Phone from '../pages/Phone/Phone'
import Word from '../pages/Word/Word'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Ip',
      name:'Ip',
      component:Ip
    },
    {
      path:'/School',
      name:'School',
      component:School
    },
    {
      path:'/School/Side',
      name:'Side',
      component:Side
    },
    {
      path:'/Express',
      name:'Express',
      component:Express
    },
    {
      path:'/Phone',
      name:'Phone',
      component:Phone
    },
    {
      path:'/Word',
      name:'Word',
      component:Word
    }
  ]
})
