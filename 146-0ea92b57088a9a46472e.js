(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{724:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return W}));var t=s(603),e=s.n(t),p=s(604),o=s.n(p),c=s(285),l=s.n(c),u=s(605),i=s.n(u),r=s(606),k=s.n(r),d=s(607),m=s.n(d),g=s(608),f=s.n(g),v=s(609),y=s.n(v),h=s(611),w=s.n(h),b=s(0),E=s.n(b),_=s(104),N=s(79),S=s(86);function x(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=m()(n);if(a){var e=m()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return k()(this,s)}}var C=function(){function n(n){var s=E.a.useState(null),t=w()(s,2),e=t[0],p=t[1],o=E.a.useCallback((function(){return p("Waypoint enter")}),[]),c=E.a.useCallback((function(){return p("Waypoint leave")}),[]);return E.a.createElement("div",{className:"waypoint-demo-basic"},e?E.a.createElement("div",{className:"waypoint-demo-basic__message"},e):null,E.a.createElement("div",{className:"waypoint-demo-basic__scrollable-parent"},E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement("div",{className:"waypoint-demo-basic__waypoint-line"}),E.a.createElement(N.Wb,{onEnter:o,onLeave:c}),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null)))}function a(){return E.a.createElement("div",{className:"waypoint-demo-basic__spacer"},E.a.createElement(N.W,{type:"down"}))}return E.a.createElement(n,null)},R=function(){function n(n){var a=E.a.useState(!1),s=w()(a,2),t=s[0],e=s[1],p=E.a.useCallback((function(){return e(!0)}),[]),o=E.a.useCallback((function(){return e(!1)}),[]);return E.a.createElement(E.a.Fragment,null,E.a.createElement(N.Wb,{onEnter:p,onLeave:o}),E.a.createElement(S.CSSTransition,{in:t,timeout:500,classNames:"waypoint-demo-reveal",unmountOnExit:!0},n.children))}function a(a){return E.a.createElement("div",{className:"waypoint-demo-reveal"},E.a.createElement("div",{className:"waypoint-demo-reveal__scrollable-parent"},E.a.createElement(s,null),E.a.createElement(s,null),E.a.createElement(s,null),E.a.createElement(n,null,E.a.createElement("p",{className:"waypoint-demo-reveal-text"},"Surely You're Joking, Mr. Feynman!")),E.a.createElement(s,null),E.a.createElement(s,null),E.a.createElement(s,null)))}function s(){return E.a.createElement("div",{className:"waypoint-demo-reveal__spacer"},E.a.createElement(N.W,{type:"down",className:"waypoint-demo-reveal-pulse"}))}return E.a.createElement(a,null)};function D(n){return E.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function O(n){return E.a.createElement(D,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return E.a.createElement(D,{tag:"style",html:n.style})}var M=function(n){i()(s,n);var a=x(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),f()(l()(n),"state",{showCode:!1}),f()(l()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return o()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return E.a.createElement("div",{className:"zandoc-react-demo"},E.a.createElement("div",{className:"zandoc-react-demo__preview"},e),E.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.a.createElement("div",{className:"zandoc-react-demo__title"},E.a.createElement("p",null,s||"")),E.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.a.createElement("pre",{className:"zandoc-react-demo__code"},E.a.createElement(D,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(b.Component),W=function(n){i()(s,n);var a=x(s);function s(){return e()(this,s),a.apply(this,arguments)}return o()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(_.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"zandoc-react-container",key:null},E.a.createElement(z,{style:".waypoint-demo-basic {\n  position: relative;\n}\n\n.waypoint-demo-basic__scrollable-parent {\n  max-height: 400px;\n  overflow: scroll;\n  position: relative;\n}\n\n.waypoint-demo-basic__spacer {\n  color: #969799;\n  font-size: 40px;\n  line-height: 200px;\n  text-align: center;\n}\n\n.waypoint-demo-basic__waypoint-line {\n  border-top: 2px dashed #d40000;\n}\n\n.waypoint-demo-basic__message {\n\tbox-sizing: border-box;\n  background-color: #f2f3f5;\n  color: #323233;\n  left: 0;\n  opacity: 0.8;\n  padding: 10px 0;\n  pointer-events: none;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 100%;\n}\n\n.waypoint-demo-reveal {\n  position: relative;\n}\n\n.waypoint-demo-reveal__scrollable-parent {\n  max-height: 400px;\n  overflow: scroll;\n  position: relative;\n}\n\n.waypoint-demo-reveal__spacer {\n  color: #969799;\n  font-size: 40px;\n  line-height: 200px;\n  text-align: center;\n}\n\n.waypoint-demo-reveal-text {\n\ttransition: opacity 500ms, transform 500ms;\n\ttext-align: center;\n\tpadding: 10px 0;\n}\n\n.waypoint-demo-reveal-enter {\n\topacity: 0;\n\ttransform: scale(0.1);\n}\n\n.waypoint-demo-reveal-enter-active {\n\topacity: 1;\n\ttransform: scale(1);\n}\n\n.waypoint-demo-reveal-exit {\n\topacity: 1;\n\ttransform: scale(0.9);\n}\n\n.waypoint-demo-reveal-exit-active {\n\topacity: 0;\n\ttransform: scale(0);\n}"}),E.a.createElement(O,{html:'<h2 class="anchor-heading"><a href="#waypoint">¶</a><a href="javascript:void(0)" id="waypoint" class="anchor-point"></a>Waypoint</h2>\n<p>Invoke a callback when scrolling to some DOM node, can be used in any scrolling container.</p>\n<p><strong>Can be used to implement:</strong></p>\n<ul>\n<li>Image lazy load</li>\n<li>Infinite scroll</li>\n<li>Affix</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),E.a.createElement(M,{title:"Basic Usage",id:"Demo01basic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Waypoint<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> setEnterMsg <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">\'Waypoint enter\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> setLeaveMsg <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">\'Waypoint leave\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>msg <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic__message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic__scrollable-parent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic__waypoint-line<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Waypoint</span> <span class="token attr-name">onEnter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setEnterMsg<span class="token punctuation">}</span></span> <span class="token attr-name">onLeave</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setLeaveMsg<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic__spacer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(C)),E.a.createElement(M,{title:"Reveal",id:"Demo02reveal",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Waypoint<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CSSTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-transition-group\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Reveal</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>revealed<span class="token punctuation">,</span> setRevealed<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> reveal <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setRevealed</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> hide <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setRevealed</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Waypoint</span> <span class="token attr-name">onEnter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>reveal<span class="token punctuation">}</span></span> <span class="token attr-name">onLeave</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>hide<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSSTransition</span>\n        <span class="token attr-name">in</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>revealed<span class="token punctuation">}</span></span>\n        <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">classNames</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal<span class="token punctuation">"</span></span>\n        <span class="token attr-name">unmountOnExit</span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CSSTransition</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal__scrollable-parent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Reveal</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            Surely You\'re Joking<span class="token punctuation">,</span> Mr<span class="token punctuation">.</span> Feynman<span class="token operator">!</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Reveal</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal__spacer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal-pulse<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(R)),E.a.createElement(O,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onEnter</td>\n<td>Callback when element enters viewport</td>\n<td><code>(data: IWaypointCallbackData) => void</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onLeave</td>\n<td>Callback when element leaves viewport</td>\n<td><code>(data: IWaypointCallbackData) => void</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onPositionChange</td>\n<td>Callback when element position changes</td>\n<td><code>(data: IWaypointCallbackData) => void</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>topOffset</td>\n<td>Offset to scrolling container top</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>0px</code></td>\n<td></td>\n</tr>\n<tr>\n<td>bottomOffset</td>\n<td>Offset to scrolling container bottom</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>0px</code></td>\n<td></td>\n</tr>\n<tr>\n<td>horizontal</td>\n<td>Use horizontal scroll</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>scrollableAncestor</td>\n<td>Specify a scrolling container DOM node</td>\n<td><code>Element</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>fireOnRapidScroll</td>\n<td>Trigger \n<code>onEnter</code>\n and \n<code>onLeave</code>\n on rapid scroll</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>Element to track, you can think of the waypoint as a line across the container if omitted</td>\n<td><code>ReactNode</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><strong>Notes</strong></p>\n<ul>\n<li><a href="../../apidoc/interfaces/iwaypointcallbackdata.html">Definition of <code>IWaypointCallbackData</code></a>.</li>\n<li>A rapid scroll is when you scroll the page fast enough, the tracking element leaves the viewport immediately after it enters the viewport.</li>\n<li><code>topOffset</code> and <code>bottomOffset</code> can be positive or negative just like <code>margin</code>. Positive value pushes the boundaries inward the page, and negative value pushes boundaries outward the page.</li>\n<li>You can use percentage value in <code>topOffset</code> and <code>bottomOffset</code>, relative to its scrolling container.</li>\n<li>If <code>horizontal</code> is on, <code>topOffset</code> becomes <code>leftOffset</code>, and <code>bottomOffset</code> becomes <code>rightOffset</code>. Names are kept the same for simplicity\'s sake.</li>\n<li><code>children</code> can only be <strong>one</strong> element, it must be one of native DOM element, element returned from <code>React.forwardRef</code>, or an element with an <code>innerRef</code> prop. The <code>ref</code> must be properly passed to the tracking DOM node.</li>\n</ul>'}))}}]),s}(b.Component)}}]);