$(function () {
    load();
    class List {
        constructor(value, done) {
            this.value = value;
            this.done = done;
        }
    }
    var l1 = new List(1, 1);
    l1.fun("nihaoma");
    $(".in").on("keydown", function (e) {
        // alert(1);
        if (e.keyCode === 13) {
            // alert("123");
            var data = getData();
            var value = $(this).val();
            data.push(new List(value, false));
            saveDate(data);
            load();
            // $(this).attr("value", "");
            $(this).val("");
        }
    });

    $("ol,ul").on("click", "input", function () {
        // console.log("123");
        var data = getData();
        var index = $(this).attr("id");
        data[index].done = !data[index].done;
        // console.log(data[index].done);
        saveDate(data);
        load();
    });

    $("ol,ul").on("click", "a", function () {
        // alert(1);
        var data = getData();
        var index = $(this).siblings("input").attr("id");
        // alert(index);
        data.splice(index, 1);
        saveDate(data);
        load();
    })

    function getData() {
        var data = localStorage.getItem("key");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    function saveDate(data) {
        localStorage.setItem("key", JSON.stringify(data));
    }

    function load() {
        $("ol, ul").empty();
        var data = getData();
        var shang = 0;
        var xia = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' id='" + i + "'> <p>" + data[i].value + "</p> <a href='#'>d</a></li>");
                shang++;
            } else {
                $("ol").prepend("<li><input type='checkbox' id='" + i + "'> <p>" + data[i].value + "</p> <a href='#'>d</a></li>");
                xia++;
            }
        }
        $("#todocount").html(xia);
        $("#donecount").html(shang);
    }


})