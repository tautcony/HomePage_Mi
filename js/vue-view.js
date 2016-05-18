var nav_list_display = new Vue({
    el: ".nav_list",
    data: {
        nav_list: [
        {title: "小米手机", href: "#"},
        {title: "红米", href: "#"},
        {title: "平板", href: "#"},
        {title: "电视", href: "#"},
        {title: "盒子 · 影音", href: "#"},
        {title: "路由器", href: "#"},
        {title: "智能硬件", href: "#"},
        {title: "服务", href: "#"},
        {title: "社区", href: "#"},
        ]
    }
})

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

var category_hot_list_display = new Vue({
    el: ".category_hot_list",
    data: {
        category_hot_list: [
            //{img_name: "hot1.jpg", href: "#"},
            {img_name: "hot2.jpg", href: "#"},
            {img_name: "hot3.jpg", href: "#"},
            {img_name: "hot4.jpg", href: "#"},
            {img_name: "hot5.jpg", href: "#"}
        ]
    }
})

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
