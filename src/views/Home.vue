<template>
  <div class="home">
    <div id="read">
      <span class="icon-bookmark"></span>
      <span class="icon-clock"></span>
      <span class="text">ABCDEFG</span>
    </div>
  </div>
</template>

<script>
import Epub from 'epubjs'
global.ePub = Epub

export default {
  name: 'home'
  // mounted: function() {
  //   this.book = new Epub('/2014_Book_Self-ReportedPopulationHealthA.epub')
  //   console.log(this.book)
  //   this.book.renderTo('read', {
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   }).display()
  // }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/global";
  .text {
    /* font-family: 'Days One'; */
    font-size: px2rem(20);
    color: orange;
  }

</style>
