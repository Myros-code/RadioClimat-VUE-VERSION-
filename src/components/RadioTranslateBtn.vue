<template>
  <div class="translate">
       <a href="#!" class="translate__link">
            <figure class="translate__figure">
                <img src="@/assets/images/globus-wh.svg" alt="" class="sidebar-img translate__img">
                <figcaption class="translate__figcaption">English</figcaption>
            </figure>
        </a>
  </div>
</template>


<script>

export default {
  name: 'radio-sidebar-translate',
}
</script>

<style lang="scss">
  .translate{

  }
  .translate__link{
    display: block;

  }
  .translate__figure{
    display: flex;
    align-items: center;
    flex-direction: row;

  }
  .translate__img{
    width: 28px;
    height: 31px;

  }
  .translate__figcaption{
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 13px;

  }


</style>