<template>
  <div class="shelf-item-book">
    <img class="shelf-item-book-cover" :src="data.cover" alt="">
  </div>
</template>

<script>
  export default {
    name: 'ShelfItemBook',
    props: {
      data: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global";
  .shelf-item-book {
    width: 100%;
    height: 100%;
    .shelf-item-book-cover {
      width: 100%;
      height: 100%;
    }
  }

</style>
