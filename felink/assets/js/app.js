var plugins = {
    times: null,      //变化次数
    speed: null,      //速率
    timer: null,      //定时器
    isRandom: null,   //是否开启自定义概率
    iResults: '',     //即时结果
    shopData: [],     //name为商户名称，pro为每项占比,count为出现的次数 
    init: function () {
        this.initData();
        this.initStatus();
        this.evenSet();
    },
    //data init
    initData: function () {
        this.times = parseInt(Math.random()*16+30,10);//30~40
        this.speed = 80;
        this.isRandom = false;
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
    //status init
    initStatus(){
        var html = '';
        for (var i in this.shopData) {
            html += '<span data-count='+this.shopData[i].count+'>' + this.shopData[i].name +'</span>';
        }
        $('#result').html('');
        $('#shopNum').html(this.shopData.length);
        // $('#c-num').html(this.times);
        $('#showNumBtn').removeClass('disabled').html('开始');
        if(this.isRandom){
            $('#proBtn').html('开启');
        }else{
            $('#proBtn').html('关闭');
        }
        $('#showNum').html(html);
        clearTimeout(this.timer);
    },
    //animation
    animation: function () {
        var sortArray = [],html = '';
        this.shopData.forEach(function (value, index) {
            return (function (value) {
                var sortObj = {};
                sortObj.a = value.name;
                sortObj.b = Math.random();
                sortObj.c = value.count;
                sortArray.push(sortObj);
            })(value);
        });
        //ascending order
        for (var i = 0; i < sortArray.length; i++) {
            for (var j = i + 1; j < sortArray.length; j++) {
                if (sortArray[i].b > sortArray[j].b) {
                    var arrayTemp = sortArray[i];
                    sortArray[i] = sortArray[j];
                    sortArray[j] = arrayTemp;
                }
            }
        }
        for (var k in sortArray) {
            html += '<span data-count='+sortArray[k].c+' '+(sortArray[k].a===this.iResults?'class="selected"':'')+'>' + sortArray[k].a + '</span>';
        }
        $('#showNum').html(html);
    },
    //start
    startUp: function () {
        var that = this;
        if (that.times > 0) {
            that.calcResult();
            that.animation(that.times); 
            that.times = that.times - 1;
            // $('#c-num').html(that.times);
            that.timer = setTimeout(function () {
                that.startUp(that.times);
            }, that.speed);
        } else {
            $('#result').html(this.iResults);
            $('#showNumBtn').addClass('disabled').html('结束');
        }
    },
    //calculate result
    calcResult: function () {
        var sideArray = [],idx;
        for(var m = 0;m<this.shopData.length;m++){
            var num = 0;
            for(var n = 0;n<this.shopData.length;n++){
                if(n<=m){
                    num += this.shopData[n].pro;
                }
            }
            sideArray.push(num);
        }
        if(this.isRandom){
            var j = parseInt(Math.random()*100+1,10),
                w = 0; 
            for(var i=0;i<sideArray.length;i++){
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
    evenSet: function () {
        var that = this;
        $('#showNumBtn').click(function(){
            if(!$(this).hasClass('disabled')){
                if($(this).html()==='开始'){
                    that.startUp();
                    $(this).html('暂停');
                }else{
                    clearTimeout(that.timer);
                    $(this).html('开始');
                }
            }
        });
        $('#proBtn').click(function(){
            if($(this).html()==='关闭'){
                $(this).html('开启');
                that.isRandom = true;
            }else{
                $(this).html('关闭');
                that.isRandom = false;
            }
        });
        $('#refreshData').click(function(){
            window.location.reload();
        });
    }
}

plugins.init();