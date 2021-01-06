<template>
    <div class="player-btn toggle-music__btn" id="toggleMusicBtn">
        <img class="toggle-music__img player-btn__img" :src="PlayBtn" alt="Play and pause music">
    </div>
</template>


<script>
import PlayBtn from '@/assets/images/play-lg.svg'
import PauseBtn from '@/assets/images/pause.svg'
export default {
  name: 'toggle-music-btn',
  data(){
    return{
      PlayBtn,
      PauseBtn,


    }
  }
}
</script>