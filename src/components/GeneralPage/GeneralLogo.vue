<template>
  <div class="sidebar-logo">
        <router-link class="sidebar-logo__link" to="/">
            <figure class="sidebar-logo__figure">
                <img class="sidebar-logo__img" src="@/assets/images/logo-colour.svg" alt="logo">
                <figcaption class="sidebar-logo__figcaption">Климат</figcaption>
            </figure>
        </router-link>
  </div>
</template>


<script>
export default {
  name: 'general-sidebar-logo',
}
</script>

<style lang="scss" scoped>

  .sidebar-logo{
    display: flex;
    justify-content: flex-start;
  }

  .sidebar-logo__link{
    
  }

  .sidebar-logo__figure{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .sidebar-logo__img{

  }

  .sidebar-logo__figcaption{
    margin-top: 4px;
    font-family: Belepotan;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #4CB8C4;
  }


</style>