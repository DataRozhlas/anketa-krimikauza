!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){!function(){if("Microsoft Internet Explorer"===navigator.appName||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/)){var e=document.createElement("div");e.innerHTML='Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx">není bezpečné</a>, zvažte přechod na <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.mozilla.org/cs/firefox/new/">jiný prohlížeč</a>.',e.style.cssText="text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;",document.body.appendChild(e)}}()},function(e,t,n){"use strict";n.r(t);n(0);var o=function(){},r={},a=[],i=[];function l(e,t){var n,l,s,p,c=i;for(p=arguments.length;p-- >2;)a.push(arguments[p]);for(t&&null!=t.children&&(a.length||a.push(t.children),delete t.children);a.length;)if((l=a.pop())&&void 0!==l.pop)for(p=l.length;p--;)a.push(l[p]);else"boolean"==typeof l&&(l=null),(s="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(s=!1)),s&&n?c[c.length-1]+=l:c===i?c=[l]:c.push(l),n=s;var u=new o;return u.nodeName=e,u.children=c,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(u),u}function s(e,t){for(var n in t)e[n]=t[n];return e}function p(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var u=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,d=[];function f(e){!e._dirty&&(e._dirty=!0)&&1==d.push(e)&&(r.debounceRendering||c)(v)}function v(){for(var e;e=d.pop();)e._dirty&&U(e)}function m(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&h(e,t.nodeName):n||e._componentConstructor===t.nodeName}function h(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function _(e){var t=s({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)p(n,null),p(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var a in n)a in o||(e.style[a]="");for(var a in o)e.style[a]="number"==typeof o[a]&&!1===u.test(a)?o[a]+"px":o[a]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,g,i):e.removeEventListener(t,g,i),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var l=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function g(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var k=[],x=0,N=!1,C=!1;function w(){for(var e;e=k.shift();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function S(e,t,n,o,r,a){x++||(N=null!=r&&void 0!==r.ownerSVGElement,C=null!=e&&!("__preactattr_"in e));var i=z(e,t,n,o,a);return r&&i.parentNode!==r&&r.appendChild(i),--x||(C=!1,a||w()),i}function z(e,t,n,o,r){var a=e,i=N;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),M(e,!0))),a.__preactattr_=!0,a;var l,s,p=t.nodeName;if("function"==typeof p)return function(e,t,n,o){var r=e&&e._component,a=r,i=e,l=r&&e._componentConstructor===t.nodeName,s=l,p=_(t);for(;r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;r&&s&&(!o||r._component)?(L(r,p,3,n,o),e=r.base):(a&&!l&&(A(a),e=i=null),r=j(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,i=null),L(r,p,1,n,o),e=r.base,i&&e!==i&&(i._component=null,M(i,!1)));return e}(e,t,n,o);if(N="svg"===p||"foreignObject"!==p&&N,p=String(p),(!e||!h(e,p))&&(l=p,(s=N?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,a=s,e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),M(e,!0)}var c=a.firstChild,u=a.__preactattr_,d=t.children;if(null==u){u=a.__preactattr_={};for(var f=a.attributes,v=f.length;v--;)u[f[v].name]=f[v].value}return!C&&d&&1===d.length&&"string"==typeof d[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=d[0]&&(c.nodeValue=d[0]):(d&&d.length||null!=c)&&function(e,t,n,o,r){var a,i,l,s,p,c=e.childNodes,u=[],d={},f=0,v=0,h=c.length,_=0,y=t?t.length:0;if(0!==h)for(var g=0;g<h;g++){var k=c[g],x=k.__preactattr_,N=y&&x?k._component?k._component.__key:x.key:null;null!=N?(f++,d[N]=k):(x||(void 0!==k.splitText?!r||k.nodeValue.trim():r))&&(u[_++]=k)}if(0!==y)for(var g=0;g<y;g++){s=t[g],p=null;var N=s.key;if(null!=N)f&&void 0!==d[N]&&(p=d[N],d[N]=void 0,f--);else if(v<_)for(a=v;a<_;a++)if(void 0!==u[a]&&m(i=u[a],s,r)){p=i,u[a]=void 0,a===_-1&&_--,a===v&&v++;break}p=z(p,s,n,o),l=c[g],p&&p!==e&&p!==l&&(null==l?e.appendChild(p):p===l.nextSibling?b(l):e.insertBefore(p,l))}if(f)for(var g in d)void 0!==d[g]&&M(d[g],!1);for(;v<=_;)void 0!==(p=u[_--])&&M(p,!1)}(a,d,n,o,C||null!=u.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||y(e,o,n[o],n[o]=void 0,N);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||y(e,o,n[o],n[o]=t[o],N)}(a,t.attributes,u),N=i,a}function M(e,t){var n=e._component;n?A(n):(null!=e.__preactattr_&&p(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||b(e),P(e))}function P(e){for(e=e.lastChild;e;){var t=e.previousSibling;M(e,!0),e=t}}var T=[];function j(e,t,n){var o,r=T.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),O.call(o,t,n)):((o=new O(t,n)).constructor=e,o.render=B);r--;)if(T[r].constructor===e)return o.nextBase=T[r].nextBase,T.splice(r,1),o;return o}function B(e,t,n){return this.constructor(e,n)}function L(e,t,n,o,a){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?f(e):U(e,1,a)),p(e.__ref,e))}function U(e,t,n,o){if(!e._disable){var a,i,l,p=e.props,c=e.state,u=e.context,d=e.prevProps||p,f=e.prevState||c,v=e.prevContext||u,m=e.base,h=e.nextBase,b=m||h,y=e._component,g=!1,N=v;if(e.constructor.getDerivedStateFromProps&&(c=s(s({},c),e.constructor.getDerivedStateFromProps(p,c)),e.state=c),m&&(e.props=d,e.state=f,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,u)?g=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,u),e.props=p,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!g){a=e.render(p,c,u),e.getChildContext&&(u=s(s({},u),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(N=e.getSnapshotBeforeUpdate(d,f));var C,z,P=a&&a.nodeName;if("function"==typeof P){var T=_(a);(i=y)&&i.constructor===P&&T.key==i.__key?L(i,T,1,u,!1):(C=i,e._component=i=j(P,T,u),i.nextBase=i.nextBase||h,i._parentComponent=e,L(i,T,0,u,!1),U(i,1,n,!0)),z=i.base}else l=b,(C=y)&&(l=e._component=null),(b||1===t)&&(l&&(l._component=null),z=S(l,a,u,n||!m,b&&b.parentNode,!0));if(b&&z!==b&&i!==y){var B=b.parentNode;B&&z!==B&&(B.replaceChild(z,b),C||(b._component=null,M(b,!1)))}if(C&&A(C),e.base=z,z&&!o){for(var O=e,D=e;D=D._parentComponent;)(O=D).base=z;z._component=O,z._componentConstructor=O.constructor}}for(!m||n?k.push(e):g||(e.componentDidUpdate&&e.componentDidUpdate(d,f,N),r.afterUpdate&&r.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);x||o||w()}}function A(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?A(n):t&&(null!=t.__preactattr_&&p(t.__preactattr_.ref,null),e.nextBase=t,b(t),T.push(e),P(t)),p(e.__ref,null)}function O(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function D(e,t,n){return S(n,e,{},!1,t,!1)}s(O.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=s(s({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),f(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),U(this,2)},render:function(){}});var E="https://data.irozhlas.cz/anketa-krimikauza";"localhost"===window.location.hostname&&(E="http://localhost/anketa-krimikauza");var V=new XMLHttpRequest;V.addEventListener("load",function(e){D(l("div",{id:"anketa"},JSON.parse(e.target.response).map(function(e){return l("div",{className:"respondent"},l("img",{className:"portret",src:E+"/foto/"+e.f,alt:e.p}),l("div",{className:"bio"},l("div",{className:"jmeno"},"".concat(e.j," ").concat(e.p)),l("div",{className:"vek"},e.fc)),l("div",{className:"odpoved",dangerouslySetInnerHTML:{__html:(t=e,"<b>".concat(t.k1,"</b><p>").concat(t.d1,"</p><b>").concat(t.k2,"</b><p>").concat(t.d2,"</p><b>").concat(t.k3,"</b><p>").concat(t.d3,"</p>"))}}));var t})),document.getElementById("anketa-wrapper"))}),V.open("GET",E+"/data/data.json"),V.send(),Highcharts.chart("lineup",{chart:{type:"bar"},title:{text:"Nejčastěji zmiňované kauzy"},xAxis:{type:"category",title:{text:null}},yAxis:{visible:!1},tooltip:{enabled:!1},plotOptions:{bar:{animation:!1,dataLabels:{enabled:!0,formatter:function(){return"".concat(this.y)}}}},legend:{enabled:!1},credits:{enabled:!1},series:[{name:"kauzy",data:[["David Rath a spol.",26],["Jana Nagyová a spol.",19],["Kauza Metanol",10],["Lukáš Nečesaný",6],["Marek Dalík",5],["Čapí hnízdo",4],["Střelba v Uherském Brodě",4],["Vítkovští žháři",2],["Petr Kramný",4],["Ivo Rittig/Dopravní podnik",2],["ROP Severozápad",2],["Milost pro Jiřího Kajínka",2],["Poslanecké trafiky",1],["Ústavní žaloba na prezidenta",1],["Kauza Jiří Čunek",1],["Tomáš Horáček a spol.",1],["Střelba v Ostravě",2],["Nákup letadel CASA",1],["Amnestie Václava Klause",1],["Mostecká uhelná",1],["Vraždy Anny Janatkové",1],["Kauzy solárních elektráren",1],["Jaromír Balda",1],["Nehoda Romana Janouška",1],["Střet zájmů Andreje Babiše",1],["Kevin Dahlgren",1],["Abdulah Zadeh",1],["Michael Šváb a spol.",1],["Barbora Orlová",1],["Promopro",1],["Věra Marešová",1],["Zmizení Michaely Muzikářové",1],["Opencard",1]].sort(function(e,t){return t[1]-e[1]})}]})}]);