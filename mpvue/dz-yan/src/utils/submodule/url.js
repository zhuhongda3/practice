// 获取url中的参数 a.aspx?id=123 => 123
var getQueryString = function(url, name) {
    var val = "";
    if (url.indexOf("?") > -1) {
      val = url.substring(url.indexOf("?") + 1);
    }
    if (!val) {
      return null;
    }
    name = name || "";
    name = name.toLowerCase();
    var array = val.split("&");
    for (var i = 0; i < array.length; i++) {
      var temp = array[i].split("=");
      if (temp[0].toLowerCase() === name) {
        return temp.length > 1 ? temp[1] : null;
      }
    }
    return null;
  }
  
  
  //a=1&b=2 => {a:1,b:2}
  var queryStringToObj = function(val, separator) {
    if (!val) {
      return null;
    }
  
    var data = {};
    try {
      separator = separator || "&";
      var array = val.split(separator);
      for (var i = 0; i < array.length; i++) {
        var temp = array[i].split("=");
        data[temp[0]] = decodeURIComponent(temp[1]);
      }
  
      return data;
    } catch (e) {
      return null;
    }
  };
  
  //{a:1,b:2} => a=1&b=2
  var objToQueryString = function(obj, separator) {
    if (!obj) {
      return null;
    }
  
    var queStr = [];
    try {
      separator = separator || "&";
      for (var i in obj) {
        if (!obj.hasOwnProperty(i) || obj[i] == null) {
          continue;
        }
        queStr.push(i + "=" + encodeURIComponent(obj[i]));
      }
  
      return queStr.join("&");
    } catch (e) {
      return null;
    }
  }

  module.exports = {
    getQueryString,
    queryStringToObj,
    objToQueryString,
  };