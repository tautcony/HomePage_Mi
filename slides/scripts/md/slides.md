title: 仿制小米首页
subtitle: 页面预览
class: image

![Page Preview](images/preview.png)

---

title: 所使用的组件介绍
subtitle: Vue.js
class: segue dark nobackground

---

title: Vue.js
class: big
build_lists: true

Vue.js 通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。

- 好用
- 很好用
- 肥肠好用
- 真的是好用

---

title: Code Example

比如，在使用了如下的Vue对象后:

<pre class="prettyprint" data-lang="js">
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
</pre>

---

title: Code Example

对如下的html模板处理:

<pre class="prettyprint" data-lang="html">
&lt;ul class="leftArea">
    &lt;li>
        &lt;a href="{{header_links_inline[0].href}}">{{header_links_inline[0].title}}&lt;/a>
    &lt;/li>
    &lt;div v-for="item in header_links_inline.slice(1)">
        &lt;li>&lt;span class="sep">|&lt;/span>&lt;/li>
        &lt;li>&lt;a href="{{item.href}}">{{item.title}}&lt;/a></li>
    &lt;/div>
&lt;/ul>

---
title: 展开后的结果

</pre>
<pre class="prettyprint" data-lang="html">
&lt;ul class="leftArea">
    &lt;li>&lt;a href="#">小米网&lt;/a>&lt;/li>
    &lt;div>
        &lt;li>&lt;span class="sep">|&lt;/span>&lt;/li>
        &lt;li>&lt;a href="#">MIUI&lt;/a>&lt;/li>
    &lt;/div>&lt;div>
        &lt;li>&lt;span class="sep">|&lt;/span>&lt;/li>
        &lt;li>&lt;a href="#">米聊&lt;/a>&lt;/li>
    &lt;/div>&lt;div>
        &lt;li>&lt;span class="sep">|&lt;/span>&lt;/li>
        &lt;li>&lt;a href="#">游戏&lt;/a>&lt;/li>
    &lt;/div>&lt;div>
        &lt;li>&lt;span class="sep">|&lt;/span>&lt;/li>
        &lt;li>&lt;a href="#">多看阅读&lt;/a>&lt;/li>
    &lt;/div>&lt;div>
        &lt;li>&lt;span class="sep">|&lt;/span>&lt;/li>
        &lt;li>&lt;a href="#">云服务&lt;/a>&lt;/li>
    &lt;/div>&lt;div>
        &lt;li>&lt;span class="sep">|&lt;/span>&lt;/li>
        &lt;li>&lt;a href="#">小米网移动版&lt;/a>&lt;/li>
    &lt;/div>&lt;div>
        &lt;li>&lt;span class="sep">|&lt;/span>&lt;/li>
        &lt;li>&lt;a href="#">问题反馈&lt;/a>&lt;/li>
    &lt;/div>&lt;div>
        &lt;li>&lt;span class="sep">|&lt;/span>&lt;/li>
        &lt;li>&lt;a href="#">Select Region&lt;/a>&lt;/li>
    &lt;/div>
&lt;/ul>
</pre>

---

title: 成效

在使用了Vue.js库之后，首页上绝大部分的重复冗余的代码都不复存在，整个html的代码也缩减到了600行。

如果不使用，并且使用标准缩进，整个页面的代码行数需要2k行+并且层级复杂，且由于数据分散，会导致修改非常麻烦。


---

title: js代码示例
subtitle: 以有效地完成目标效果为目的

<pre class="prettyprint" data-lang="javascript">
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
</pre>

---

title: 网页预览

<article>
  <iframe data-src="http://tautcony.xyz/HomePage_Mi"></iframe>
</article>

---

title: mi.com对比

[小米官网——小米手机、红米手机、小米电视官方正品专卖网站](http://www.mi.com/index.html)

<footer class="source">由于小米官网的限制，无法通过iframe的形式展示mi.com</footer>

---

title: 小组成员
content_class: flexbox vcenter

