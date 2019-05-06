<template>
  <transition name="slide-up">
    <div class="shelf-footer" v-show="isEditMode">
      <div
        class="shelf-footer-tab-wrapper"
        v-for="item in tabs"
        :key="item.index"
        @click="onTabClick(item)"
      >
        <div class="shelf-footer-tab" :class="{'is-selected': isSelected}">
          <div class="icon-private tab-icon" v-if="item.index === 1 && !isPrivate"></div>
          <div class="icon-private-see tab-icon" v-if="item.index === 1 && isPrivate"></div>
          <div class="icon-download-remove tab-icon" v-if="item.index === 2 && isDownload"></div>
          <div class="icon-download tab-icon" v-if="item.index === 2 && !isDownload"></div>
          <div class="icon-move tab-icon" v-if="item.index === 3"></div>
          <div class="icon-shelf tab-icon" v-if="item.index === 4"></div>
          <div class="tab-text" :class="{'remove-text': item.index === 4}">{{label(item)}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { storeShelfMixin } from '../../utils/mixin'
  import { saveBookShelf } from '../../utils/localStorage'

  export default {
    name: 'ShelfFooter',
    mixins: [storeShelfMixin],
    computed: {
      isSelected() {
        return this.shelfSelected && this.shelfSelected.length > 0
      },
      tabs() {
        return [
          {
            label: this.$t('shelf.private'),
            label2: this.$t('shelf.noPrivate'),
            index: 1
          },
          {
            label: this.$t('shelf.download'),
            label2: this.$t('shelf.delete'),
            index: 2
          },
          {
            label: this.$t('shelf.move'),
            index: 3
          },
          {
            label: this.$t('shelf.remove'),
            index: 4
          }
        ]
      },
      isPrivate() {
        if (!this.isSelected) {
          return false
        } else {
          return this.shelfSelected.every(item => item.private)
        }
      },
      isDownload() {
        if (!this.isSelected) {
          return false
        } else {
          return this.shelfSelected.every(item => item.cache)
        }
      }
    },
    data() {
      return {
        popupMenu: null
      }
    },
    methods: {
      downloadSelectedBook() {
        for (let i = 0; i < this.shelfSelected.length; i++) {
          this.downloadBook(this.shelfSelected[i])
        }
      },
      downloadBook(book) {
        console.log(book)
        return new Promise((resolve, reject) => {
          // download(book, () => {})
        })
      },
      hidePopup() {
        this.popupMenu.hide()
      },
      onComplete() {
        this.hidePopup()
        this.setIsEditMode(false)
        saveBookShelf(this.shelfList)
      },
      removeSelected() {
        this.shelfSelected.forEach(selected => {
          this.setShelfList(this.shelfList.filter(book => book !== selected))
        })
        this.setShelfSelected([])
        this.onComplete()
      },
      setPrivate() {
        let isPrivate
        if (this.isPrivate) {
          isPrivate = false
        } else {
          isPrivate = true
        }
        this.shelfSelected.forEach(book => {
          book.private = isPrivate
        })
        this.onComplete()
        if (isPrivate) {
          this.simpleToast(this.$t('shelf.setPrivateSuccess'))
        } else {
          this.simpleToast(this.$t('shelf.closePrivateSuccess'))
        }
      },
      showprivate() {
        this.popupMenu = this.popup({
          title: this.isPrivate ? this.$t('shelf.closePrivate') : this.$t('shelf.setPrivateTitle'),
          btn: [
            {
              text: this.isPrivate ? this.$t('shelf.close') : this.$t('shelf.open'),
              click: () => {
                this.setPrivate()
              }
            },
            {
              text: this.$t('shelf.cancel'),
              click: () => {
                this.hidePopup()
              }
            }
          ]
        }).show()
      },
      setDownload() {
        // let isDownload
        // if (this.isDownload) {
        //   isDownload = false
        // } else {
        //   isDownload = true
        // }
        // this.shelfSelected.forEach(book => {
        //   book.cache = isDownload
        //   this.downloadBook(book)
        // })
        this.downloadSelectedBook()
        this.onComplete()
        // if (isDownload) {
        //   this.simpleToast(this.$t('shelf.setDownloadSuccess'))
        // } else {
        //   this.simpleToast(this.$t('shelf.removeDownloadSuccess'))
        // }
      },
      showDownload() {
        this.popupMenu = this.popup({
          title: this.isDownload ? this.$t('shelf.removeDownloadTitle') : this.$t('shelf.setDownloadTitle'),
          btn: [
            {
              text: this.isDownload ? this.$t('shelf.delete') : this.$t('shelf.open'),
              click: () => {
                this.setDownload()
              }
            },
            {
              text: this.$t('shelf.cancel'),
              click: () => {
                this.hidePopup()
              }
            }
          ]
        }).show()
      },
      showRemove() {
        let title
        if (this.shelfSelected.length === 1) {
          title = this.$t('shelf.removeBookTitle').replace('$1', `《${this.shelfSelected[0].title}》`)
        } else {
          title = this.$t('shelf.removeBookTitle').replace('$1', this.$t('shelf.selectBook'))
        }

        this.popupMenu = this.popup({
          title: title,
          btn: [
            {
              text: this.$t('shelf.removeBook'),
              type: 'danger',
              click: () => {
                this.removeSelected()
              }
            },
            {
              text: this.$t('shelf.cancel'),
              click: () => {
                this.hidePopup()
              }
            }
          ]
        }).show()
      },
      onTabClick(item) {
        if (!this.isSelected) {
          return
        }
        switch (item.index) {
          case 1:
            this.showprivate()
            break
          case 2:
            this.showDownload()
            break
          case 3:
            break
          case 4:
            this.showRemove()
            break
          default:
            break
        }

        // this.toast({
        //   text: 'imcc'
        // }).show()
      },
      label(item) {
        switch (item.index) {
          case 1:
            return this.isPrivate ? item.label2 : item.label
          case 2:
            return this.isDownload ? item.label2 : item.label
          default:
            return item.label
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global";

  .shelf-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 120;
    display: flex;
    width: 100%;
    height: px2rem(48);
    background-color: white;
    box-shadow: 0 px2rem(-2) px2rem(4) 0 rgba(0, 0, 0, .1);
    .shelf-footer-tab-wrapper {
      flex: 1;
      width: 25%;
      height: 100%;
      .shelf-footer-tab {
        width: 100%;
        height: 100%;
        opacity: .5;
        @include columnCenter();
        cursor: not-allowed;
        &.is-selected {
          opacity: 1;
          cursor: pointer;
        }
        .tab-icon {
          font-size: px2rem(20);
          color: #666;
        }
        .tab-text {
          margin-top: px2rem(5);
          font-size: px2rem(12);
          color: #666;
        }
        .remove-text {
          color: $color-pink;
        }
        .icon-shelf {
          color: $color-pink;
        }
      }
    }
  }

</style>
