// pages/edit21days/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: ['点击选择','生活','阅读','学习','运动','健康'],
    pickerindex: 0,
    date: '2016-09-01',
    dateEnd: '2016-09-01',
    time: '00:00',
    timeEnd: '23:59',
    timeCall: '08:00'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  ChooseImg: function(){
    var that = this
    wx.navigateTo({
      url: '/pages/cropperImg/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    // wx.chooseImage({
    //   count: 0,
    //   sizeType: [],
    //   sourceType: [],
    //   success: function(res) {
    //     console.log(res)
    //     that.setData({
    //       coverImg: res.tempFilePaths[0]
    //     })
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  },
  bindPickerChange: function (e) {
    this.setData({
      pickerindex: e.detail.value
    })
  }, 
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDateEndChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateEnd: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindTimeEndChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      timeEnd: e.detail.value
    })
  },
  bindTimeCallChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      timeCall: e.detail.value
    })
  },
  switchChange: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})