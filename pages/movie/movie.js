// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this
    wx.request({
      url: "http://t.yushu.im/v2/movie/in_theaters?start=0&count=3",
      success: function(res) {
        console.log(res)
        var data = res.data.subjects.map(function(data) {
          return {
            title: data.original_title,
            star: data.rating.stars,
            average: data.rating.average,
            img: data.images.large
          }
        })
        _this.setData({
          movHoting: data
        })
      }
    })
    wx.request({
      url: "http://t.yushu.im/v2/movie/coming_soon?start=0&count=3",
      success: function(res) {
        console.log(res)
        var data = res.data.subjects.map(function(data) {
          return {
            title: data.original_title,
            star: data.rating.stars,
            average: data.rating.average,
            img: data.images.large
          }
        })
        _this.setData({
          movNext: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})