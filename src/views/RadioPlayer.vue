<template>
  <div class="radio">
    <radio-sidebar/>
    <radio-content/>
  </div>
</template>

<script>
// @ is an alias to /src
import RadioSidebar from '../components/RadioSidebar.vue'
import RadioContent from '../components/RadioContent.vue'



export default {
  name: 'radio-player',

  components: {
    RadioSidebar,
    RadioContent,
  }

}
</script>
