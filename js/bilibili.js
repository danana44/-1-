$(function () {
    var cur_position = 0;
    var flag = true;
    var colors = ["#07060b", "#4c6d83", "#152f54", "#402f35"];
    var headers = ["对《流星》许愿可能成真哦",
        "导师大人，半周年丰厚福利等你领取",
        "逆袭开挂全靠盾，逆天改命铸英雄！",
        "如假包换的开场即团灭"];
    $(".Carousel_diagram li").eq(0).clone(true).appendTo(".Carousel_diagram");
    $(".dayu").on("click", function () {
        if (flag) {
            flag = false;
            cur_position++;
            $(".xia").css({
                "background-color": colors[cur_position % 4],
                "box-shadow": "0 -10px 20px 10px " + colors[cur_position % 4]
            });
            $(".zuo").children("a").html(headers[cur_position % 4]);
            $(".dots").find("li").removeClass("current_left current_right");
            $(".dots").find("li").eq(cur_position % 4).addClass("current_left");
            $(".Carousel_diagram").animate({
                left: -400 + $(".Carousel_diagram").position().left
            }, 700, function () {
                if (cur_position == 4) {
                    cur_position = 0;
                    $(".box .Carousel_diagram").css("left", "0px");
                }
                flag = true;
            });
        }
    })

    $(".xiaoyu").on("click", function () {
        if (flag) {
            flag = false;
            cur_position--;
            if (cur_position == -1) {
                cur_position = 3;
                $(".box .Carousel_diagram").css("left", "-1600px");
            }
            $(".xia").css({
                "background-color": colors[cur_position % 4],
                "box-shadow": "0 -10px 20px 10px " + colors[cur_position % 4]
            });
            $(".zuo").children("a").html(headers[cur_position % 4]);
            $(".dots").find("li").removeClass("current_left current_right");
            $(".dots").find("li").eq(cur_position).addClass("current_right");
            $(".Carousel_diagram").animate({
                left: 400 + $(".Carousel_diagram").position().left
            }, 700, function () {
                flag = true;
            });
        }

    })

    $(".dots").on("click", "li", function () {
        if (flag) {
            flag = false;
            $(".dots").find("li").removeClass("current_left current_right");
            if ($(this).attr("id") >= cur_position) {
                $(this).addClass("current_left");
            } else {
                $(this).addClass("current_right");
            }
            cur_position = $(this).attr("id");
            $(".xia").css({
                "background-color": colors[cur_position % 4],
                "box-shadow": "0 -10px 20px 10px " + colors[cur_position % 4]
            });
            $(".zuo").children("a").html(headers[cur_position % 4]);
            $(".Carousel_diagram").animate({
                left: -400 * cur_position
            }, 700, function () {
                flag = true;
            });
        }
    })
})