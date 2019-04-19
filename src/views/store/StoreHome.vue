<template>
  <div class="store-home">
    <search-bar></search-bar>
    <flap-card :data="random"></flap-card>
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
  import FlapCard from '../../components/home/FlapCard'
  import { home } from '../../api/store'

  export default {
    name: 'StoreHome',
    mixins: [storehomeMixin],
    components: {
      FlapCard,
      Scroll,
      SearchBar
    },
    data() {
      return {
        scrollTop: 94,
        random: null
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
    },
    mounted() {
      home().then(response => {
        const data = response.data
        const randomIndex = Math.floor(Math.random() * data.random.length)
        this.random = data.random[randomIndex]
      })
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
