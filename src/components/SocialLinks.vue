<template>
    <div class="social-links radio-social-group">

        <a href="https://www.facebook.com/rusclimatefund" target="_blank" class="social-link social-group__link header--facebook__link">
            <img class="social-group__icon facebook__icon" src="@/assets/images/facebook.svg" alt="facebook">
        </a>
        
        <a href="#!" class="social-group__link header--youtube__link social-link">
            <img class="social-group__icon youtube__icon" src="@/assets/images/youtube.svg" alt="youtube">
        </a>

        <a href="https://www.instagram.com/rusclimatefund.ru/" target="_blank" class="social-group__link header--instagram__link social-link">
            <img class="social-group__icon instagram__icon" src="@/assets/images/instagram.svg" alt="instagram">
        </a>
        
    </div>
</template>

<script>
export default {
  name: 'social-links',
}
</script>

<style lang="scss">

  .social-links{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 105px;
  }



</style>

