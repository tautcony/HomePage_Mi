// javascript && jquery

//search event
$(document).click(function() {
    //$(".search-extra").hide();
    $(".search-extra").slideUp('300');
    $(".search-txt").css("border", "1px solid #e0e0e0");
    $(".search-btn").css("border", "1px solid #e0e0e0");
    $(".search-btn").css("border-left", "none");
    $(".hot-word1,.hot-word2").fadeIn('400', function() {
        console.log('show ok!');
    });
});

$(".search-box").click(function() {
    //$(".search-extra").show();
    $(".search-extra").slideDown('300');
    $(".search-txt").css("border", "1px solid #ff6700");
    $(".search-txt").css("border-bottom", "none");
    $(".search-btn").css("border", "1px solid #ff6700");
    $(".search-btn").css("border-left", "none");
    $(".hot-word1,.hot-word2").fadeOut('400', function() {
        console.log('hide ok!');
    });
    return false;
});

$(".search-box").mouseover(function() {
    /*$(".search-txt,.search-btn").animate({
        borderColor: #666666
    },300);*/
    var isFocus = $(".search-txt").is(":focus");
    if (!isFocus) {
        $(".search-txt").css("border", "1px solid #666666");
        $(".search-txt").css("border-right", "none");
        $(".search-btn").css("border", "1px solid #666666");
    }
});

$(".search-box").mouseout(function(event) {
    var isFocus = $(".search-txt").is(":focus");
    if (!isFocus) {
        $(".search-txt").css("border", "1px solid #e0e0e0");
        $(".search-txt").css("border-right", "none");
        $(".search-btn").css("border", "1px solid #e0e0e0");
    }
});

$(function() {
    var isLeft = 1;
    var timeout = 500;
    $(".left_img").click(function() {
        if (isLeft === 1) {
            $(".left_img > img").attr("src", "img/icon/left2.png");
            $(".right_img > img").attr("src", "img/icon/right1.png");
            $(".star_spec .spec_item_list").animate({ left: "0" }, timeout);
            isLeft = 0;
        }
    });
    $(".right_img").click(function() {
        if (isLeft === 0) {
            $(".left_img > img").attr("src", "img/icon/left1.png");
            $(".right_img > img").attr("src", "img/icon/right2.png");
            $(".star_spec .spec_item_list").animate({ left: "-1234px" }, timeout);
            isLeft = 1;
        }
    });
    $(".left_img").click();
});

$(function() {
    var isLeft = 1;
    setInterval(function() {
        if (isLeft === 1) {
            console.log("interval right click");
            $(".right_img").click();
            isLeft = 0;
        } else {
            console.log("interval left click");
            $(".left_img").click();
            isLeft = 1;
        }
    }, 7500);
});
//nav list event
var listNum = 6;
var listindex;

/*function hideAll() {
    $(".nav_menu_show1,.nav_menu_show2,.nav_menu_show3,.nav_menu_show4,.nav_menu_show5,.nav_menu_show6").hide();
}

$(".nav .nav_list li").mouseover(function(event) {
    listindex = $(this).index();
    var isOpened = false;
    var thisOpened = false;
    for (var i = 0; i < listNum; ++i) {
        if ($(".nav_menu_show" + (i + 1)).is(':visible')) {
            isOpened = true;
            break;
        }
    }
    if (isOpened === true) {
        hideAll();
        $(".nav_menu_show" + (listindex + 1)).show();
        thisOpened = true;
    } else {
        $(".nav_menu_show" + (listindex + 1)).slideDown(200);
        thisOpened = true;
    }
    console.log('in');
    $(this).mouseout(function(event) {
        listindex = $(this).index();
        if (thisOpened) {
            $(".nav_menu_show" + (listindex + 1)).slideUp(200);
        }
    });
});
*/
var preIndex = -1,
    curIndex = -1;
$(".nav .nav_list li").mouseover(function() {
    curIndex = $(this).index();
    isHoverNav = true;
    $(".nav_menu_show" + (curIndex + 1)).slideDown(200);
    if (preIndex !== -1 && preIndex !== curIndex) $(".nav_menu_show" + (preIndex + 1)).slideUp(200);
    preIndex = curIndex;
    $(this).mouseout(function() {
        isHoverNav = false;
        //$(this).stop(timer2);
        timer2 = setTimeout(function() {
            if (!isHoverNav) {
                $(".nav_menu_show" + (preIndex + 1)).slideUp(200);
            }
        }, 100);
        return false;
    });
    return false;
});
$(".navMenu").mouseover(function() {
    isHoverNav = true;
    $(".nav_menu_show" + (curIndex + 1)).slideDown(200);
    $(this).mouseout(function() {
        isHoverNav = false;
        //$(this).stop(timer2);
        timer2 = setTimeout(function() {
            if (!isHoverNav) {
                $(".nav_menu_show" + (preIndex + 1)).slideUp(200);
            }
        }, 100);
        return false;
    });
    return false;
});

var index;
//首页大图切换
$(".category_move span").click(function() {
    $(".category_move span").removeClass("cur_move");
    $(this).addClass("cur_move");
    if (index !== $(this).parent().index()) {
        index = $(this).parent().index();
        $(".category_hot_list > li").stop().fadeOut('500');
        $(".category_hot_list > li:eq(" + index + ")").stop().fadeIn('500');
    }
});

//首页大图按钮切换
$(".ui-prev").click(function(event) {
    //console.log($(this).parent().siblings().last());
    var index = $("span.cur_move").parent().index();
    if (index > 0) {
        $("span.cur_move").parent().prev().children().click();
    } else {
        $("span.cur_move").parent().siblings().last().children().click();
    }
});

$(".ui-next").click(function(event) {
    //console.log($(this).parent().siblings().last());
    var index = $("span.cur_move").parent().index();
    if (index < 4) {
        $("span.cur_move").parent().next().children().click();
    } else {
        $("span.cur_move").parent().siblings().first().children().click();
    }
});

//category栏的category_item_box显示隐藏
$(".category_item").hover(function() {
    var index = $(this).index();
    $(".category_item_box:eq(" + index + ")").css("display", "block");
    var category_item_list = $(this).find(".category_item_box").children(".category_item_list");
    var width = $(this).index() === 0 ? 265 : 265;
    var len = category_item_list.length;
    category_item_list.width(width);
    width = len * width;
    $(".category_list .category_item_box").width(width);
    //console.log(len * width);
}, function() {
    var index = $(this).index();
    $(".category_item_box:eq(" + index + ")").css("display", "none");
});


//content 轮播
$(".xm-pagers-1>li,.xm-pagers-2>li,.xm-pagers-3>li,.xm-pagers-4>li").click("Myclick", function(event) {
    /* Act on the event */
    $(this).addClass('pager-active');
    $(this).siblings().removeClass('pager-active');
    var index = $(this).index();
    //console.log($(this).parents("div").prev().children().children().attr('class'));
    //console.log($(this).parents("div").parents("li").index());
    var contentindex = ($(this).parents("div").parents("li").index()) + 1;
    //$(this).parents("div").prev().children().children().animate({
    $("ul.item-list-" + contentindex).stop().animate({
            marginLeft: -index * 296
        },
        500,
        function() {
            console.log('hao ');
        });
    //$(this).parents("div").prev().children().children().animate({ marginLeft: -index * 296 }, 400);
});


$(function() {
    var arr = [$("#match-tab-hot"), $("#match-tab-speaker"), $("#match-tab-battery"), $("#match-tab-memcard")];
    var corspondID = [".match #hot", ".match #speaker", ".match #battery", ".match #memcard"];
    $(corspondID[0]).css("display", "block");
    $.each(arr, function(index, value) {
        $(value).mouseover(function() {
            for (var i = 0; i < 4; ++i) {
                $(corspondID[i]).css("display", "none");
                $(arr[i]).removeClass();
            }
            $(corspondID[index]).css("display", "block");
            $(arr[index]).addClass("tab-active");
        });
    });
});

//xm-control Event--------------------
function checkControlPoint(predex) {
    if (predex === 4) {
        $("img.control-next").css("cursor", "default");
    } else if (predex === 1) {
        $("img.control-prev").css("cursor", "default");
    } else {
        $("img.control-next").css("cursor", "pointer");
        $("img.control-prev").css("cursor", "pointer");
    }
}

$("img.control-prev").click(function() {
    var index = $(this).parents("li").index() + 1;
    // console.log(index);
    // console.log($("ul.xm-pagers-"+index).children().filter(".pager-active").index());
    var predex = ($("ul.xm-pagers-" + index).children().filter(".pager-active").index()) + 1;
    console.log(predex);
    if (predex > 1) {
        $(".xm-pagers-" + index).children().filter(".pager-active").prev().click();
    }
});

$("img.control-next").click(function() {
    var index = $(this).parents("li").index() + 1;
    // console.log(index);
    // console.log($("ul.xm-pagers-"+index).children().filter(".pager-active").index());
    var predex = ($("ul.xm-pagers-" + index).children().filter(".pager-active").index()) + 1;
    console.log(predex);
    if (predex < 4) {
        $(".xm-pagers-" + index).children().filter(".pager-active").next().click();
    }
});
//-----------------------------------------
$(function() {
    var arr = [$("#accessories-tab-hot"), $("#accessories-tab-phonecase"), $("#accessories-tab-backcase"), $("#accessories-tab-mo"), $("#accessories-tab-other")];
    var corspondID = [".accessories #hot", ".accessories #phonecase", ".accessories #backcase", ".accessories #mo", ".accessories #other"];
    $(corspondID[0]).css("display", "block");
    $.each(arr, function(index, value) {
        $(value).mouseover(function() {
            for (var i = 0; i < 5; ++i) {
                $(corspondID[i]).css("display", "none");
                $(arr[i]).removeClass();
            }
            $(corspondID[index]).css("display", "block");
            $(arr[index]).addClass("tab-active");
        });
    });
});

$(function() {
    var arr = [$("#around-tab-hot"), $("#around-tab-cloth"), $("#around-tab-rabbit"), $("#around-tab-life"), $("#around-tab-case")];
    var corspondID = [".around #hot", ".around #cloth", ".around #rabbit", ".around #life", ".around #case"];
    $(corspondID[0]).css("display", "block");
    $.each(arr, function(index, value) {
        $(value).mouseover(function() {
            for (var i = 0; i < 5; ++i) {
                $(corspondID[i]).css("display", "none");
                $(arr[i]).removeClass();
            }
            $(corspondID[index]).css("display", "block");
            $(arr[index]).addClass("tab-active");
        });
    });
});
