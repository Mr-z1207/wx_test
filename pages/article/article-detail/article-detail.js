// pages/article/article-detail/article-detail.js
var { articles } = require('../../../data/db.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articleId = options.articleId
    var article = articles[articleId]

    //处理收藏
    var isCollected = false
    //获取storage中的收藏对象
    var articles_collection = wx.getStorageSync('articles_collection')

    if (articles_collection) {
      isCollected = !!articles_collection[articleId]
    }
    //没有收藏对象,初始化
    else {
      var data = {

      }
      data[articleId] = false
      wx.setStorageSync('articles_collection', data)
    }

    this.setData({ ...article, isCollected: isCollected })
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

  },
  /**
   * 处理收藏
   */
  tapCollection: function () {
    var articles_collection = wx.getStorageSync('articles_collection')
    var currentIsCollected = articles_collection[this.data.articleId]
    articles_collection[this.data.articleId] = !currentIsCollected
    wx.setStorageSync('articles_collection', articles_collection)
    this.setData({ isCollected: !currentIsCollected }, function () {
      wx.showToast({
        title: !currentIsCollected ? "收藏成功" : "取消成功",
        duration: 2000
      })
    })
  },
  tapShare: function () {
    var itemList = ['分享到QQ', '分享到朋友圈', '分享到微博']
    wx.showActionSheet({
      itemList: itemList,
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: itemList[res.tapIndex] + "成功"
        })
      }
    })
  },
  tapMusic: function () {
    var backgroundAudioManager = wx.getBackgroundAudioManager()
    if (this.data.isPlaying) {//暂停播放
      backgroundAudioManager.pause()
      this.setData({ isPlaying: false })
    }
    else {//播放音乐
      backgroundAudioManager.src = this.data.music.src
      backgroundAudioManager.title = this.data.music.title
      this.setData({ isPlaying: true })
    }
  }
})