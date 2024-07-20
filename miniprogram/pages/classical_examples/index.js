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
  goBack(){
    wx.navigateBack({
      delta: 1
    });
  },
  gotoCapsuleItemPage(e){
    
    switch (e.currentTarget.dataset.example_capsule_item.id){
      case "1":
        wx.navigateTo({
          url: '/pages/example-capsule1/index',
        })
        break;
      case "2":
        wx.navigateTo({
          url: '/pages/example-capsule2/index',
        })
        break;
      case "3":
        wx.navigateTo({
          url: '/pages/example-capsule3/index',
        })
        break;
      case "4":
        wx.navigateTo({
          url: '/pages/example-capsule4/index',
        })
        break;
    }
  }
});   