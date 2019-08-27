//是否为手机号
var isMobile = function(value) {
  if (
    value.indexOf("-") > 0 &&
    value.split("-")[0] != "86" &&
    value.split("-")[1] != "null" &&
    value.split("-")[1] != ""
  ) {
    return true;
  }
  var tMobile = /^1[0-9]\d{9}$/;
  if (value != undefined && value != "" && tMobile.test(value)) {
    return true;
  } else return false;
};

//是否是正确的邮件格式
var isEmail = function(value) {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (value != undefined && value != "" && filter.test(value)) {
    return true;
  } else {
    return false;
  }
};

//是否有特殊字符（除了@和.符号）
var isSpecialChars = function(value) {
  var containSpecial = RegExp(
    /[(\~)(\!)(\！)(\#)(\$)(\￥)(\%)(\^)(\&)(\*)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\')(\")(\/)(\<)(\>)(\?)(\……)(\——)]+/
  );
  return containSpecial.test(value);
};

//内陆身份证：身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
var isCardNo = function(value) {
  var tCardNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (value != undefined && value != "" && tCardNo.test(value)) {
    return true;
  } else return false;
};

//香港居民身份证：Ａ１２３４５６（０）
var isCardNoForHK = function(str) {
  var strValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (str.length < 8) {
    return false;
  }
  if (str.charAt(str.length - 3) == "(" && str.charAt(str.length - 1) == ")")
    str = str.substring(0, str.length - 3) + str.charAt(str.length - 2);
  // convert to upper case
  str = str.toUpperCase();
  // regular expression to check pattern and split
  var hkidPat = /^([A-Z]{1,2})([0-9]{6})([A0-9])$/;
  var matchArray = str.match(hkidPat);
  // not match, return false
  if (matchArray == null) return false;
  // the character part, numeric part and check digit part
  var charPart = matchArray[1];
  var numPart = matchArray[2];
  var checkDigit = matchArray[3];
  // calculate the checksum for character part
  var checkSum = 0;
  if (charPart.length == 2) {
    checkSum += 9 * (10 + strValidChars.indexOf(charPart.charAt(0)));
    checkSum += 8 * (10 + strValidChars.indexOf(charPart.charAt(1)));
  } else {
    checkSum += 9 * 36;
    checkSum += 8 * (10 + strValidChars.indexOf(charPart));
  }
  // calculate the checksum for numeric part
  for (var i = 0, j = 7; i < numPart.length; i++, j--) {
    checkSum += j * numPart.charAt(i);
  }
  // verify the check digit
  var remaining = checkSum % 11;
  var verify = remaining == 0 ? 0 : 11 - remaining;
  return verify == checkDigit || (verify == 10 && checkDigit == "A");
};

export {
  isMobile,
  isEmail,
  isSpecialChars,
  isCardNo,
  isCardNoForHK
};
