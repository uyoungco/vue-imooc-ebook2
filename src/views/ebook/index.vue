<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EbookReader'
  import EbookTitle from '../../components/ebook/EbookTitle'
  import EbookMenu from '../../components/ebook/EbookMenu'
  import { getReadTime, saveReadTime } from '../../utils/localStorage'
  export default {
    components: {
      EbookReader,
      EbookTitle,
      EbookMenu
    },
    methods: {
      startLoopReadTime() {
        let readTiem = getReadTime(this.fileName)
        if (!readTiem) {
          readTiem = 0
        }
        this.task = setInterval(() => {
          readTiem++
          if (readTiem % 30 === 0) {
            saveReadTime(this.fileName, readTiem)
          }
        }, 1000)
      }
    },
    mounted() {
      this.startLoopReadTime()
    },
    beforeDestroy() {
      if (this.task) {
        clearTimeout(this.task)
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
