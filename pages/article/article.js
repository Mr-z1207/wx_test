// pages/article/article.js
Page({
  data: {
    articles: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const articlesDate = [{
        articleId: '0',
        avatar: "/img/avatar/u1.jpg",
        date: '2019-10-12',
        title: '我是文章标题1',
        img: '/img/article/article1.jpg',
        desc: '我是描述1',
        star: 30,
        view: 20
      },
      {
        articleId: '1',
        avatar: '/img/avatar/u2.jpg',
        date: '2019-10-10',
        title: '我是文章标题2',
        img: '/img/article/article2.jpg',
        desc: '我是描述2',
        star: 40,
        view: 23
      }
    ]
    this.setData({
      articles: articlesDate
    })
  },
  tapArticleItem: function(e) {
    var articleId = e.currentTarget.dataset.articleId;
    wx.navigateTo({
      url: '/pages/article/article-detail/article-detail?articleId=' + articleId,
    })
  }
})