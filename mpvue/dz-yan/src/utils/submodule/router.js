import Vue from "vue";
const vm = new Vue();

const router = [
  // {
  //   path: "pages/home/index",
  //   meta: { Auth: false }
  // }
  // ...
];

//路由
var gotoPage = function(url = "", type = "") {
  if(url !== '') console.log("gotoPage:", url);
  let pages = getCurrentPages();
  if (type === "back") {
    if(pages.length != 1){
      vm.$router.back();
    }
    return;
  }
  if (type === "reLaunch") {
    vm.$router.push({ path: url, reLaunch: true });
  }else if(type === "redirect"){
    vm.$router.replace({ path: url});
  } else if(type === "isTab"){
    vm.$router.push({ path: url, isTab: true});
  } else {
    vm.$router.push({ path: url });
  }
  // 校验
  // router.forEach((item) => {
  //   if (item.meta.Auth) {
  //   } else {
  //   }
  // });
};

export { router, gotoPage };
