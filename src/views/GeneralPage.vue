<template>
  <div class="general">
    <general-content/>
    <!-- <radio-content/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GeneralContent from '../components/GeneralPage/GeneralContent.vue'
// import RadioContent from '../components/RadioContent.vue'



export default {
  name: 'general-page',

  components: {
    GeneralContent,
    // RadioContent,
  }

}
</script>

<style lang="scss">
  .general{
    position: relative;
    background: linear-gradient(90deg, #003D4D 0%, #00C996 100%);
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }


</style>