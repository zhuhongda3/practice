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
        // 更新单条数据
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
        this.initScroll();
    },
    //reset page status
    resetStatus: function () {
        var html = '';
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
        var idx, html = '',resultArray = [],total = 0;

        for(var i = 0;i < this.shopData.length; i++){
            total += this.shopData[i].pro;
        }

        if (this.isRandom) {
            var j = Math.floor(Math.random() * total + 1),
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
        //Re-render the page
        resultArray = this.shuffle(this.shopData);
        console.log(resultArray)
        for (var i in resultArray) {
            html += '<span ' + (resultArray[i].name === this.shopData[idx].name ? 'class="selected'+(this.times == 1?' animated zoomIn':'')+'"' : '') + '>' + resultArray[i].name + '</span>';
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
    initScroll: function () {
        function iScrollClick() { //Fix android/ios click bugs
            if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
            if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
            if (/Silk/i.test(navigator.userAgent)) return false;
            if (/Android/i.test(navigator.userAgent)) {
                var s = navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 8, 3);
                return parseFloat(s[0] + s[3]) < 44 ? false : true
            }
        }
        // if ($(this).data('iscroll') == undefined) {
        //     new IScroll('#isScroll', {
        //         click: iScrollClick(),
        //         mouseWheel: true
        //     });
        //     $(this).data('iscroll', 1);
        // }
        new IScroll('#isScroll', {
            click: iScrollClick(),
            mouseWheel: true
        });
        document.querySelector('.mask') && document.querySelector('.mask').addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
        document.querySelector('.js-table') && document.querySelector('.js-table').addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
    },
    clickEvent: function () {
        var that = this;

        $('#showResultBtn').click(function () {
            if (!$(this).hasClass('animated') && $('.display-area span').length>1) {
                that.times = Math.floor(Math.random() * 11 + 25);
                that.speed = Math.floor(Math.random() * 31 + 90);
                that.startUp();
                $('#showResultBtn').addClass('animated rollOut');
            }
        });

        $(".js-table").on('click','.js-add-item',function(){
            if($('.js-save').length>0){
                return;
            }
            $('.js-no-data').hide();
            var html = '<tr><td><input class="form-control" type="text"></td><td><input class="form-control" type="text" '+
            '></td><td><button class="btn btn-sm btn-success js-save">确定</button>&nbsp;&nbsp;<button class="btn btn-sm btn-danger js-remove">删除</button></td></tr>';
            $(".js-table tbody").append(html);
            that.initScroll();
        });

        $(".js-table").on('click','.js-save',function(){
            var $this = $(this).closest('tr');
            var name = $this.find('td:eq(0)').find('input').val();
            var pro =  $this.find('td:eq(1)').find('input').val();
            if(name == ""){
                $this.find('td:eq(0)').find('input').addClass('error');
                return;
            }else{
                $this.find('td:eq(0)').find('input').removeClass('error');
            }
            if(isNaN(Number(pro))||pro==""||Number(pro)==0){
                $this.find('td:eq(1)').find('input').addClass('error');
                return;
            }else{
                $this.find('td:eq(1)').find('input').removeClass('error');
            }
            if( that.storage.select('space',{name:String(name),pro:Number(pro)},false).length>0){
                alert("数据已存在");
                return;
            }
            that.storage.insert('space',{name:String(name),pro:Number(pro)});
            that.refreshDom();
        });

        $(".js-table").on('click','.js-remove',function(){
            $(this).closest('tr').remove();
            that.refreshDom();
            if($(this).closest('tbody').find('tr').length == 0){
                $('.js-no-data').show();
            }
        });


        $(".js-table").on('click','.js-del',function(){
            var $this = $(this).closest('tr');
            var nameVal = $this.data('name');
            var proVal = $this.data('pro');
            that.storage.delete('space',{name:String(nameVal),pro:Number(proVal)});
            that.refreshDom();
        });

        $(".js-table").on('click','.js-updata',function(){
            var $this = $(this).closest('tr');
            if($(this).html() == '修改'){
                var name = $this.data('name');
                var pro = $this.data('pro');
                $this.find('td:eq(0)').html('<input class="form-control" type="text" data-value="'+name+'" value="'+name+'">');
                $this.find('td:eq(1)').html('<input class="form-control" type="text" data-value="'+pro+'" value="'+pro+'">');
                $(this).html('保存');
            }else{
                var oldName = $this.data('name');
                var oldPro = $this.data('pro');
                var newName = $this.find('td:eq(0)').find('input').val();
                var newPro = $this.find('td:eq(1)').find('input').val();
                if(newName == ""){
                    $this.find('td:eq(0)').find('input').addClass('error');
                    return;
                }else{
                    $this.find('td:eq(0)').find('input').removeClass('error');
                }
                if(isNaN(Number(newPro))||newPro==""||Number(newPro)==0){
                    $this.find('td:eq(1)').find('input').addClass('error');
                    return;
                }else{
                    $this.find('td:eq(1)').find('input').removeClass('error');
                }
                that.storage.update('space',{name:String(oldName),pro:Number(oldPro)},{name:String(newName),pro:Number(newPro)});
                that.refreshDom();
            }
        });

        $("#showModal").click(function(){
            $('.js-table').toggleClass('hide');
            if(!$('.js-table').hasClass('hide')){
                $('.mask').show();
                that.initScroll();
            }else{
                $('.mask').hide();
            }
        });

        $('.js-table').on('click','.js-remove-item',function(){
            if(that.storage.select('space').length>0){
                that.storage.deleteSpace('space');
                that.storage.createSpace('space');
                that.refreshDom();
            }
        });

        $('.js-table').on('click','.js-info',function(){
            that.defaultData();
        });
    }
}
plugins.init();