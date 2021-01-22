<template>
  <div class="efirs-sidebar">
    <div class="efirs-sidebar__wrap">
        <h2 class="efirs-sidebar__title">Сегодня в эфире</h2>
        <div class="efirs">


        </div>
    </div>
  </div>
</template>


<script>



export default {
  name: 'efirs-sidebar',
  components: {

  }
}
</script>

<style lang ='scss'>

    .efirs-sidebar{
        overflow-x: hidden;
        overflow-y: scroll;
        min-width: 209px;
    }

    .efirs-sidebar__wrap{
        padding: 13px;
    }

    .efirs-sidebar__title{
        font-family: SF Pro Rounded;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        color: #015C5D;
    }

    

</style>