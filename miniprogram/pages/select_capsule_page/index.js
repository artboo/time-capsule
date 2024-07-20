const { QuickStartPoints, QuickStartSteps } = require("./constants");


Page({
  data: {
    knowledgePoints: QuickStartPoints,
    goodsList: [{
      _id: '1',
      title: '商品1',
      price: 1,
    }],
  },

  onLoad() {
    // this.fetchGoodsList();
  },

  async fetchGoodsList() {
    this.setData({ isLoading: true });
    const res = await wx.cloud.callFunction({
      name: 'quickstartFunctions',
      data: { type: 'fetchGoodsList' },
    });
    const goodsList = res?.result?.dataList || [];
    this.setData({
      isLoading: false,
      goodsList
    });
  },

  async generateMPCode() {
    wx.showLoading();
    const resp = await wx.cloud.callFunction({
      name: 'quickstartFunctions',
      data: {
        type: 'genMpQrcode',
        pagePath: 'pages/goods-list/index',
      }
    });
    this.setData({ codeModalVisible: true, codeImageSrc: resp?.result });
    wx.hideLoading();
  },
  gotoCreateTimeCapsulePage() {
    
    wx.navigateTo({
      url: '/pages/create-capsule/index',
    })
  },
   
  gotoLetterDetailPage() {
    
    wx.navigateTo({
      url: '/pages/letter_detail/index',
    })
  },
  gotoCapsuleDetailPage() {
    
    wx.navigateTo({
      url: '/pages/capsule_detail/index',
    })
  },
  gotoCapsuleAgeDetailPage() {
    
    wx.navigateTo({
      url: '/pages/capsule_detail_age/index',
    })
  },
  gotoMycapsule(event){
    
    wx.navigateTo({
      url: '/pages/mycapsule/index',
    })
  },
  goBack(){
    wx.navigateBack({
      delta: 1
    });
  }
});   