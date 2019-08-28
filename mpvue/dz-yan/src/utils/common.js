import { gotoPage } from "@/utils/submodule/router.js";
import QRCode from "@/utils/submodule/weapp-qrcode.js";
import moment from "moment";
moment.locale('zh-cn');

import {
  rpx2px,
  imgPreview,
  scanQRCode,
  showToast,
  showLoading,
  hideLoading,
  showModal,
  openLocation,
  makePhoneCall,
  getWxAuth,
  wxPayment,
  signCreate,
} from "@/utils/submodule/wx.js";
import {
  isMobile,
  isEmail,
  isSpecialChars,
  isCardNo,
  isCardNoForHK
} from "@/utils/submodule/validate.js";

import {
  getQueryString,
  queryStringToObj,
  objToQueryString
} from "@/utils/submodule/url.js";

import { formatConsultTime, getStatusText, getStatusClass, getRelationName } from "@/utils/submodule/format.js";

export default {
  //二维码
  QRCode,
  //路由
  gotoPage,
  //url,
  getQueryString,
  queryStringToObj,
  objToQueryString,
  //微信工具
  rpx2px,
  imgPreview,
  scanQRCode,
  showToast,
  showLoading,
  hideLoading,
  showModal,
  openLocation,
  makePhoneCall,
  getWxAuth,
  wxPayment,
  signCreate,
  //校验
  isMobile,
  isEmail,
  isSpecialChars,
  isCardNo,
  isCardNoForHK,
  //时间格式化
  moment,
  //数据处理
  formatConsultTime,
  getStatusText,
  getStatusClass,
  getRelationName
};
