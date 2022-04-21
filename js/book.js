$(function () {
    function getBooks() {
        $.get("http://www.liulongbin.top:3006/api/getbooks", function (res) {
            // console.log("****");
            if (res.status !== 200) return alert("获取图书失败");
            var li = [];
            $.each(res.data, function (i, item) {
                li.push("<tr><td>" + item.id + "</td><td>" + item.bookname + "</td><td>" + item.author + "</td><td>" + item.publisher + "</td><td><a class='del'>删除</a></td></tr>");
            })
            $("#tb").empty();
            for (var i = 0; i < li.length; i++) {
                // console.log(li[i]);
                $("#tb").append(li[i]);
            }
        })
    }
    getBooks();
    $("#tb").on("click", ".del", function () {
        var id = $(this).parent().siblings().eq(0).html();
        // console.log(id);
        $.get("http://www.liulongbin.top:3006/api/delbook", { "id": id }, function (res) {
            if (res.status !== 200) return alert("获取图书失败");
            getBooks();
            return alert("删除成功");
        })
    })

    $(window).on("keydown", function (e) {
        if (e.keyCode !== 13) return;
        var name = $(".label_better").eq(0).val().trim();
        var author = $(".label_better").eq(1).val().trim();
        var publisher = $(".label_better").eq(2).val().trim();
        if (name.length == 0 || author.length == 0 || publisher.length == 0) {
            return alert("请不要乱摁");
        }
        // console.log(name);
        // console.log(author);
        // console.log(publisher);
        $.post("http://www.liulongbin.top:3006/api/addbook",
            { "bookname": name, "author": author, "publisher": publisher },
            function (res) {
                console.log(res);
                if (res.status == 201) {
                    $(".label_better").eq(0).val('');
                    $(".label_better").eq(1).val('');
                    $(".label_better").eq(2).val('');
                    return alert("图书添加成功");
                } else if (res.status == 500) {
                    return alert("图书添加失败");
                } else {
                    return alert("出现了未知的错误");
                }
            })
        getBooks();
    })
})