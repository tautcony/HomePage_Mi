// javascript && jquery 

//search event
$(document).click(function() {
    //$(".search-extra").hide();
    $(".search-extra").slideUp('300');
    $(".search-txt").css("border", "1px solid #e0e0e0");
    $(".search-btn").css("border", "1px solid #e0e0e0");
    $(".search-btn").css("border-left", "none");
    $(".hot-word1,.hot-word2").fadeIn('400', function() {
        console.log('show ok!')
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
        console.log('hide ok!')
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
    if (isOpened == true) {
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
    if (preIndex != -1 && preIndex != curIndex) $(".nav_menu_show" + (preIndex + 1)).slideUp(200);
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
    })
    return false;
});

var index;
//首页大图切换
$(".category_move span").click(function() {
    $(".category_move span").removeClass("cur_move");
    $(this).addClass("cur_move");
    if (index != $(this).parent().index()) {
        index = $(this).parent().index();
        $(".category_hot_list > li").fadeOut('500');
        $(".category_hot_list > li:eq(" + index + ")").fadeIn('500');
    }
});
