Page({
  data: {
    price: 100, // 商品原价
    sharePrice: 95, // 分享后价格
  },

  onLoad() {
    const sharePrice = wx.getStorageSync('sharePrice');
    if (sharePrice) {
      this.setData({
        sharePrice,
      });
    }
  },
  // https://blog.csdn.net/weixin_71403100/article/details/134437296
  onShareAppMessage(res) {
    
    let pages = getCurrentPages(); //获取当前页面栈的信息
    let currentPage = pages[pages.length - 1]; //获取到当前页面栈中最后一个页面的索引
    if (res.from === 'button') {// 来自页面内分享按钮
      
    }
    return {
      title: '分享小程序减5元',
      desc: '快来分享吧，立减5元！',
      path: currentPage.route + `?id=${this.id}&share=${this.share}` //后面是路径上要传递的参数
    }
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
  }
});   