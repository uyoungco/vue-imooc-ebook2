<template>
  <div class="ebook-reader">
    <div id="read">

    </div>
  </div>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import Epub from 'epubjs'
  import {
    getFontFamily,
    getFontSize,
    getTheme,
    saveFontFamily,
    saveFontSize,
    saveTheme
  } from '../../utils/localStorage'
  global.ePub = Epub

  export default {
    mixins: [ebookMixin],
    mounted() {
      const fileName = this.$route.params.fileName.split('|').join('/')
      this.setFileName(fileName).then(() => {
        this.initEpub()
      })
    },
    methods: {
      prevPage() {
        if (this.rendition) {
          this.rendition.prev()
          this.hideTitleAndMenu()
        }
      },
      nextPage() {
        if (this.rendition) {
          this.rendition.next()
          this.hideTitleAndMenu()
        }
      },
      toggleTitleAndMenu() {
        if (this.menuVisible) {
          this.setSettingVisible(-1)
          this.setFontFamilyVisible(false)
        }
        this.setMenuVisible(!this.menuVisible)
      },
      hideTitleAndMenu() {
        this.setMenuVisible(false)
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      },
      initFontSize() {
        // 字体大小初始化
        let fontSize = getFontSize(this.fileName)
        if (!fontSize) {
          saveFontSize(this.fileName, this.defaultFontSize)
        } else {
          this.rendition.themes.fontSize(fontSize)
          this.setDefaultFontSize(fontSize)
        }
      },
      initFontFamily() {
        // 字体初始化
        let font = getFontFamily(this.fileName)
        if (!font) {
          saveFontFamily(this.fileName, this.defaultFontFamily)
        } else {
          this.rendition.themes.font(font)
          this.setDefaultFontFamily(font)
        }
      },
      initTheme() {
        // 主题初始化
        let defaultTheme = getTheme(this.fileName)
        if (!defaultTheme) {
          defaultTheme = this.themeList[0].name
          saveTheme(this.fileName, defaultTheme)
        }
        this.themeList.forEach(theme => {
          this.rendition.themes.register(theme.name, theme.style)
        })
        this.rendition.themes.select(defaultTheme)
      },
      initEpub() {
        const url = 'http://192.168.1.13:8081/epub/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.setCurrentBook(this.book)
        this.rendition = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
        })
        this.rendition.display().then(() => {
          this.initTheme() // 初始化主题颜色
          this.initFontSize() // 初始化字体大小
          this.initFontFamily() // 初始化字体类型
        })
        this.rendition.on('touchstart', event => {
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        this.rendition.on('touchend', event => {
          const offsetX = event.changedTouches[0].clientX - this.touchStartX
          const time = event.timeStamp - this.touchStartTime
          if (time < 500 && offsetX > 40) {
            this.prevPage()
          } else if (time < 500 && offsetX < -40) {
            this.nextPage()
          } else {
            this.toggleTitleAndMenu()
          }
          // event.preventDefault()
          event.stopPropagation()
        })
        this.rendition.hooks.content.register(contents => {
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
        })
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
