var plugins = {
    times: null,      //次数
    speed: null,      //速率
    isRandom: false,  //是否开启自定义概率
    iResults: '',     //每一次执行的结果
    shopData: [],     //name为商户名称，pro为每项占比,count为出现的次数 
    init: function () {
        this.initData();
        this.initStatus();
        this.evenSet();
    },
    //数据初始化
    initData: function () {
        this.shopData = [
            {name:'红牛',pro:15,count: 0},  
            {name:'遇见饺色',pro:10,count: 0},
            {name:'冒菜',pro:10,count: 0},
            {name:'小胡菜饭',pro:5,count: 0},
            {name:'农家小炒',pro:10,count: 0},
            {name:'重庆小面',pro:5,count: 0},
            {name:'绿牛',pro:15,count: 0},
            {name:'黄鱼面馆',pro:15,count: 0}, 
            {name:'老朋友饺子',pro:15,count: 0}
        ];
    },
    //初始化页面状态
    initStatus: function(){
        var html = '';
        for (var i in this.shopData) {
            html += '<span data-count='+this.shopData[i].count+'>' + this.shopData[i].name +'</span>';
        }
        $('#shopNum').html(this.shopData.length);
        $('#showNumBtn').html('搜索');
        if(this.isRandom){
            $('#proBtn').html('开启');
        }else{
            $('#proBtn').html('关闭');
        }
        $('#showNum').html(html);
    },
    //计算结果
    calcResult: function () {
        var idx;
        if(this.isRandom){ 
            var j = Math.floor(Math.random()*100+1),
                sideArray = [],
                w = 0; 
            for(var m = 0;m<this.shopData.length;m++){ //划分概率区间零界点
                var num = 0;
                for(var n = 0;n<this.shopData.length;n++){
                    if(n<=m){
                        num += this.shopData[n].pro;
                    }
                }
                sideArray.push(num);
            }
            for(var i=0;i<sideArray.length;i++){ //计算随机值所属区间
                if(w<j&&sideArray[i]>=j){
                    idx = i;
                }
                w = sideArray[i];
            }
        }else{
            idx = Math.floor(Math.random()*(this.shopData.length - 1));
        }
        this.iResults = this.shopData[idx].name;
        this.shopData[idx].count = this.shopData[idx].count + 1;
    },
    //经典洗牌算法(随机排列数组的元素)
    shuffle: function(arr){
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            var index = Math.floor(Math.random() * (len - i));
            var temp = arr[index];
            arr[index] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }
        return arr;
    },
    //渲染页面
    animation: function () {
        var html = '';
        this.shopData = this.shuffle(this.shopData); //重新排列
        for (var i in this.shopData) {
            html += '<span data-count='+ this.shopData[i].count+' '+(this.shopData[i].name===this.iResults?'class="selected"':'')+'>' + this.shopData[i].name + '</span>';
        }
        $('#showNum').html(html);
    },
    //入口
    startUp: function () {
        var that = this;
        if (that.times > 0) {
            that.calcResult();
            that.animation(that.times); 
            that.times = that.times - 1;
            setTimeout(function () {
                that.startUp(that.times);
            }, that.speed);
        }else{
            $('#showNumBtn').removeClass('disabled').html('搜索');
        }
    },
    //事件
    evenSet: function () {
        var that = this;
        //随机结果
        $('#showNumBtn').click(function(){
            if(!$(this).hasClass('disabled')){
                that.times = Math.floor(Math.random()*16+30); //30-45 
                that.speed = Math.floor(Math.random()*31+90); //90-120
                that.startUp();
                $('#showNumBtn').addClass('disabled').html('查询中...');
            }
        });
        //是否开启自定义概率
        $('#proBtn').click(function(){
            if($(this).html()==='关闭'){
                that.isRandom = true;
                $(this).html('开启');
                $('.iscroll-content').show();
            }else{
                that.isRandom = false;
                $(this).html('关闭');
                $('.iscroll-content').hide();
            }
        });
        //模态框事件
        $('#lookPro').click(function(){
            $('.mask').show();
            $('.diaglog-modal').show();
            var iscrollText = doT.template($("#iscrolltmpl").text());
            $("#iscrollContent").html(iscrollText(that.shopData));
            if ($(this).data('iscroll') == undefined) {
                new IScroll('#iscrollContent', {
                    mouseWheel: true,
                    scrollbars: true,
                    fadeScrollbars: true
                });
                $(this).data('iscroll', 1);
            }
            document.querySelector('.mask') && document.querySelector('.mask').addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            document.querySelector('.diaglog-modal') && document.querySelector('.diaglog-modal').addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        });
        $('.mask').click(function(){
            $(this).hide();
            $('.diaglog-modal').hide();
        });
    }
}

plugins.init();