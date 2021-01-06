
<template>
    <div class="player-btns">
        <like-btn/>
        <toggle-music-btn/>
        <dislike-btn/>
    </div>
</template>


<script>
import LikeBtn from './LikeBtn.vue'
import ToggleMusicBtn from './ToggleMusicBtn.vue'
import DislikeBtn from './LikeBtn.vue'


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