import App from '../App'
import home from '../page/home/home'
import redeem from '../page/daf/redeem'
import record from '../page/daf/record'
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
            path:'/redeem',
            component:redeem
        },{
            path:'/record',
            component:record
        },{
            path:'/assets',
            component:assets
        },{
            path:'/assetsdetail',
            component:assetsdetail
        }
    ]
}]