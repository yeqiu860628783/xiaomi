// 当前播放的图片的序号
let ord = 0;
// 定义定时器
let myTimer = null;
let $img = $(".img>img");
let $li = $(".dian>a");
let t = true
function autoPlay() {
    if(t== true){
        myTimer = setInterval(function () {
            // 跳转到下一张图片上
            goImg(ord + 1);
        }, 4000);
    }
}
// 跳转到指定的图片上（transOrd就是要跳转的图片的序号）
function goImg(transOrd) {
    t = false
    // 一、数据的合法性处理
    if (transOrd == ord) {
        return; //结束函数执行
    }
    // 二、逻辑
    // 1、数据处理
    // outOrd是淡出的图片序号，transOrd是要淡入的图片序号（即：跳转的图片序号）
    let outOrd = ord;
    ord = transOrd;

    // 2、边界处理
    if (ord > $img.length - 1) {
        ord = 0;
    } else if (ord < 0) {
        ord = $img.length - 1;
    }
    //3、外观：
    // 3.1）、让一张图片淡出，一张图片淡入
    $img.eq(outOrd).animate({
        "opacity": 0
    }, 1000);
    $img.eq(ord).animate({
        "opacity": 1
    }, 1000);
    // 3.2）、变豆豆
    $li.eq(outOrd).css({
        "border-color": "hsla(0, 0%, 100%, .3)",
        "background": "rgba(0, 0, 0, .4)"
    });
    $li.eq(ord).css({
        "background": "hsla(0, 0%, 100%, .4)",
        "border-color": "rgba(0, 0, 0, .4)"
    });
    return t = true
}
//停止banner运动
function stopPlay() {
    window.clearInterval(myTimer);
    myTimer = null;
}
//获取cookie显示欢迎语或者登录按钮
function showWelcomeAndLogin() {
    let userName = getCookie("username");
    if (userName != null) {
        let htmlStr = `
            <a class="gereng">&nbsp;${userName}&nbsp; ∇ &nbsp;</a>
            <a><span class="sep">|</span>消息通知<span class="sep">|</span></a>
            <a href="#">我的订单</a>
            <div id="cookie">
                    <a>个人中心</a>
                    <a>评价晒单</a>
                    <a>我的喜欢</a>
                    <a>小米账号</a>
                    <a class="tuichu">退出登录</a>
            </div>
        `
        $("#cook").html(htmlStr)
        $(".gereng").hover(
            //移入
            function(){
                $(this).css({
                    color: "#ff6709",
                    background:"#fff"})
                $("#cookie").slideDown("fast");
            },function(){
                $(this).css({
                    color: "#b0b0b0",
                    background: "#333"})
                $("#cookie").hover(function(){
                    $("#cookie").css("display","block")
                },function(){
                    $("#cookie").slideUp("fast")
                })
                setTimeout(() => {
                    $("#cookie").slideUp("fast")
                }, 7000)
        })
        //退出登录
        $(".tuichu").click(function(){
            removeCookie("username")
            let htmlStr = `
             <a href="02denlu.html">登录<span class="sep">|</span></a>
            <a href="01zhuce.html">注册<span class="sep">|</span></a>
            <a href="#">消息通知</a>
        `
            $("#cook").html(htmlStr)
        })

    }
}
$(function () {
    showWelcomeAndLogin();
    //1、自动播放
    autoPlay();

    //2、点击豆豆跳转到对应的图片上
    $(".dian>a").click(function () {
        stopPlay();
        goImg($(this).index());
    });

    //3、鼠标放入停止
    $("#imgBox").mouseover(function () {
        stopPlay();
    });

    //4、鼠标离开继续播放    
    $("#imgBox").mouseout(function () {
        autoPlay();
    });

    //5、左右箭头
    let $span = $("#imgBox>span");
    // 左箭头
    $span.eq(1).click(function () {
        stopPlay();
        goImg(ord - 1);
    });
    // 右箭头
    $span.eq(0).click(function () {
        stopPlay();
        goImg(ord + 1);
    });
    $img.click(function(){
        open("04shangping.html")
    })

    //回顶
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t >= 800) {
            $(".huidin").css("display","block")
        } else if (t < 800) {
            $(".huidin").css("display", "none")
        }
    }

    //banner侧边
    let tab = $(".banner_con>ul>li")
    let nub = 1
    for(let i=0;i<10;i++){
        tab.eq(i).mouseover(function () {
            nub += 1
            $(".banner_con>ol").css("z-index", "1000");
            $(".banner_con>ol>li").eq(i).css("opacity", "1");
            $(".banner_con>ol>li").eq(i).css("z-index", nub);
        })
        tab.mouseout(function () {
            $(".banner_con>ol").css("z-index", "-1");
            $(".banner_con>ol>li").eq(i).css("opacity", "0");
        })
    }
    $(".banner_con>ol>li").mouseover(function () {
        $(".banner_con>ol").css("z-index", "1000");
        $(this).css("opacity", "1");
    })
    $(".banner_con>ol>li").mouseout(function () {
        $(".banner_con>ol").css("z-index", "-1");
        $(this).css("opacity", "0");
    })
    //搜索框点击颜色
    $(".seb_con>div").click(function(){
        $(this).css("borderColor", "#ff6700")
        $(this).find("button").css("borderColor", "#ff6700")
    })
    $(".seb_con>div").focusout(function () {
        $(this).css("borderColor", "#e0e0e0")
        $(this).find("button").css("borderColor", "#e0e0e0")
    })
    //跳转
    $(".xiao1").click(function () {
        open('./04shangping.html?goodsId=01005')
    })
    $(".xiao2").click(function(){
        open('./04shangping.html?goodsId=01001')
    })
    $(".xiao3").click(function () {
        open('./04shangping.html?goodsId=01003')
    })
    $(".xiao4").click(function () {
        open('./04shangping.html?goodsId=01004')
    })
    $(".xiao5").click(function(){
        open('./04shangping.html?goodsId=01002')
    })
    $(".xiao6").click(function () {
        open('./04shangping.html?goodsId=01006')
    })
    $(".xiao7").click(function () {
        open('./04shangping.html?goodsId=01007')
    })
    $(".xiao8").click(function () {
        open('./04shangping.html?goodsId=01008')
    })
    $(".gd").click(function(){
        open('05spleibiao.html')
    })
    $(".gw").click(function () {
        open("06gowuche.html")
    })
    $(".wy").click(function () {
        open("07wuyi.html")
    })
})



