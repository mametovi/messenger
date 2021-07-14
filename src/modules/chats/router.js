const chats = {
  path: '/chats',
  name: 'chats',
  component: () => import( /* webpackChunkName: "chatItem" */ './Chat'),
  children: [{
      path: ':id',
      name: 'chatItem',
      component: () => import( /* webpackChunkName: "chatItem" */ './Chat'),
    }]
}


export default chats