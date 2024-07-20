Page({
  data: {
    goodsList: [{
      _id: '1',
      title: '商品1',
      price: 1,
    }],
  },
  app:null,
  onLoad() {
    this.app=getApp()
    // this.fetchGoodsList();
    this.setData({
      inputValue: this.app.globalData.dataToUp.capsule_content
    });
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

  gotoSelectCapsulePage(event){
    
    wx.navigateTo({
      url: '/pages/select_capsule_page/index',
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
  },
  saveTmp(){
    
    getApp().globalData.dataToUp.capsule_content=this.data.inputValue
  },
  getInputValue(e){
    this.app.globalData.dataToUp.capsule_content =  e.detail.value
    this.setData({
      inputValue: e.detail.value
    });
  }
});   