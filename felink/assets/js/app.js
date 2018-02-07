var plugins = {
    times: null, //times
    speed: null, //speed
    isRandom: true, //Probability
    shopData: [],    //Business data
    storage: null,
    init: function () {
        this.refreshDom();
        this.clickEvent();
    },
    //init data
    defaultData: function () {
        let data = [{
                name: '红牛',
                pro: 15
            },
            {
                name: '遇见饺色',
                pro: 10
            },
            {
                name: '冒菜',
                pro: 10
            },
            {
                name: '农家小炒',
                pro: 10
            },
            {
                name: '重庆小面',
                pro: 10
            },
            {
                name: '绿牛',
                pro: 15
            },
            {
                name: '黄鱼面馆',
                pro: 15
            },
            {
                name: '老朋友饺子',
                pro: 15
            }
        ];
        this.storage.deleteSpace('space');
        this.storage.createSpace('space');
        for(let i = 0; i < data.length; i++){
            this.storage.insert('space',data[i]);
        }
        // storage.update('space',{a:1,b:2},{a:2,b:1});
        // 删除单条数据
        // storage.delete('space',{a: 2,b:1});
        // 查询单条数据
        // storage.select('space',{a:2,b:1},false);
        // 查询全部数据
        // storage.select('space');
        this.refreshDom();
    },
    refreshDom: function(){
        this.shopData = [];
        this.storage = localDB;
        this.storage.createSpace('space');
        for(let len = this.storage.select('space').length,i = 0; i < len; i++){
            let obj = this.storage.select('space')[i].Obj;
            this.shopData.unshift(obj);
        }
        var iscrollText = doT.template($("#iscrolltmpl").text());
        $(".js-table").html(iscrollText(this.shopData));
        this.resetStatus();
    },
    //reset page status
    resetStatus: function () {
        var html = '';
        this.times = Math.floor(Math.random() * 11 + 25);
        this.speed = Math.floor(Math.random() * 31 + 90);
        for (var i in this.shopData) {
            html += '<span>' + this.shopData[i].name + '</span>';
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
            idx = Math.floor(Math.random() * (this.shopData.length - 1));`1`
        }
        //Re-render the page
        resultArray = this.shuffle(this.shopData);
        for (var i in resultArray) {
            html += '<span data-count=' + resultArray[i].count + ' ' + (resultArray[i].name === this.shopData[idx].name ? 'class="selected'+(this.times == 1?' animated zoomIn':'')+'"' : '') + '>' + resultArray[i].name + '</span>';
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
        // function iScrollClick() { //Fix android/ios click bugs
        //     if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
        //     if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
        //     if (/Silk/i.test(navigator.userAgent)) return false;
        //     if (/Android/i.test(navigator.userAgent)) {
        //         var s = navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 8, 3);
        //         return parseFloat(s[0] + s[3]) < 44 ? false : true
        //     }
        // }
        // if ($(this).data('iscroll') == undefined) {
        //     new IScroll('#iscrollContent', {
        //         click: iScrollClick(),
        //         mouseWheel: true
        //     });
        //     $(this).data('iscroll', 1);
        // }
        // document.querySelector('.mask') && document.querySelector('.mask').addEventListener('touchmove', function (e) {
        //     e.preventDefault();
        // }, false);
        // document.querySelector('.diaglog-modal') && document.querySelector('.diaglog-modal').addEventListener('touchmove', function (e) {
        //     e.preventDefault();
        // }, false);
    },
    clickEvent: function () {
        var that = this;

        $('#showResultBtn').click(function () {
            if (!$(this).hasClass('animated')) {
                that.startUp();
                $('#showResultBtn').addClass('animated rollOut');
            }
        });

        $(".js-table").on('click','.js-add-item',function(){
            if($('.js-save').length>0){
                return;
            }
            var html = '<tr><td><input type="text" placeholder="名称"></td><td><input type="" '+
            'placeholder="小于100的数字"></td><td><button class="btn btn-sm btn-success js-save">确定</button>&nbsp;&nbsp;<button class="btn btn-sm btn-danger js-remove">删除</button></td></tr>';
            $(html).insertBefore(".js-table tbody tr:last-child");
        });

        $(".js-table").on('click','.js-save',function(){
            var $this = $(this).closest('tr');
            var name = String($this.find('td:eq(0)').find('input').val());
            var pro = Number($this.find('td:eq(1)').find('input').val());
            if(name == ""){
                $this.find('td:eq(0)').find('input').addClass('error');
                return;
            }
            if(isNaN(pro)){
                $this.find('td:eq(1)').find('input').addClass('error');
                return;
            }
            if( that.storage.select('space',{name:name,pro:pro},false).length>0){
                alert("数据已存在");
                return;
            }
            that.storage.insert('space',{name:name,pro:pro});
            that.refreshDom();
        });

        $(".js-table").on('click','.js-remove',function(){
            $(this).closest('tr').remove();
        });


        $(".js-table").on('click','.js-del',function(){
            var $this = $(this).closest('tr');
            var nameVal = String($this.data('name'));
            var proVal = Number($this.data('pro'));
            that.storage.delete('space',{name:nameVal,pro:proVal});
            that.refreshDom();
        });

        $(".js-table").on('click','.js-updata',function(){
            var $this = $(this).closest('tr');
            if($(this).html() == '修改'){
                var name = String($this.data('name'));
                var pro = Number($this.data('pro'));
                if(name == ""){
                    $this.find('td:eq(0)').find('input').addClass('error');
                    return;
                }
                if(isNaN(pro)){
                    $this.find('td:eq(1)').find('input').addClass('error');
                    return;
                }
                $this.find('td:eq(0)').html('<input type="text" data-value="'+name+'" value="'+name+'">');
                $this.find('td:eq(1)').html('<input type="text" data-value="'+pro+'" value="'+pro+'">');
                $(this).html('保存');
            }else{
                var oldName = String($this.data('name'));
                var oldPro = Number($this.data('pro'));
                var newName = String($this.find('td:eq(0)').find('input').val());
                var newPro = Number($this.find('td:eq(1)').find('input').val());
                that.storage.update('space',{name:oldName,pro:oldPro},{name:newName,pro:newPro});
                that.refreshDom();
            }
        });

        $("#showModal").click(function(){
            that.defaultData();
        });

        $('.js-table').on('click','.js-remove-item',function(){
            that.storage.deleteSpace('space');
            that.storage.createSpace('space');
            that.refreshDom();
        });
    }
}
plugins.init();