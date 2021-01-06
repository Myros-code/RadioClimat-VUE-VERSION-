<template>
  <div class="albom">
        <div class="albom-img__block">
            <img src="@/assets/images/обложка.png" alt="albom-cover" id="audioImg" class="albom__img">
        </div>
    </div>
</template>


<script>
export default {
  name: 'radio-album',
}
</script>

<style lang="scss">
  .albom{
    background-image: url(../assets/images/albom-cover.png);
    background-size: cover;
    width: 360px;
    height: 360px;
    position: relative;
  }

  .albom-img__block{
    left: 44px;
    top: 44px;
    width: 270px;
    height: 270px;
    border-radius: 50%;
    position: absolute;
    overflow: hidden;
    
  }
  .albom__img{
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  


</style>
