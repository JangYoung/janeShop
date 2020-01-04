$(function () {
    //换肤
    $(".skin ul li").click(function (){
        $(this).addClass("color").siblings().removeClass("color");
    })
    $("#skin_0").click(function () {
        $(".header .header1 .nav").css("background-color","#4A4A4A");
        $(".content .left h2").css("background-color","#4A4A4A");
    })
    $("#skin_1").click(function () {
        $(".header .header1 .nav").css("background-color","#BE46D8");
        $(".content .left h2").css("background-color","#D49AE1");
    })
    $("#skin_2").click(function () {
        $(".header1 .nav").css("background-color", "#E44072");
        $(".content .left h2").css("background-color", "#F296B2");
    })
    $("#skin_3").click(function () {
        $(".header1 .nav").css("background-color", "#37C7D4");
        $(".content .left h2").css("background-color", "#98E0E6");
    })
    $("#skin_4").click(function () {
        $(".header1 .nav").css("background-color", "#F9AF2A");
        $(".content .left h2").css("background-color", "#FFCF78");
    })
    $("#skin_5").click(function () {
        $(".header1 .nav").css("background-color", "#B1D410");
        $(".content .left h2").css("background-color", "#CDE074");
    })



    //导航栏二级菜单
    $(".header .nav li").mouseenter(function () {
        $(this).children(".info").css("display","block");
    })
    $(".header .nav li").mouseleave(function () {
        $(this).children(".info").hide()
    })
//广告
    $(".bd .explain ul li").click(function () {
        var index=$(this).index();
        $(".bd .picture li").eq(index).show().siblings().hide();
    })

//轮播图
    $(".bottom .nav3  ul li").click(function () {
        $(this).addClass("chos").siblings().removeClass("chos");
       var x=$(this).index();
       var length=-780*x+"px";
        $(".bottom .brand  ul").animate({left:length},1000);

    })






})