
<template>
    <div class="player-btns">
        <dislike-btn/>
        <toggle-music-btn/>
        <like-btn/>
    </div>
</template>


<script>
import LikeBtn from './LikeBtn.vue'
import ToggleMusicBtn from './ToggleMusicBtn.vue'
import DislikeBtn from './DislikeBtn.vue'


export default {
  name: 'player-btns',
  components: {
    LikeBtn,
    ToggleMusicBtn,
    DislikeBtn,
  },
  data(){
    return{
        
    }
  },
}
</script>

<style lang="scss">

  .player-btns{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    margin-top: 30px;
    
  }



</style>