//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // html: '<div class="div_class" style="line-height: 30px; color: red;"><img src="http://img1.imgtn.bdimg.com/it/u=615225602,200453327&fm=27&gp=0.jpg" style="width:10px" /> 你好</div>'
  },
  onLoad: function () {
  },
  add21Day: function(){
    wx.navigateTo({
      url: '/pages/edit21days/index'
    })
  }
})
