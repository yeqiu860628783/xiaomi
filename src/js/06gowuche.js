function getShoppingCar(use, cb) {
    $.get("./php/getShoppingCart.php", {
        "vipName": use
    }, function (datas) {
        let htmlStr = `
             <table>
                <tr>
                    <td>
                        <input type="checkbox" >
                    </td>
                    <td>编号</td>
                    <td>商品名称</td>
                    <td>价格</td>
                    <td>数量</td>
                    <td>金额</td>
                    <td>操作</td>
                </tr>  
        `;

        datas.forEach(goods => {
            htmlStr += `
                        <tr>
                            <td>
                                <input type="checkbox" >
                            </td>
                            <td class="goodsId">${goods.goodsId}</td>
                            <td>${goods.goodsName}</td>
                            <td>${goods.goodsPrice}</td>
                            <td>
                                <input type="button" class="reduceBtn" value="-">
                                <span>${goods.goodsCount}</span>
                                <input type="button" class="addBtn" value="+">
                            </td>
                            <td>${goods.goodsPrice*goods.goodsCount}</td>
                            <td>
                                <input class="delBtn" type="button" value="删除">
                            </td>
                        </tr>
            `;
        });
        htmlStr += `
                    <tr>
                        <td colspan="8">
                            总金额：<span>0</span>
                        </td>
                    </tr>
                </table>
                `;
        // 把产生html字符串放在html页面上
        $("section").html(htmlStr);
        cb()
    }, "json")
}

function addEvent() {
    //添加事件 
    console.log($("table :checkbox:eq(0)"))
    console.log($("table :checkbox:gt(0)"))
    $("table :checkbox:eq(0)").check($("table :checkbox:gt(0)"));
    $(":checkbox").click(function () {
        totalMoney();
    });
    $(".addBtn").click(function () {
        //一、修改后端的数量
        let goodsId = $(this).parent().parent().find(".goodsId").html();
        let count = $(this).prev().html();
        count++;
        updateCount(goodsId, count, () => {
            //二、修改前端的数量
            // 数量            
            $(this).prev().html(count);
            // 单价
            let price = $(this).parent().prev().html();
            // 计算金额
            let money = price * count;
            $(this).parent().next().html(money);

            // 总金额
            totalMoney();
        });
    });
    $(".reduceBtn").click(function () {
        //一、修改后端的数量
        let goodsId = $(this).parent().parent().find(".goodsId").html();
        let count = $(this).next().html();
        count--;
        if (count < 1) {
            count = 0;
        }
        updateCount(goodsId, count, () => {
            // 二、修改前端的数量
            // 数量 
            $(this).next().html(count);
            // 单价
            let price = $(this).parent().prev().html();
            // 计算金额
            let money = price * count;
            $(this).parent().next().html(money);

            // 同时改变当前行的复选框的状态
            if (count == 0) {
                $(this).parent().parent().find(":checkbox").prop("checked",false);
                // $(this).parent().parent().remove();
            }
            // 总金额
            totalMoney();
        })
    });
    $(".delBtn").click(function () {
        if (confirm("亲，您真的要删除吗？")) {
            $(this).parent().parent().remove();
            totalMoney();
        }
    });

}

function updateCount(goodsId, goodsCount, cb) {
    let use = getCookie("username")
    //从cookie中获取用户名
    $.get("./php/updateGoodsCount.php", {
        "vipName": use,
        "goodsId": goodsId,
        "goodsCount": goodsCount
    }, function (data) {
        if (data == "0") {
            alert("服务器出错：修改数量失败");
        } else {
            // 前端修改数量
            cb();
        }
    });
}

function totalMoney() {
    let money = 0;
    let $tr = $("table tr:gt(0)").not("table tr:last");
    $tr.each(function () {
        // 复选框是不是选中了
        if ($(this).find(":checkbox").prop("checked")) {
            money += parseFloat($(this).find("td").eq(5).html());
        }
    });
    $("table tr:last").find("span").html(money);
}
$(function () {
    let use = getCookie("username")
    if (use) {
        let htmlStr = `
            <div class="logo_con">
                <div class="header-logo">
                    <a href="03index.html">
                        <img src="./images/1.png" alt="">
                    </a>
                </div>
                <div class="header-title">
                    <h2>我的购物车</h2>
                </div>
                <div class="header-den">
                    <a>欢迎${use}</a>
                    <span class="sep">|</span>
                    <a>注销</a>
                </div>
            </div>
        `
        $("header").html(htmlStr)
    }
    getShoppingCar(use,addEvent);

    //回顶
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t >= 800) {
            $(".huidin").css("display", "block")
        } else if (t < 800) {
            $(".huidin").css("display", "none")
        }
    }
})