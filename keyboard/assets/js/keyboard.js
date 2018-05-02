; (function () {
  var option = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    color: '#000',
    fontSize: '18px',
    backgroundColor: '#f4f4f4',
    zIndex: 1000,
  }
  var hasClick = false;

  var _keyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, '确定', 0, '删除']

  var plugin = {
    init: function (keyInput,opt) {
      document.activeElement.blur();
      
      if(hasClick){
        return;
      }
      if(!keyInput) return;
      if(!opt){
        _option = option;
      }else{
        _option = opt;
      }

      var keyBoardArea = document.createElement('div');
      keyBoardArea.style.position = _option.position;
      keyBoardArea.style.left = _option.left;
      keyBoardArea.style.bottom = '-100%';
      keyBoardArea.style.width = _option.width;
      keyBoardArea.style.color = _option.color;
      keyBoardArea.style.fontSize = _option.fontSize;
      keyBoardArea.style.backgroundColor = _option.backgroundColor;
      keyBoardArea.style.zIndex = _option.zIndex;

      for (var i = 0, len = _keyNumber.length; i < len; i += 1) {
        var span_tag = document.createElement('span');
        span_tag.style.display = 'inline-block';
        span_tag.style.width = '31.5%';
        span_tag.style.borderRadius = '4px';
        span_tag.style.boxShadow = '0px 1px 3px 0px #999';
        span_tag.style.height = '50px';
        span_tag.style.lineHeight = '50px';
        span_tag.style.textAlign = 'center';
        span_tag.style.verticalAlign = 'top';
        span_tag.style.margin = '0.916666%';
        if (typeof _keyNumber[i] == 'string') {
          span_tag.style.backgroundColor = '#409eff';
          span_tag.style.color = '#fff';
        } else {
          span_tag.style.backgroundColor = '#fff';
          span_tag.style.color = '#999';
        }
      
        var span_txt = document.createTextNode(_keyNumber[i]);
        span_tag.appendChild(span_txt);
        keyBoardArea.appendChild(span_tag);
        //touchstart
        span_tag.ontouchstart = function () {
          var val = keyInput.value;
          switch(this.innerText){
            case '确定':
              var _this = this, 
                  current = 0;
              var timeinter = setInterval(function () {
                current -= step;
                if (current <= -target) {
                  document.body.removeChild(keyBoardArea);
                  hasClick = false;
                  clearInterval(timeinter);
                  return;
                }
                keyBoardArea.style.bottom = current + "px";
              }, 15);
              break;
            case '删除':
              val = val.slice(0, val.length - 1);
              break;
            default:
              this.style.backgroundColor = 'rgba(0,0,0,.3)';
              val += this.innerText;
              break;
          }
          keyInput.value = val;
        };
         //tauchend
         span_tag.ontouchend = function () {
          if (this.innerText == ''||this.innerText == '删除') return;
          this.style.backgroundColor = '#fff';
        };
      }
      hasClick = true;
      document.body.appendChild(keyBoardArea);
      
      // 上升
      var target = keyBoardArea.clientHeight,step = target / 15,current=-target;

      var timeinter1 = setInterval(function () {
        current += step;
        if (current > 0) {
          keyBoardArea.style.bottom = 0;
          clearInterval(timeinter1);
          return;
        }
        keyBoardArea.style.bottom = current + "px";
      }, 15);
      
      return this;
    }
  }
  this.keyboard = plugin;

})();
