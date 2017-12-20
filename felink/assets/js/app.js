var plugins = {
    times: null,      //变化次数15~35次
    time: 80,         //每次变化时间
    t: null,          //定时器
    isRandom: null,   //是否开启概念
    idxMark: [],      //标记索引集
    currentIdx: null, //当前索引
    shopData: [       //项数10,pro为每项占比
        {name:'红牛',pro:15},  
        {name:'遇见饺色',pro:10},
        {name:'冒菜',pro:5},
        {name:'小胡菜饭',pro:2},
        {name:'新繁阳',pro:5},
        {name:'蒸味鲜',pro:3},
        {name:'农家小炒',pro:10},
        {name:'重庆小面',pro:5},
        {name:'绿牛',pro:15},
        {name:'黄鱼面馆',pro:15}, 
        {name:'老朋友饺子',pro:15}
    ], 
    init: function () {
        this.resetData();
        this.evenSet();
    },
    // 初始化数据
    resetData: function () {
        var html = '';
        this.times = parseInt(Math.random()*16+20,10); //20-35
        this.isRandom = false;
        for (var i in this.shopData) {
            this.idxMark.push(0);
            html += '<span><i>' + this.shopData[i].name +'</i></span>';
        }
        $('#c-num').html(this.times);
        $('#totalCalc').html(this.times);
        $('#showNumBtn').removeClass('disabled').html('开始');
        $('#showNum').html(html);
        $('#result').html('');
        $('#shopNum').html(this.shopData.length);
        clearTimeout(this.t);
        if(this.isRandom){
            $('#proBtn').html('开启');
        }else{
            $('#proBtn').html('关闭');
        }
    },
    //项数随机排列动画，不会影响最终排序结果
    animation: function () {
        var sortArray = [],html = '';
        this.shopData.forEach(function (value, index) {
            return (function (value) {
                var _sortObj = {};
                _sortObj.a = value.name;
                _sortObj.b = Math.random();
                _sortObj.c = index;
                sortArray.push(_sortObj);
            })(value);
        });
        //按随机数升序排
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
            for(var t in this.idxMark){
                if(t == sortArray[k].c){
                    html += '<span><i>' + sortArray[k].a+'</i><em>'+this.idxMark[t]+'</em></span>';
                }
            }
        }
        $('#showNum').html(html);
        this.showResut();
    },
    //开始执行
    startUp: function () {
        var that = this;
        if (that.times > 0) {
            that.calcResult();
            that.animation(that.times); 
            that.times = that.times - 1;
            $('#c-num').html(that.times);
            that.t = setTimeout(function () {
                that.startUp(that.times);
            }, that.time);
        } else {
            $('#showNumBtn').addClass('disabled').html('结束');
        }
    },
    //计算结果
    calcResult: function () {
        var sideArray = []; //临界点

        //累加计算概率临界点
        for(var m = 0;m<this.shopData.length;m++){
            var num = 0;
            for(var n = 0;n<this.shopData.length;n++){
                if(n<=m){
                    num += this.shopData[n].pro;
                }
            }
            sideArray.push(num);
        }
        //是否开启概率
        if(this.isRandom){
            var j = parseInt(Math.random()*100+1,10),
                w = 0; 
            for(var i=0;i<sideArray.length;i++){
                if(w<j&&sideArray[i]>=j){
                    this.currentIdx = i;
                }
                w = sideArray[i];
            }
        }else{
            this.currentIdx = parseInt((this.shopData.length - 1) * Math.random(),10);
            this.idxMark[this.currentIdx] = this.idxMark[this.currentIdx] + 1;
        }
    },
    showResut:function(){
        var dom = $('#showNum').find('span'),result = this.shopData[this.currentIdx].name;
        $('#result').html(result);
        console.log(result);
        for(var t = 0;t<dom.length;t++){
            if(dom.eq(t).find('i').html() === result){
                dom.eq(t).addClass('selected');
            }
        }
    },
    evenSet: function () {
        var that = this;

        $('#showNumBtn').click(function(){
            if(!$(this).hasClass('disabled')){
                if($(this).html()==='开始'){
                    that.startUp();
                    $(this).html('暂停');
                }else{
                    clearTimeout(that.t);
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
            // that.resetData();
            window.location.reload();
        });
    }
}

plugins.init();