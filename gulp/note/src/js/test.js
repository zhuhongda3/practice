var vm = new Vue({
  el: '#dataEl',
  data: {
    show: false,
    show1: false,
    dataList: [],
  },
  mounted: function(){
    this.dataList = [
      {
        year: 2018,
        monthList: [
          {
            month: "2018-01",
            articleList: [
              {
                title: '文章1',
                url: '#'
              },
              {
                title: '文章2',
                url: '#'
              },
              {
                title: '文章3',
                url: '#'
              },
            ]
          },
          {
            month: "2018-02",
            articleList: [
              {
                title: '文章1',
                url: '#'
              },
              {
                title: '文章2',
                url: '#'
              },
              {
                title: '文章3',
                url: '#'
              },
            ]
          },
        ]
      },
      {
        year: 2017,
        monthList: [
          {
            month: "2017-01",
            articleList: [
              {
                title: '文章1',
                url: '#'
              },
              {
                title: '文章2',
                url: '#'
              },
              {
                title: '文章3',
                url: '#'
              },
            ]
          },
          {
            month: "2017-01",
            articleList: [
              {
                title: '文章1',
                url: '#'
              },
              {
                title: '文章2',
                url: '#'
              },
              {
                title: '文章3',
                url: '#'
              },
            ]
          },
        ]
      },
    ]
  },
  methods: {
    
  }
});