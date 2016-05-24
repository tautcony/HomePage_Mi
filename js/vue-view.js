//Vue.config.debug = true;

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
});

var nav_item_display = new Vue({
    el: "#nav_menu_template",
	data: {
        nav_item_list: {
            1: [
                {title: "小米Max", price: "1499元起", img_name: "img/nav_item/mi_phone/miMax.jpg", href: ""},
                {title: "小米手机5", price: "1999元起", img_name: "img/nav_item/mi_phone/mi5.jpg", href: ""},
                {title: "小米手机4S", price: "1699元", img_name: "img/nav_item/mi_phone/mi4s.jpg", href: ""},
                {title: "小米手机4c", price: "1099元", img_name: "img/nav_item/mi_phone/mi4c.jpg", href: ""},
                {title: "小米手机4", price: "1299元", img_name: "img/nav_item/mi_phone/mi4.jpg", href: ""},
                {title: "小米Note 标准版", price: "1499元起", img_name: "img/nav_item/mi_phone/minote.jpg", href: ""}
            ],
            2: [
    			{title: "红米Note 3", price: "899元起", img_name: "img/nav_item/red_mi/redmi3.jpg", href: ""},
    			{title: "红米手机3", price: "699元起", img_name: "img/nav_item/red_mi/redminote3.jpg", href: ""}
    		],
            3: [
    			{title: "小米平板2 16GB", price: "899元起", img_name: "img/nav_item/mi_pad/mi_pad_2_16.jpg", href: ""},
    			{title: "小米平板2 64GB", price: "699元起", img_name: "img/nav_item/mi_pad/mi_pad_2_64.jpg", href: ""},
    			{title: "小米平板2  64GB Windows版", price: "699元起", img_name: "img/nav_item/mi_pad/mi_pad_2_64_win.jpg", href: ""}
    		],
            4: [
    			{title: "小米电视3S 43英寸", price: "1799元", img_name: "img/nav_item/mi_tv/mitv3s_43.jpg", href: ""},
    			{title: "小米电视3S 48英寸", price: "1999元", img_name: "img/nav_item/mi_tv/mitv3s_48.jpg", href: ""},
    			{title: "小米电视3 55英寸", price: "3999元起", img_name: "img/nav_item/mi_tv/mitv3_55.jpg", href: ""},
    			{title: "小米电视3 60英寸", price: "4999元起", img_name: "img/nav_item/mi_tv/mitv3_65.jpg", href: ""},
    			{title: "小米电视3S 65英寸 曲面", price: "8999元", img_name: "img/nav_item/mi_tv/mitv3s_65c.jpg", href: ""},
    			{title: "小米电视3 70英寸", price: "9999元", img_name: "img/nav_item/mi_tv/mitv3_70.jpg", href: ""}
    		],
            5: [
    			{title: "小米盒子mini版", price: "199元", img_name: "img/nav_item/mi_tv_box/box_mini.jpg", href: ""},
    			{title: "小米盒子3", price: "299元", img_name: "img/nav_item/mi_tv_box/box_3.jpg", href: ""},
    			{title: "小米盒子3 增强版", price: "399元", img_name: "img/nav_item/mi_tv_box/box_3s.jpg", href: ""},
    			{title: "小米电视主机", price: "999元", img_name: "img/nav_item/mi_tv_box/tv_console.jpg", href: ""},
    			{title: "小米家庭音响 金属版", price: "899元", img_name: "img/nav_item/mi_tv_box/seaker_std.jpg", href: ""},
    			{title: "小米家庭音响 标准版", price: "699元", img_name: "img/nav_item/mi_tv_box/speaker_pro.jpg", href: ""}
    		],
            6: [
    			{title: "全新小米路由器", price: "699元起", img_name: "img/nav_item/mi_router/new_router.jpg", href: ""},
    			{title: "小米路由器 3", price: "149元", img_name: "img/nav_item/mi_router/router3.jpg", href: ""},
    			{title: "小米路由器 mini", price: "129元", img_name: "img/nav_item/mi_router/router_mini.jpg", href: ""},
    			{title: "小米路由器 青春版", price: "79元", img_name: "img/nav_item/mi_router/router_seishun.jpg", href: ""},
    			{title: "小米WiFi放大器", price: "39元", img_name: "img/nav_item/mi_router/wifi_amp.jpg", href: ""}
    		],
            7: [
    			{title: "米家压力IH电饭煲", price: "999元", img_name: "img/nav_item/mi_smart_hardware/cooker.jpg", href: ""},
    			{title: "九号平衡车", price: "1999元", img_name: "img/nav_item/mi_smart_hardware/balance_car.jpg", href: ""},
    			{title: "小米空气净化器 2", price: "699元", img_name: "img/nav_item/mi_smart_hardware/cleaner.jpg", href: ""},
    			{title: "体重秤", price: "99元", img_name: "img/nav_item/mi_smart_hardware/weight.jpg", href: ""},
    			{title: "摄像机", price: "149元", img_name: "img/nav_item/mi_smart_hardware/camera.jpg", href: ""},
    			{title: "查看全部 智能硬件", price: "", img_name: "img/nav_item/mi_smart_hardware/see_all.jpg", href: ""}
    		]
        }
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
            {
            	title: "手机 平板 电话卡",
            	datalist: [
            		{title: "小米手机5", img_name: "img/category/mi5.jpg", href: ""},
					{title: "小米手机4S", img_name: "img/category/mi4.jpg", href: ""},
					{title: "小米手机MAX", img_name: "img/category/mimax.jpg", href: ""},
					{title: "红米Note2", img_name: "img/category/note2.jpg", href: ""},
					{title: "小米手机4", img_name: "img/category/mi4.jpg", href: ""},
					{title: "小米手机4C", img_name: "img/category/mi4c.jpg", href: ""}
            	],
            	datalist_2: [
            		{title: "红米Note3", img_name: "img/category/note3.jpg", href: ""},
            		{title: "红米手机3", img_name: "img/category/hongmi3.jpg", href: ""},
            		{title: "小米平板2", img_name: "img/category/pad2.png", href: ""},
            		{title: "电信版", img_name: "img/category/telcom.jpg", href: ""},
            		{title: "合约机", img_name: "img/category/telcom.jpg", href: ""},
            		{title: "对比手机", img_name: "img/category/compare.jpg", href: ""}
            	],
            	datalist_3: [
            		{title: "小米移动电话卡", img_name: "img/category/mimobile.jpg", href: ""}
            	]
        	},
            {
            	title: "电视 盒子",
            	datalist: [
            		{title: "小米电视 40英寸", img_name: "img/category/tv40.jpg", href: ""},
            		{title: "小米电视 48英寸", img_name: "img/category/tv48.jpg", href: ""},
            		{title: "小米电视 49英寸", img_name: "img/category/tv49.jpg", href: ""},
            		{title: "小米电视 55英寸", img_name: "img/category/tv3-55.jpg", href: ""},
            		{title: "小米电视 60英寸", img_name: "img/category/tv60.jpg", href: ""},
            		{title: "小米盒子3", img_name: "img/category/hezis.jpg", href: ""}
            	]
        	},
            {
            	title: "路由器 智能硬件",
            	datalist: [
            		{title: "小米路由器", img_name: "img/category/luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "img/category/luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "img/category/luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "img/category/luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "img/category/luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "img/category/luyouqi-80.jpg", href: ""}
            	]
            },
            {
            	title: "移动电源 插线板",
            	datalist: [
            		{title: "小米移动电源", img_name: "img/category/dianyuan.jpg", href: ""},
            		{title: "小米移动电源", img_name: "img/category/dianyuan.jpg", href: ""},
            		{title: "小米移动电源", img_name: "img/category/dianyuan.jpg", href: ""}
            	]
            },
            {
            	title: "耳机 音箱",
            	datalist: [
            		{title: "小米头戴式耳机", img_name: "img/category/headphone.jpg", href: ""},
            	]
            },
            {
            	title: "电池 存储卡",
            	datalist: [
            		{title: "彩虹五号电池", img_name: "img/category/5Battery1.jpg", href: ""},
            	]
            },
            {
            	title: "保护套 后盖",
            	datalist: [
            		{title: "保护套保护壳", img_name: "img/category/baohu.jpg", href: ""},
            	]
        	},
            {
            	title: "贴膜 其他配件",
            	datalist: [
            		{title: "贴膜", img_name: "img/category/tiemo.jpg", href: ""},
            	]
            },
            {
            	title: "米兔 服装",
            	datalist: [
            		{title: "米兔", img_name: "img/category/mitu-80.jpg", href: ""},
            	]
            },
            {
            	title: "箱包 其他周边",
            	datalist: [
            		{title: "箱包", img_name: "img/category/xiangbao-80.jpg", href: ""},
            	]
            }
        ]
     }
});

var category_hot_list_display = new Vue({
    el: ".category_hot_list",
    data: {
        category_hot_list: [
            //{img_name: "hot1.jpg", href: "#"},
            {img_name: "img/hot2.jpg", href: "#"},
            {img_name: "img/hot3.jpg", href: "#"},
            {img_name: "img/hot4.jpg", href: "#"},
            {img_name: "img/hot5.jpg", href: "#"}
        ]
    }
});

//用阿里图标库再用vue写会报错 先注销
/*var channel_list_display = new Vue({
	el: ".channel_list",
	data: {
		channel_list: [
			{href: "#", icon: "&#xe665;", content: "电信专场"},
			{href: "#", icon: "&#xe65a;", content: "企业团购"},
			{href: "#", icon: "&#xe614;", content: "官翻产品"},
			{href: "#", icon: "&#xe618;", content: "小米移动"},
			{href: "#", icon: "&#xe671;", content: "以旧换新"},
			{href: "#", icon: "&#xf00a8;", content: "话费充值"}
		]
	}
});*/

var star_goods_display = new Vue({
    el: "#star_goods",
    data: {
        star_goods: [
            {color_id: "1", img_id: "img/star/star_1.jpg", title: "小米电视全系列", desc: "买就送爱奇艺会员卡", price: "1799元起"},
            {color_id: "2", img_id: "img/star/star_2.jpg", title: "小米盒子3 增强版", desc: "高端 4K 网络机顶盒", price: "399元"},
            {color_id: "3", img_id: "img/star/star_3.jpg", title: "小米手环 光感版", desc: "小米手环 光感版", price: "99元"},
            {color_id: "4", img_id: "img/star/star_4.jpg", title: "米家压力IH电饭煲", desc: "米家压力IH电饭煲", price: "999元"},
            {color_id: "5", img_id: "img/star/star_5.jpg", title: "移动电源10000mAh 高配版", desc: "支持USB Type-C充放电，双向快充", price: "149元"},
            {color_id: "1", img_id: "img/star/star_6.jpg", title: "Yeelight床头灯", desc: "触摸式操作，给卧室1600万种颜色", price: "249元"},
            {color_id: "2", img_id: "img/star/star_7.jpg", title: "小米路由器 mini", desc: "双频AC智能路由器，高性价比", price: "129元"},
            {color_id: "3", img_id: "img/star/star_8.jpg", title: "Yeelight LED智能灯泡 彩光版", desc: "1600万种色彩，手机远程遥控", price: "99元"},
            {color_id: "4", img_id: "img/star/star_9.jpg", title: "小米智能插座 基础版", desc: "手机远程遥控，让普通电器变智能", price: "49元"},
            {color_id: "5", img_id: "img/star/star_X.jpg", title: "小米活塞耳机 基础版", desc: "全金属音腔，5色可选", price: "29元"},
        ]
    }
});

var smart_list_display = new Vue({
    el: ".smart .block-list",
    data: {
        smart_list: [
            {href: "", img_src: "img/page-main/smart/hardware1.jpg", title: "米家压力IH电饭煲" , intro: "智能烹饪，5月24日早10点现货" , price: "999元", label: "new"},
            {href: "", img_src: "img/page-main/smart/hardware2.jpg", title: "小米路由器3" , intro: "更安全更稳定，现货发售" , price: "149元", label: "new"},
            {href: "", img_src: "img/page-main/smart/hardware3.jpg", title: "小米智能安防套装" , intro: "智能警戒，为您的家增添一份安心" , price: "169元", label: "saleoff", sale: "享9折"},
            {href: "", img_src: "img/page-main/smart/hardware4.jpg", title: "米兔儿童电话手表" , intro: "安全防走丢，宝贝的贴身护卫" , price: "299元", label: "new"},
            {href: "", img_src: "img/page-main/smart/hardware5.jpg", title: "九号平衡车" , intro: "年轻人的酷玩具，骑行遥控两种玩法" , price: "1999元"},
            {href: "", img_src: "img/page-main/smart/hardware6.jpg", title: "小蚁运动相机" , intro: "边玩边录边拍，手机随时分享" , price: "399元"},
            {href: "", img_src: "img/page-main/smart/hardware7.jpg", title: "小蚁智能摄像机 夜视版" , intro: "能看能听能说，手机远程观看" , price: "149元"},
            {href: "", img_src: "img/page-main/smart/hardware8.jpg", title: "米家iHealth血压计" , intro: "爸妈上手就会用的智能血压计" , price: "399元", label: "new"}
        ]
    }
});


var content_list_display = new Vue({
    el: ".content-list",
    data: {
        content_list: [
            {
                title: "图书",
                xm_class: "xm-pagers-1",
                item_first_class: "content-item-first",
                item_class: "content-item-book",
                cont_class: "item-list-1",
                xm_controls_class: "xm-carousel-controls",
                datalist: [
                    {name: "阿弥陀佛，么么哒", desc: "大冰新书，12个不舍得读完的、暖心的、真实的江湖故事！",price: "9.99元", img_src: "img/content/list1_1.jpg"},
                    {name: "特价专区", desc: "精选畅销好书，特价促销，天天更新，天天特价！",price: "限时优惠", img_src: "img/content/list1_2.jpg"},
                    {name: "杂志专区", desc: "纸媒杂志＋互联网杂志，你想看的这都有！",price: "同步新刊上线", img_src: "img/content/list1_3.jpg"},
                    {desc: "海量好书，享受精品阅读时光<br>漂亮的中文排版，千万读者选择！",price: "前往查看", img_src: "img/content/list1_4.jpg"}
                ]
            },
            {
                title: "MIUI 主题",
                xm_class: "xm-pagers-2",
                item_class: "content-item-theme",
                cont_class: "item-list-2",
                xm_controls_class: "xm-carouse2-controls",
                datalist: [
                    {name: "小米Max【深色版】", desc: "小米Max官方主题，专属的锁屏鲜花壁纸惊艳全场" , price: "免费", img_src: "img/content/list2_1.jpg"},
                    {name: "pai", desc: "全新界面设计，椭圆形图标风格，扁平化图标" , price: "免费", img_src: "img/content/list2_2.jpg"},
                    {name: "盐", desc: "不规则图标，搭配上静谧的壁纸，带给你不一样的心情" , price: "免费", img_src: "img/content/list2_3.jpg"},
                    {desc: "海量好书，享受精品阅读时光<br>漂亮的中文排版，千万读者选择！",price: "前往查看", img_src: "img/content/list1_4.jpg"}
                ]
            },
            {
                title: "游戏",
                xm_class: "xm-pagers-3",
                item_class: "content-item-game",
                cont_class: "item-list-3",
                xm_controls_class: "xm-carouse3-controls",
                datalist: [
                    {name: "魔法英雄", desc: "全球同服，几百万歪果仁等你来战！" , price: "免费", img_src: "img/content/list3_1.jpg"},
                    {name: "米柚手游模拟器", desc: "在电脑上玩遍小米所有手游" , price: "免费", img_src: "img/content/list3_2.jpg"},
                    {name: "COK列王的纷争", desc: "全球同服，跨国约战！全世界都是你的战场！" , price: "免费", img_src: "img/content/list3_3.jpg"},
                    {desc: "免费下载海量的手机游戏<br>天天都有现金福利赠送",price: "前往小米商店", img_src: "img/content/list3_4.jpg"}
                ]
            },
            {
                title: "应用",
                xm_class: "xm-pagers-4",
                item_class: "content-item-app",
                cont_class: "item-list-4",
                xm_controls_class: "xm-carouse4-controls",
                datalist: [
                    {name: "2015年度应用", desc: "2015年度应用" , price: "免费", img_src: "img/content/list4_1.jpg"},
                    {name: "2015年度游戏", desc: "2015年度游戏" , price: "免费", img_src: "img/content/list4_2.jpg"},
                    {name: "小米应用", desc: "小米出品 必属精品" , price: "免费", img_src: "img/content/list4_3.jpg"},
                    {desc: "帮助小米手机和其他安卓手机用户<br>发现好用的安卓应用",price: "前往小米应用商店", img_src: "img/content/list4_4.jpg"}
                ]
            }
        ]
    }
});

var main_page_list_display = new Vue({
    el: ".match-row-template",
    data: {
        main_page: {
            hot: [
                {href: "", img_src: "img/page-main/match/match1.jpg", title: "小米移动电源10000mAh", price: "79元", reviewed: "17万", review: "这个小巧玲珑啊，比10400安的小了好多，感觉不错，...",author: "LIN翼"},
                {href: "", img_src: "img/page-main/match/match2.jpg", title: "小米活塞耳机 基础版", price: "29元", reviewed: "2.2万", review: "价钱优惠，音质好。值得推荐",author: "1006768313"},
                {href: "", img_src: "img/page-main/match/match3.jpg", title: "小米移动电源10000mAh 高配版", price: "149元", reviewed: "8210", review: "手感超舒服，有USB C输入充电，以后不用到处换插头了", author: "玻璃樽81"},
                {href: "", img_src: "img/page-main/match/match4.jpg", title: "小米蓝牙耳机", price: "79元", reviewed: "7.4万", review: "小米的产品值得信赖，用了一段时间，无论是听歌，打电话...",author: "气功流"},
                {href: "", img_src: "img/page-main/match/match5.jpg", title: "小米插线板", price: "49元", reviewed: "22.1万", review: "东西真心不错，用过最好用的插线板，做工外观没得挑剔，...",author: "yinyin19891117"},
                {href: "", img_src: "img/page-main/match/match6.jpg", title: "小米圈铁耳机", price: "99元", reviewed: "3.4万", review: "客服妹子实话说吧！永远支持国产，永远支持小米。这圈铁...",author: "894039435"},
                {href: "", img_src: "img/page-main/match/match7.jpg", title: "小米小钢炮蓝牙音箱2", price: "129元", label: "new", reviewed: "5505", review: "很精致，小巧可爱，连接成功是女声说话提示。音质很纯很...",author: "Cc大坏"},
                {href: "", img_src: "img/page-main/match/match8.jpg", title: "小米蓝牙音箱 蓝色"  , price: "199元", reviewed: "1.5万", review: "还可以插内存卡，可以插线播放，音质很棒，如果体积大点...",author: "422979039"},
            ],
            speaker: [
                {href: "", img_src: "img/page-main/match/match6.jpg", title: "小米圈铁耳机", price: "99元"},
                {href: "", img_src: "img/page-main/match/match4.jpg", title: "小米蓝牙耳机", price: "79元"},
                {href: "", img_src: "img/page-main/match/match9.jpg", title: "1MORE金澈耳机", price: "99元"},
                {href: "", img_src: "img/page-main/match/match10.jpg", title: "铁三角J100耳机", price: "79元"},
                {href: "", img_src: "img/page-main/match/match7.jpg", title: "小米小钢炮蓝牙音箱2", price: "129元"},
                {href: "", img_src: "img/page-main/match/match11.jpg", title: "小米方盒子蓝牙音箱", price: "99元"},
                {href: "", img_src: "img/page-main/match/match12.jpg", title: "小米小钢炮蓝牙音箱 青春版", price: "99元", label: "new"},
                {href: "", img_src: "img/page-main/match/match13.jpg", title: "睿米车载蓝牙播放器", price: "69元"},
            ],
            battery: [],
            memcard: []
        }
    }
});
