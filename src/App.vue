<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // watch: {
    //   $route() {
    //     this.directRightUrl()
    //   }
    // },
    // methods: {
    //   directRightUrl() {
    //     let { href, protocol, host, pathname, search, hash } = window.location
    //     search = search || '?'
    //     let newHref = `${protocol}//${host}${pathname}${search}${hash}`
    //     if (newHref !== href) {
    //       window.location.replace(newHref)
    //     }
    //   }
    // }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style lang="scss" scoped>
  @import "./assets/styles/global";
  #app {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: #7d8188;
    overflow: hidden;
  }
</style>
