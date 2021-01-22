<template>
  <div class="translate">
       <a href="#!" class="translate__link">
            <figure class="translate__figure">
                <img src="@/assets/images/globus-bl.svg" alt="" class="sidebar-img translate__img">
                <figcaption class="translate__figcaption">English</figcaption>
            </figure>
        </a>
  </div>
</template>


<script>

export default {
  name: 'general-sidebar-translate',
}
</script>

<style lang="scss" scoped>
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
  }
  .translate__figcaption{
    margin-left: 13px;
    font-family: SF Pro Rounded;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #4CB8C4;

  }


</style>