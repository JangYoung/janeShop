$(function () {
    //换肤
    $("#skin li").click(function (){
        $(this).addClass("selected").siblings().removeClass("selected");
    })
    $("#skin_0").click(function () {
        $("#nav").css("background-color","#4A4A4A");
        $("#jnCatalog h2").css("background-color","#4A4A4A");
    })
    $("#skin_1").click(function () {
        $("#nav").css("background-color","#BE46D8");
        $("#jnCatalog  h2").css("background-color","#D49AE1");
    })
    $("#skin_2").click(function () {
        $("#nav").css("background-color", "#E44072");
        $("#jnCatalog h2").css("background-color", "#F296B2");
    })
    $("#skin_3").click(function () {
        $("#nav").css("background-color", "#37C7D4");
        $("#jnCatalog h2").css("background-color", "#98E0E6");
    })
    $("#skin_4").click(function () {
        $("#nav").css("background-color", "#F9AF2A");
        $("#jnCatalog h2").css("background-color", "#FFCF78");
    })
    $("#skin_5").click(function () {
        $("#nav").css("background-color", "#B1D410");
        $("#jnCatalog h2").css("background-color", "#CDE074");
    })

//    搜索
    $("#inputSearch").focus(function () {
        $(this).attr("value","");
    })
    $("#inputSearch").blur(function () {
        var value = $(this).val()
        if(value==""){
            $(this).attr("value","请输入商品名称");
        }
    })

//导航栏二级菜单
$("#nav .nav li").mouseenter(function () {
    $(this).children(".jnNav").css("display","block");
})
$("#nav .nav li").mouseleave(function () {
    $(this).children(".jnNav").hide()
})
})


//商品信息---颜色图片
$(".color_change ul li").click(function () {
    $(this).children().addClass("hover").parent().siblings().children().removeClass("hover");
    var color=$(this).index()
    $(".imgList li").css("display","none")
    if (color==0){
        $(".color_change strong").text("蓝白")
        $(".imgList .imgList_blue").css("display","list-item")
        $("#jnProitem .jqzoomWrap .jqzoom").attr("href","images/pro_img/blue_one_big.jpg")
        $("#bigImg").attr("src","images/pro_img/blue_one_small.jpg")
    }else if (color==1){
        $(".color_change strong").text("黄白")
        $(".imgList .imgList_yellow").css("display","list-item")
        $("#jnProitem .jqzoomWrap .jqzoom").attr("href","images/pro_img/yellow_one_big.jpg")
        $("#bigImg").attr("src","images/pro_img/yellow_one_small.jpg")
    }
    if (color==2){
        $(".color_change strong").text("粉绿")
        $(".imgList .imgList_green").css("display","list-item")
        $("#jnProitem .jqzoomWrap .jqzoom").attr("href","images/pro_img/green_one_big.jpg")
        $("#bigImg").attr("src","images/pro_img/green_one_small.jpg")
    }
})
//图片细节切换
$(".imgList li").click(function () {
    // var src = $(".imgList li a img").attr("src");
    // $(".jqzoomWrap a img").attr("src",src);

})


//尺码
$(".jnProDetailList .pro_size ul li").click(function () {
    $(this).addClass("cur").siblings().removeClass("cur");
    var size = $(this).text();
    $(".jnProDetailList .pro_size strong").text(size);
})

//数量价格
$(".pro_num").click(function () {
    var num = $("#num_sort option:selected").val();
    var price = num*200;
    $(".pro_price strong").text(price);

})
//评分
$(".pro_rating .rating li").click(function () {
    var star = $(this).children().text();
    alert("您给此商品的评分是："+star+"分")



})


//产品说明
$(".tab_menu ul li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var tabNum = $(this).index();
    $(".tab_box div").eq(tabNum).css("display","block").siblings().css("display","none");

})

$(".tab_menu ul li").mouseenter(function () {
    $(this).addClass("hover").siblings().removeClass("hover");
})
$(".tab_menu ul li").mouseleave(function () {
    $(this).removeClass("hover").siblings().removeClass("hover");
})


//购物车弹窗
$("#cart").click(function () {
    $(".modal").css("display","block");
    $("#basic-dialog-ok").css("display","block");
    $(".tips-content .tips-line").text("感谢您的购买。"+"您购买的产品是："+"；尺寸是："+"；颜色是："+"；数量是："+"；总价是："+"元。")



})