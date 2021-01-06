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
  name: 'radio-nav-item',
  props:['nav'],
}
</script>


<style lang="scss">

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
    width: 28px;
    height: 31px;
  }

  .nav-item__figcaption{
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 13px;
  }


</style>