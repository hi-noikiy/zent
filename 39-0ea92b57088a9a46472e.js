(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{687:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return q}));var s=t(603),e=t.n(s),p=t(604),o=t.n(p),c=t(285),l=t.n(c),u=t(605),r=t.n(u),i=t(606),k=t.n(i),d=t(607),m=t.n(d),g=t(608),h=t.n(g),f=t(609),y=t.n(f),C=t(0),w=t.n(C),E=t(104),b=t(79);function v(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,s=m()(n);if(a){var e=m()(this).constructor;t=Reflect.construct(s,arguments,e)}else t=s.apply(this,arguments);return k()(this,t)}}var z=function(){return w.a.createElement(b.l,{style:{width:400}},w.a.createElement("p",null,"Card item"))},N=function(){return w.a.createElement(b.l,{style:{width:400},title:"Card Title"},w.a.createElement("p",null,"Card item"),w.a.createElement("p",null,"Card item"))},_=function(){return w.a.createElement(b.l,{style:{width:400},title:"Card Title",action:w.a.createElement("a",{className:"zent-link",target:"_blank",href:"//www.youzan.com"},"有赞")},w.a.createElement("p",null,"Card item"))},D=function(){return w.a.createElement(b.l,{style:{width:400},title:"外层卡片"},w.a.createElement("p",{style:{marginBottom:10}},"Card content"),w.a.createElement(b.l,{type:"nested",title:"内层卡片"},w.a.createElement("p",null,"Nested card content")))},R=function(){return w.a.createElement(b.l,{style:{width:400},bodyStyle:{background:"#e5e5e5"}},w.a.createElement("p",null,"Custom background"))},S=function(){return w.a.createElement(b.l,{style:{width:400},loading:!0,title:"Card Title"},w.a.createElement("p",null,"Card item"))};function T(n){return w.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return w.a.createElement(T,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function M(n){return w.a.createElement(T,{tag:"style",html:n.style})}var O=function(n){r()(t,n);var a=v(t);function t(){var n;e()(this,t);for(var s=arguments.length,p=new Array(s),o=0;o<s;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),h()(l()(n),"state",{showCode:!1}),h()(l()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return o()(t,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},e),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,t||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(T,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),t}(C.Component),q=function(n){r()(t,n);var a=v(t);function t(){return e()(this,t),a.apply(this,arguments)}return o()(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(E.a)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(M,{style:""}),w.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#card-qia-pian">¶</a><a href="javascript:void(0)" id="card-qia-pian" class="anchor-point"></a>Card 卡片</h2>\n<p>用于在卡片容器内展示信息。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>通过 <code>title</code> 来控制是否显示标题</li>\n<li>通过 <code>action</code> 来提供交互操作</li>\n<li>通过 <code>bodyStyle</code> 来自定义内容样式</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),w.a.createElement(O,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Card style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Card item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(O,{title:"带标题的卡片",id:"Demowithtitle",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Card style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">"Card Title"</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Card item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Card item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(N)),w.a.createElement(O,{title:"带交互的卡片",id:"Demowithaction",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Card\n    style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"Card Title"</span>\n    action<span class="token operator">=</span><span class="token punctuation">{</span>\n      <span class="token operator">&lt;</span>a className<span class="token operator">=</span><span class="token string">"zent-link"</span> target<span class="token operator">=</span><span class="token string">"_blank"</span> href<span class="token operator">=</span><span class="token string">"//www.youzan.com"</span><span class="token operator">></span>\n        有赞\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span>\n  <span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Card item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(_)),w.a.createElement(O,{title:"嵌套卡片",id:"Demonested",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Card style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">"外层卡片"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Card content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nested<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>内层卡片<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Nested card content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(D)),w.a.createElement(O,{title:"支持自定义样式",id:"Democustomstyle",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Card style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> bodyStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">\'#e5e5e5\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Custom background<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(R)),w.a.createElement(O,{title:"加载中状态",id:"Demoloading",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Card style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> loading title<span class="token operator">=</span><span class="token string">"Card Title"</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Card item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(S)),w.a.createElement(j,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td><code>node</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>action</td>\n<td>操作</td>\n<td><code>node</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>加载状态</td>\n<td><code>bool</code></td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>卡片类型，现在有两种，普通和嵌套</td>\n<td><code>string</code></td>\n<td><code>\'normal\'</code></td>\n<td><code>\'nested\'</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>卡片容器自定义样式</td>\n<td><code>object</code></td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>bodyStyle</td>\n<td>内容区域自定义样式</td>\n<td><code>object</code></td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td><code>string</code></td>\n<td><code>zent</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),t}(C.Component)}}]);