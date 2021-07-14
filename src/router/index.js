import Vue from 'vue'
import VueRouter from 'vue-router'

import contacts from '../modules/contacts/router'

import chats from '../modules/chats/router'


// const ChatView = () => import('../modules/contacts/Contacts.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "layout" */ '@/_layout/Main'),
    children: [
      chats
    ]
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import(/* webpackChunkName: "welcome" */ '../components/Welcome.vue')
  },
  {
    path: '/reg',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "welcome" */ '../modules/contacts/Contacts.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../modules/chats/Search.vue'),
  },
  {
    path: '/phone',
    name: 'Phone',
    component: () => import(/* webpackChunkName: "search" */ '../modules/chats/Phone.vue'),
  },
  {
    path: '/settings',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "search" */ '../modules/chats/Settings.vue'),
  },
  {
    path: '/creating',
    name: 'CreatingElements',
    component: () => import(/* webpackChunkName: "search" */ '../modules/chats/CreatingElements.vue'),
  },
  {
    path: '/add',
    name: 'AddContact',
    component: () => import( /* webpackChunkName: "chatItem" */ '../modules/chats/AddContact.vue'),
  },
  {
    path: '/dark',
    name: 'DarkLenght',
    component: () => import( /* webpackChunkName: "chatItem" */ '../modules/chats/DarkLenght.vue'),
  }, 
  {
    path: '/sub',
    name: 'SubSearch',
    component: () => import( /* webpackChunkName: "chatItem" */ '../modules/chats/SubSearch.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
