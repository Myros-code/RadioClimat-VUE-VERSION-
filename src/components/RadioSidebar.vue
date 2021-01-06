<template>
  <div class="player-sidebar">
    <radio-logo/>
    <radio-nav/>
    <radio-translate-btn/>
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