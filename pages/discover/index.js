// pages/discover/index.js
Page({
  data: {
    tabs: ["全部", "阅读", "学习", "运动", "健康", "生活"],
    activeIndex: 0,
    item: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    isClick: false,
    sortOfPersontop: true,
    sortOfTimetop: false
  },
  onLoad: function () {
    var that = this;
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },
  sortOfPerson: function () {
    this.setData({ isClick: false, sortOfPersontop: !this.data.sortOfPersontop })
  },
  sortOfTime: function () {
    this.setData({ isClick: true, sortOfTimetop: !this.data.sortOfTimetop })
  }
});