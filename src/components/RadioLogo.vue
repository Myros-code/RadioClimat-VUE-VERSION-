<template>
  <div class="sidebar-logo">
        <a class="sidebar-logo__link" href="">
            <figure class="sidebar-logo__figure">
                <img class="sidebar-logo__img" src="@/assets/images/logo-wh.svg" alt="logo">
                <figcaption class="sidebar-logo__figcaption">Климат</figcaption>
            </figure>
        </a>
  </div>
</template>


<script>
export default {
  name: 'radio-sidebar-logo',
}
</script>

<style lang="scss">

  .sidebar-logo{
    display: flex;
    justify-content: flex-start;
  }

  .sidebar-logo__link{
    
  }

  .sidebar-logo__figure{

  }

  .sidebar-logo__img{

  }

  .sidebar-logo__figcaption{
    font-family: 'BELEPOTAN';
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    // text-align: center;
    color: #FFFFFF;
  }


</style>