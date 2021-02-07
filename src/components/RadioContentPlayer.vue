<template>
  <div class="radio-player">
    <div class="radio-volume-bar_positioner">
      <radio-volume-bar/>
    </div>
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
import RadioVolumeBar from './RadioVolumeBar.vue'
export default {
  name: 'radio-content-player',
  components: {
    RadioAlbum,
    ProgressBar,
    TrackInfo,
    PlayerBtns,
    RadioVolumeBar,
  }
}
</script>

<style lang="scss">

  .radio-player{
    position: relative;
  }

  .radio-volume-bar_positioner {
    transform: rotate(90deg);
    position: absolute;
    top: 175px;
    left: 87%;
  }

  .radio-player{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }



</style>