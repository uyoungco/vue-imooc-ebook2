<template>
  <div class="ebook-loading">
    <div class="ebook-loading-wrapper">
      <div class="ebook-loading-item" v-for="(item ,index) in data" :key="index">
        <div class="ebook-loading-line-wrapper" v-for="(subItem, subIndex) in item" :key="subIndex">
          <div class="ebook-loading-line"></div>
          <div class="ebook-loading-mask"></div>
        </div>
      </div>
      <div class="ebook-loading-conter"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EbookLoading',
    data() {
      return {
        data: [
          [{}, {}, {}],
          [{}, {}, {}]
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
    @import '../../assets/styles/global';

</style>
