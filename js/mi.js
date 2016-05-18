// javascript && jquery 
$(document).click(function() {
    $(".search-extra").hide();
    $(".search-txt").css("border", "1px solid #e0e0e0");
    $(".search-btn").css("border", "1px solid #e0e0e0");
    $(".search-btn").css("border-left", "none");
    $(".hot-word1,.hot-word2").animate({
        opacity: 1
    }, 300,function() {
		/* stuff to do after animation is complete */
		$(".hot-word1,.hot-word2").show();
	});
});

$(".search-box").click(function() {
    $(".search-extra").show();
    $(".search-txt").css("border", "1px solid #ff6700");
    $(".search-txt").css("border-bottom", "none");
    $(".search-btn").css("border", "1px solid #ff6700");
    $(".search-btn").css("border-left", "none");
    $(".hot-word1,.hot-word2").animate({
        opacity: 0
    }, 300, function() {
		/* stuff to do after animation is complete */
		$(".hot-word1,.hot-word2").hide();
	});
    return false;
});

$(".search-box").mouseover(function() {
	/*$(".search-txt,.search-btn").animate({
		borderColor: #666666
	},300);*/
	$(".search-txt").css("border", "1px solid #666666");
	$(".search-txt").css("border-right","none");
	$(".search-btn").css("border", "1px solid #666666");
});
$(".search-box").mouseout(function(event) {
	$(".search-txt").css("border", "1px solid #e0e0e0");
	$(".search-txt").css("border-right","none");
	$(".search-btn").css("border", "1px solid #e0e0e0");
});