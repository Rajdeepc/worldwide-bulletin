import City from './components/City.vue'
import People from './components/People.vue'
import Business from './components/Business.vue'
import Entertainment from './components/Entertainment.vue'
import Food from './components/Food.vue'
import Style from './components/Style.vue'
import Technology from './components/Technology.vue'
import Home from './components/Home.vue'

const Routes = [
  {path:'/',component:Home},
  {path:'/city',component:City},
  {path:'/people',component:People},
  {path:'/business',component:Business},
  {path:'/entertainment',component:Entertainment},
  {path:'/food',component:Food},
  {path:'/style',component:Style},
  {path:'/technology',component:Technology}
] 


export default Routes