<template>
  <div class="popup" v-show="popupVisible">

  </div>
</template>

<script>
  export default {
    name: 'Popup',
    data() {
      return {
        popupVisible: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global";

</style>
