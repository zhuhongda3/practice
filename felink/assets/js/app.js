var plugins = {
    times: null,      //次数
    speed: null,      //速率
    isRandom: false,   //是否开启自定义概率
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
            var j = parseInt(Math.random()*100+1,10),
                sideArray = [],
                w = 0; 
            for(var m = 0;m<this.shopData.length;m++){//划分概率区间零界点
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
            idx = parseInt((this.shopData.length - 1) * Math.random(),10);
        }
        this.iResults = this.shopData[idx].name;
        this.shopData[idx].count = this.shopData[idx].count + 1;
    },
    //渲染页面
    animation: function () {
        var sortArray = [],html = '';
        //构建一个新对象
        this.shopData.forEach(function (value, index) {
            return (function (value) {
                var sortObj = {};
                sortObj.a = value.name;
                sortObj.b = Math.random();
                sortObj.c = value.count;
                sortArray.push(sortObj);
            })(value);
        });
        //按属性b升序排列
        for (var i = 0; i < sortArray.length; i++) {
            for (var j = i + 1; j < sortArray.length; j++) {
                if (sortArray[i].b > sortArray[j].b) {
                    var arrayTemp = sortArray[i];
                    sortArray[i] = sortArray[j];
                    sortArray[j] = arrayTemp;
                }
            }
        }
        //插入变化的dom结构
        for (var k in sortArray) {
            html += '<span data-count='+sortArray[k].c+' '+(sortArray[k].a===this.iResults?'class="selected"':'')+'>' + sortArray[k].a + '</span>';
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
        //查询随机结果
        $('#showNumBtn').click(function(){
            if(!$(this).hasClass('disabled')){
                that.times = parseInt(Math.random()*16+30,10); //30-45
                that.speed = parseInt(Math.random()*31+90,10); //90-120
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
        //模态框
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