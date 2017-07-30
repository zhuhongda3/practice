
$(function(){
    $(".close-codepic").click(function(){
         $(".div1-content-right").hide();
    });
});
$(function(){
    $(".type1").click(function(){
         $(".type2").removeClass("select2");
         $(".type3").removeClass("select");
         $(".type1").addClass("select");
         $(".search-content").hide();
         $(".search-content1").show();
         $(".shop").hide();
         $(".shop1").show();
         $(".content").css("border-color","#F22E00");
         $(".btn-search").css("background","#F22E00");
    });
});
$(function(){
    $(".type2").click(function(){
        $(".type1,.type3").removeClass("select");
        $(".type2").addClass("select2");
        $(".search-content").hide();
        $(".search-content2").show();
        $(".shop").hide();
        $(".shop2").show();
        $(".content").css("border-color","#C60000");
        $(".btn-search").css("background","#C60000");
    });
});
$(function(){
    $(".type3").click(function(){
        $(".type2").removeClass("select2");
        $(".type1").removeClass("select");
        $(".type3").addClass("select");
        $(".search-content").hide();
        $(".search-content3").show();
        $(".shop").hide();
        $(".shop3").show();
        $(".content").css("border-color","#F22E00");
        $(".btn-search").css("background","#F22E00");         
    });
});
$(function(){
    $("#nav li").mouseover(function(){
        $("#drop").show();
    });
    $("#nav li").mouseout(function(){
        $("#drop").hide();
    });
});
$(function(){
    $("#drop").mouseover(function(){
        $("#drop").show();
    });
    $("#drop").mouseout(function(){
        $("#drop").hide();
    });
});
// $.mixhover(
//     '#nav li', 
//     '#drop ul', 
//     function(trg, drop){
//        $("#drop").show();
//     },
//     function(trg, drop){
//         $("#drop").hide();
//     }
// )

$(function(){ 
    $('#txt').bind('input propertychange', function() {
        if($('#txt').val!=""){
             $(".icon-yuyin").hide();
             return false;
        }else{
             $(".icon-yuyin").show();
        }
    }); 
})
