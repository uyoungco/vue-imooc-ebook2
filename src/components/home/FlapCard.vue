<template>
  <div class="flap-card-wrapper" v-show="flapCardVisible">
    <div class="flap-card-bg">
      <div class="flap-card">
        <div class="flap-card-circle" v-for="(item, index) in flapCardList" :key="index">
          <div
            class="flap-card-semi-circle flap-card-semi-circle-left"
            :style="semiCircleStyle(item, 'left')"
          ></div>
          <div
            class="flap-card-semi-circle flap-card-semi-circle-right"
            :style="semiCircleStyle(item, 'right')"
          ></div>
        </div>
      </div>
    </div>
    <div class="close-btn-wrapper" @click="close">
      <span class="icon-close"></span>
    </div>
  </div>
</template>

<script>
import { storehomeMixin } from '../../utils/mixin'
import { flapCardList } from '../../utils/store'

export default {
  name: 'FlapCard',
  mixins: [storehomeMixin],
  data() {
    return {
      flapCardList
    }
  },
  methods: {
    close() {
      this.setFlapCardVisible(false)
    },
    semiCircleStyle(item, dir) {
      return {
        backgroundColor: `rgb(${item.r}, ${item.g}, ${item.b})`,
        backgroundSize: item.backgroundSize,
        backgroundImage: dir === 'left' ? item.imgLeft : item.imgRight
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../../assets/styles/global';
  .flap-card-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    @include center;
    .flap-card-bg {
      position: relative;
      width: px2rem(64);
      height: px2rem(64);
      border-radius: px2rem(5);
      background: white;
      .flap-card {
        width: px2rem(48);
        height: px2rem(48);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background: #409EFF;
        @include absCenter;
        .flap-card-circle {
          .flap-card-semi-circle {

          }
          .flap-card-semi-circle-left {}
          .flap-card-semi-circle-right {}
        }
      }
    }
    .close-btn-wrapper {
      position: absolute;
      left: 0;
      bottom: px2rem(30);
      z-index: 1100;
      width: 100%;
      @include center;
      .icon-close {
        width: px2rem(45);
        height: px2rem(45);
        font-size: px2rem(25);
        border-radius: 50%;
        background-color: #333;
        color: white;
        @include center;
      }
    }
  }
</style>
