
<template>
    <nav class="sidebar-nav player-sidebar-nav">
        <radio-nav-item 
        v-for="nav in navs"
        v-bind:nav="nav"
        v-bind:key="nav.id"
        />
    </nav>
</template>


<script>
import RadioNavItem from './RadioNavItem.vue'

//Import images
import RadioImage from '@/assets/images/radio-wh.svg'
import SearchImage from '@/assets/images/search-wh.svg'
import MicroImage from '@/assets/images/micro-wh.svg'
import CalendarImage from '@/assets/images/calendar-wh.svg'
import RusClimatFondImage from '@/assets/images/rus_climat_fond-wh.png'

export default {
  name: 'radio-sidebar-nav',
  components: {
    RadioNavItem,
  },
  
  data(){
    return{
        navs:[
            {id:'1',  href:'1', text: 'Радио', img: RadioImage},
            {id:'2',  href:'2', text: 'Заказать', img: SearchImage},
            {id:'3',  href:'3', text: 'Подкасты', img: MicroImage},
            {id:'4',  href:'4', text: 'Расписание', img: CalendarImage},
            {id:'5',  href:'5', text: 'РусКлиматФонд', img: RusClimatFondImage},
      ]
    }
  },
}
</script>

<style lang="scss">
  .sidebar-nav{
    margin-top: 115px;
  }
  


</style>