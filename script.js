
let messages = "";
let message = "";
let language = "";
let tiShi = 0;
if (confirm("语言设置\nLanguage settings\n\n英文：取消 ， 中文：确定\nEnglish: cancel, Chinese: OK")) {
    alert("中文设置成功");
    language = "China";
} else {
    language = "English";
    alert("English");
}

if (language === "China") {


    $(".tiJiao").click(function () {
        let name = $(".userName").val();
        message = $(".userComment").val();
        if (name != "" && message != "") {
            message = name + ":" + message;
            messages = messages + message + '<br>';
            $(".messages").html(messages);
            alert("成功提交");
            if (tiShi === 0) {
                alert("提示：点击eric的头像可以查看eric的个人简介\nTip: click Eric's Avatar to view Eric's profile");
                tiShi++;
            }
        } else if (name === "") {
            alert("您未输入您的名字，请在姓名区留下您的姓名")
        } else if (message === "") {
            alert("您未输入您的留言，请在留言去留言，谢谢")
        }

    });

} else {
    $("title").text("Input box: comment area");
    $(".liuYan").text("Please leave a message:");
    $(".xingMing").text("Full name:");
    document.getElementById("xM").setAttribute("placeholder", "Your name...");
    document.getElementById("lY").setAttribute("placeholder", "Message area...");
    $(".tiJiao").text("Submission");
    $(".settings").text("Language settings");

    $(".tiJiao").click(function () {
        let name = $(".userName").val();
        message = $(".userComment").val();
        if (name != "" && message != "") {

            message = name + ":" + message;
            messages = messages + message + '<br>';
            $(".messages").html(messages);
            alert("Submit successfully");
            if (tiShi === 0) {
                alert("提示：点击eric的头像可以查看eric的个人简介\nTip: click Eric's Avatar to view Eric's profile");
                tiShi++;
            }
        } else if (name === "") {
            alert("You have not entered your name, please leave your name in the name area")
        } else if (message === "") {
            alert("You have not entered your message, please leave a message in the message, thank you")
        }

    });

}
$(".settings").click(function () {
    if (confirm("语言设置\nLanguage settings\n\n英文：取消 ， 中文：确定\nEnglish: cancel, Chinese: OK")) {
        $("title").text("输入框：评论区 ");
        $(".liuYan").text("请留言: ");
        $(".xingMing").text("姓名: ");
        document.getElementById("xM").setAttribute("placeholder", " 您的名字... ");
        document.getElementById("lY").setAttribute("placeholder", " 留言区... ");
        $(".tiJiao").text("提交");
        $(".settings").text("语言设置");
        alert("中文设置成功");
    } else {
        $("title").text("Input box: comment area");
        $(".liuYan").text("Please leave a message:");
        $(".xingMing").text("Full name:");
        document.getElementById("xM").setAttribute("placeholder", "Your name...");
        document.getElementById("lY").setAttribute("placeholder", "Message area...");
        $(".tiJiao").text("Submission");
        $(".settings").text("Language settings");
        alert("English setting succeeded");
    }
});