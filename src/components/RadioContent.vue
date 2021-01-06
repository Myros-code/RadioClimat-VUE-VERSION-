<template>
    <div class="radio-content content">
        <div class="radio-content__wrap">
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


<style lang="scss">
  .radio-content{
    background-color: #FFFFFF;
    border-radius: 40px 0 0 40px;
    width: 100%;
  }
  .radio-content__wrap{
    padding: 45px 32px 36px 53px;
  }


</style>
