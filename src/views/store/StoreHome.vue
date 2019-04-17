<template>
    <div class="store-home">
      <search-bar></search-bar>
      <scroll :top="scrollTop" @onScroll="onScroll" ref="scroll">
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
        <div>1111111111111111111111111111</div>
      </scroll>
    </div>
</template>

<script>
  import SearchBar from '../../components/home/SearchBar'
  import Scroll from '../../components/common/Scroll'
  import { storehomeMixin } from '../../utils/mixin'

  export default {
    name: 'StoreHome',
    mixins: [storehomeMixin],
    components: {
      Scroll,
      SearchBar
    },
    data() {
      return {
        scrollTop: 94
      }
    },
    methods: {
      onScroll(offsetY) {
        this.setOffsetY(offsetY)
        if (offsetY > 0) {
          this.scrollTop = 52
        } else {
          this.scrollTop = 94
        }
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../assets/styles/global';
  .store-home {
    width: 100%;
    height: 100%;
  }

</style>
