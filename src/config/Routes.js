import React from 'react'

// Public Component
const Login = React.lazy(() => import('../views/SignIn'))

// Private Component
const Profile = React.lazy(() => import('../views/Account'))
const AWB = React.lazy(()=>import('../views/AWB'))

const privateRoute = [
  { exact: true, path: '/', menu: 'home', name: 'Home', component: Login },
  { exact: true, path: '/profile', menu: 'profile', name: 'Profile', component: Profile },
  { exact: true, path: '/create-awb', menu: 'create-awb', name: 'Create AWB', component: AWB },
];
const publicRoute  = [
  //{ exact: true, path: '/', menu: 'home', name: 'Home', component: Login },
  { exact: true, path: '/login', menu: 'login', name: 'Login', component: Login },
];



const routes = { 'public': publicRoute, 'private': privateRoute }

export default routes;