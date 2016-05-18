// javascript && jquery 
$(document).click(function() {
    $(".search-extra").hide();
    $(".search-txt").css("border", "1px solid #e0e0e0");
    $(".search-btn").css("border", "1px solid #e0e0e0");
    $(".search-btn").css("border-left", "none");
    /*$(".hot-word1,.hot-word2").animate({
        opacity: 1
    }, 300,function() {
		$(".hot-word1,.hot-word2").show();
	});*/
    //$(".hot-word1,.hot-word2").show(300,console.log('show ok!'));
    $(".hot-word1,.hot-word2").fadeIn('400', function() {
        console.log('show ok!')
    });
});

$(".search-box").click(function() {
    $(".search-extra").show();
    $(".search-txt").css("border", "1px solid #ff6700");
    $(".search-txt").css("border-bottom", "none");
    $(".search-btn").css("border", "1px solid #ff6700");
    $(".search-btn").css("border-left", "none");
    $(".hot-word1,.hot-word2").fadeOut('400', function() {
        console.log('hide ok!')
    });
    /*$(".hot-word1,.hot-word2").animate({
        opacity: 0
    }, 300, function() {
		$(".hot-word1,.hot-word2").hide();
	});*/
    return false;
});

$(".search-box").mouseover(function() {
    /*$(".search-txt,.search-btn").animate({
    	borderColor: #666666
    },300);*/
    var isFocus=$(".search-txt").is(":focus");  
    if (!isFocus) {
        $(".search-txt").css("border", "1px solid #666666");
        $(".search-txt").css("border-right", "none");
        $(".search-btn").css("border", "1px solid #666666");
    }
});
$(".search-box").mouseout(function(event) {
	var isFocus=$(".search-txt").is(":focus");  
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

var display = new Vue({
    el: '#star_goods',
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
            
