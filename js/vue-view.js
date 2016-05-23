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
		nav_template: [
			{id: 1, catalog: "mi_phone"},
			{id: 2, catalog: "red_mi"},
			{id: 3, catalog: "mi_pad"},
			{id: 4, catalog: "mi_tv"},
			{id: 5, catalog: "mi_tv_box"},
			{id: 6, catalog: "mi_router"},
			{id: 7, catalog: "mi_smart_hardware"},
		]
	}
});

var nav_item_mi_phone_display = new Vue({
    el: "#nav_item_list_1",
	data: {
		mi_phone: [
			{title: "小米Max", price: "1499元起", img_name: "/nav_item/mi_phone/miMax.jpg", href: ""},
			{title: "小米手机5", price: "1999元起", img_name: "/nav_item/mi_phone/mi5.jpg", href: ""},
			{title: "小米手机4S", price: "1699元", img_name: "/nav_item/mi_phone/mi4s.jpg", href: ""},
			{title: "小米手机4c", price: "1099元", img_name: "/nav_item/mi_phone/mi4c.jpg", href: ""},
			{title: "小米手机4", price: "1299元", img_name: "/nav_item/mi_phone/mi4.jpg", href: ""},
			{title: "小米Note 标准版", price: "1499元起", img_name: "/nav_item/mi_phone/minote.jpg", href: ""}
		],
	}
});

var nav_item_red_mi_display = new Vue({
    el: "#nav_item_list_2",
	data: {
		red_mi: [
			{title: "红米Note 3", price: "899元起", img_name: "/nav_item/red_mi/redmi3.jpg", href: ""},
			{title: "红米手机3", price: "699元起", img_name: "/nav_item/red_mi/redminote3.jpg", href: ""}
		],
	}
});

var nav_item_mi_pad_display = new Vue({
    el: "#nav_item_list_3",
	data: {
		mi_pad: [
			{title: "小米平板2 16GB", price: "899元起", img_name: "/nav_item/mi_pad/mi_pad_2_16.jpg", href: ""},
			{title: "小米平板2 64GB", price: "699元起", img_name: "/nav_item/mi_pad/mi_pad_2_64.jpg", href: ""},
			{title: "小米平板2  64GB Windows版", price: "699元起", img_name: "/nav_item/mi_pad/mi_pad_2_64_win.jpg", href: ""}
		],
	}
});

var nav_item_mi_tv_display = new Vue({
    el: "#nav_item_list_4",
	data: {
		mi_tv: [
			{title: "小米电视3S 43英寸", price: "1799元", img_name: "/nav_item/mi_tv/mitv3s_43.jpg", href: ""},
			{title: "小米电视3S 48英寸", price: "1999元", img_name: "/nav_item/mi_tv/mitv3s_48.jpg", href: ""},
			{title: "小米电视3 55英寸", price: "3999元起", img_name: "/nav_item/mi_tv/mitv3_55.jpg", href: ""},
			{title: "小米电视3 60英寸", price: "4999元起", img_name: "/nav_item/mi_tv/mitv3_65.jpg", href: ""},
			{title: "小米电视3S 65英寸 曲面", price: "8999元", img_name: "/nav_item/mi_tv/mitv3s_65c.jpg", href: ""},
			{title: "小米电视3 70英寸", price: "9999元", img_name: "/nav_item/mi_tv/mitv3_70.jpg", href: ""}
		],
	}
});

var nav_item_mi_tv_box_display = new Vue({
    el: "#nav_item_list_5",
	data: {
		mi_tv_box: [
			{title: "小米盒子mini版", price: "199元", img_name: "/nav_item/mi_tv_box/box_mini.jpg", href: ""},
			{title: "小米盒子3", price: "299元", img_name: "/nav_item/mi_tv_box/box_3.jpg", href: ""},
			{title: "小米盒子3 增强版", price: "399元", img_name: "/nav_item/mi_tv_box/box_3s.jpg", href: ""},
			{title: "小米电视主机", price: "999元", img_name: "/nav_item/mi_tv_box/tv_console.jpg", href: ""},
			{title: "小米家庭音响 金属版", price: "899元", img_name: "/nav_item/mi_tv_box/seaker_std.jpg", href: ""},
			{title: "小米家庭音响 标准版", price: "699元", img_name: "/nav_item/mi_tv_box/speaker_pro.jpg", href: ""}
		],
	}
});

var nav_item_mi_router_display = new Vue({
    el: "#nav_item_list_6",
	data: {
		mi_router: [
			{title: "全新小米路由器", price: "699元起", img_name: "/nav_item/mi_router/new_router.jpg", href: ""},
			{title: "小米路由器 3", price: "149元", img_name: "/nav_item/mi_router/router3.jpg", href: ""},
			{title: "小米路由器 mini", price: "129元", img_name: "/nav_item/mi_router/router_mini.jpg", href: ""},
			{title: "小米路由器 青春版", price: "79元", img_name: "/nav_item/mi_router/router_seishun.jpg", href: ""},
			{title: "小米WiFi放大器", price: "39元", img_name: "/nav_item/mi_router/wifi_amp.jpg", href: ""}
		],
	}
});

var nav_item_mi_smart_hardware_display = new Vue({
    el: "#nav_item_list_7",
	data: {
		mi_smart_hardware: [
			{title: "米家压力IH电饭煲", price: "999元", img_name: "/nav_item/mi_smart_hardware/cooker.jpg", href: ""},
			{title: "九号平衡车", price: "1999元", img_name: "/nav_item/mi_smart_hardware/balance_car.jpg", href: ""},
			{title: "小米空气净化器 2", price: "699元", img_name: "/nav_item/mi_smart_hardware/cleaner.jpg", href: ""},
			{title: "体重秤", price: "99元", img_name: "/nav_item/mi_smart_hardware/weight.jpg", href: ""},
			{title: "摄像机", price: "149元", img_name: "/nav_item/mi_smart_hardware/camera.jpg", href: ""},
			{title: "查看全部 智能硬件", price: "", img_name: "/nav_item/mi_smart_hardware/see_all.jpg", href: ""}
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
            {
            	title: "手机 平板 电话卡",
            	datalist: [
            		{title: "小米手机5", img_name: "mi5.jpg", href: ""},
					{title: "小米手机4S", img_name: "mi4.jpg", href: ""},
					{title: "小米手机MAX", img_name: "mimax.jpg", href: ""},
					{title: "红米Note2", img_name: "note2.jpg", href: ""},
					{title: "小米手机4", img_name: "mi4.jpg", href: ""},
					{title: "小米手机4C", img_name: "mi4c.jpg", href: ""}
            	],
            	datalist_2: [
            		{title: "红米Note3", img_name: "note3.jpg", href: ""},
            		{title: "红米手机3", img_name: "hongmi3.jpg", href: ""},
            		{title: "小米平板2", img_name: "pad2.png", href: ""},
            		{title: "电信版", img_name: "telcom.jpg", href: ""},
            		{title: "合约机", img_name: "telcom.jpg", href: ""},
            		{title: "对比手机", img_name: "compare.jpg", href: ""}
            	],
            	datalist_3: [
            		{title: "小米移动电话卡", img_name: "mimobile.jpg", href: ""}
            	]
        	},
            {
            	title: "电视 盒子",
            	datalist: [
            		{title: "小米电视 40英寸", img_name: "tv40.jpg", href: ""},
            		{title: "小米电视 48英寸", img_name: "tv48.jpg", href: ""},
            		{title: "小米电视 49英寸", img_name: "tv49.jpg", href: ""},
            		{title: "小米电视 55英寸", img_name: "tv3-55.jpg", href: ""},
            		{title: "小米电视 60英寸", img_name: "tv60.jpg", href: ""},
            		{title: "小米盒子3", img_name: "hezis.jpg", href: ""}
            	]
        	},
            {
            	title: "路由器 智能硬件",
            	datalist: [
            		{title: "小米路由器", img_name: "luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "luyouqi-80.jpg", href: ""},
            		{title: "小米路由器", img_name: "luyouqi-80.jpg", href: ""}
            	]
            },
            {
            	title: "移动电源 插线板",
            	datalist: [
            		{title: "小米移动电源", img_name: "dianyuan.jpg", href: ""},
            		{title: "小米移动电源", img_name: "dianyuan.jpg", href: ""},
            		{title: "小米移动电源", img_name: "dianyuan.jpg", href: ""}		
            	]
            },
            {
            	title: "耳机 音箱",
            	datalist: [
            		{title: "小米头戴式耳机", img_name: "headphone.jpg", href: ""},
            	]
            },
            {
            	title: "电池 存储卡",
            	datalist: [
            		{title: "彩虹五号电池", img_name: "5Battery1.jpg", href: ""},
            	]
            },
            {
            	title: "保护套 后盖",
            	datalist: [
            		{title: "保护套保护壳", img_name: "baohu.jpg", href: ""},
            	]
        	},
            {
            	title: "贴膜 其他配件",
            	datalist: [
            		{title: "贴膜", img_name: "tiemo.jpg", href: ""},
            	]
            },
            {
            	title: "米兔 服装",
            	datalist: [
            		{title: "米兔", img_name: "mitu-80.jpg", href: ""},
            	]
            },
            {
            	title: "箱包 其他周边",
            	datalist: [
            		{title: "箱包", img_name: "xiangbao-80.jpg", href: ""},
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
            {img_name: "hot2.jpg", href: "#"},
            {img_name: "hot3.jpg", href: "#"},
            {img_name: "hot4.jpg", href: "#"},
            {img_name: "hot5.jpg", href: "#"}
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
            {color_id: "1", img_id: "1", title: "小米电视全系列", desc: "买就送爱奇艺会员卡", price: "1799元起"},
            {color_id: "2", img_id: "2", title: "小米盒子3 增强版", desc: "高端 4K 网络机顶盒", price: "399元"},
            {color_id: "3", img_id: "3", title: "小米手环 光感版", desc: "小米手环 光感版", price: "99元"},
            {color_id: "4", img_id: "4", title: "米家压力IH电饭煲", desc: "米家压力IH电饭煲", price: "999元"},
            {color_id: "5", img_id: "5", title: "移动电源10000mAh 高配版", desc: "支持USB Type-C充放电，双向快充", price: "149元"},
            {color_id: "1", img_id: "6", title: "Yeelight床头灯", desc: "触摸式操作，给卧室1600万种颜色", price: "249元"},
            {color_id: "2", img_id: "7", title: "小米路由器 mini", desc: "双频AC智能路由器，高性价比", price: "129元"},
            {color_id: "3", img_id: "8", title: "Yeelight LED智能灯泡 彩光版", desc: "1600万种色彩，手机远程遥控", price: "99元"},
            {color_id: "4", img_id: "9", title: "小米智能插座 基础版", desc: "手机远程遥控，让普通电器变智能", price: "49元"},
            {color_id: "5", img_id: "X", title: "小米活塞耳机 基础版", desc: "全金属音腔，5色可选", price: "29元"},
        ]
    }
});

var brick_list_display = new Vue({
    el: ".brick-list",
    data: {
        brick_list: [
            {href: "", img_src: "img/hardware/hardware1.jpg", title: "米家压力IH电饭煲" , intro: "智能烹饪，5月24日早10点现货" , price: "999元", label: "new"},
            {href: "", img_src: "img/hardware/hardware2.jpg", title: "小米路由器3" , intro: "更安全更稳定，现货发售" , price: "149元", label: "new"},
            {href: "", img_src: "img/hardware/hardware3.jpg", title: "小米智能安防套装" , intro: "智能警戒，为您的家增添一份安心" , price: "169元"},
            {href: "", img_src: "img/hardware/hardware4.jpg", title: "米兔儿童电话手表" , intro: "安全防走丢，宝贝的贴身护卫" , price: "299元", label: "new"},
            {href: "", img_src: "img/hardware/hardware5.jpg", title: "九号平衡车" , intro: "年轻人的酷玩具，骑行遥控两种玩法" , price: "1999元"},
            {href: "", img_src: "img/hardware/hardware6.jpg", title: "小蚁运动相机" , intro: "边玩边录边拍，手机随时分享" , price: "399元"},
            {href: "", img_src: "img/hardware/hardware7.jpg", title: "小蚁智能摄像机 夜视版" , intro: "能看能听能说，手机远程观看" , price: "149元"},
            {href: "", img_src: "img/hardware/hardware8.jpg", title: "米家iHealth血压计" , intro: "爸妈上手就会用的智能血压计" , price: "399元", label: "new"}
        ]
    }
});