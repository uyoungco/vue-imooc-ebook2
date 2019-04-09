const book = {
  state: {
    fileName: '', // "History/2017_Book_InterdisciplinaryPerspectivesO" 书的路径
    menuVisible: false, // 显示或隐藏 阅读时设置
    settingVisible: -1, // -1:不显示,0:字号,1:主题,2:进度,3:目录
    defaultFontSize: 16, // 阅读默认字体大小
    defaultFontFamily: 'Default', // 字体设置
    fontFamilyVisible: false, // 显示或隐藏设置字体
    defaultTheme: 'Default', // 主题设置
    bookAvailable: false,
    progress: 0,
    section: 0,
    isPaginating: true,
    currentBook: null, // epubjs
    navigation: null,
    cover: null,
    metadata: null,
    paginate: '',
    pagelist: null,
    offsetY: 0,
    isBookmark: null
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENU_VISIBLE': (state, visible) => {
      state.menuVisible = visible
    },
    'SET_SETTING_VISIBLE': (state, visible) => {
      state.settingVisible = visible
    },
    'SET_DEFAULT_FONT_SIZE': (state, fontSize) => {
      state.defaultFontSize = fontSize
    },
    'SET_DEFAULT_FONT_FAMILY': (state, font) => {
      state.defaultFontFamily = font
    },
    'SET_FONT_FAMILY_VISIBLE': (state, visible) => {
      state.fontFamilyVisible = visible
    },
    'SET_DEFAULT_THEME': (state, theme) => {
      state.defaultTheme = theme
    },
    'SET_BOOK_AVAILABLE': (state, bookAvailable) => {
      state.bookAvailable = bookAvailable
    },
    'SET_PROGRESS': (state, progress) => {
      state.progress = progress
    },
    'SET_SECTION': (state, section) => {
      state.section = section
    },
    'SET_IS_PAGINATING': (state, isPaginating) => {
      state.isPaginating = isPaginating
    },
    'SET_CURRENT_BOOK': (state, currentBook) => {
      state.currentBook = currentBook
    },
    'SET_NAVIGATION': (state, navigation) => {
      state.navigation = navigation
    },
    'SET_COVER': (state, cover) => {
      state.cover = cover
    },
    'SET_METADATA': (state, metadata) => {
      state.metadata = metadata
    },
    'SET_PAGINATE': (state, paginate) => {
      state.paginate = paginate
    },
    'SET_PAGELIST': (state, pagelist) => {
      state.pagelist = pagelist
    },
    'SET_OFFSETY': (state, offsetY) => {
      state.offsetY = offsetY
    },
    'SET_IS_BOOKMARK': (state, isBookmark) => {
      state.isBookmark = isBookmark
    }
  }
}

export default book
