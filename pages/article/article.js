// pages/article/article.js
var { articles } = require('../../data/db.js')
Page({
  data: {
    articles: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      articles: articles
    })
  },
  tapArticleItem: function(e) {
    var articleId = e.currentTarget.dataset.articleId;
    wx.navigateTo({
      url: '/pages/article/article-detail/article-detail?articleId=' + articleId,
    })
  }
})