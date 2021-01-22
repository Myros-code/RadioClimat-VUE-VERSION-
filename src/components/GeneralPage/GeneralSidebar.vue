<template>
  <div class="general-sidebar">
    <div class="general-sidebar__wrap">
        <general-logo/>
        <general-nav/>
    </div>
  </div>
</template>


<script>

import GeneralLogo from './GeneralLogo.vue';
import GeneralNav from './GeneralNav.vue';

export default {
  name: 'general-sidebar',
  components: {
    GeneralLogo,
    GeneralNav,
  }
}
</script>

<style lang ='scss'>

    .general-sidebar{
        min-width: 210px;
        height: 100%;
    }

    .general-sidebar__wrap{
      padding: 40px 32px;
      height: 100%;
    }

</style>