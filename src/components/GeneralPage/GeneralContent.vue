<template>
  <div class="general-content">
    <general-sidebar/>
    <div class="center-content">

    </div>
    <efirs-sidebar/>
    <!-- <radio-content/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GeneralSidebar from './GeneralSidebar.vue'
import EfirsSidebar from './EfirsSidebar.vue'
// import RadioContent from '../components/RadioContent.vue'

export default {
  name: 'general-content',

  components: {
    GeneralSidebar,
    EfirsSidebar,
    // RadioContent,
  }

}
</script>

<style lang="scss">
  .general-content{
    overflow: hidden;
    height: 87vh;
    background-color: #ffffff;
    border-radius: 0 0 40px 40px;
    display: flex;
    position: relative;
}
.center-content{
    overflow: scroll;
    width: 100%;
    border-left: 1px solid;
    border-right: 1px solid;
    // border-image-source: linear-gradient(90deg, rgba(76, 184, 196, 0) 1.56%, #4CB8C4 16.15%, #3CD3AD 83.85%, rgba(60, 211, 173, 0) 97.92%);
    padding-left: 40px;
    padding-right: 39px;
}


</style>