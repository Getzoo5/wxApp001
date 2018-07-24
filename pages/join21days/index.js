// pages/join21days/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["动态", "笔记", "排行"],
    header:[
      'http://p1.qqyou.com/touxiang/UploadPic/2012-5/23/201205230605039508.jpg',
      'http://p1.qqyou.com/touxiang/UploadPic/2017-5/12/s4d3b33b2758cb34baac44b261e66eb46.jpg',
      'http://p1.qqyou.com/touxiang/UploadPic/2012-5/23/2012052306045763296.jpg',
      'http://p1.qqyou.com/touxiang/UploadPic/2012-5/23/2012052306050935171.jpg',
      'http://p1.qqyou.com/touxiang/UploadPic/2017-6/8/sd384641666100e1732fac6fe05eb01f4.jpg',
      'http://p1.qqyou.com/touxiang/UploadPic/2017-7/16/s37c3ede17fa272b0657c455c9e295c54.jpg',
      'http://p1.qqyou.com/touxiang/UploadPic/2017-8/13/sacf44e6e26bd018d2ae005316fc9a60b.jpg',
      'http://p1.qqyou.com/touxiang/UploadPic/2017-8/13/s8af8e86c8aa64725b0d21f7017ce145f.jpg',
      'http://p1.qqyou.com/touxiang/UploadPic/2017-8/22/sad1a02c7f3dde2e16785291ad1e2f2ca.jpg',
      'http://p2.qqyou.com/touxiang/UploadPic/2017-12/4/se623c1dca58b0d1e5626ab087e06be98.jpg',
      'http://p2.qqyou.com/touxiang/UploadPic/2017-12/4/s2cec9f1e2a35beafc0339bdb6f1478f0.jpg',
      'http://p2.qqyou.com/touxiang/UploadPic/2018-1/11/s8499bbf85ee266c3606e4502c3f4d8d1.jpg',
    ],
    activeIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  about21Day: function(){
    wx.showModal({
      title: '签到规则',
      content: '1.签到日期：2017-7-6至2017-7-26\r\n2.每日签到时间段：00:00至23:59\r\n3.每日提醒时间：08：00\r\n4.以上规则解释权归 拇指菇凉 所有',
      showCancel: false,
      cancelText: '',
      cancelColor: '',
      confirmText: '知道啦',
      confirmColor: '#38C039',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },
  qrcode: function(){
    wx.navigateTo({
      url: '/pages/qrcode/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})