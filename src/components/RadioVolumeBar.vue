<template>
    <div class="volume radio-volume-bar">

        <div class="slider-flex__block flex-block">

            <div class="slider-volume__block">
                <div class="slider-volume__item">
                    <div class="slider-container--main">
                        <div class="slider-container--child">
                            <span class="slider-volume_bar">
                                <span class="fill" style=""></span>
                            </span>
                            <input id="volumeInput" class="slider-volume__input volume-item" type="range" min="0.01" max="1" step="0.01"
                                value="0.5">
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="volume-flex__block flex-block">

            <div class="volume-change__btn volume-plus">
                <img src="@/assets/images/volume-max.svg" alt="">
            </div>

            <div class="volume-change__btn volume-minus">
                <img src="@/assets/images/volume-min.svg" alt="">
            </div>

        </div>
       

        
    </div>
</template>


<script>

    export default {
        name: 'radio-volume-bar',
    }
</script>

<style lang='scss' scoped>
    .radio-volume-bar{
        width: 0;
    }

    .flex-block{
        display: flex;
        align-items: center;
    }

    .slider-flex__block{
        
        justify-content: center;
    }

    .volume-flex__block{
        // justify-content: space-between;
        position: relative;
    }

    

    .volume-change__btn{
        display: inline-block;
        transform: rotate(-90deg);
        position: absolute;
        top: 10px;
    }

    .volume-plus{
        left: 150px;
    }

     .volume-minus{
        right: 150px;
    }
    .slider-volume__block{
        // position: absolute;
        // left: -90px;
       
    }

    .slider-volume__item{
        position: relative;

    }

    .slider-container--main{
        width: 290px;
    }

    .slider-container--child{
        position: relative;

    }

    .slider-volume_bar{
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 15px;
        border-radius: 50px;
        background: linear-gradient(270deg, #4CB8C4 6.64%, #3CD3AD 37.72%, #6EEC48 62.48%, #EF9327 93.1%);
        overflow: hidden;
    }

    .fill{
        display: block;
        width: 0;
        height: 100%;
        background-color: #E5E5E5;
    }
    

    .slider-volume__input{
        -webkit-appearance: none;
        position: relative;
        z-index: 2;
        width: 100%;
        height: auto;
        border-radius: 5px;
        outline: none;
        background-color: transparent;
        
        &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        // height: 0px;
        // width: 0px;
        }

    }

    

</style>