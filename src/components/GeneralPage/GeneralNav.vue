<template>
    <nav class="sidebar-nav general-sidebar-nav">
        <general-nav-item 
        v-for="nav in navs"
        v-bind:nav="nav"
        v-bind:key="nav.id"
        />
        <social-links class="general-social-links"/>
        <general-translate-btn class="general-translate-btn"/>
  
    </nav>
</template>


<script>
import GeneralNavItem from './GeneralNavItem.vue'
import SocialLinks from '../SocialLinks.vue'
import GeneralTranslateBtn from './GeneralTranslateBtn.vue'

//Import images
import RadioImage from '@/assets/images/radio-bl.svg'
import SearchImage from '@/assets/images/search-bl.svg'
import MicroImage from '@/assets/images/micro-bl.svg'
import CalendarImage from '@/assets/images/calendar-bl.svg'
import RusClimatFondImage from '@/assets/images/climatfond-bl.svg'

export default {
  name: 'general-sidebar-nav',
  components: {
    GeneralNavItem,
    SocialLinks,
    GeneralTranslateBtn,
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

<style lang="scss" scoped>
  .general-sidebar-nav{
    margin-top: 54px;
  }

  .general-social-links{
    margin-top: 48px;

  }

  .general-translate-btn{
    margin-top: 48px;
  }
  


</style>