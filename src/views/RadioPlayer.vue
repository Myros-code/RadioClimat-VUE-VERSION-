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

<style lang="scss">
  .radio{
    background: linear-gradient(180deg, #003D4D 0%, #00C996 100%);
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
  }


</style>
