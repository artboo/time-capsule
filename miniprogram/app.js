// app.js
App({
 
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'wx-env01-3gf49vue58112f19',
        traceUser: true,
      });
    }

    this.globalData = {
      hasLogin: false,
      openid: null,
      dataToUp:{
        capsule_content:""
      }};

      // wx.login({
      //   success: function (res) {
      //     if (res.code) {
      //       
      //       // Send the code to your backend server to exchange for the openID securely
      //       wx.request({
      //         url: 'YOUR_BACKEND_SERVER_URL/get_openid', // Replace with your actual backend URL
      //         method: 'POST',
      //         data: {
      //           code: res.code
      //         },
      //         success: function (response) {
      //           if (response.data && response.data.success && response.data.openid) {
      //             ;
      //           } else {
      //             console.error('Failed to get openID:', response.data.message || 'Unknown error');
      //           }
      //         },
      //         fail: function (err) {
      //           console.error('wx.request failed:', err);
      //         }
      //       });
      //     } else {
      //       console.error('Failed to get login code:', res.errMsg);
      //     }
      //   },
      //   fail: function (err) {
      //     console.error('wx.login failed:', err);
      //   }
      // });
  }
});
