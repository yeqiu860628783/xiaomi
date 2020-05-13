$(function(){
    $("#beian>img").on("click", function () {
        open('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134')
    })

    $("#btn").click(function () {
        $.post(
            "./php/login.php",
            {
                "username": $("#username").val(),
                "userpass": $("#userpass").val()
            },
            function (data) {
                if (data == "success") {
                    //删除cook
                    // saveCookie("username", "", -1);
                    //添加cook
                    saveCookie("username", $("#username").val(),"7");
                    location.href = "03index.html";
                } else if (data == "fail") {
                    alert("登录失败，账号或密码错误")
                } else {
                    alert("不好意思，亲，服务器出错了！")
                }
            }
        );
    });
})