var plugins = {
    times: null, //times
    speed: null, //speed
    isRandom: false, //Probability
    shopData: [],    //Business data
    init: function () {
        this.initData();
        this.clickEvent();
    },
    //init data
    initData: function () {
        this.shopData = [{
                name: '红牛',
                pro: 15,
                count: 0
            },
            {
                name: '遇见饺色',
                pro: 10,
                count: 0
            },
            {
                name: '冒菜',
                pro: 10,
                count: 0
            },
            {
                name: '小胡菜饭',
                pro: 5,
                count: 0
            },
            {
                name: '农家小炒',
                pro: 10,
                count: 0
            },
            {
                name: '重庆小面',
                pro: 5,
                count: 0
            },
            {
                name: '绿牛',
                pro: 15,
                count: 0
            },
            {
                name: '黄鱼面馆',
                pro: 15,
                count: 0
            },
            {
                name: '老朋友饺子',
                pro: 15,
                count: 0
            }
        ];
    },
    //reset page status
    resetStatus: function () {
        var html = '';
        this.times = Math.floor(Math.random() * 16 + 30);
        this.speed = Math.floor(Math.random() * 31 + 90);
        for (var i in this.shopData) {
            html += '<span data-count=' + this.shopData[i].count + '>' + this.shopData[i].name + '</span>';
        }
        $('#showResultArea').html(html);
    },
    //Program entry
    startUp: function () {
        var that = this;

        if (that.times > 0) {
            that.calcResult();
            that.times -= 1;
            setTimeout(function () {
                that.startUp(that.times);
            }, that.speed);
        } else {
            $('#showResultBtn').removeClass('animated rollOut');
        }
    },
    //calculate reusult
    calcResult: function () {
        var idx, html = '',resultArray = [];

        if (this.isRandom) {
            var j = Math.floor(Math.random() * 100 + 1),
                criticalPoint = [],
                w = 0;
            //Divide the probability interval critical point
            for (var m = 0; m < this.shopData.length; m++) {
                var num = 0;
                for (var n = 0; n < this.shopData.length; n++) {
                    if (n <= m) {
                        num += this.shopData[n].pro;
                    }
                }
                criticalPoint.push(num);
            }
            //Random value belongs to the interval
            for (var i = 0; i < criticalPoint.length; i++) {
                if (w < j && criticalPoint[i] >= j) {
                    idx = i;
                }
                w = criticalPoint[i];
            }
        } else {
            idx = Math.floor(Math.random() * (this.shopData.length - 1));
        }
        this.shopData[idx].count += 1;
        //Re-render the page
        resultArray = this.shuffle(this.shopData);
        console.log(this.times);
        for (var i in resultArray) {
            html += '<span data-count=' + resultArray[i].count + ' ' + (resultArray[i].name === this.shopData[idx].name ? 'class="selected'+(this.times == 1?' animated rollIn':'')+'"' : '') + '>' + resultArray[i].name + '</span>';
        }
        $('#showResultArea').html(html);
    },
    //Shuffling algorithm
    shuffle: function (arr) {
        var len = arr.length;

        for (var i = 0; i < len - 1; i++) {
            var index = Math.floor(Math.random() * (len - i));
            var temp = arr[index];
            arr[index] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }
        return arr;
    },
    //Probability data
    getProData: function () {
        var iscrollText = doT.template($("#iscrolltmpl").text());

        $("#iscrollContent").html(iscrollText(this.shopData));

        function iScrollClick() { //Fix android/ios click bugs
            if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
            if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
            if (/Silk/i.test(navigator.userAgent)) return false;
            if (/Android/i.test(navigator.userAgent)) {
                var s = navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 8, 3);
                return parseFloat(s[0] + s[3]) < 44 ? false : true
            }
        }
        if ($(this).data('iscroll') == undefined) {
            new IScroll('#iscrollContent', {
                click: iScrollClick(),
                mouseWheel: true
            });
            $(this).data('iscroll', 1);
        }
        document.querySelector('.mask') && document.querySelector('.mask').addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
        document.querySelector('.diaglog-modal') && document.querySelector('.diaglog-modal').addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
    },
    //click event
    clickEvent: function () {
        var that = this;

        $('#showResultBtn').click(function () {
            if (!$(this).hasClass('animated')) {
                that.resetStatus();
                that.startUp();
                $('#showResultBtn').addClass('animated rollOut');//fadeOut
            }
        });

        $('#proToggleBtn').click(function () {
            $('#iscrollContent').toggleClass('hidePro');
            if (that.isRandom) {
                that.isRandom = false;
                $(this).html('<i class="fa fa-eye-slash"></i>');
            } else {
                that.isRandom = true;
                $(this).html('<i class="fa fa-eye"></i>');
            }
        });

        $('#showModal').click(function () {
            $('.mask').show();
            $('.diaglog-modal').show();
            that.getProData();
        });

        $('.mask').click(function () {
            $(this).hide();
            $('.diaglog-modal').hide();
        });
    }
}
plugins.init();