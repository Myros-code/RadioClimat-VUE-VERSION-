
<template>
    <nav class="sidebar-nav player-sidebar-nav">
        <radio-nav-item v-bind:key="nav" v-for="nav in navs"/>
    </nav>
</template>


<script>
import RadioNavItem from './RadioNavItem.vue'

export default {
  name: 'radio-sidebar-nav',
  components: {
    RadioNavItem,
  },
  data(){
    return{
        navs:[
            {href:'1', text: 'Радио', img: '1'},
            {href:'2', text: 'Заказать', img: '2'},
            {href:'3', text: 'Подкасты', img: '3'},
            {href:'4', text: 'Расписание', img: '4'},
            {href:'5', text: 'РусКлиматФонд', img: '5'},
      ]
    }
  },
}
</script>