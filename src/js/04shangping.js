//获取商品
function getGoods(goodsId,cb) {
    $.get("./php/getGoodsInfo.php", {
            "goodsId": goodsId,
    },function (data){
        showData(data, cb, goodsId);
    },"json");
}
// 显示商品
function showData(data, cb, goodsId) {
    let htmlStr = "";
    let h2 = ""
    h2 = data.goodsName
    htmlStr += `
           <div class="img-con">
                <div class="imgbox">
                    <div class="warpper">
                        <div class="imgwarp">
                            <div id="imgbox">
                                <img src="${data.goodsImg}" alt="">
                                <img src="${data.beiyong1}" alt="">
                                <img src="${data.beiyong2}" alt="">
                                <img src="${data.beiyong3}" alt="">
                                <img src="${data.beiyong4}" alt="">
                            </div>
                        </div>
                        <div class="spanwarp">
                            <ul>
                                <li><a></a></li>
                                <li><a></a></li>
                                <li><a></a></li>
                                <li><a></a></li>
                                <li><a></a></li>
                            </ul>
                            <div class="qiehuan">
                                <a></a>
                                <a></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pro">
                <h1>${data.goodsName}</h1>
                <p>
                    <font color="#ff4a00">「+1元得镜面视窗保护套，信用卡分期享24期免息，低至5.6元起/天」</font>
                    ${data.goodsDesc}
                </p>
                <!-- 主体 -->
                <div class="main-pro">
                    <p>小米自营</p>
                    <!-- 价格 -->
                    <div class="price">
                        <span>${data.goodsPrice}元</span>
                    </div>
                    <div class="addWarp">
                        <div class="add">
                            <span class="iconfont icon-didian didian1"></span>
                            <div class="dizhi">
                                <div>
                                    <span>北京</span>
                                    <span>北京市</span>
                                    <span>东城区</span>
                                    <span>安定门街道</span>
                                </div>
                                <em>修改</em>
                            </div>
                            <div class="zhuangtai">
                                <span>${data.beiyong5}</span>
                            </div>
                        </div>
                    </div>
                    <div class="list-warp">
                        <div class="banben xuanze">
                            <h2>选择版本</h2>
                            <ul>
                                <li>
                                    <a>
                                        <span>${data.beiyong9}</span>
                                        <span>${data.goodsPrice}元</span>
                                    </a>
                                </li>
                                 <li>
                                     <a>
                                         <span>${data.beiyong10}</span>
                                         <span>${data.goodsPrice-300}元</span>
                                     </a>
                                </li>
                                <li>
                                    <a>
                                        <span>${data.beiyong11}</span>
                                        <span>${(parseFloat(data.goodsPrice)+300)}元</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="banben xuanze2">
                            <h2>选择颜色</h2>
                            <ul class="yanse1">
                                <li>
                                    <a class="yanse">
                                        <img src="${data.goodsImg}" alt="">
                                        <em>${data.beiyong6}</em>
                                    </a>
                                </li>
                                 <li>
                                     <a>
                                        <img src="./img1/11.jpg" alt="">
                                        <em>${data.beiyong7}</em>
                                     </a>
                                </li>
                                <li>
                                    <a>
                                        <img src="./img1/12.jpg" alt="">
                                        <em>${data.beiyong8}</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="choose">
                            <h3>
                                选择小米提供的意外保护
                                <a href="#">了解意外保护 ></a>
                            </h3>
                            <ul>
                                <li>
                                    <i><em>√√</em></i>
                                    <img src="./img1/19.jpg" alt="">
                                    <div>
                                        <span class="name">意外保障服务</span>
                                        <p>手机意外碎屏/进水/碾压等损坏</p>
                                        <p>
                                            <i><em>√√</em></i>
                                             我已阅读
                                             <a href="">服务条款 <span>|</span></a>
                                             <a href="">常见问题</a>
                                        </p>
                                        <h6>349元</h6>
                                    </div>
                                </li>
                                <li>
                                    <i><em>√√</em></i>
                                    <img src="./img1/19.jpg" alt="">
                                    <div>
                                        <span class="name">意外保障服务</span>
                                        <p>手机意外碎屏/进水/碾压等损坏</p>
                                        <p>
                                            <i><em>√√</em></i>
                                            我已阅读
                                            <a href="">服务条款 <span>|</span></a>
                                            <a href="">常见问题</a>
                                        </p>
                                        <h6>349元</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                         <div class="choose">
                            <h3>
                                选择小米提供的延长保修
                                <a href="#">了解延长保修 ></a>
                            </h3>
                            <ul>
                                <li>
                                    <i><em>√√</em></i>
                                    <img src="./img1/19.jpg" alt="">
                                    <div>
                                        <span class="name">意外保障服务</span>
                                        <p>手机意外碎屏/进水/碾压等损坏</p>
                                        <p>
                                            <i><em>√√</em></i>
                                             我已阅读
                                             <a href="">服务条款 <span>|</span></a>
                                             <a href="">常见问题</a>
                                        </p>
                                        <h6>349元</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="proList">
                            <ul>
                                <li>
                                    ${data.goodsName} 
                                    ${data.beiyong9}
                                    ${data.beiyong6} 
                                    <span> ${data.goodsPrice}元 </span>
                                </li>
                                <li> 总计 ：${data.goodsPrice}元 </li>
                            </ul>
                        </div>
                        <ul class="btn-warp">
                            <li class="btnjiaru">
                                <a>加入购物车</a>
                            </li>
                            <li class="btnxihuan">
                                <a>❤ 喜欢</a>
                            </li>
                        </ul>
                        <div class="proPolicy">
                            <a href=""><span><i>√</i>小米自营</span></a>
                            <a href=""><span><i>√</i>小米发货</span></a>
                            <a href=""><span><i>√</i>7天无理由退货</span></a>
                            <a href=""><span><i>√</i>运费说明</span></a>
                            <a href=""><span><i>√</i>企业信息</span></a>
                            <a href=""><span><i>√</i>售后服务政策</span></a>
                            <a href=""><span><i>√</i>7天价格保护</span></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    $(".xinxi_con>h2").html(h2)
    $(".main_con").html(htmlStr);
    cb(goodsId)
}
//显示之后的功能
function cb(goodsId) {
    if ($(".yanse1>li>a>em").eq(2).html() == "无") {
        $(".yanse1>li>a>em").eq(2).parent().parent().remove()
    }
     // 当前播放的图片的序号
    let ord = 0;
    // 定义定时器
    let myTimer = null;
    let $img = $("#imgbox>img");
    let $li = $(".spanwarp>ul>li>a");
    let t = true
    //1、自动播放
    function autoPlay() {
        if (t == true) {
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
            background: "#ccc"

        });
        $li.eq(ord).css({
            background: "#a3a3a3"
        });
        return t = true
    }

    function stopPlay() {
        window.clearInterval(myTimer);
        myTimer = null;
    }
    autoPlay();

    //2、点击豆豆跳转到对应的图片上
    $(".spanwarp>ul>li").click(function () {
        stopPlay();
        goImg($(this).index());
    });

    //3、鼠标放入停止
    $("#imgbox").mouseover(function () {
        stopPlay();
    });

    //4、鼠标离开继续播放    
    $("#imgbox").mouseout(function () {
        autoPlay();
    });
    //5、左右箭头
    let $span = $(".qiehuan>a");
    // 左箭头
    $span.eq(0).click(function () {
        stopPlay();
        goImg(ord - 1);
    });
    // 右箭头
    $span.eq(1).click(function () {
        stopPlay();
        goImg(ord + 1);
    });

    //回顶
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t >= 800) {
            $(".huidin").css("display", "block")
        } else if (t < 800) {
            $(".huidin").css("display", "none")
        }
    }
    //跳转购物车
    $(".gw").click(function () {
        open("06gowuche.html")
    })
    onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= 205) {
            // 吸顶。
            $(".xinxi").css({
                background: "#fff",
                position: "fixed",
                top: "0px"
            })
            $("main").css({
                marginTop:"45px"
            })
        } else {
            // 如果滚动距离小于200px时，不吸顶。
            $(".xinxi").css({
                position: "static",
                top: "0px"
            })
            $("main").css({
                marginTop:"0px"
            })
        }
    }

    $(".xuanze>ul>li").click(function () {
        $('.xuanze>ul>li').css({
            borderColor: '#e0e0e0'
        })
        $('.xuanze>ul>li>a>span').eq(0).css({
            color: "#000"
        })
        $('.xuanze>ul>li>a>span').eq(2).css({
            color: "#000"
        })
        $('.xuanze>ul>li>a>span').eq(4).css({
            color: "#000"
        })
        $('.xuanze>ul>li>a>span').eq(1).css({
            color: "#c5c2c2"
        })
        $('.xuanze>ul>li>a>span').eq(3).css({
            color: "#c5c2c2"
        })
        $('.xuanze>ul>li>a>span').eq(5).css({
            color: "#c5c2c2"
        })
        $(this).css({
            borderColor: "#ff6700"
        })
        $(this).children().children().eq(0).css({
            color: "#ff6700"
        })
        $(this).children().children().eq(1).css({
            color: "#585858"
        })
    })
    $(".xuanze2>ul>li").click(function () {
        $('.xuanze2>ul>li').css({
            borderColor: '#e0e0e0'
        })
        $('.xuanze2>ul>li>a>em').css({
            color: "#000"
        })
        $(this).css({
            borderColor: "#ff6700"
        })
        $(this).children().children().eq(1).css({
            color: "#ff6700"
        })
    })

    $(".choose>ul>li>i>em").click(function () {
        if ($(this).html() == "×") {
            $(this).css("color", "#fff").html("√√")
        }
        if ($(this).html() == "√") {
            $(this).css("color", "#fff").html("×")
        }
        if ($(this).html() == "√√") {
            $(this).css("color", "#000").html("√")
        }
    })
    $(".choose>ul>li>div>p>i>em").click(function () {
        if ($(this).html() == "×") {
            $(this).css("color", "#fff").html("√√")
        }
        if ($(this).html() == "√") {
            $(this).css("color", "#fff").html("×")
        }
        if ($(this).html() == "√√") {
            $(this).css("color", "#000").html("√")
        }
    })
    $(".btnxihuan").click(function(){
        $(this).children().css({
            background: "#ff6700"
        })
    })
    $(".btnjiaru").click(function(){
        addShoppingCar(goodsId)
    })
}
//把指定商品 添加到购物车
function addShoppingCar(goodsId){ 
    let use = getCookie("username")
    $.post("./php/addShoppingCart.php",{
        "vipName":use,
        "goodsId":goodsId,
        "goodsCount":"1"
    },(data)=>{
        if(data==="0"){
            alert("服务器错误，添加失败")
        }else{
            location.href="06gowuche.html"
        }
    });
}
$(function(){
    let goodsId = location.search.split("=")[1];
    getGoods(goodsId,cb);
})

