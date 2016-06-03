Vue.config.debug = true;

var header_links_inline_display = new Vue({
  el: "#header .leftArea",
  data: {
    header_links_inline:
    [
      {href: "#", title: "小米网"},
      {href: "#", title: "MIUI"},
      {href: "#", title: "米聊"},
      {href: "#", title: "游戏"},
      {href: "#", title: "多看阅读"},
      {href: "#", title: "云服务"},
      {href: "#", title: "小米网移动版"},
      {href: "#", title: "问题反馈"},
      {href: "#", title: "Select Region"},
    ]
  }
});

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
                {title: "小米Max", price: "1499元起", img_src: "img/nav_item/mi_phone/miMax.jpg", href: ""},
                {title: "小米手机5", price: "1999元起", img_src: "img/nav_item/mi_phone/mi5.jpg", href: ""},
                {title: "小米手机4S", price: "1699元", img_src: "img/nav_item/mi_phone/mi4s.jpg", href: ""},
                {title: "小米手机4c", price: "1099元", img_src: "img/nav_item/mi_phone/mi4c.jpg", href: ""},
                {title: "小米手机4", price: "1299元", img_src: "img/nav_item/mi_phone/mi4.jpg", href: ""},
                {title: "小米Note 标准版", price: "1499元起", img_src: "img/nav_item/mi_phone/minote.jpg", href: ""}
            ],
            2: [
                {title: "红米Note 3", price: "899元起", img_src: "img/nav_item/red_mi/redmi3.jpg", href: ""},
                {title: "红米手机3", price: "699元起", img_src: "img/nav_item/red_mi/redminote3.jpg", href: ""}
            ],
            3: [
                {title: "小米平板2 16GB", price: "899元起", img_src: "img/nav_item/mi_pad/mi_pad_2_16.jpg", href: ""},
                {title: "小米平板2 64GB", price: "699元起", img_src: "img/nav_item/mi_pad/mi_pad_2_64.jpg", href: ""},
                {title: "小米平板2  64GB Windows版", price: "699元起", img_src: "img/nav_item/mi_pad/mi_pad_2_64_win.jpg", href: ""}
            ],
            4: [
                {title: "小米电视3S 43英寸", price: "1799元", img_src: "img/nav_item/mi_tv/mitv3s_43.jpg", href: ""},
                {title: "小米电视3S 48英寸", price: "1999元", img_src: "img/nav_item/mi_tv/mitv3s_48.jpg", href: ""},
                {title: "小米电视3 55英寸", price: "3999元起", img_src: "img/nav_item/mi_tv/mitv3_55.jpg", href: ""},
                {title: "小米电视3 60英寸", price: "4999元起", img_src: "img/nav_item/mi_tv/mitv3_65.jpg", href: ""},
                {title: "小米电视3S 65英寸 曲面", price: "8999元", img_src: "img/nav_item/mi_tv/mitv3s_65c.jpg", href: ""},
                {title: "小米电视3 70英寸", price: "9999元", img_src: "img/nav_item/mi_tv/mitv3_70.jpg", href: ""}
            ],
            5: [
                {title: "小米盒子mini版", price: "199元", img_src: "img/nav_item/mi_tv_box/box_mini.jpg", href: ""},
                {title: "小米盒子3", price: "299元", img_src: "img/nav_item/mi_tv_box/box_3.jpg", href: ""},
                {title: "小米盒子3 增强版", price: "399元", img_src: "img/nav_item/mi_tv_box/box_3s.jpg", href: ""},
                {title: "小米电视主机", price: "999元", img_src: "img/nav_item/mi_tv_box/tv_console.jpg", href: ""},
                {title: "小米家庭音响 金属版", price: "899元", img_src: "img/nav_item/mi_tv_box/seaker_std.jpg", href: ""},
                {title: "小米家庭音响 标准版", price: "699元", img_src: "img/nav_item/mi_tv_box/speaker_pro.jpg", href: ""}
            ],
            6: [
                {title: "全新小米路由器", price: "699元起", img_src: "img/nav_item/mi_router/new_router.jpg", href: ""},
                {title: "小米路由器 3", price: "149元", img_src: "img/nav_item/mi_router/router3.jpg", href: ""},
                {title: "小米路由器 mini", price: "129元", img_src: "img/nav_item/mi_router/router_mini.jpg", href: ""},
                {title: "小米路由器 青春版", price: "79元", img_src: "img/nav_item/mi_router/router_seishun.jpg", href: ""},
                {title: "小米WiFi放大器", price: "39元", img_src: "img/nav_item/mi_router/wifi_amp.jpg", href: ""}
            ],
            7: [
                {title: "米家压力IH电饭煲", price: "999元", img_src: "img/nav_item/mi_smart_hardware/cooker.jpg", href: ""},
                {title: "九号平衡车", price: "1999元", img_src: "img/nav_item/mi_smart_hardware/balance_car.jpg", href: ""},
                {title: "小米空气净化器 2", price: "699元", img_src: "img/nav_item/mi_smart_hardware/cleaner.jpg", href: ""},
                {title: "体重秤", price: "99元", img_src: "img/nav_item/mi_smart_hardware/weight.jpg", href: ""},
                {title: "摄像机", price: "149元", img_src: "img/nav_item/mi_smart_hardware/camera.jpg", href: ""},
                {title: "查看全部<br>智能硬件", price: "", img_src: "img/nav_item/mi_smart_hardware/see_all.jpg", href: ""}
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
                    {title: "小米手机5", img_src: "img/category/mi5.jpg", href: ""},
                    {title: "小米手机4S", img_src: "img/category/mi4.jpg", href: ""},
                    {title: "小米手机MAX", img_src: "img/category/mimax.jpg", href: ""},
                    {title: "红米Note2", img_src: "img/category/note2.jpg", href: ""},
                    {title: "小米手机4", img_src: "img/category/mi4.jpg", href: ""},
                    {title: "小米手机4C", img_src: "img/category/mi4c.jpg", href: ""}
                ],
                datalist_2: [
                    {title: "红米Note3", img_src: "img/category/note3.jpg", href: ""},
                    {title: "红米手机3", img_src: "img/category/hongmi3.jpg", href: ""},
                    {title: "小米平板2", img_src: "img/category/pad2.png", href: ""},
                    {title: "电信版", img_src: "img/category/telcom.jpg", href: ""},
                    {title: "合约机", img_src: "img/category/telcom.jpg", href: ""},
                    {title: "对比手机", img_src: "img/category/compare.jpg", href: ""}
                ],
                datalist_3: [
                    {title: "小米移动电话卡", img_src: "img/category/mimobile.jpg", href: ""}
                ]
            },
            {
                title: "电视 盒子",
                datalist: [
                    {title: "小米电视 40英寸", img_src: "img/category/tv40.jpg", href: ""},
                    {title: "小米电视 48英寸", img_src: "img/category/tv48.jpg", href: ""},
                    {title: "小米电视 49英寸", img_src: "img/category/tv49.jpg", href: ""},
                    {title: "小米电视 55英寸", img_src: "img/category/tv3-55.jpg", href: ""},
                    {title: "小米电视 60英寸", img_src: "img/category/tv60.jpg", href: ""},
                    {title: "小米盒子3", img_src: "img/category/hezis.jpg", href: ""}
                ]
            },
            {
                title: "路由器 智能硬件",
                datalist: [
                    {title: "小米路由器", img_src: "img/category/luyouqi-80.jpg", href: ""},
                    {title: "小米路由器", img_src: "img/category/luyouqi-80.jpg", href: ""},
                    {title: "小米路由器", img_src: "img/category/luyouqi-80.jpg", href: ""},
                    {title: "小米路由器", img_src: "img/category/luyouqi-80.jpg", href: ""},
                    {title: "小米路由器", img_src: "img/category/luyouqi-80.jpg", href: ""},
                    {title: "小米路由器", img_src: "img/category/luyouqi-80.jpg", href: ""}
                ]
            },
            {
                title: "移动电源 插线板",
                datalist: [
                    {title: "小米移动电源", img_src: "img/category/dianyuan.jpg", href: ""},
                    {title: "小米插线板", img_src: "img/category/powerscript.jpg", href: ""},
                    {title: "品牌移动电源", img_src: "img/category/yidongdianyuan.jpg", href: ""},
                {title: "移动电源附件", img_src: "img/category/dianyuanfujian.jpg", href: ""}
                ]
            },
            {
                title: "耳机 音箱",
                datalist: [
                    {title: "小米头戴式耳机", img_src: "img/category/headphone.jpg", href: ""},
                ]
            },
            {
                title: "电池 存储卡",
                datalist: [
                    {title: "彩虹五号电池", img_src: "img/category/5Battery1.jpg", href: ""},
                {title: "彩虹七号电池", img_src: "img/category/7Battery1.jpg", href: ""},
                {title: "电池", img_src: "img/category/dianchi.jpg", href: ""},
                {title: "充电器", img_src: "img/category/chongdianqi-80.jpg", href: ""},
                {title: "线材", img_src: "img/category/xiancai.jpg", href: ""},
                {title: "存储卡", img_src: "img/category/cunchu.jpg", href: ""},
                ]
            },
            {
                title: "保护套 后盖",
                datalist: [
                    {title: "保护套保护壳", img_src: "img/category/baohu.jpg", href: ""},
                {title: "后盖", img_src: "img/category/hougai.jpg", href: ""},
                ]
            },
            {
                title: "贴膜 其他配件",
                datalist: [
                    {title: "贴膜", img_src: "img/category/tiemo.jpg", href: ""},
                {title: "自拍杆", img_src: "img/category/zipaigan.jpg", href: ""},
                {title: "贴纸", img_src: "img/category/tizhi.jpg", href: ""},
                {title: "防尘塞", img_src: "img/category/fangchensai.jpg", href: ""},
                {title: "手机支架", img_src: "img/category/zhijia.jpg", href: ""},
                {title: "随身wifi", img_src: "img/category/wifi.jpg", href: ""},
                ]
            },
            {
                title: "米兔 服装",
                datalist: [
                    {title: "米兔", img_src: "img/category/mitu-80.jpg", href: ""},
                    {title: "服装", img_src: "img/category/fuzhuang-80.jpg", href: ""},

                ]
            },
            {
                title: "箱包 其他周边",
                datalist: [
                    {title: "箱包", img_src: "img/category/xiangbao-80.jpg", href: ""},
                    {title: "90分旅行箱", img_src: "img/category/lvxingxiang.jpg", href: ""},
                    {title: "小米鼠标垫", img_src: "img/category/shubiaodian-80.jpg", href: ""},
                    {title: "生活周边", img_src: "img/category/zhoubian1.jpg", href: ""},
                ]
            }
        ]
     }
});

var category_hot_list_display = new Vue({
    el: ".category_hot_list",
    data: {
        category_hot_list: [
            {img_src: "img/hot/hot1.jpg", href: "#"},
            {img_src: "img/hot/hot2.jpg", href: "#"},
            {img_src: "img/hot/hot3.jpg", href: "#"},
            {img_src: "img/hot/hot4.jpg", href: "#"},
            {img_src: "img/hot/hot5.jpg", href: "#"}
        ]
    }
});

var channel_list_display = new Vue({
    el: ".channel_list",
    data: {
        channel_list: [
            {href: "#", icon: "", content: "电信专场"},
            {href: "#", icon: "", content: "企业团购"},
            {href: "#", icon: "", content: "官翻产品"},
            {href: "#", icon: "", content: "小米移动"},
            {href: "#", icon: "", content: "以旧换新"},
            {href: "#", icon: "", content: "话费充值"}
        ]
    }
});

var star_goods_display = new Vue({
    el: "#star_goods",
    data: {
        star_goods: [
            {color_id: "1", img_src: "img/star/star_1.jpg", title: "小米电视全系列", desc: "买就送爱奇艺会员卡", price: "1799元起"},
            {color_id: "2", img_src: "img/star/star_2.jpg", title: "小米盒子3 增强版", desc: "高端 4K 网络机顶盒", price: "399元"},
            {color_id: "3", img_src: "img/star/star_3.jpg", title: "小米手环 光感版", desc: "小米手环 光感版", price: "99元"},
            {color_id: "4", img_src: "img/star/star_4.jpg", title: "米家压力IH电饭煲", desc: "米家压力IH电饭煲", price: "999元"},
            {color_id: "5", img_src: "img/star/star_5.jpg", title: "移动电源10000mAh 高配版", desc: "支持USB Type-C充放电，双向快充", price: "149元"},
            {color_id: "1", img_src: "img/star/star_6.jpg", title: "Yeelight床头灯", desc: "触摸式操作，给卧室1600万种颜色", price: "249元"},
            {color_id: "2", img_src: "img/star/star_7.jpg", title: "小米路由器 mini", desc: "双频AC智能路由器，高性价比", price: "129元"},
            {color_id: "3", img_src: "img/star/star_8.jpg", title: "Yeelight LED智能灯泡 彩光版", desc: "1600万种色彩，手机远程遥控", price: "99元"},
            {color_id: "4", img_src: "img/star/star_9.jpg", title: "小米智能插座 基础版", desc: "手机远程遥控，让普通电器变智能", price: "49元"},
            {color_id: "5", img_src: "img/star/star_X.jpg", title: "小米活塞耳机 基础版", desc: "全金属音腔，5色可选", price: "29元"},
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
            {href: "", img_src: "img/page-main/smart/hardware6.jpg", title: "小蚁运动相机" , intro: "边玩边录边拍，手机随时分享" , price: "399元", label: "postfree", post: "包邮"},
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
                    {name: "魔法英雄", desc: "全球同服，几百万歪果仁等你来战！" , price: "免费", img_src: "img/content/list3_1.png"},
                    {name: "米柚手游模拟器", desc: "在电脑上玩遍小米所有手游" , price: "免费", img_src: "img/content/list3_2.png"},
                    {name: "COK列王的纷争", desc: "全球同服，跨国约战！全世界都是你的战场！" , price: "免费", img_src: "img/content/list3_3.png"},
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
                    {name: "2015年度应用", desc: "2015年度应用" , price: "免费", img_src: "img/content/list4_1.png"},
                    {name: "2015年度游戏", desc: "2015年度游戏" , price: "免费", img_src: "img/content/list4_2.png"},
                    {name: "小米应用", desc: "小米出品 必属精品" , price: "免费", img_src: "img/content/list4_3.png"},
                    {desc: "帮助小米手机和其他安卓手机用户<br>发现好用的安卓应用",price: "前往小米应用商店", img_src: "img/content/list4_4.jpg"}
                ]
            }
        ]
    }
});

var main_page_match_list_display = new Vue({
    el: ".match-row-template",
    data: {
        main_page_match: {
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
                {href: "", img_src: "img/page-main/match/match6.jpg", title: "小米圈铁耳机", price: "99元", reviewed: "3.4万", review: "客服妹子实话说吧！永远支持国产，永远支持小米。这圈铁...", author: "894039435"},
                {href: "", img_src: "img/page-main/match/match4.jpg", title: "小米蓝牙耳机", price: "79元", reviewed: "7.4万", review: "小米的产品值得信赖，用了一段时间，无论是听歌，打电话...", author: "气功流"},
                {href: "", img_src: "img/page-main/match/match9.jpg", title: "1MORE金澈耳机", price: "99元", label: "new", reviewed: "6469", review: "一般在网上买的电子产品我是不会评价的，但是小米的售后...", author: "872683230"},
                {href: "", img_src: "img/page-main/match/match10.jpg", title: "铁三角J100耳机", price: "79元", reviewed: "5392", review: "十分不错的东西效果十分的好", author: "binbin521214"},
                {href: "", img_src: "img/page-main/match/match7.jpg", title: "小米小钢炮蓝牙音箱2", price: "129元", reviewed: "5115", review: "物流超快，包装一打开，我就闻到了一缕口红的清香，陶醉...", author: "588262758"},
                {href: "", img_src: "img/page-main/match/match11.jpg", title: "小米方盒子蓝牙音箱", price: "99元", reviewed: "1.3万", review: "音质真棒！比我带低音炮的笔记本放音乐音质还好!哈哈！...", author: "Homic"},
                {href: "", img_src: "img/page-main/match/match12.jpg", title: "小米小钢炮蓝牙音箱 青春版", price: "99元", label: "new", reviewed: "288", review: "外观、音质都很不错，小米任何产品都很赞！", author: "guanghui775"},
                {href: "", img_src: "img/page-main/match/match13.jpg", title: "睿米车载蓝牙播放器", price: "69元", reviewed: "", review: "", author: ""},
            ],
            battery: [
                {href: "", img_src: "img/page-main/match/match14.jpg", title: "移动电源5000mAh", price: "49元", reviewed: "8.2万", review: "之前都不知道，还以为是18650电芯的。拿到手一看这...", author: "ywtdzh"},
                {href: "", img_src: "img/page-main/match/match15.jpg", title: "移动电源10000mAh", price: "69元", reviewed: "17万", review: "这个小巧玲珑啊，比10400安的小了好多，感觉不错，...", author: "LIN翼"},
                {href: "", img_src: "img/page-main/match/match16.jpg", title: "移动电源10000mAh 高配版", price: "149元", reviewed: "8317", review: "很薄，充电快，方便携带", author: "CURGT丶FaKer"},
                {href: "", img_src: "img/page-main/match/match17.jpg", title: "移动电源20000mAh", price: "149元", reviewed: "3.1万", review: "以前一直使用10400的版本，买了这个之后，才知道有...", author: "呈现逐步"},
                {href: "", img_src: "img/page-main/match/match18.jpg", title: "ZMI智能移动电源 10000mAh", price: "129元", reviewed: "681", review: "不错，款式新颖，手感好，质量好", author: "我带进去"},
                {href: "", img_src: "img/page-main/match/match19.jpg", title: "小米插线板（3孔位+USB）", price: "49元", reviewed: "22.2万", review: "东西真心不错，用过最好用的插线板，做工外观没得挑剔，...", author: "yinyin19891117"},
                {href: "", img_src: "img/page-main/match/match20.jpg", title: "小米智能插线板", price: "69元", reviewed: "3544", review: "外观漂亮，质量可靠，价格也不贵，总体来说还是值", author: "392845989"},
                {href: "", img_src: "img/page-main/match/match21.jpg", title: "小米插线板 5孔位", price: "39元", reviewed: "", review: "", author: ""},
            ],
            memcard: [
                {href: "", img_src: "img/page-main/match/match22.jpg", title: "SanDisk 8GB存储卡", price: "17.9元", reviewed: "30.9万", review: "挺好的 用着呢，在这上面买东西好像不需要担心什么", author: "米粉_阿达",label: "saleoff",sale: "享8折"},
                {href: "", img_src: "img/page-main/match/match23.jpg", title: "紫5镍氢充电电池", price: "49元", reviewed: "535", review: "电池买回来给孩子的玩具使用的，总体感觉不错。感谢。", author: "CPU"},
                {href: "", img_src: "img/page-main/match/match24.jpg", title: "彩虹5号电池（10粒装）", price: "9.9元", reviewed: "5.1万", review: "价格实惠，外观好看，还有盒子便于保管，不错。", author: "monkeyshine"},
                {href: "", img_src: "img/page-main/match/match25.jpg", title: "彩虹7号电池（10粒装）", price: "9.9元", reviewed: "2.5万", review: "好用，好看。。价格实惠", author: "米米徳"},
                {href: "", img_src: "img/page-main/match/match26.jpg", title: "CR2032纽扣电池", price: "9元", reviewed: "1.1万", review: "商城就可以买到，不用特意出去找了，很方便", author: "892726356"},
                {href: "", img_src: "img/page-main/match/match27.jpg", title: "小米USB充电器（4口）", price: "69元", reviewed: "2428", review: "很敦实，一个孔充电速度很快，四个孔还没试", author: "小小杏鲍菇"},
                {href: "", img_src: "img/page-main/match/match28.jpg", title: "小米车载充电器", price: "49元", reviewed: "1.8万", review: "挺好，挺有质感，充电也快，非常满意", author: "975550705"},
                {href: "", img_src: "img/page-main/match/match29.jpg", title: "红米2/红米2A能量套装", price: "69元", reviewed: "", review: "", author: ""},
            ]
        }
    }
});

var main_page_accessories_list_display = new Vue({
    el: ".accessories-row-template",
    data: {
        main_page_accessories: {
            hot: [
                {href: "", img_src: "img/page-main/accessories/accessories1.jpg", title: "小米随身WIFI", price: "19.9元", reviewed: "29.4万", review: "很不错，用起来很方便，走到哪儿用到哪儿，节省了好多流...", author: "朔之故里"},
                {href: "", img_src: "img/page-main/accessories/accessories2.jpg", title: "多彩便携USB线 120cm", price: "19元", reviewed: "6.5万", review: "拿到数据线，打开包装一看，惊奇地发现，原来这面条线是...", author: "末忆▽"},
                {href: "", img_src: "img/page-main/accessories/accessories3.jpg", title: "小米自拍杆", price: "49元", reviewed: "6.7万", review: "自拍神器，买了两个了，上个是在小米之家买的，可惜两个...", author: "ㄣ蛐蛐",label: "saleoff",sale: "享8折"},
                {href: "", img_src: "img/page-main/accessories/accessories4.jpg", title: "青米USB快速充电数据线", price: "14.9元", reviewed: "9407", review: "可以呦，充电很快的咯", author: "朕丨与子偕老"},
                {href: "", img_src: "img/page-main/accessories/accessories5.jpg", title: "苹果Lightning to USB数据线", price: "39元", reviewed: "9738", review: "用过觉得好又来买了，价廉物美。", author: "淡淡玫瑰香"},
                {href: "", img_src: "img/page-main/accessories/accessories6.jpg", title: "功夫米兔手机支架", price: "19元", reviewed: "1.7万", review: "放手机平板都没有问题，最棒的是竖着放也很稳。不放手机...", author: "米狼CK"},
                {href: "", img_src: "img/page-main/accessories/accessories7.jpg", title: "ZMI无限拓展数据线 120cm", price: "29元", reviewed: "3426", review: "线材不错，做工好，使用方便", author: "kanli3000"},
                {href: "", img_src: "img/page-main/accessories/accessories8.jpg", title: "指环式防滑手机支架 粉色", price: "12.5元", reviewed: "", review: "", author: ""},
            ],
            phonecase: [
                {href: "", img_src: "img/page-main/accessories/accessories9.jpg", title: "小米手机5 智能翻盖保护套", price: "49元", reviewed: "6653", review: "很不错，很好用。已推荐朋友使用。", author: "舊時書生"},
                {href: "", img_src: "img/page-main/accessories/accessories10.jpg", title: "小米Max 智能显示保护套", price: "59元", reviewed: "132", review: "今天刚接收，试用了一下，非常好用，护屏一打开屏幕就亮...", author: "林中路",label: "new"},
                {href: "", img_src: "img/page-main/accessories/accessories11.jpg", title: "小米手机4 智能唤醒翻盖保护套", price: "29元", reviewed: "11.3万", review: "手感不错  灵敏度也很高。   100%吻合小米4 ...", author: "烟台小懒人"},
                {href: "", img_src: "img/page-main/accessories/accessories12.jpg", title: "小米手机4c 智能唤醒翻盖保护套", price: "49元", reviewed: "2万", review: "非常好用，手感超好，质量杠杠的", author: "韦春哥"},
                {href: "", img_src: "img/page-main/accessories/accessories13.jpg", title: "红米Note3 炫彩翻页保护套", price: "39元", reviewed: "1.7万", review: "大小合适，特别好，质量和颜色都非常棒！", author: "142010366"},
                {href: "", img_src: "img/page-main/accessories/accessories14.jpg", title: "红米3标准版 炫彩翻盖保护套", price: "39元", reviewed: "4867", review: "很好的手机保护套，质量ok", author: "binarystar1989"},
                {href: "", img_src: "img/page-main/accessories/accessories15.jpg", title: "红米Note2 炫彩翻盖保护套", price: "29元", reviewed: "2.1万", review: "手感不错，大小正合适，外观也挺漂亮", author: "2012-11-25"},
                {href: "", img_src: "img/page-main/accessories/accessories16.jpg", title: "平板2保护套", price: "69元", reviewed: "", review: "", author: ""},
            ],
            backcase: [
                {href: "", img_src: "img/page-main/accessories/accessories17.jpg", title: "小米手机5 多彩半透保护壳", price: "29元", reviewed: "1782", review: "不错，外形刚刚好快递快", author: "395644839"},
                {href: "", img_src: "img/page-main/accessories/accessories18.jpg", title: "红米Note 2 冰淇淋炫彩后盖", price: "25元", reviewed: "5901", review: "还不错，质量很好，非常喜欢", author: "588030553",label: "saleoff",sale: "享9折"},
                {href: "", img_src: "img/page-main/accessories/accessories19.jpg", title: "红米Note 2 小清新系列背贴", price: "19元", reviewed: "117", review: "后盖贴纸大小刚好，很不错哟，喜欢的朋友可以试试！", author: "舒云江",label: "saleoff",sale: "享7折"},
                {href: "", img_src: "img/page-main/accessories/accessories20.jpg", title: "小米手机4c 透明超薄软胶保护套", price: "19元", reviewed: "1.2万", review: "很好的产品，一直信赖小米。", author: "少爷爱喝普洱茶"},
                {href: "", img_src: "img/page-main/accessories/accessories21.jpg", title: "红米3标准版 透明软胶保护套", price: "19元", reviewed: "3506", review: "很棒很漂亮正合适~~~~~~~", author: "麦兜兜727"},
                {href: "", img_src: "img/page-main/accessories/accessories22.jpg", title: "红米手机2 极简原色后盖", price: "19元", reviewed: "3654", review: "很合适 真的很好 颜色很正", author: "zhoujianMI1S",label: "saleoff",sale: "享8折"},
                {href: "", img_src: "img/page-main/accessories/accessories23.jpg", title: "小米手机4 仿真纹理后盖背贴", price: "29元", reviewed: "3052", review: "贴纸不错有质感，防滑耐磨。", author: "XS丨丶漂泊"},
                {href: "", img_src: "img/page-main/accessories/accessories24.jpg", title: "平板2 保护壳", price: "49元", reviewed: "", review: "", author: ""},
            ],
            mo: [
                {href: "", img_src: "img/page-main/accessories/accessories25.jpg", title: "小米手机5 极薄防蓝光贴膜", price: "49元", reviewed: "3437", review: "超级棒的贴膜，手感一级棒！", author: "萍踪浪影"},
                {href: "", img_src: "img/page-main/accessories/accessories26.jpg", title: "小米Max 标准高透贴膜", price: "19元", reviewed: "255", review: "贴膜系列真好里面有两张膜还有练习膜", author: "陶震宇",label: "new"},
                {href: "", img_src: "img/page-main/accessories/accessories27.jpg", title: "小米Note 标准高透贴膜", price: "19元", reviewed: "7万", review: "还是不错哦，关键是实惠，被刮花了又可以换阿，嘻嘻", author: "A一吻天荒"},
                {href: "", img_src: "img/page-main/accessories/accessories28.jpg", title: "红米Note3 钢化玻璃膜", price: "19元", reviewed: "2.4万", review: "质量有保证，原装就是好", author: "Danny_Wong"},
                {href: "", img_src: "img/page-main/accessories/accessories29.jpg", title: "红米手机3 钢化玻璃贴膜", price: "19元", reviewed: "4516", review: "小米一直用心做每一样事情 。我一直支持小米", author: "石游子"},
                {href: "", img_src: "img/page-main/accessories/accessories30.jpg", title: "红米Note 极清高透贴膜", price: "30元", reviewed: "3.3万", review: "确实极清高透，屏幕细腻，手感不错还可以当镜子用", author: "广东小伙子"},
                {href: "", img_src: "img/page-main/accessories/accessories31.jpg", title: "红米Note2 标准高透贴膜", price: "9.9元", reviewed: "1.6万", review: "可以，还是两张，备用比较实惠。", author: "818619863",label: "saleoff",sale: "享6折"},
                {href: "", img_src: "img/page-main/accessories/accessories32.jpg", title: "小米平板2 极清高透贴膜", price: "39元", reviewed: "", review: "", author: ""},
            ],
            other: [
                {href: "", img_src: "img/page-main/accessories/accessories33.jpg", title: "小蚁蓝牙遥控器", price: "39元", reviewed: "2632", review: "终于抢到了，配对还简单，可以有，对于旅行版用户来说，...", author: "oangle"},
                {href: "", img_src: "img/page-main/accessories/accessories34.jpg", title: "指环式防滑手机支架", price: "12.5元", reviewed: "5117", review: "做工精细，美观，在小米官网购物放心。", author: "麻辣机丝"},
                {href: "", img_src: "img/page-main/accessories/accessories35.jpg", title: "小米蓝牙手柄", price: "99元", reviewed: "2.4万", review: "手感很好。应该买两个了。两个人一起玩格斗，或者街机游...", author: "Fogerson"},
                {href: "", img_src: "img/page-main/accessories/accessories36.jpg", title: "蓝牙语音体感遥控器", price: "99元", reviewed: "1719", review: "用这个玩打球的游戏真是太棒了，在家就能运动", author: "妮子小桃"},
                {href: "", img_src: "img/page-main/accessories/accessories37.jpg", title: "手机USB Type-C数据线", price: "39元", reviewed: "9922", review: "做工精细，支持小米。", author: "223434809"},
                {href: "", img_src: "img/page-main/accessories/accessories38.jpg", title: "小米千兆网线", price: "12.9元", reviewed: "2.7万", review: "千兆线中算便宜的了，做工也精良，连接路由器与光猫的", author: "al冲冠一怒", label: "saleoff", sale: "享9折"},
                {href: "", img_src: "img/page-main/accessories/accessories7.jpg", title: "ZMI无限拓展数据线 120cm", price: "29元", reviewed: "3426", review: "线材不错，做工好，使用方便", author: "kanli3000"},
                {href: "", img_src: "img/page-main/accessories/accessories39.jpg", title: "多彩USB线", price: "19元", reviewed: "", review: "", author: ""},
            ],
        }
    }
});

var main_page_around_list_display = new Vue({
    el: ".around-row-template",
    data: {
        main_page_around: {
            hot: [
                {href: "", img_src: "img/page-main/around/around1.jpg", title: "小米短袖T恤 米兔大游行", price: "39元", reviewed: "1469", review: "质量挺好的，特别实惠和好看", author: "910871287"},
                {href: "", img_src: "img/page-main/around/around2.jpg", title: "小米短袖T恤 摇滚星球", price: "39元", reviewed: "1505", review: "穿起来舒服，价格实惠，关键是正品。", author: "范聚威"},
                {href: "", img_src: "img/page-main/around/around3.jpg", title: "小米短袖POLO衫 女款", price: "59元", reviewed: "574", review: "大小合适，穿着很舒服", author: "张大脚板~"},
                {href: "", img_src: "img/page-main/around/around4.jpg", title: "小米V领短袖T恤 女款", price: "39元", reviewed: "1267", review: "好穿级了，纯棉，手感不错，性价比高", author: "狗都爱吃肉"},
                {href: "", img_src: "img/page-main/around/around5.jpg", title: "小米经典商务双肩包", price: "99元", reviewed: "1169", review: "不錯，把我的15.6吋thinkpad放進去剛剛好，...", author: "MOLKO.S"},
                {href: "", img_src: "img/page-main/around/around6.jpg", title: "学院风简约双肩包", price: "49元", reviewed: "1.3万", review: "包不错，简约大方，好评", author: "wcswly"},
                {href: "", img_src: "img/page-main/around/around7.jpg", title: "悟空米兔", price: "49元", reviewed: "16", review: "太棒了，米兔成员中又增添了一位，期待商城上架更多好看...", author: "米粉陈青云", label: "new"},
                {href: "", img_src: "img/page-main/around/around8.jpg", title: "金属鼠标垫 小号", price: "49元", reviewed: "", review: "", author: ""},
            ],
            cloth: [
                {href: "", img_src: "img/page-main/around/around9.jpg", title: "小米V领短袖T恤 男款", price: "39元", reviewed: "7564", review: "穿着这衣服，真是舒服，就想抱着女朋友的感觉一样", author: "574081459"},
                {href: "", img_src: "img/page-main/around/around10.jpg", title: "小米短袖T恤 轻松米兔", price: "39元", reviewed: "2727", review: "衣服很好，特别是前面那个米兔很好看", author: "252638188"},
                {href: "", img_src: "img/page-main/around/around11.jpg", title: "小米短袖T恤 小熊米兔", price: "39元", reviewed: "2621", review: "又到了换衣服的季节～这季图案不错哦", author: "CXFSTUDIO"},
                {href: "", img_src: "img/page-main/around/around12.jpg", title: "小米短袖T恤 水管工米兔", price: "39元", reviewed: "1860", review: "很不错的衣服，这件是帮同学买的，很不错", author: "90后土豆"},
                {href: "", img_src: "img/page-main/around/around13.jpg", title: "雷锋米兔连帽套头卫衣", price: "89元", reviewed: "1740", review: "穿起来萌萌哒，哈哈，一下子变成90后", author: "曾大鸿"},
                {href: "", img_src: "img/page-main/around/around14.jpg", title: "纯色开衫卫衣 女款", price: "89元", reviewed: "793", review: "非常不错，大小样式都很喜欢，料子也很舒服", author: "无尽沙"},
                {href: "", img_src: "img/page-main/around/around15.jpg", title: "纯色连帽套头卫衣 男款", price: "79元", reviewed: "2009", review: "简约的设计，特别的是两个口袋是联通的", author: "QQ1098591460"},
                {href: "", img_src: "img/page-main/around/around16.jpg", title: "米兔连帽套头卫衣", price: "89元", reviewed: "", review: "", author: ""},
            ],
            rabbit: [
                {href: "", img_src: "img/page-main/around/around17.jpg", title: "米兔明信片", price: "9.9元", reviewed: "177", review: "整体制作得很精美，卡片上的米兔挺萌的，这画风很喜人。", author: "胭脂"},
                {href: "", img_src: "img/page-main/around/around18.jpg", title: "魔力红米兔钥匙扣", price: "19.9元", reviewed: "586", review: "终于换上新的钥匙圈了，点赞", author: "茉篱"},
                {href: "", img_src: "img/page-main/around/around19.jpg", title: "背带裤米兔", price: "39元", reviewed: "549", review: "很不错，质量很好，买的值得", author: "yishion6057", label: "saleoff", sale: "享8折"},
                {href: "", img_src: "img/page-main/around/around20.jpg", title: "帆布鞋米兔", price: "39元", reviewed: "476", review: "非常棒，手感很好，很好看，非常喜欢", author: "枫影渐随", label: "saleoff", sale: "享8折"},
                {href: "", img_src: "img/page-main/around/around21.jpg", title: "经典版米兔", price: "29元", reviewed: "3.8万", review: "可爱(⊙o⊙)哦，好多女孩向我要呢", author: "273294452"},
                {href: "", img_src: "img/page-main/around/around22.jpg", title: "文艺版米兔", price: "49元", reviewed: "140", review: "好可爱的一直米兔，衣服做的不错，而且合身。", author: "小米东升哥"},
                {href: "", img_src: "img/page-main/around/around23.jpg", title: "30cm坐姿米兔", price: "49元", reviewed: "927", review: "很好很可爱。家里人很喜欢。值得拥有！", author: "247908452"},
                {href: "", img_src: "img/page-main/around/around24.jpg", title: "黑猫米兔", price: "35元", reviewed: "", review: "", author: ""},
            ],
            life: [
                {href: "", img_src: "img/page-main/around/around25.jpg", title: "金属鼠标垫 小号", price: "49元", reviewed: "6860", review: "高冷～～大气～～视觉冲击感感强烈！～～非常吸引眼球！...", author: "沉甸甸的雪花"},
                {href: "", img_src: "img/page-main/around/around26.jpg", title: "小米皮质记事本", price: "19元", reviewed: "3529", review: "纸质好，手感不错，大小适宜", author: "戰勳"},
                {href: "", img_src: "img/page-main/around/around27.jpg", title: "小米LED随身灯 增强版", price: "14.9元", reviewed: "2.4万", review: "非常漂亮的宝贝，不是一般的亮，还可以调节亮度，方便使...", author: "吴老衲", label: "saleoff", sale: "享8折"},
                {href: "", img_src: "img/page-main/around/around28.jpg", title: "手机支架 小蜜蜂", price: "15元", reviewed: "6.9万", review: "小米的产品经理下了功夫的作品", author: "LOVELOVE", label: "saleoff", sale: "享8折"},
                {href: "", img_src: "img/page-main/around/around29.jpg", title: "趣味防尘塞 MI标", price: "3.9元", reviewed: "5.7万", review: "圆头机器人，与挂绳颜色一样，春天的颜色，很漂亮，快递...", author: "上善若"},
                {href: "", img_src: "img/page-main/around/around30.jpg", title: "小米百变随身杯", price: "39元", reviewed: "1.2万", review: "很好很实用，无印良品的感觉～", author: "那一片儿云朵"},
                {href: "", img_src: "img/page-main/around/around31.jpg", title: "小米电源线收纳盒", price: "49元", reviewed: "1293万", review: "设计合理，不但实用，而且还是一个不错的装饰品。", author: "615988613"},
                {href: "", img_src: "img/page-main/around/around32.jpg", title: "小米鼠标垫", price: "4.9元", reviewed: "", review: "", author: ""},
            ],
            case: [
                {href: "", img_src: "img/page-main/around/around33.jpg", title: "90分旅行箱 20寸", price: "279元", reviewed: "1万", review: "真的非常喜欢，从包装到内在都很美，爱不释手", author: "jiangnanjiang", label: "saleoff", sale: "享9.4折"},
                {href: "", img_src: "img/page-main/around/around34.jpg", title: "90分旅行箱 24寸", price: "329元", reviewed: "6879", review: "材质做工都相当好，尺寸正合适", author: "米粉0219", label: "saleoff", sale: "享9.5折"},
                {href: "", img_src: "img/page-main/around/around35.jpg", title: "90分旅行洗漱包", price: "39元", reviewed: "4823", review: "这个包包不错，以后出门洗漱用品有了专业的新家了！", author: "louwujie"},
                {href: "", img_src: "img/page-main/around/around36.jpg", title: "90分便携收纳袋", price: "29元", reviewed: "1797", review: "小巧实用，做工不错，与描述一致，继续关注！", author: "新顽主爹"},
                {href: "", img_src: "img/page-main/around/around40.jpg", title: "学院风简约双肩包", price: "49元", reviewed: "1.3万", review: "包不错，简约大方，好评", author: "wcswly"},
                {href: "", img_src: "img/page-main/around/around37.jpg", title: "小米极简都市双肩包", price: "129元", reviewed: "9122", review: "好东西，刚买到同事就买了一个，太帅了；以后就买小米的...", author: "972458328", label: "saleoff", sale: "享9折"},
                {href: "", img_src: "img/page-main/around/around38.jpg", title: "小米多功能电脑包", price: "169元", reviewed: "1291", review: "比想象中的实用，好多袋子，出差的选择。不用一堆东西搅...", author: "105870213", label: "saleoff", sale: "享9折"},
                {href: "", img_src: "img/page-main/around/around39.jpg", title: "小米商务真皮钱包", price: "149元", reviewed: "", review: "", author: ""},
            ],
        }
    }
});


var recommend_goods_display = new Vue({
    el: "#recommend_goods",
    data: {
        recommend_goods: [
            {color_id: "1", img_src: "img/recommend/rec1.jpg", title: "中国好声音1MORE活塞耳机入耳式", desc: "968人", price: "129元"},
            {color_id: "2", img_src: "img/recommend/rec2.jpg", title: "小米手环", desc: "11万人", price: "69元"},
            {color_id: "3", img_src: "img/recommend/rec3.jpg", title: "ZONOKI 中锘基运动蓝牙耳机", desc: "1358人", price: "128元"},
            {color_id: "4", img_src: "img/recommend/rec4.jpg", title: "先锋CL31系列入耳式耳机", desc: "4175人", price: "99元"},
            {color_id: "5", img_src: "img/recommend/rec5.jpg", title: "Skullcandy Jib耳机", desc: "248人", price: "99元"},
            {color_id: "1", img_src: "img/recommend/rec6.jpg", title: "铁三角CLR100耳机", desc: "1.2万人", price: "118元"},
            {color_id: "2", img_src: "img/recommend/rec7.jpg", title: "Focus100运动耳机", desc: "25人", price: "179元"},
            {color_id: "3", img_src: "img/recommend/rec8.jpg", title: "捷波朗Sport Pulse蓝牙运动耳机", desc: "2人", price: "1599元"},
            {color_id: "4", img_src: "img/recommend/rec9.jpg", title: "小米小钢炮蓝牙音箱2", desc: "5189人", price: "129元"},
            {color_id: "5", img_src: "img/recommend/recX.jpg", title: "Yeelight LED智能灯泡", desc: "8507人", price: "59元"},
        ]
    }
});

var review_list_item_display = new Vue({
  el: ".hotreview .review-list",
  data: {
    list_item: [
      {href: "", img_src: "img/hot-review/review1.jpg", title: "小米空气净化器2", price: "699元", review: "先五星好评。再来说说小米空气净化器，北方的天气雾霾越来越常态，这就迫切需要一台性价比高的空气净化", author: "sddyboy"},
      {href: "", img_src: "img/hot-review/review2.jpg", title: "小米插线板", price: "49元", review: "东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在...", author: "yinyin19891117"},
      {href: "", img_src: "img/hot-review/review3.jpg", title: "小米水质TDS检测笔", price: "39元", review: "外观漂亮，比很多市面上的水质检测笔外观上干净简洁许多！水质检测试验自来水286，凉白开277，井水3...", author: "紫道场"},
      {href: "", img_src: "img/hot-review/review4.jpg", title: "小蚁运动相机", price: "399元", review: "还是挺好玩的一款相机，很适合出游携带，给儿子拍些好玩的运动小视频", author: "136395765"},]
  }
})


//footer
var footer_service_display = new Vue({
    el: ".list-service",
    data: {
        footer_service_list: [
            {href: "#", icon: "", content: "1小时快修服务"},
            {href: "#", icon: "", content: "7天无理由退货"},
            {href: "#", icon: "", content: "15天免费换货"},
            {href: "#", icon: "", content: "满150元包邮"},
            {href: "#", icon: "", content: "520余家售后网点"}
        ]
    }
});

var footer_links_display = new Vue({
    el: ".footer-links",
    data: {
        footer_links_table_list: {
            "帮助中心": [{href: "#", content: "购物指南"}, {href: "#", content: "支付方式"}, {href: "#", content: "配送方式"}],
            "服务支持": [{href: "#", content: "售后政策"}, {href: "#", content: "自助服务"}, {href: "#", content: "相关下载"}],
            "线下门店": [{href: "#", content: "小米之家"}, {href: "#", content: "服务网点"}, {href: "#", content: "零售网点"}],
            "关于小米": [{href: "#", content: "了解小米"}, {href: "#", content: "加入小米"}, {href: "#", content: "联系我们"}],
            "关注我们": [{href: "#", content: "新浪微博"}, {href: "#", content: "小米部落"}, {href: "#", content: "官方微信"}],
            "特色服务": [{href: "#", content: "F 码通道"}, {href: "#", content: "小米移动"}, {href: "#", content: "防伪查询"}],
        }
    }
});

var footer_links_inline_display = new Vue({
  el: ".footer_bottom_nav",
  data: {
    footer_links_inline:
    [
      {href: "#", title: "小米网"},
      {href: "#", title: "MIUI"},
      {href: "#", title: "米聊"},
      {href: "#", title: "多看书城"},
      {href: "#", title: "小米路由器"},
      {href: "#", title: "视频电话"},
      {href: "#", title: "小米后院"},
      {href: "#", title: "小米天猫店"},
      {href: "#", title: "小米淘宝直营店"},
      {href: "#", title: "小米网盟"},
      {href: "#", title: "问题反馈"},
      {href: "#", title: "Select Region"},
    ]
  }
});

var video_list_display = new Vue({
    el: ".video-list",
    data: {
        video_list: [
            {video_first: "video-first" , href: "#", img_src: "img/video/video-img1.jpg", title: "小米Max 绝美外观视频", desc: "6.44\" 大屏黄金尺寸，看什么都震撼"},
            {video_first: " " , href: "#", img_src: "img/video/video-img2.jpg", title: "笑喷了，沈腾爆笑出演，6集联播", desc: "小米Max沈腾爆笑预告全集"},
            {video_first: " " , href: "#", img_src: "img/video/video-img3.jpg", title: "15秒了解小米5 有多快", desc: "华少用超快语速告诉你小米5 到底有多快"},
            {video_first: " " , href: "#", img_src: "img/video/video-img4.jpg", title: "《去探索》小米年度品牌视频", desc: "与小米一起探索黑科技"},
        ]
    }
});
