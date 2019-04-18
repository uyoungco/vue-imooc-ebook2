export const flapCardList = [
  {
    r: 255,
    g: 102,
    _g: 102,
    b: 159,
    imgLeft: 'url(' + require('@/assets/images/gift-left.png') + ')',
    imgRight: 'url(' + require('@/assets/images/gift-right.png') + ')',
    backgroundSize: '50% 50%',
    zIndex: 100,
    rotateDegree: 0
  },
  {
    r: 74,
    g: 171,
    _g: 171,
    b: 255,
    imgLeft: 'url(' + require('@/assets/images/compass-left.png') + ')',
    imgRight: 'url(' + require('@/assets/images/compass-right.png') + ')',
    backgroundSize: '50% 50%',
    zIndex: 99,
    rotateDegree: 0
  },
  {
    r: 255,
    g: 198,
    _g: 198,
    b: 102,
    imgLeft: 'url(' + require('@/assets/images/star-left.png') + ')',
    imgRight: 'url(' + require('@/assets/images/star-right.png') + ')',
    backgroundSize: '50% 50%',
    zIndex: 98,
    rotateDegree: 0
  },
  {
    r: 255,
    g: 102,
    _g: 102,
    b: 159,
    imgLeft: 'url(' + require('@/assets/images/heart-left.png') + ')',
    imgRight: 'url(' + require('@/assets/images/heart-right.png') + ')',
    backgroundSize: '50% 50%',
    zIndex: 97,
    rotateDegree: 0
  },
  {
    r: 59,
    g: 201,
    _g: 201,
    b: 22,
    imgLeft: 'url(' + require('@/assets/images/crown-left.png') + ')',
    imgRight: 'url(' + require('@/assets/images/crown-right.png') + ')',
    backgroundSize: '50% 50%',
    zIndex: 96,
    rotateDegree: 0
  }
]

export const getCategoryName = id => {
  switch (id) {
    case 1:
      return 'ComputerScience'
    case 2:
      return 'SocialSciences'
    case 3:
      return 'Economoics'
    case 4:
      return 'Education'
    case 5:
      return 'Engineering'
    case 6:
      return 'Environment'
    case 7:
      return 'Geography'
    case 8:
      return 'History'
    case 9:
      return 'Laws'
    case 10:
      return 'lifeSciences'
    case 11:
      return 'literature'
    case 12:
      return 'biomedicine'
    case 13:
      return 'businessandManagement'
    case 14:
      return 'earthSciences'
    case 15:
      return 'materialsScience'
    case 16:
      return 'mathematics'
    case 17:
      return 'medicineAndPublicHealth'
    case 18:
      return 'philosophy'
    case 19:
      return 'physics'
    case 20:
      return 'politicalScienceAndInternationalRelations'
  }
}

export const categoryText = category => {
  switch (category) {
    case 1:
      return '计算机科学'
    case 2:
      return '社会科学'
    case 3:
      return '经济学'
    case 4:
      return '教育学'
    case 5:
      return '工程学'
    case 6:
      return '环境学'
    case 7:
      return '地理学'
    case 8:
      return '史学'
    case 9:
      return '法学'
    case 10:
      return '生命科学'
    case 11:
      return '文学'
    case 12:
      return '生物医学'
    case 13:
      return '工商管理'
    case 14:
      return '地球科学'
    case 15:
      return '材料科学'
    case 16:
      return '数学'
    case 17:
      return '公共卫生'
    case 18:
      return '哲学'
    case 19:
      return '物理'
    case 20:
      return '国际关系'
    case 21:
      return '动漫学'
    case 22:
      return '游戏学'
  }
}

export const categoryList = {
  'ComputerScience': 1,
  'SocialSciences': 2,
  'Economics': 3,
  'Education': 4,
  'Engineering': 5,
  'Environment': 6,
  'Geography': 7,
  'History': 8,
  'Laws': 9,
  'LifeSciences': 10,
  'Literature': 11,
  'Biomedicine': 12,
  'BusinessandManagement': 13,
  'EarthSciences': 14,
  'MaterialsScience': 15,
  'Mathematics': 16,
  'MedicineAndPublicHealth': 17,
  'Philosophy': 18,
  'Physics': 19,
  'PoliticalScienceAndInternationalRelations': 20,
  'Psychology': 21,
  'Statistics': 22
}
