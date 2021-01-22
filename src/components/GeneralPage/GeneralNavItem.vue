<template>
  <div class="nav-item">
        <a href="" class="nav-item__link">
            <figure class="nav-item__figure">
                <img :src="nav.img" alt="this is a image for navigation item" class="nav-item__img">
                <figcaption class="nav-item__figcaption">{{nav.text}}</figcaption>
            </figure>
        </a>
  </div>
    
</template>


<script>
// import Mixins from '@/assets/styles/All/mixins.scss'
export default {
  name: 'general-nav-item',
  props:['nav'],
}
</script>


<style scoped lang="scss">

  .nav-item{

    &:not(:first-child) {
    margin-top: 48px;
    }
  }

  .nav-item__link{
    display: block;

  }

  .nav-item__figure{
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .nav-item__img{

  }

  .nav-item__figcaption{
    margin-left: 13px;
    font-family: SF Pro Rounded;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #4CB8C4;

  }


</style>