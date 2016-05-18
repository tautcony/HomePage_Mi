// javascript && jquery 
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
