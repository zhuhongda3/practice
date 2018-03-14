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

  var _keyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '删除']

  var plugin = {
    init: function (keyInput, opt) {
      if (!opt) {
        _option = option;
      } else {
        _option = opt;
      }

      document.activeElement.blur();

      var keyBoardArea = document.createElement('div');
      keyBoardArea.style.position = _option.position;
      keyBoardArea.style.left = _option.left;
      keyBoardArea.style.bottom = _option.bottom;
      keyBoardArea.style.width = _option.width;
      keyBoardArea.style.color = _option.color;
      keyBoardArea.style.fontSize = _option.fontSize;
      keyBoardArea.style.backgroundColor = _option.backgroundColor;
      keyBoardArea.style.zIndex = _option.zIndex;

      var keyMask = document.createElement('div');
      keyMask.style.position = _option.position;
      keyMask.style.left = _option.left;
      keyMask.style.bottom = _option.bottom;
      keyMask.style.width = _option.width;
      keyMask.style.height = _option.height;
      keyMask.style.zIndex = _option.bottom - 1;

      for (var i = 0, len = _keyNumber.length; i < len; i += 1) {
        var span_tag = document.createElement('span');
        span_tag.style.display = 'inline-block';
        span_tag.style.width = '31.5%';
        if (typeof _keyNumber[i] == 'string') {
          span_tag.style.backgroundColor = 'transparent';
        } else {
          span_tag.style.backgroundColor = '#fff';
          span_tag.style.boxShadow = '0px 1px 3px 0px #999';
          span_tag.style.borderRadius = '4px';
        }
        span_tag.style.color = '#000';
        span_tag.style.height = '50px';
        span_tag.style.lineHeight = '50px';
        span_tag.style.textAlign = 'center';
        span_tag.style.verticalAlign = 'top';
        span_tag.style.margin = '0.916666%';
        var span_txt = document.createTextNode(_keyNumber[i]);
        span_tag.appendChild(span_txt);
        keyBoardArea.appendChild(span_tag);
      }
      document.body.appendChild(keyMask);
      document.body.appendChild(keyBoardArea);

      //touchstart
      span_tag.ontouchstart = function () {
        var val = keyInput.value;
        if (this.innerText == '') return false;
        if (this.innerText == '删除') {
          val = val.slice(0, val.length - 1);
        } else {
          this.style.backgroundColor = 'rgba(0,0,0,.3)';
          val += this.innerText;
        }
        keyInput.value = val;
      };

      //tauchend
      span_tag.ontouchend = function () {
        if (this.innerText == '' || this.innerText == '删除') return;
        this.style.backgroundColor = '#fff';
      };

      keyMask.onclick = function () {
        var _this = this, current = 0, target = keyBoardArea.clientHeight, step = target / 15;
        var timeinter = setInterval(function () {
          current -= step;
          if (current < -target) {
            _this.parentNode.removeChild(keyBoardArea);
            _this.parentNode.removeChild(_this);
            clearInterval(timeinter);
          }
          keyBoardArea.style.bottom = current + "px";
        }, 15);
      }
      return this;
    }
  }

  this.keyboard = plugin;

})();
