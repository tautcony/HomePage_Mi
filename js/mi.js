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

$(function() {
    var isLeft = 1;
    var timeout = 300;
    $(".left_img").click(function() {
        if (isLeft == 1) {
            $(".left_img > img").attr("src", "img/icon/left2.png");
            $(".right_img > img").attr("src", "img/icon/right1.png");
            $(".star_spec .spec_item_list").animate({ left: "0" }, timeout);
            isLeft = 0;
        }
    });
    $(".right_img").click(function() {
        if (isLeft == 0) {
            $(".left_img > img").attr("src", "img/icon/left1.png");
            $(".right_img > img").attr("src", "img/icon/right2.png");
            $(".star_spec .spec_item_list").animate({ left: "-1234px" }, timeout);
            isLeft = 1;
        }
    });
});

var star_goods_display = new Vue({
    el: "#star_goods",
    data: {
        star_goods: [
            {color_id: "1", img_id: "1", title: "小米电视全系列", desc: "买就送爱奇艺会员卡", money: "1799元起"},
            {color_id: "2", img_id: "2", title: "小米盒子3 增强版", desc: "高端 4K 网络机顶盒", money: "399元"},
            {color_id: "3", img_id: "3", title: "小米手环 光感版", desc: "小米手环 光感版", money: "99元"},
            {color_id: "4", img_id: "4", title: "米家压力IH电饭煲", desc: "米家压力IH电饭煲", money: "999元"},
            {color_id: "5", img_id: "5", title: "移动电源10000mAh 高配版", desc: "支持USB Type-C充放电，双向快充", money: "149元"},
            {color_id: "1", img_id: "6", title: "Yeelight床头灯", desc: "触摸式操作，给卧室1600万种颜色", money: "249元"},
            {color_id: "2", img_id: "7", title: "小米路由器 mini", desc: "双频AC智能路由器，高性价比", money: "129元"},
            {color_id: "3", img_id: "8", title: "Yeelight LED智能灯泡 彩光版", desc: "1600万种色彩，手机远程遥控", money: "99元"},
            {color_id: "4", img_id: "9", title: "小米智能插座 基础版", desc: "手机远程遥控，让普通电器变智能", money: "49元"},
            {color_id: "5", img_id: "X", title: "小米活塞耳机 基础版", desc: "全金属音腔，5色可选", money: "29元"},
        ]
    }
});

var search_extra_display = new Vue({
   el: ".search-extra",
     data: {
        search_extra: [
            {title: "移动电源", count: 22},
            {title: "空气净化器", count: 2},
            {title: "小米手环", count: 5},
            {title: "WiFi", count: 7},
            {title: "自拍杆", count: 1},
            {title: "小米体重秤", count: 134},
            {title: "小蚁摄像机", count: 6},
            {title: "运动相机", count: 22},
            {title: "智能插座", count: 4},
            {title: "配件优惠套装", count: 11}
        ]
     }
});


var category_list_display = new Vue({
   el: ".category_list",
     data: {
        category_list: [
            {title: "手机 平板 电话卡"},
            {title: "电视 盒子"},
            {title: "路由器 智能硬件"},
            {title: "移动电源 插线板"},
            {title: "耳机 音箱"},
            {title: "电池 存储卡"},
            {title: "保护套 后盖"},
            {title: "贴膜 其他配件"},
            {title: "米兔 服装"},
            {title: "箱包 其他周边"}
        ]
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

