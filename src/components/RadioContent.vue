<template>
    <div class="radio-content content">
        <div class="wrap">
            <radio-content-header/>
            <radio-content-player/>
        </div>
    </div>
</template>


<script>
import RadioContentHeader from './RadioContentHeader.vue'
import RadioContentPlayer from './RadioContentPlayer.vue'
export default {
  name: 'radio-content',
  components: {
    RadioContentHeader,
    RadioContentPlayer,
  }
}
</script>
