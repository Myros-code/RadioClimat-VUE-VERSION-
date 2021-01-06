<template>
  <div class="radio-player">
    <div class="radio-player-title">
      <radio-album/>
    </div>
    <progress-bar/>
    <track-info/>
    <player-btns/>
  </div>
</template>


<script>
import RadioAlbum from './RadioAlbum.vue'
import ProgressBar from './ProgressBar.vue'
import TrackInfo from './TrackInfo.vue'
import PlayerBtns from './PlayerBtns.vue'

export default {
  name: 'radio-content-player',
  components: {
    RadioAlbum,
    ProgressBar,
    TrackInfo,
    PlayerBtns,
  }
}
</script>

<style lang="scss">

  .radio-player{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }



</style>