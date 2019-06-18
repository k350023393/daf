import App from '../App'
import home from '../page/home/home'
import login from '../page/login/login'
import city from '../page/city/city'
import redeem from '../page/daf/redeem'
import record from '../page/daf/record'
import test from '../page/daf/test'
import assets from '../page/daf/assets'
import assetsdetail from '../page/daf/assetsdetail'

export default [{
    path:'/',
    component:App,
    children:[
        {
            path:'',
            redirect:'/home'
        },{
            path:'/home',
            component:home
        },{
            path:'/login',
            component:login
        },{
            path:'/city',
            component:city
        },{
            path:'/redeem',
            component:redeem
        },{
            path:'/record',
            component:record
        },{
            path:'/test',
            component:test
        },{
            path:'/assets',
            component:assets
        },{
            path:'/assetsdetail',
            component:assetsdetail
        }
    ]
}]