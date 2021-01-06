<template>
  <div class="names track-info">
    <span class="author-name" id="authorName">Kirkorow Siroja</span>
    <span class="song-name" id="songName">Jaden - ERYS</span>
  </div>
</template>


<script>
export default {
  name: 'track-info',
}
</script>

<style lang="scss">

  .track-info{
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }

  .author-name{
  font-family: "SF Pro Rounded";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #8F8F8F;

  }

  .song-name{
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: #000000;
  margin-top: 6px;

  }
  


</style>