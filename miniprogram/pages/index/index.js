const { envList } = require("../../envList");
const { QuickStartPoints, QuickStartSteps } = require("./constants");

Page({
  data: {
    knowledgePoints: QuickStartPoints,
    steps: QuickStartSteps,
    imgUrls:[
      {
        id:1,
        url: 'https://gips3.baidu.com/it/u=1039279337,1441343044&fm=3028&app=3028&f=JPEG&fmt=auto&q=100&size=f1024_1024',
      },
      {
        id:2,
        url: 'http://gips1.baidu.com/it/u=3874647369,3220417986&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280',
      },
      {
        id:3,
        url: 'http://gips2.baidu.com/it/u=207216414,2485641185&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720',
      },          
      
    ],
    onSwiperClick: function (event) {
      var index = event.currentTarget.dataset.index;
      var url = this.data.imgUrls[index];
      
      wx.navigateTo({url: url});
      },

      isRefresh: false,
      currentTab: 0,

  },

  
  tabNav(e) {
    let currentTab = e.currentTarget.dataset.index
    this.setData({
      currentTab
    })
  },
  handleSwiper(e) {
    let {current,source} = e.detail
    if (source === 'autoplay' || source === 'touch') {
      const currentTab = current
      this.setData({
        currentTab
      })
    }
  },
  handleTolower(e){
    wx.showToast({
      title: '到底啦'
    })
  },
  refresherpulling() {
    wx.showLoading({
      title: '刷新中'
    })
    setTimeout(() => {
      this.setData({
        isRefresh: false
      })
      wx.showToast({
        title: '加载完成'
      })
    }, 1500)
  },
  
  copyCode(e) {
    const code = e.target?.dataset?.code || '';
    wx.setClipboardData({
      data: code,
      success: () => {
        wx.showToast({
          title: '已复制',
        })
      },
      fail: (err) => {
        console.error('复制失败-----', err);
      }
    })
  },
 

  gotoCreateTimeCapsulePage() {
    wx.navigateTo({
      url: '/pages/create-capsule/index',
    })
  },
  gotoClassicalExamplesPage() {
    wx.navigateTo({
      url: '/pages/classical_examples/index',
    })
  },
  gotoDetailExamplesPage(event){
    
  }
});
