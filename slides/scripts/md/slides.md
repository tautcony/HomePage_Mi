title: 页面预览
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

优点

- 简单：官方文档很清晰，比 Angular 简单易学。
- 快速：异步批处理方式更新 DOM。
- 紧凑：~18kb min+gzip，且无依赖。

缺点：

- 不支持IE8。

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

我们可以只写一个形如下面的一个html模板:

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
</pre>

---

浏览时它会将模板展开为如下html代码

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

在使用了Vue.js库之后，首页上绝大部分的重复冗余的代码都不复存在，只留下最基本的框架，整个html的代码也缩减到了600行。

如果不使用，并且使用标准缩进，整个页面的代码行数需要2k行+并且层级复杂，且由于数据分散，会导致修改非常麻烦。

由于这里写的是完全静态的页面，所以并没有触及到Vue.js的高级的特性，但却足以感受到Vue.js的强大。

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

css部分<br><br>
使用了Web Essentials对css进行了补全，尽可能地保证对各个浏览器的支持  

<pre class="prettyprint" data-lang="css">
.block-item-m .author {
    display: block;
    color: #ffffff;
    color: rgba(255,255,255,0.6);
}

.box-shadow {
    -webkit-transition: all 0.35s;
    -moz-transition: all 0.35s;
    -ms-transition: all 0.35s;
    -o-transition: all 0.35s;
    transition: all 0.35s;
    position: relative;
    z-index: 1;
}
<pre>

---

title: 网页预览

<article>
  <iframe data-src="http://tautcony.xyz/HomePage_Mi"></iframe>
</article>

---

title: 与小米官网的对比
build_lists: true

- [小米官网——小米手机、红米手机、小米电视官方正品专卖网站](http://www.mi.com/index.html)

- 

- 通过对比我们可以发现，我们的作品至少达到了与官网90%的相似度

- 

- 并且通过查看小米相关网页可以发现, 在[小米国际首页](http://www.mi.com/en/)也有采用一个类似的库, （[doT.js](http://olado.github.io/doT/index.html)）


<footer class="source">由于小米官网的限制，无法通过iframe的形式展示mi.com</footer>

---
<pre class="prettyprint" data-lang="html">
&lt;div class="tags">
    {{? value.tag[1] !== '' }}
    &lt;div class="tag tag-saleoff">{{=value.tag[1]}}&lt;/div>
    {{?? (value.tag[3] !== '0') && (value.tag[3] !== '') }}
    &lt;div class="tag tag-shipping">Free Shipping&lt;/div>
    {{?? value.tag[4] === true }}
    &lt;div class="tag tag-gift">Free Gift&lt;/div>
    {{?? value.tag[2] === true }}
    &lt;div class="tag tag-new">New&lt;/div>
    {{?}}
&lt;/div>

&lt;div class="tags">
    &lt;div class="flag flag-new" v-if="item.label=='new'">新品&lt;/div>
    &lt;div class="flag flag-saleoff" v-if="item.label=='saleoff'">{{item.sale}}&lt;/div>
    &lt;div class="flag flag-postfree" v-if="item.label=='postfree'">{{item.post}}&lt;/div>
&lt;/div>
</pre>

可以发现，其形式是颇为相似的

---
git的使用<br><br>

![Page Preview](images/git-flow.png)
<br><br>并且我们充分利用了git带来的便利，进行协同作业
