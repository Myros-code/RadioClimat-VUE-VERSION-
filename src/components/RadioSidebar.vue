<template>
  <div class="player-sidebar">
    <div class="player-sidebar__wrap">
      <div class="player-flex-block">
        <radio-logo/>
        <radio-nav/>
      </div>
      <radio-translate-btn/>
    </div>
  </div>
</template>


<script>

import RadioLogo from './RadioLogo.vue';
import RadioNav from './RadioNav.vue';
import RadioTranslateBtn from './RadioTranslateBtn.vue';

export default {
  name: 'radio-sidebar',
  components: {
    RadioLogo,
    RadioNav,
    RadioTranslateBtn
  }
}
</script>

<style lang ='scss' src="@/assets/styles/RadioPage/RadioSidebar.scss"></style>