//图片预览
var imgPreview = function(e) {
  let dataset = e.currentTarget.dataset,
    index = dataset.index,
    picdata = dataset.picdata,
    type = dataset.type

  var imgArr = []

  if (type == 1) {
    //图片链接不是对象数组
    for (var i = 0, len = picdata.length; i < len; i++) {
      imgArr.push(picdata[i])
    }
  } else {
    //图片链接是对象数组
    for (var i = 0, len = picdata.length; i < len; i++) {
      for (var key in picdata[i]) {
        imgArr.push(picdata[i][key])
      }
    }
  }
  wx.previewImage({
    current: imgArr[index],
    urls: imgArr,
  })
}

//扫码
var scanQRCode = function(callback) {
  wx.scanCode({
    onlyFromCamera: false,
    scanType: ['barCode', 'qrCode'],
    success: function(res) {
      console.log(res)
      if (typeof callback == 'function') {
        callback(res)
      }
    },
    fail: function() {
      // wx.showToast({
      //   title: '调用微信扫码失败！',
      // })
    },
  })
}

function showToast(msg, isIcon, duration, callback) {
  wx.showToast({
    title: msg,
    icon: isIcon || 'none',
    duration: duration || 2000,
  })
  if (typeof callback == 'function') {
    setTimeout(() => {
      callback()
    }, duration || 2000)
  }
}

function showLoading(msg) {
  wx.showLoading({
    title: msg,
    mask: true,
    // image: '/static/images/icon.png' //TODO loading的icon
  })
}

function hideLoading() {
  wx.hideLoading()
}

function showModal(title = '', content = '', showCancel = true, cancelText = '', confirmText = '', successCallback, failCallback) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    cancelText: cancelText,
    confirmText: confirmText,
    success(res) {
      if (res.confirm) {
        if (typeof successCallback == 'function') {
          successCallback()
        }
      } else if (res.cancel) {
        if (typeof failCallback == 'function') {
          failCallback()
        }
      }
    },
  })
}

function rpx2px(rpx) {
  return (wx.getSystemInfoSync().windowWidth / 750 * rpx).toFixed(0)
}

function openLocation(e) {
  let dataset = e.currentTarget.dataset,
    name = dataset.address,
    latitude = dataset.latitude,
    longitude = dataset.longitude
  wx.openLocation({
    name,
    latitude,
    longitude,
    scale: 16,
  })
}

function makePhoneCall(phoneNumber) {
  if (phoneNumber) {
    wx.makePhoneCall({
      phoneNumber: phoneNumber,
    })
  }
}

function getWxAuth(options) {
  wx.getSetting({
    success: res => {
      let status = res.authSetting
      if (!status['scope.' + options.authType]) {
        wx.authorize({
          scope: 'scope.' + options.authType,
          success() {},
          fail() {
            showModal(options.title, options.desc, true, '取消', '确定', () => {
              wx.openSetting({
                success(res1) {
                  if (res1.authSetting['scope.' + options.authType]) {
                    if (typeof options.successCallBack == 'function') {
                      showToast('授权成功')
                    }
                  } else {
                    showToast('授权失败')
                  }
                },
                fail() {},
              })
            })
          },
          complete(e) {
            console.log(e)
          },
        })
      } else {
        if (typeof options.successCallBack == 'function') {
          options.successCallBack()
        }
      }
    },
    fail: () => {},
  })
}

function wxPayment(options) {
  wx.requestPayment({
    timeStamp: options.timeStamp,
    nonceStr: options.nonceStr,
    package: options.package,
    signType: 'MD5',
    paySign: options.paySign,
    success(res) {
      if (typeof options.successCallBack == 'function') {
        options.successCallBack()
      }
    },
    fail(res) {
      if (typeof options.failCallBack == 'function') {
        options.failCallBack()
      }
    },
    complete(){
      if (typeof options.completeCallBack == 'function') {
        options.completeCallBack()
      }
    }
  })
}

export { rpx2px, imgPreview, scanQRCode, showToast, showLoading, hideLoading, showModal, openLocation, makePhoneCall, getWxAuth, wxPayment }
