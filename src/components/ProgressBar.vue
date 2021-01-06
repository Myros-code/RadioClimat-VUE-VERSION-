<template>
<div class="progres">
    <div class="progres-value" id="audioProgress" style="width: 120.608px;"></div>
    <span class="time current-time" id="currentTime">00:00</span>
    <span class="time duration-time" id="durationTime">00:00</span>
</div>
</template>


<script>
export default {
  name: 'progress-bar',
}
</script>

<style lang="scss">

  .progres{
    background-color: rgba(1, 92, 93, 0.05);
    width: 67%;
    border-radius: 50px;
    position: relative;
    margin-top: 60px;
    height: 8px;

  }
  .progres-value{
    position: absolute;
    border-radius: 50px;
    top:0;
    left: 0;
    height: 8px;
    background-color: #3cd3ad;

  }

  .time{
    position: absolute;
    // font-family: $primary-font;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #015C5D;
    bottom: 10px;

  }

  .current-time{
    left: 0;
  }

  .duration-time{
    right: 0;
  }

  


</style>