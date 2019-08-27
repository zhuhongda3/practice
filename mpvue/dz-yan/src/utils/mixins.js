const mixins = {
  data() {
    return {
      bodyStyle: "",
      barStyle: "",
      headerHeight: 0,
      navBarHeight: 0,
      windowWidth: 0,
      windowHeight: 0,
      screenHeight: 0,
      scrollHeight: 0,
      // bottomStyle: 0,
    };
  },
  methods: {
    initGlobalData() {
      let obj = wx.getSystemInfoSync(),
        height = 44;
      if (obj.platform == "iOS") {
        height = 44;
      } else if (obj.platform == "android") {
        height = 48;
      }
      this.headerHeight = `${obj.statusBarHeight + height}`;
      this.windowWidth = obj.windowWidth;
      this.windowHeight = obj.windowHeight;
      this.screenHeight = obj.screenHeight;
      this.scrollHeight = obj.screenHeight - this.headerHeight;
      this.bodyStyle = `${this.bodyStyle}padding-top: ${this.headerHeight}px;`;
    },
    getNavbarHeight(e) {
      this.navBarHeight = e;
      // this.bottomStyle = `padding-bottom: ${e}px;`;
      // this.bodyStyle = `${this.bodyStyle}padding-bottom: ${e}px;`;
    },
    gotoPage(e) {
      let dataset = e.mp.currentTarget.dataset,
      disabled = dataset.disabled,
      url = dataset.url;
      // console.log(disabled)
      if(disabled && disabled =="disabled")
        return;
      this.$common.gotoPage(url)
    },
    makePhoneCall(e) {
      console.log(e)
      let dataset = e.mp.currentTarget.dataset,
      phonenumber = dataset.phonenumber;
      this.$common.makePhoneCall(phonenumber)
    }
  },
  onLoad() {
    this.initGlobalData();
  },
  onUnload() {
    Object.assign(this, this.$options.data())
  }
};

export { mixins };
