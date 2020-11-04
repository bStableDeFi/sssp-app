/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
        if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
/******************************************************************************
 * jquery.i18n.properties
 * 
 * Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
 * MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
 * 
 * @version     1.0.x
 * @author      Nuno Fernandes
 * @url         www.codingwithcoffee.com
 * @inspiration Localisation assistance for jQuery (http://keith-wood.name/localisation.html)
 *              by Keith Wood (kbwood{at}iinet.com.au) June 2007
 * 
 *****************************************************************************/

(function($) {
$.i18n = {};

/** Map holding bundle keys (if mode: 'map') */
$.i18n.map = {};
    
/**
 * Load and parse message bundle files (.properties),
 * making bundles keys available as javascript variables.
 * 
 * i18n files are named <name>.js, or <name>_<language>.js or <name>_<language>_<country>.js
 * Where:
 *      The <language> argument is a valid ISO Language Code. These codes are the lower-case, 
 *      two-letter codes as defined by ISO-639. You can find a full list of these codes at a 
 *      number of sites, such as: http://www.loc.gov/standards/iso639-2/englangn.html
 *      The <country> argument is a valid ISO Country Code. These codes are the upper-case,
 *      two-letter codes as defined by ISO-3166. You can find a full list of these codes at a
 *      number of sites, such as: http://www.iso.ch/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html
 * 
 * Sample usage for a bundles/Messages.properties bundle:
 * $.i18n.properties({
 *      name:      'Messages', 
 *      language:  'en_US',
 *      path:      'bundles'
 * });
 * @param  name			(string/string[], optional) names of file to load (eg, 'Messages' or ['Msg1','Msg2']). Defaults to "Messages"
 * @param  language		(string, optional) language/country code (eg, 'en', 'en_US', 'pt_PT'). if not specified, language reported by the browser will be used instead.
 * @param  path			(string, optional) path of directory that contains file to load
 * @param  mode			(string, optional) whether bundles keys are available as JavaScript variables/functions or as a map (eg, 'vars' or 'map')
 * @param  cache        (boolean, optional) whether bundles should be cached by the browser, or forcibly reloaded on each page load. Defaults to false (i.e. forcibly reloaded)
 * @param  encoding 	(string, optional) the encoding to request for bundles. Property file resource bundles are specified to be in ISO-8859-1 format. Defaults to UTF-8 for backward compatibility.
 * @param  callback     (function, optional) callback function to be called after script is terminated
 */
$.i18n.properties = function(settings) {
	// set up settings
    var defaults = {
        name:           'Messages',
        language:       '',
        path:           '',  
        mode:           'vars',
        cache:			false,
        encoding:       'UTF-8',
        callback:       null
    };
    settings = $.extend(defaults, settings);    
    if(settings.language === null || settings.language == '') {
	   settings.language = $.i18n.browserLang();
	}
	if(settings.language === null) {settings.language='';}
	
	// load and parse bundle files
	var files = getFiles(settings.name);
	for(i=0; i<files.length; i++) {
		// 1. load base (eg, Messages.properties)
		loadAndParseFile(settings.path + files[i] + '.properties', settings);
        // 2. with language code (eg, Messages_pt.properties)
        // if(settings.language.length >= 2) {
        //     loadAndParseFile(settings.path + files[i] + '_' + settings.language.substring(0, 2) +'.properties', settings);
        // }
        // // 3. with language code and country code (eg, Messages_pt_PT.properties)
        // if(settings.language.length >= 5) {
        //     loadAndParseFile(settings.path + files[i] + '_' + settings.language.substring(0, 5) +'.properties', settings);
        // }
	}
	
	// call callback
	if(settings.callback){ settings.callback(); }
};


/**
 * When configured with mode: 'map', allows access to bundle values by specifying its key.
 * Eg, jQuery.i18n.prop('com.company.bundles.menu_add')
 */
$.i18n.prop = function(key /* Add parameters as function arguments as necessary  */) {
	var value = $.i18n.map[key];
	if (value == null)
		return '[' + key + ']';
	
//	if(arguments.length < 2) // No arguments.
//    //if(key == 'spv.lbl.modified') {alert(value);}
//		return value;
	
//	if (!$.isArray(placeHolderValues)) {
//		// If placeHolderValues is not an array, make it into one.
//		placeHolderValues = [placeHolderValues];
//		for (var i=2; i<arguments.length; i++)
//			placeHolderValues.push(arguments[i]);
//	}

	// Place holder replacement
	/**
	 * Tested with:
	 *   test.t1=asdf ''{0}''
	 *   test.t2=asdf '{0}' '{1}'{1}'zxcv
	 *   test.t3=This is \"a quote" 'a''{0}''s'd{fgh{ij'
	 *   test.t4="'''{'0}''" {0}{a}
	 *   test.t5="'''{0}'''" {1}
	 *   test.t6=a {1} b {0} c
	 *   test.t7=a 'quoted \\ s\ttringy' \t\t x
	 *
	 * Produces:
	 *   test.t1, p1 ==> asdf 'p1'
	 *   test.t2, p1 ==> asdf {0} {1}{1}zxcv
	 *   test.t3, p1 ==> This is "a quote" a'{0}'sd{fgh{ij
	 *   test.t4, p1 ==> "'{0}'" p1{a}
	 *   test.t5, p1 ==> "'{0}'" {1}
	 *   test.t6, p1 ==> a {1} b p1 c
	 *   test.t6, p1, p2 ==> a p2 b p1 c
	 *   test.t6, p1, p2, p3 ==> a p2 b p1 c
	 *   test.t7 ==> a quoted \ s	tringy 		 x
	 */
	
	var i;
	if (typeof(value) == 'string') {
        // Handle escape characters. Done separately from the tokenizing loop below because escape characters are 
		// active in quoted strings.
        i = 0;
        while ((i = value.indexOf('\\', i)) != -1) {
 		   if (value[i+1] == 't')
 			   value = value.substring(0, i) + '\t' + value.substring((i++) + 2); // tab
 		   else if (value[i+1] == 'r')
 			   value = value.substring(0, i) + '\r' + value.substring((i++) + 2); // return
 		   else if (value[i+1] == 'n')
 			   value = value.substring(0, i) + '\n' + value.substring((i++) + 2); // line feed
 		   else if (value[i+1] == 'f')
 			   value = value.substring(0, i) + '\f' + value.substring((i++) + 2); // form feed
 		   else if (value[i+1] == '\\')
 			   value = value.substring(0, i) + '\\' + value.substring((i++) + 2); // \
 		   else
 			   value = value.substring(0, i) + value.substring(i+1); // Quietly drop the character
        }
		
		// Lazily convert the string to a list of tokens.
		var arr = [], j, index;
		i = 0;
		while (i < value.length) {
			if (value[i] == '\'') {
				// Handle quotes
				if (i == value.length-1)
					value = value.substring(0, i); // Silently drop the trailing quote
				else if (value[i+1] == '\'')
					value = value.substring(0, i) + value.substring(++i); // Escaped quote
				else {
					// Quoted string
					j = i + 2;
					while ((j = value.indexOf('\'', j)) != -1) {
						if (j == value.length-1 || value[j+1] != '\'') {
							// Found start and end quotes. Remove them
							value = value.substring(0,i) + value.substring(i+1, j) + value.substring(j+1);
							i = j - 1;
							break;
						}
						else {
							// Found a double quote, reduce to a single quote.
							value = value.substring(0,j) + value.substring(++j);
						}
					}
					
					if (j == -1) {
						// There is no end quote. Drop the start quote
						value = value.substring(0,i) + value.substring(i+1);
					}
				}
			}
			else if (value[i] == '{') {
				// Beginning of an unquoted place holder.
				j = value.indexOf('}', i+1);
				if (j == -1)
					i++; // No end. Process the rest of the line. Java would throw an exception
				else {
					// Add 1 to the index so that it aligns with the function arguments.
					index = parseInt(value.substring(i+1, j));
					if (!isNaN(index) && index >= 0) {
						// Put the line thus far (if it isn't empty) into the array
						var s = value.substring(0, i);
						if (s != "")
							arr.push(s);
						// Put the parameter reference into the array
						arr.push(index);
						// Start the processing over again starting from the rest of the line.
						i = 0;
						value = value.substring(j+1);
					}
					else
						i = j + 1; // Invalid parameter. Leave as is.
				}
			}
			else
				i++;
		}
		
		// Put the remainder of the no-empty line into the array.
		if (value != "")
			arr.push(value);
		value = arr;
		
		// Make the array the value for the entry.
		$.i18n.map[key] = arr;
	}
	
	if (value.length == 0)
		return "";
	if (value.lengh == 1 && typeof(value[0]) == "string")
		return value[0];
	
	var s = "";
	for (i=0; i<value.length; i++) {
		if (typeof(value[i]) == "string")
			s += value[i];
		// Must be a number
		else if (value[i] + 1 < arguments.length)
			s += arguments[value[i] + 1];
		else
			s += "{"+ value[i] +"}";
	}
	
	return s;
};

/** Language reported by browser, normalized code */
$.i18n.browserLang = function() {
	return normaliseLanguageCode(navigator.language /* Mozilla */ || navigator.userLanguage /* IE */);
}


/** Load and parse .properties files */
function loadAndParseFile(filename, settings) {
	$.ajax({
        url:        filename,
        async:      false,
        cache:		settings.cache,
        contentType:'text/plain;charset='+ settings.encoding,
        dataType:   'text',
        success:    function(data, status) {
        				parseData(data, settings.mode); 
					}
    });
}

/** Parse .properties files */
function parseData(data, mode) {
   var parsed = '';
   var parameters = data.split( /\n/ );
   var regPlaceHolder = /(\{\d+\})/g;
   var regRepPlaceHolder = /\{(\d+)\}/g;
   var unicodeRE = /(\\u.{4})/ig;
   for(var i=0; i<parameters.length; i++ ) {
       parameters[i] = parameters[i].replace( /^\s\s*/, '' ).replace( /\s\s*$/, '' ); // trim
       if(parameters[i].length > 0 && parameters[i].match("^#")!="#") { // skip comments
           var pair = parameters[i].split('=');
           if(pair.length > 0) {
               /** Process key & value */
               var name = unescape(pair[0]).replace( /^\s\s*/, '' ).replace( /\s\s*$/, '' ); // trim
               var value = pair.length == 1 ? "" : pair[1];
               // process multi-line values
               while(value.match(/\\$/)=="\\") {
               		value = value.substring(0, value.length - 1);
               		value += parameters[++i].replace( /\s\s*$/, '' ); // right trim
               }               
               // Put values with embedded '='s back together
               for(var s=2;s<pair.length;s++){ value +='=' + pair[s]; }
               value = value.replace( /^\s\s*/, '' ).replace( /\s\s*$/, '' ); // trim
               
               /** Mode: bundle keys in a map */
               if(mode == 'map' || mode == 'both') {
                   // handle unicode chars possibly left out
                   var unicodeMatches = value.match(unicodeRE);
                   if(unicodeMatches) {
                     for(var u=0; u<unicodeMatches.length; u++) {
                        value = value.replace( unicodeMatches[u], unescapeUnicode(unicodeMatches[u]));
                     }
                   }
                   // add to map
                   $.i18n.map[name] = value;
               }
               
               /** Mode: bundle keys as vars/functions */
               if(mode == 'vars' || mode == 'both') {
                   value = value.replace( /"/g, '\\"' ); // escape quotation mark (")
                   
                   // make sure namespaced key exists (eg, 'some.key') 
                   checkKeyNamespace(name);
                   
                   // value with variable substitutions
                   if(regPlaceHolder.test(value)) {
                       var parts = value.split(regPlaceHolder);
                       // process function args
                       var first = true;
                       var fnArgs = '';
                       var usedArgs = [];
                       for(var p=0; p<parts.length; p++) {
                           if(regPlaceHolder.test(parts[p]) && (usedArgs.length == 0 || usedArgs.indexOf(parts[p]) == -1)) {
                               if(!first) {fnArgs += ',';}
                               fnArgs += parts[p].replace(regRepPlaceHolder, 'v$1');
                               usedArgs.push(parts[p]);
                               first = false;
                           }
                       }
                       parsed += name + '=function(' + fnArgs + '){';
                       // process function body
                       var fnExpr = '"' + value.replace(regRepPlaceHolder, '"+v$1+"') + '"';
                       parsed += 'return ' + fnExpr + ';' + '};';
                       
                   // simple value
                   }else{
                       parsed += name+'="'+value+'";';
                   }
               } // END: Mode: bundle keys as vars/functions
           } // END: if(pair.length > 0)
       } // END: skip comments
   }
   eval(parsed);
}

/** Make sure namespace exists (for keys with dots in name) */
// TODO key parts that start with numbers quietly fail. i.e. month.short.1=Jan
function checkKeyNamespace(key) {
	var regDot = /\./;
	if(regDot.test(key)) {
		var fullname = '';
		var names = key.split( /\./ );
		for(var i=0; i<names.length; i++) {
			if(i>0) {fullname += '.';}
			fullname += names[i];
			if(eval('typeof '+fullname+' == "undefined"')) {
				eval(fullname + '={};');
			}
		}
	}
}

/** Make sure filename is an array */
function getFiles(names) {
	return (names && names.constructor == Array) ? names : [names];
}

/** Ensure language code is in the format aa_AA. */
function normaliseLanguageCode(lang) {
    lang = lang.toLowerCase();
    if(lang.length > 3) {
        lang = lang.substring(0, 3) + lang.substring(3).toUpperCase();
    }
    return lang;
}

/** Unescape unicode chars ('\u00e3') */
function unescapeUnicode(str) {
  // unescape unicode codes
  var codes = [];
  var code = parseInt(str.substr(2), 16);
  if (code >= 0 && code < Math.pow(2, 16)) {
     codes.push(code);
  }
  // convert codes to text
  var unescaped = '';
  for (var i = 0; i < codes.length; ++i) {
    unescaped += String.fromCharCode(codes[i]);
  }
  return unescaped;
}

/* Cross-Browser Split 1.0.1
(c) Steven Levithan <stevenlevithan.com>; MIT License
An ECMA-compliant, uniform cross-browser split method */
var cbSplit;
// avoid running twice, which would break `cbSplit._nativeSplit`'s reference to the native `split`
if (!cbSplit) {    
  cbSplit = function(str, separator, limit) {
      // if `separator` is not a regex, use the native `split`
      if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
        if(typeof cbSplit._nativeSplit == "undefined")
          return str.split(separator, limit);
        else
          return cbSplit._nativeSplit.call(str, separator, limit);
      }
  
      var output = [],
          lastLastIndex = 0,
          flags = (separator.ignoreCase ? "i" : "") +
                  (separator.multiline  ? "m" : "") +
                  (separator.sticky     ? "y" : ""),
          separator = RegExp(separator.source, flags + "g"), // make `global` and avoid `lastIndex` issues by working with a copy
          separator2, match, lastIndex, lastLength;
  
      str = str + ""; // type conversion
      if (!cbSplit._compliantExecNpcg) {
          separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags); // doesn't need /g or /y, but they don't hurt
      }
  
      /* behavior for `limit`: if it's...
      - `undefined`: no limit.
      - `NaN` or zero: return an empty array.
      - a positive number: use `Math.floor(limit)`.
      - a negative number: no limit.
      - other: type-convert, then use the above rules. */
      if (limit === undefined || +limit < 0) {
          limit = Infinity;
      } else {
          limit = Math.floor(+limit);
          if (!limit) {
              return [];
          }
      }
  
      while (match = separator.exec(str)) {
          lastIndex = match.index + match[0].length; // `separator.lastIndex` is not reliable cross-browser
  
          if (lastIndex > lastLastIndex) {
              output.push(str.slice(lastLastIndex, match.index));
  
              // fix browsers whose `exec` methods don't consistently return `undefined` for nonparticipating capturing groups
              if (!cbSplit._compliantExecNpcg && match.length > 1) {
                  match[0].replace(separator2, function () {
                      for (var i = 1; i < arguments.length - 2; i++) {
                          if (arguments[i] === undefined) {
                              match[i] = undefined;
                          }
                      }
                  });
              }
  
              if (match.length > 1 && match.index < str.length) {
                  Array.prototype.push.apply(output, match.slice(1));
              }
  
              lastLength = match[0].length;
              lastLastIndex = lastIndex;
  
              if (output.length >= limit) {
                  break;
              }
          }
  
          if (separator.lastIndex === match.index) {
              separator.lastIndex++; // avoid an infinite loop
          }
      }
  
      if (lastLastIndex === str.length) {
          if (lastLength || !separator.test("")) {
              output.push("");
          }
      } else {
          output.push(str.slice(lastLastIndex));
      }
  
      return output.length > limit ? output.slice(0, limit) : output;
  };
  
  cbSplit._compliantExecNpcg = /()??/.exec("")[1] === undefined; // NPCG: nonparticipating capturing group
  cbSplit._nativeSplit = String.prototype.split;

} // end `if (!cbSplit)`
String.prototype.split = function (separator, limit) {
    return cbSplit(this, separator, limit);
};

})(jQuery);
                
/**
 * cookie操作
 */
var getCookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var s = [cookie, expires, path, domain, secure].join('');
        var secure = options.secure ? '; secure' : '';
        var c = [name, '=', encodeURIComponent(value)].join('');
        var cookie = [c, expires, path, domain, secure].join('')
        // console.log(cookie);
        document.cookie = cookie;
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0;i < cookies.length;i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        // console.log(cookieValue);
        return cookieValue;
    }
};


/**
 * 获取浏览器语言类型
 * @return {string} 浏览器国家语言
 */
var getNavLanguage = function () {
    if (navigator.appName == "Netscape") {
        var navLanguage = navigator.language;
        return navLanguage.substr(0, 2);
    }
    return false;
}

/**
 * 设置语言类型： 默认为中文
 */
var i18nLanguage = "en";

/*
设置一下网站支持的语言种类
 */
var webLanguage = ['zh', 'en'];

/**
 * 执行页面i18n方法
 * @return
 */
var execI18n = function () {
    /*
    获取一下资源文件名
     */
    var optionEle = $("#i18n_pagename");
    if (optionEle.length < 1) {
        // console.log("未找到页面名称元素，请在页面写入\n <meta id=\"i18n_pagename\" content=\"页面名(对应语言包的语言文件名)\">");
        return false;
    };
    var sourceName = optionEle.attr('content');
    sourceName = sourceName.split('-');
    /*
    首先获取用户浏览器设备之前选择过的语言类型
     */
    if (getCookie("userLanguage")) {
        i18nLanguage = getCookie("userLanguage");
    } else {
        // 获取浏览器语言
        var navLanguage =localStorage.getItem('userLanguage')|| getNavLanguage();
        if (navLanguage) {
            // 判断是否在网站支持语言数组里
            var charSize = $.inArray(navLanguage, webLanguage);
            if (charSize > -1) {
                i18nLanguage = navLanguage;

            } else {
                i18nLanguage = "en";
                navLanguage = "en";
            };
            // 存到缓存中
            getCookie("userLanguage", navLanguage,{
                expires: 30,
                path:'/'
            });
            localStorage.setItem('userLanguage', navLanguage);
        } else {
            // console.log("not navigator");
            return false;
        }
    }
    /* 需要引入 i18n 文件*/
    if ($.i18n == undefined) {
        // console.log("请引入i18n js 文件")
        return false;
    };

    /*
    这里需要进行i18n的翻译
     */
    jQuery.i18n.properties({
        name: sourceName, //资源文件名称
        path: '/swft-v3/i18n/' + i18nLanguage + '/', //资源文件路径
        mode: 'map', //用Map的方式使用资源文件中的值
        language: i18nLanguage,
        callback: function () {//加载成功后设置显示内容
            var insertEle = $(".i18n");
            // console.log(".i18n 写入中...");
            insertEle.each(function () {
                // 根据i18n元素的 name 获取内容写入
                $(this).html($.i18n.prop($(this).attr('name')));
            });
            // console.log("写入完毕");
            // console.log(".i18n-input 写入中...");
            var insertInputEle = $(".i18n-input");
            insertInputEle.each(function () {
                var selectAttr = $(this).attr('selectattr');
                if (!selectAttr) {
                    selectAttr = "value";
                };
                $(this).attr(selectAttr, $.i18n.prop($(this).attr('selectname')));
            });
            // console.log("写入完毕");
        }
    });
}

/*页面执行加载执行*/
$(function () {

    /*执行I18n翻译*/
    execI18n();

    /*将语言选择默认选中缓存中的值*/
    $(".lang-setDiv[value=" + i18nLanguage + "]").attr("checked", true);

});
function get_lan(Tip, lanInit) {
    var lan;
    if (lanInit == "en") {
        lan = lanInit;
    } else if (lanInit == "cn" || lanInit == "zh-CN") {
        lan = "zh";
    } else {
        //获取文字
        lan = getCookie('userLanguage') || navigator.language;     //语言版本
        if (lan == "zh" || lan == "zh-CN" || lan == "zh-TW" || lan == "zh-Hans-CN" || lan == "zh-Hant-TW") {
            lan = lan.substr(0, 2);
        } else {
            lan == "en"
        }
    }

    //选取语言文字
    switch (lan) {
        case 'en':
            var t = en[Tip];
            break;
        case 'zh':
            var t = cn[Tip];
            break;
        default:
            var t = en[Tip];
    }

    //如果所选语言的json中没有此内容就选取其他语言显示
    if (t == undefined) t = cn[Tip];
    if (t == undefined) t = en[Tip];

    if (t == undefined) t = Tip; //如果还是没有就返回他的标识

    return t;
}

var cn = {
    "displayLan": "zh-CN",
    "invalid_order": "无效的订单!",
    "invalid_link": "无效的链接!",
    "payment_tips": "您正在向{0}付款，请谨慎操作",
    "payment_confirm_tips": "您将付款{0} {1} 给{2}，是否继续?",
    "complete_order": "该笔付款已被领取!",
    "lack_pic_captcha": "请输入图形验证码",
    "pay_payment_success": "付款成功!",
    "pay_receive_success": "收款成功!",
    "limit_tips": "限价汇率不能低于市场汇率的95%!",
    "withdraw_tips": "当前币种暂时停止提币功能!",
    "deposit_tips": "当前币种暂时停止充币功能!",
    "inner_transfer_tips": "当前币种暂时停止账户内转账功能!",
    "checkNet": "请检查网络,稍后重试!",
    "plsLogin": "请先登录！",
    "plsLogin_app": "请先登录APP",
    "goLogin": "去登录",
    "got_it": "我知道了",
    "go_charge": "去充值",
    "cannot_change": "币种不能交换",
    "deposit_range": "存币金额不在范围内",
    "deposit_illegal": "存币数量不合法",
    "withdraw_record": "提币记录",
    "withdraw_address": "提币地址",
    "sed_success": "提币成功",
    "charge_record": "充币记录",
    "charge_address": "充币地址",
    "charge_success": "充币成功",
    "ex_out_success": "扣币成功",
    "ex_refund_success": "退币成功",
    "refunded": "已退币",
    "limit_deposit_num": "请输入数量",
    "limit_receive_num": "请输入数量",
    "send_ing": "提币中",
    "transfer_ing": "转账中",
    "send_success": "发币成功",
    "order_time": "订单时间",
    "order_id": "订单号码",
    "unbind": "未绑定",
    "old_pwd_not_null": "旧密码不能为空",
    "new_pwd_not_null": "新密码不能为空",
    "confirm_pwd_not_null": "确认密码不能为空",
    "two_pwd_not_same": "两次密码不相同",
    "mobi_memo_tips": "如需指定memo_id，请将memo_id放在mobi地址后面用#隔开。(#前面是MOBI地址，#后面是memo_id)",
    "eos_memo_tips": "如需指定memo，请将memo放在EOS账户后面用#隔开。(#前面是EOS账户，#后面是memo)",
    "invalid_amt": "输入金额无效",
    "support_tips": "客服QQ : 3297137690<br>邮箱 : support@swftcoin.org",
    "address_book": "地址簿",
    "friends_book": "通讯录",
    "inalid_amt": "数量不正确",
    "amt_noNull": "数量不能为空",
    "transfer_amt_tips": "数量填写不正确",
    "withdraw_amt_tips": "提币数量不能为0",
    "withdraw_amt_err": "无法获取到可用余额",
    "balance_lack_tips": "您的余额不足",
    "balance_zero_tips": "您的可用余额为0",
    "swft_notEnough": "SWFTC余额不足10，暂不支持账户内转账",
    "unlink": "未绑定",
    "link": "已绑定",
    "transfer_friends_err": "转账账户未填写",
    "transfer_err": "转账失败！您的转账范围为：",
    "transfer_success": "转账成功",
    "g_s_transfer_success": "划转成功",
    "g_s_transfer_ing": "划转中",
    "transfer_successful": "转账成功",
    "withdraw_addr_err": "提币地址未填写",
    "withdraw_err": "提币失败！您的提币金额范围为：",
    "withdraw_success": "提币成功！",
    "withdraw_ETH_err": "ETH不足，无法提币",
    "withdraw_google_err": "谷歌验证码未填写",
    "get_auth_code": "获取验证码",
    "lack_auth_code": "请输入验证码",
    "lack_pw_code": "请输入密码",
    "lack_login_pwd": "登陆密码不能为空",
    "bind_success": "绑定成功",
    "send_code_to": "验证码已发送至 ",
    "send_code": "发送验证码",
    "enter_phoneEmail": "请输入手机号或邮箱",
    "enter_loginPW": "请输入登录密码",
    "enter_true_telEmail": "请输入正确的手机号/邮箱",
    "login_fail": "登录失败！用户名或密码错误！",
    "pls_setPW": "请设置密码",
    "pls_enterPW": "请输入密码",
    "pls_setPW_again": "请再次输入密码",
    "PW_twice": "两次输入的密码不一样",
    "enter_code": "请输入验证码",
    "PWLength": "密码长度为6-20位",
    "register_success": "注册成功！ 请登录",
    "registration_success": "注册成功！",
    "code_sendTo": "验证码已发送到",
    "email_been_send": "邮件已发送，请点击邮件中链接找回登录密码",
    "status_not_complete": "未完成",
    "status_exchangeing": "兑换中",
    "status_complete": "成功",
    "status_timeout": "超时",
    "status_refund": "退币",
    "status_fail": "兑换失败",
    "status_refunding": "兑换失败，退币中...",
    "status_refund_completed": "退币完成",
    "empty_newPW": "新密码不能为空",
    "link_invalid": "链接失效，请重新发起请求",
    "pw_set_success": "密码重置成功，请进行登陆",
    "code_illegal": "验证码不合法",
    "code_send_success": "验证码发送成功",
    "verification_success": "校验成功，请重新设置密码",
    "why_refund": "为什么要输入退币地址？",
    "why_deposit": "为什么要输入接收地址？",
    "because_deposit": "如果交易成功，这个地址将会收到您的转账，请注意查看。",
    "because_refund": "如果交易中断或者失败，我们会把您所有的货币退回到这个地址。",
    "enter_refund_address": "请填写退币地址",
    "enter_receive_address": "请填写接收地址",
    "order_exist": "订单不存在",
    "miners": "扣除矿工费",
    "wait_deposit_send": "待发送",
    "wait_fee_type": "已发送",
    "wait_exchange_push": "正在兑换中...",
    "wait_receive_send": "兑换成功，发币中...",
    "wait_receive_confirm": "已发币，确认中...",
    "wait_receive_sending": "发币中",
    "receive_complete": "兑换完成",
    "receive_completed": "已完成",
    "wait_refund_sending": "退币中...",
    "wait_refund_confirm": "已退币，确认中...",
    "refund_complete": "退币完成",
    "refund": "退回",
    "timeout": "超时",
    "pending": "挂单中",
    "wait_deposits": "待存币",
    "limit_exchangeing": "交易中",
    "canceled": "已撤销",
    "cancel": "撤销",
    "canceling": "撤销中",
    "cancel_success": "撤销成功！",
    "cancel_success1": "撤销成功",
    "copy_success": "已复制到剪切板",
    "feeTips": "如果用户登陆并且账户中速币足够支付手续费，则手续费用速币支付，为0.05%；否则用原币支付，为0.1%。",
    "limitFeeTips": "限价单交易手续费为0.1%。",
    "depositTips": "请复制此存币地址，并按照要求的数量向该地址存币，存币成功后，订单将自动开始兑换。",
    "EOSTips": "提示：#前面是EOS地址，#后面是memo",
    "nothing": "暂无",
    "vol": "交易量(24h)",
    "add_success": "添加成功！",
    "del_success": "删除成功！",
    "loading": "点击加载更多...",
    "mobi_memo_tips": "如需指定memo_id，请将memo_id放在mobi地址后面用#隔开。(#前面是MOBI地址，#后面是memo_id)",
    "eos_memo_tips": "如需指定memo，请将memo放在EOS账户后面用#隔开。(#前面是EOS账户，#后面是memo)",
    "mobi_memo_tips_qr": "往钱包转币务必指定memo_id，否则无法入账，下面#前面是MOBI地址，#后面是memo_id。",
    "eos_memo_tips_qr": "往钱包转币务必指定memo，否则无法入账，下面#前面是EOS账户，#后面是memo。",
    "oct_memo_tips_qr": "往钱包转币务必指定memo，否则无法入账，下面#前面是OCT账户，#后面是memo。",
    "gat_memo_tips": "如需指定memo，请将memo放在gat地址后面用#隔开。(#前面是GAT地址，#后面是memo)",
    "gat_memo_tips_qr": "往钱包转币务必指定memo，否则无法入账，下面#前面是GAT地址，#后面是memo。",
    "vet_charge_tips": "vet链与eth链相互独立，虽然地址格式一样，但是将vet转往任何eth地址，或者从eth地址转币到vet地址，均会造成币丢失，且无法找回。",
    "xlm_memo_tips": "如需指定memo_id，请将memo_id放在xlm地址后面用#隔开。(#前面是XLM地址，#后面是memo_id)",
    "xlm_memo_tips_qr": "往钱包转币务必指定memo_id，否则无法入账，下面#前面是XLM地址，#后面是memo_id。",
    "other": "其他",
    "confirm": "确定",
    "transfer_history": "转账记录",
    "select_coin": "请先选择币种",
    "pls_enter_your": "请输入您的",
    "address": "地址",
    "pls_enter_your_friends": "请输入好友账号",
    "plsEnter_note": "请添写备注",
    "note_length": "备注长度不能超过20个字符",
    "note_length110": "备注长度不能超过110个字符",
    "empty_email": "邮箱不能为空！",
    "false_email": "邮箱格式不正确！",
    "empty_phone": "手机号不能为空！",
    "false_phone": "手机号格式不正确哦！",
    "empty_account": "账号不能为空！",
    "false_account": "账号格式不正确哦！",
    "update_success": "修改成功！",
    "go_binEmail": "需要先绑定邮箱！",
    "invite_not_yet": "还没有邀请到好友哦，继续加油吧",
    "finish_transfer": "完成兑换",
    "not_finish_transfer": "待完成兑换",
    "will_get": "您预计获得 ",
    "have_get": "您已获得 ",
    "gasTip": "当链上拥堵时，为确保您的交易顺利完成，矿工费会有所提高。",
    "withdraw_fee_tip": "当链上拥堵时，为确保提币顺利完成，手续费会适当提高。",
    "sending_tip": "<p>如果提币半小时没有到账，请联系客服人员。</p>\n" +
        "<p>客服微信：swftcoin2</p> \n" +
        "<p>客服QQ：3297137690</p>",
    "deposit_coin_amt_empty": "存币数量不能为空",
    "receive_coin_amt_empty": "接收币数量不能为空",
    "share_link_title": "熊市轻松赚币 SWFT动动手指 套币神器",
    "share_ex_title": "我又开始套利了！",
    "ask_cancel": "确认撤销此订单？",
    "ok_btn": "确认",
    "cancel_btn": "取消",
    "deposit_range_pmd": "存币范围",
    "User_exists": "该用户存在",
    "oneClickEx": "一键兑换",
    "heightEx": "去中心化兑换",
    "limitEx": "限价兑换",
    "enter_limit_num": "请输入限价兑换数量",
    "Support_Advanced": "暂不支持去中心化兑换",
    "Invalid_packet": "无效的红包",
    "enter_login_account": "请登录当前登录账号",
    "ex_deduct": "兑换扣币",
    "ex_send": "兑换发币",
    "ex_refund": "兑换退币",
    "limit_deduct": "限价兑换扣币",
    "limit_refund": "限价兑换退币",
    "limit_send": "限价兑换发币",
    "round_limit_deduct": "兑回扣币",
    "round_limit_send": "兑回发币",
    "round_limit_refund": "兑回退币",
    "intra_transfer": "转账",
    "shop_transfer": "商城交易",
    "CB": "充币",
    "TB": "提币",
    "reward2user": "奖励",
    "redpacket": "红包",
    "redpacket_out": "发出红包",
    "redpacket_in": "收到红包",
    "redpacket_refund": "退回红包",
    "none_data": "已加载所有记录",
    "tender_deduct": "理财扣币",
    "tender_receive": "理财赎回",
    "tender_deduct_success": "扣币成功",
    "tender_receive_success": "赎回成功",
    // "redPacket_tip_bind_weChat":"绑定微信抢红包更快哦！",
    // "go_bind":"去绑定",
    "round_loss_tip": "当前币种深度将影响实际兑换数量，请谨慎交易",
    "Continue": "继续交易",
    "noMarketDe": "该币种暂时没有详情",
    "noMarketK": "该币种暂时没有趋势图",
    "int_check": "请输入整数",
    "pin_packet": "拼手气红包",
    "normal_packet": "普通红包",
    "pin": "拼",
    "pay_amt": "请输入付款金额",
    "request_amt": "请输入收款金额",
    "pay_coin": "请选择币种",
    "pay": "付款",
    "request": "收款",
    "pay_refund": "支付退款",
    "no_record": "暂无记录",
    "amount_illegal": "输入金额不合法",
    "wait_pay": "等待对方收款",
    "paying": "支付中",
    "timeout_pay_refund": "超时退回",
    "refund_success": "退款成功",
    "request_success": "收款成功",
    "pay_success": "付款成功",
    "bring_fee": "提币数量需大于手续费",
    "hour": "小时",
    "enter_pay_person": "请输入收款人",
    "enter_delay_person": "若开启担保支付需填写收款人",
    "coin": "选择币种",
    "TRANSFER_DELAY_SEND": "待放款",
    'WAIT_RECEIVE':'等待对方收款',
    "TRANSFER_WAIT_PAY": "等待对方放款",
    "TRANSFER_CANCEL_PAY": "交易取消",
    "PAY_FREEZE": "协商中",
    "PAY_CANCEL": "交易取消",
    "TRANSFER_WAIT_REFUND": "等待退款",
    "complete_order_API": "该笔交易已支付成功，请勿重复操作",
    "apply_let_ask": "是否申请放款",
    "cancel_trade_ask": "是否撤销交易",
    "confirm_let_ask": "是否放款",
    "apply_cancel_ask": "是否申请撤销交易",
    "Release_successful": "放款成功",
    "apply_cancel_successfully": "已发起撤销请求，等待对方同意",
    "Cancel_success": "已发起撤销请求，该笔交易取消",
    "apply_let_success": "已向对方发送放款请求",
    "pls_address": "请确保地址填写正确，否则无法找回",
    "pay_link_pls_google": "您支付的金额较高，为了您的资产安全，请您前往APP“我的>设置>谷歌身份验证”选项中绑定谷歌验证码",
    "pay_link_pls_google1": "您支付的金额较高，为了您的资产安全，请您前往“我的>设置>谷歌身份验证”选项中绑定谷歌验证码",
    "repeat_yzm": "网络开小差了,请再次获取验证码登录",
    "close_traceMode": "请关闭浏览器无痕模式,使用正常模式访问。",
    "no_market_detail": "暂无行情，请稍后再试",
    "hongbao_share_title": "限时免费领取",
    "hongbao_share_title1": "红包，手慢无！",
    "hongbao_share_title_plo": "限时免费领取",
    "hongbao_share_title_plo1": "红包，手慢无！PLO今日上线coinbig.org",
    "web_share_title": "SWFT Pay跨链闪兑交易&聚合支付平台",
    "web_share_desc": "硅谷媒体赞誉为\"区块链行业的Paypal\"，点击进行免认证去中心化闪兑 >>",
    "total_out": "总共发出{0}个",
    "total_in": "总共收到{0}个",
    "single_red_exceed": "单个红包金额不能超过 {0} {1}",
    "single_red_less": "单个红包金额不能小于 {0} {1}",
    "now_type_red": "当前为{}，",
    "decimalNumber": "小数点后不能超过{0}位数字",
    "redPacket_not_range": "发红包金额或个数不在规定范围内，请重新输入",
    "memo_click_tip": "{0} 提币同时需要一个提币地址和 {0} memo",
    "memo_tip_recharge": "4、充值{0}时，需填写{0} memo标签，否则将导致充值无法到账",
    "memo_tip_recharge1": "充值{0}同时需要一个充值地址和{0} memo。注意：如果未遵守正确的{0}充值步骤，币会丢失！",
    "withdraw_memo_err": "请填写memo",
    "memo_click_tip_rechange": "充值 {0} 时，需填写{0} memo标签，否则将导致充值无法到账",
    "pls_enter_account": "请输入SWFT Blockchain 账号",
    "packet_num": "请输入红包个数",
    "packet_amt": "请输入红包总数量",
    "is_create_account": "是否使用 {0} 自动创建SWFT账号并领取该红包?领取后首次登录请使用验证码登录",
    "Unverified": "未认证",
    "Verified": "已认证",
    "In_eview": "审核中",
    "Not_pass": "未通过",
    "up_success": "上传成功",
    "click_up": "点击上传",
    "Trade_return": "交易返还",
    "Trade_deduction": "交易扣币",
    "Trade_issue": "交易发币",
    "Trade_refund": "交易退币",
    "Return_successful": "返还成功",
    "pls_enter_name": "请输入姓名",
    "pls_country": "请选择国籍",
    "pls_card_type": "请选择证件类型",
    "pls_card_num": "请输入证件号码",
    "pls_up_front_img": "请上传证件正面照片",
    "pls_up_reverse_img": "请上传证件反面照片",
    "pls_up_hand_img": "请上传手持证件照片",
    "pls_up_video": "请清晰读出右侧数字并上传视频",
    "pls_up_img_format": "您上传的图片格式不正确，请选择'.jpg/.png/.jpeg'格式！",
    "buy": "买入",
    "sell": "卖出",
    "buy1": "买",
    "sell1": "卖",
    "pend_Price": "委托价",
    "pend_Amount": "委托量",
    "Executed": "实际成交",
    'Unexecuted':'未成交',
    "Enter_Price": "请输入价格",
    "Enter_Amount": "请输入数量",
    "Cancelled": "已撤销",
    "Completed": "已成交",
    "Partially_completed": "部分成交",
    "Partially_completed1": "部分成交",
    "Avg_Price": "成交均价",
    "Executed_amt": "成交量",
    'pairs':'交易对',
    'direction':'订单方向',
    'action':'操作',
    'status':'状态',
    "Total_Turnover": "成交总额",
    "trade_o_success": "委托成功",
    "group_by_tip1": "1.用户可使用线包内任意币种进行认购,每人认购度上限为 {0}",
    "group_by_tip2": "2.认购后,认购币将进入仓户,团购币总的{0}%将在第二天放至线包,{1}%在{2}天后样放,剩余{3}%将在团购{4}天后",
    "group_by_tip3": "每个号限与一次",
    "group_by_tip4": "SWFT Blockchain田队保留对此活动的最解",
    "first_recoed": "第{0}期团购",
    "first_recoed1": "第 {0} 期",
    "Token_Sale_Phase": "超级团购 第{0}期",
    "yesterday_amt": "昨日收益",
    "Total_earnings": "累计收益",
    "details": "详情",
    "Y_released": "已释放",
    "N_released": "待释放",
    "releasedTime": "释放时间",
    "releasedAmt": "释放数量",
    "releaseStatus": "释放状态",
    "Number_locks": "锁仓数量",
    "Locking_period": "锁仓周期",
    "Start_time": "开始时间",
    "end_time": "结束时间",
    "Status_lock": "锁仓状态",
    "Locking_lock": "锁仓中",
    "Unlocked_lock": "已释放",
    "Token_sale_deduction": "团购扣币",
    "Token_sale_issue": "团购发币",
    "Token_sale_refund": "团购退币",
    "day": "天",
    "Select_records": '请选择要删除的历史记录',
    "Confirm_elete": '是否删除已选中的交易记录',
    "pack up": "收起",
    "Time": "时间",
    "Fee": "手续费",
    "active_noStart": "活动尚未开始",
    "Actual_time": "实际用时",
    "Total_amount": "团购总额",
    "Price": "团购折扣",
    "Currency": "团购币种",
    "Activity_time": "活动时间",
    "Buy_orders": "买盘",
    "Sell_orders": "卖盘",
    "enter_memo": "请输入{0} memo",
    "receive_addre": "请输入{0}接收地址",
    "refund_addre": "请输入{0}地址",
    'k_time': '时间',
    'k_direction': '方向',
    'k_price': '价格',
    'k_num': '数量',
    "depthMap": '深度图',
    "kMap": 'K线图',
    "issueDate": "发行时间",
    "tokenAmount": "发行数量",
    "totalAmount": "流通总量",
    'tokenPrice': '众筹价格',
    'whitePaper': '白皮书',
    'webSite': '官网',
    'blockExplore': '区块查询',
    'introduce': '简介',
    "login_phone_emailPlaceholder": "输入您的邮箱/手机号",
    "goLook": "去查看",
    "SWFTredPrompt": "红包个数需大于10方可开启分享",
    // otc
    "otc_buy": "OTC买入",
    "otc_sell": "OTC卖出",
    "otc_refund": "OTC退回",
    "otc_buy_completed": "买入成功",
    "otc_sell_completed": "卖出成功",
    "otc_refund_completed": "退回成功",

    // 理财
    "noInviter": "请填写账号",
    "financeAccountNo": "邀请人账号不存在",
    "inputPW": "请输入密码",
    "errPW": "密码错误",
    "received": "已领取",
    "receive_btn": "立即领取",
    "noRedPacket": "暂无可领红包",

    //借贷
    "dailyRaminimumBorrowte": "{0} USDT起借",
    'SWFTLoan': '借贷',
    'dailyRate': '日利率低至万{0}',
    'fastSecond': '最快1秒放款',
    'minimumBorrow': '{0} {1} 起借',
    'maxBorrowUSDT': '最高可借 ({0})',
    'borrow': '借款',
    'whatSWFTloan': '什么是SWFT贷？',
    'myLoans': '我的借款',
    'repayHistory': '我的还款',
    'borrowing': '我要借',
    'selectCurrency': '选择币种',
    'minBorrowAmount': '借款金额{0} {1}起',
    'pleaseBorrowAmout': '请输入借款金额',
    'releasedImmediately': '预计下单后立即放款',
    'collateralCoins': '质押币种',
    'currentPledgeRate': '当前选择币种质押率:{0}',
    'period': '借款时长',
    'Months': '个月',
    "Days":"天",
    'repaymentOptions': '还款方式',
    'principalAllOnce': '提前付息，一次还本',
    'emergencyContact': '紧急联系方式',
    'fillPhoneOrEmail': '请填写手机号或邮箱',
    'description': '说明：',
    'description1': '1.提前付息，到期一次性还本',
    'description2': '2.请确保您的注册/绑定手机号以及填写的紧急联系方式处于可联系状态，以便我们可以第一时间联系到您，当行情出现风险时，我们将协助您处理质押资产的各种风控问题，避免出现损失',
    'DailyInterestRate': '日利率：',
    'next': '下一步',
    'arrivalAmount': '到账数量',
    'ConfirmBorrow': '确认借款',
    'congratulationsSuccessful': '恭喜您成功借款',
    'canViewDetails': '您可前往“我的借款”页面查看借款详情',
    'RepaySuccessful': '恭喜您成功还款',
    'canViewRepayDetails': '您可前往“我的还款”页面查看还款详情',
    'pleaseRepayment': '请在到期时间当日24:00前还款，以免产生逾期费用',
    'complete_borrow': '完成',
    'noRecords_jie': '暂无借款记录',
    'noRecords_huan': '暂无还款记录',
    'orderNumber': '订单号',
    'stillPaidUSDT': '剩余应还（USDT）',
    'stillPaidBTC': '剩余应还（BTC）',
    'overdue': '已逾期',
    'goRepay': '去还款',
    'DailyIterestRate_title': '日利率',
    'totalInterest': '总利息',
    'collateralCount': '质押',
    'borrowingPeriod': '借款时长',
    'orderTime': '借款时间',
    'expiration': '到期时间',
    'repay': '还款',
    'borrowAmout': '借款金额',
    'repayAmout': '还款金额：',
    'repaymentAmountUSDT': '还款金额（USDT）',
    'dueDate': '到期还款日',
    'overdueFee': '逾期手续费',
    'total': '总计',
    'confirmRepay': '确认还款',
    'pleaseEmail': '请填写紧急联系方式',
    'inputAmount': '请输入借款金额',
    'borrowLess': '借款金额不能小于 {0} {1}',
    'borrowExceed': '借款金额不能大于 {0} {1}',
    'ref_success': '还款成功',
    'clear_warehouse_ing': '平仓中',
    'clear_warehouse_success': '已平仓',
    'wait_repayment': '还款中',
    'repayment_deduct':'还款扣币',
    'loan_refund':'质押退回',
    'loan_deduct':'借款扣币',
    'loan_send':'借款发币',
    'repayment_deduct_success':'扣币成功',
    'loan_refund_success':'退回成功',
    'loan_deduct_success':'扣币成功',
    'loan_send_success':'发币成功',
    "overdue":"已逾期",
    'isSupportAdvanced':'当前币种{0}暂不支持跨链兑换',
    'buyinputRange':'请输入金额：{0}-{1}',
    'sellinputRange':'请输入金额：{0}-{1}',
    'buyinputRangeNum':'请输入数量：{0}-{1}',
    'sellinputRangeNum':'请输入数量：{0}-{1}',
    'upgrade':'合约升级',
    'upgrade_success':'升级成功',
    'transfer_fee':'内部转账将收取{0}%的手续费',
    'onlyPayway':'该承兑商目前支持的支付方式为{0}',
    'memo_length_exceeds20':'memo长度超出20字符',
    'memo_length_exceeds32':'memo长度超出32字符',

    'SPRTSwithdraw_max':'SPRTS的最大提币数量不可超过 30000000000',
    'tw_pwd_not_same':'两次密码不一致',
    'enter_withdraw_amount':'请输入提币数量',
    'enter_transfer_amount':'请输入转账数量',
    'minwithdraw_amount':'最小提币数量为：{0}',
    'maxwithdraw_amount':'最大提币数量为：{0}',
    'KYC_no':'您还未完成身份认证，请先完成认证',
    'KYC_no_exchange':'您还未完成身份认证，请先完成认证',
    'KYC_no_withdrawal':'您还未完成身份认证，请先完成认证',
    'KYC_review':'您的实名认证正在审核，请耐心等待',
    // 'KYC_failure':"您的身份认证失败，请重新完成认证。如有任何问题请联系客服微信：swftcoin2.",
    "plsLogin_exchange": "请先登录！",
    'login_later':'取消',
    'login_register':'去登录',
    "verifynow":"去认证",


    //币种信息列表
    'havecoinNumber':'支持{0}种资产',
    "toverify":"去认证",
    "UNPnoChangeKGP":"{0}目前只支持兑换为{1}",
    
    "900": "当前访问人数过多，请稍后重试",
    "901": "请求参数不全",
    "902": "系统启动中",
    "903": "认证失败",
    "907": "必填字段为空",
    "911": "系统处理错误",
    "912": "系统无此数据",
    "913": "存入货币币种不存在",
    "914": "接收货币币种不存在",
    "915": "存入和接收货币不能相同",
    "916": "接收地址不合法",
    "917": "退款地址不合法",
    "918": "目标地址和退款地址不能相同",
    "919": "存币金额不合法",
    "920": "接收币金额不合法",
    "921": "存币金额不在存储范围内",//todo 特殊处理
    "924": "币种交换方式不存在",
    "925": "兑换方式不正确",
    "201": "设备来源不存在",
    "202": "存币金额小数位数太长",
    "203": "获取存币地址失败",
    "204": "手续费方式不存在",
    "207": "地址类型不存在",
    "213": "非法请求",
    "214": "币种不存在",
    "215": "地址不合法",
    "216": "金额数量不合法",
    "217": "账户余额不足",
    "218": "该币种不支持兑换，请重新选择",
    "219": "转账数量不合法",
    "220": "不能给自己转账",
    "221": "转账账户不存在",
    "222": "不能添加自己为好友",
    "223": "SWFTC数量不足",
    "224": "订单正在交易中，无法撤销",
    "225": "挂单数量超过最大限制",
    "226": "账号已存在，不能重复添加",
    "228": "未注册谷壳宝",
    "229": "谷壳宝账户钱包地址为空",
    "230": "系统繁忙",
    "231": "未知错误",
    "232": "用户已被拉入黑名单",
    "233": "接口认证失败",
    "234": "红包类型不存在",
    "235": "红包数量或个数不合法",
    "236": "登陆密码错误",
    "237": "红包不存在",
    "238": "手慢了，红包派完了",
    "239": "该红包已超时",
    "240": "该账号已经领过红包，不能重复领取",
    "241": "系统无此红包数据",
    "242": "此邮箱无法注册",
    "243": "未绑定过swft账号,请先绑定或注册swft账号",
    "244": "您已绑定过其他账号，请先解绑原账号，再绑定新账号",
    "245": "用户未授权",
    "246": "获取AccessToken失败",
    "247": "需要用户重新授权",
    "248": "刷新AccessToken失败",
    "249": "请去掉gmail用户名中的小数点",
    "250": "钱包内SWFTC余额不足100，请先充币",
    "251": "非打谷时间",
    "252": "备注长度超出50个字符",
    "266": "小数点不能超过两位数",
    "267": "服务器升级维护中",
    "270": "提币金额小数点后不能超过4位",
    "271": "该币种提币金额只能为整数",
    "272": "密码已初始化，请用旧密码登陆",
    "273": "请先初始化密码",
    "274": "抵押额度不足",
    "275": "获取openId失败",
    "276": "获取unionId失败",
    "277": "{0} 买单不足",
    "278": "{0} 卖单不足",
    "279": "小数点后不能超过三位数字",
    "300": "暂无承兑商信息",
    "301": "金额精度过长",
    "302": "数量精度过长",
    "303": "您的下单金额不在设定范围",
    "304": "支付方式不存在",
    "305": "承兑商余额不足",
    "306": "操作失败，状态异常",
    "307": "支付方式未绑定",
    "308": "您当日已取消订单三次，无法再次下单，请明天再试",
    "309": "您有一笔买单正在进行中，完成后方可再次购买",
    "310": "您有一笔卖单正在进行中，完成后方可再次出售",
    "311": "当天交易额度达到上限",
    "312": "您的当日交易额已达上限，请明天再试",
    "313": "该承兑商当日交易额已达上限，请选择其他承兑商或明天再试",
    "314": "单笔交易额度超过上限",
    "315": "红包已领取或已超时",
    "850": "表示不在活动期间",
    "950": "用户名或者密码错误",
    "951": "请先登录",//todo 特殊处理
    "952": "可用余额不足",
    "953": "钱包地址不存在",
    "954": "提币金额不合法",
    "955": "初始化用户失败",
    "956": "账户已注册",
    "957": "手机号/邮箱不合法",
    "958": "请确保密码长度为6-20位",
    "959": "两次密码不一致",
    "960": "账户已注册",
    "962": "原始密码错误",
    "963": "邮箱格式不合法",
    "964": "用户名不存在",
    "965": "链接失效，请重新请求",
    "968": "提币失败！请确保您账户中有",//todo 特殊处理
    "969": "验证码发送失败",
    "970": "手机号格式错误",
    "971": "验证码错误",
    "972": "操作频繁，请稍后再试",
    "973": "提币地址不能为账户地址",
    "974": "币种已经增加过",
    "975": "查无此结果",
    "976": "备注长度超出20个字符",
    "977": "今日获取验证码次数已超过限制",
    "978": "平台来源不存在",
    "979": "密码错误",
    "980": "短信验证码错误",
    "981": "邮箱验证码错误",
    "982": "未绑定邮箱，请先绑定邮箱",
    "983": "验证码类型不存在",
    "984": "验证码错误",
    "985": "邮箱已绑定其他账号",
    "986": "手机号已绑定其他账号",
    "987": "登录失败次数超过最大限制",
    "988": "当天修改密码次数超过限制",
    "989": "账户已锁定，请联系客服",
    "990": "账户已绑定谷歌验证码",
    "991": "请先绑定谷歌验证码",
    "992": "google验证码错误",
    "1000": "超过限定额度",
    "1001": "审核不通过",
    "1002": "订单不存在",
    "1003": "订单已存币",
    "1004": "汇率损失超过阈值，停止兑换",
    "1005": "订单已失效",
    "1006": "基本户不存在",
    "1007": "图片验证码不正确",
    "1008": "图片验证码不正确",
    "1009": "该笔付款已被领取!",
    "1010": "小数点后不能超过{0}位数字",
    "1011": "该币种暂不支持充币",
    "1012": "您已经注册谷壳宝，可以直接用谷壳宝账号密码登录",
    "1013": "该笔订单已放款",
    "1014": "该订单对方已撤销交易",
    "1015": "您已对该交易发起过放款申请",
    "1016": "您已对该交易发起过撤销申请",
    "1017": "第三方渠道未在SWFT开户或SWFT账号不存在",
    "1018": "第三方渠道SWFT账号未配置",
    "1019": "第三方渠道号未配置",
    "1020": "支付订单与渠道方信息不一致",
    "1021": "订单已支付，不能重复支付",
    "1022": "付款用户不存在",
    "1023": "放款中请稍后",
    "1024": "付款方已放款",
    "1025": "已发送放款请求",
    "1026": "订单已取消",
    "1027": "交易已完成",
    "1028": "撤销中请稍后",
    "1029": "已发送撤销请求",
    "1030": "请联系客服进行协商",
    "1031": "备注长度超出50个字符",
    "1032": "第三方渠道支付页面地址未配置",
    "1033": "已发起撤销请求，该笔交易取消",
    "1034": "该币种不支持高级收款",
    "1035": "收款金额无法支付矿工费",
    "1036": "发红包金额超过今日上限，请联系客服",
    "1037": "支付金额超过今日上限，请联系客服",
    "1038": "备注长度超出限定字符",
    "1039": "验证码为空",
    "1040": "已认证",
    "1041": "审核中",
    "1042": "上传图片不合法",
    "1043": "您今日提币总金额较高，请先完成身份认证，再进行提币",
    "1044": "证件号已被注册",
    "1045": "图片尺寸超过限制",
    "1046": "您的身份信息正在审核中，请等待审核通过后提币",
    "1053": "当前币种未开放理财功能",
    "1054": "锁仓周期不符合要求",
    "1055": "锁仓数量不符合要求",
    "1056": "邀请人账号不存在",
    "1057": "SWFT理财账号未配置",
    "1058": "SWFT理财账号不存在",
    "1059": "转账到SWFT理财账号时出错",
    "1060": "邀请人不能为本人",
    "1061": "该账户尚未创建密码，请使用验证码登陆",
    "1062": '由于您的账号存在违规行为，暂时无法发红包',
    "1063": "进行OTC交易前，请先完成身份认证",
    "1064": '身份认证审核中，请稍后再试',
    "1065": '上传视频不符合要求',
    "1066": '您的身份认证失败，请重新完成认证',
    "1067": '实际到账数量不得小于：{0}',
    "1068": '您还未完成身份认证，请先完成认证',
    "1069": '您的实名认证正在审核，请耐心等待',
    // 实际到账数量不得大于：{0},
    "1100": "交易对不合法",
    "1101": "交易对不存在",
    "1102": "深度不存在",
    "1103": "交易类型不合法",
    "1104": "交易价格不合法",
    "1105": "交易价格精度过长",
    "1106": "交易数量不合法",
    "1107": "交易数量精度过长",
    "1108": "最小交易量不能低于{0} {1}",
    "1109": "最小交易额不能低于{0} {1}",
    "1110": "撤销完成",
    "1111": "撤销失败",
    "1112": "请先同意服务条款",
    "1113": "买入价不能高于现价的110%",
    "1114": "卖出价不能低于现价的90%",
    "1115": "剩余认购额度不足",
    "1116": "超过人均认购额度上限",
    "1117": "活动已截止",
    "1118": "认购数量与活动规定数量不一致",
    "1119": "每个用户仅限参与一次",
    "1122": "即将开放",
    "1047": "当前币种暂时停止提币功能",
    "1048": "当前币种暂时停止充币功能",
    "1123": "还款中",
    "1124": "还款已成功",
    "1125": "该币种暂不支持借款",
    "1126": "该币种暂不支持质押",
    "1127": "借款币种与质押币种不能相同",
    "1128": "数据库参数配置错误",
    "1129": "借款时长不符合要求",
    "1130": "借款金额不符合要求",
    "1131": "紧急联系人手机或邮箱格式错误",
    "1132": "借款订单不存在",
    "1133": "订单信息有误，非本人订单",
    "1134": "第三方登录渠道列表未配置",
    "1137": "红包总额大于{0} USDT方可分享至SWFT",
    "1138": "该信息已存在,无法重复添加",
    "1139": "最多可激活3个支付方式",
    "available": "可用: ",
    "suspended": "冻结: ",
    "share_to": "分享到: ",
    "all": "全部",
    
};
var en = {
    "displayLan": "en",
    "complete_order": "The payment has been received!",
    "invalid_order": "Invalid order!",
    "invalid_link": "Invalid link!",
    "payment_tips": "You are paying to {0}, please be cautious",
    "payment_confirm_tips": "You will pay {0} {1} to {2}, do you want to continue?",
    "lack_pic_captcha": "Please enter image verification code",
    "pay_payment_success": "Payment completed!",
    "pay_receive_success": "Request completed!",
    "limit_tips": "The limit rate can not be less than 95% of the market rate!",
    "withdraw_tips": "Withdrawal of this coin is temporarily unavailable.",
    "deposit_tips": "Deposit of this coin is temporarily unavailable.",
    "inner_transfer_tips": "Transaction function temporarily suspended",
    "checkNet": "Please check the network and try again later !",
    "plsLogin": "Please Login !",
    "plsLogin_app": "Please Login APP",
    "goLogin": "login",
    "go_charge": "Deposit",
    "cannot_change": "Currency cannot be exchanged",
    "deposit_range": "The amount of the deposit is not in the range",
    "deposit_illegal": "The entered amount is invalid",
    "got_it": "Ok",
    "withdraw_record": "Withdraw record",
    "withdraw_address": "Withdraw address",
    "limit_deposit_num": "Please enter amount",
    "limit_receive_num": "Please enter amount",
    "send_ing": "Transferring",
    "transfer_ing": "Transferring",
    "send_success": "Token issue successful",
    "sed_success": "Withdrawal successful",
    "charge_record": "Deposit record",
    "charge_address": "Deposit address",
    "charge_success": "Deposit successful",
    "ex_out_success": "Token deduction successful",
    "ex_refund_success": "Refund successful",
    "refunded": "Refunded",
    "order_time": "Time",
    "order_id": "Order Number",
    "old_pwd_not_null": "Old passwords cannot be empty !",
    "new_pwd_not_null": "The new password cannot be empty !",
    "confirm_pwd_not_null": "The confirm password cannot be empty !",
    "two_pwd_not_same": "The passwords are different !",
    "mobi_memo_tips": "MOBI deposit instructions: please identify memo_id to transfer into wallet, # MOBI Address # memo_id",
    "eos_memo_tips": "EOS deposit instructions: please identify memo to transfer into wallet, (EOS Address # memo)",
    "mobi_memo_tips_qr": "MOBI deposit instructions: please identify memo_id to transfer into wallet, # MOBI Address # memo_id",
    "eos_memo_tips_qr": "EOS deposit instructions: please identify memo to transfer into wallet, (EOS Address # memo)",
    "oct_memo_tips_qr": "OCT deposit instructions: please identify memo to transfer into wallet, (OCT Address # memo)",
    "gat_memo_tips": "GAT deposit instructions: please identify memo to transfer into wallet, # GAT Address # memo",
    "gat_memo_tips_qr": "GAT deposit instructions: please identify memo to transfer into wallet, # GAT Address # memo",
    "vet_charge_tips": "VET and ETH Blockchain addresses are independent of one another, although they share the same address, but if you try to transfer ETH or other ERC20 tokens to a VET address, they will be lost and non-refundable.",
    "xlm_memo_tips": "XLM deposit instructions: please identify memo_id to transfer into wallet, # XLM Address # memo_id",
    "xlm_memo_tips_qr": "XLM deposit instructions: please identify memo_id to transfer into wallet, # XLM Address # memo_id",
    "invalid_amt": "Invalid amount entered !",
    "support_tips": "Email : contact@swft.pro",
    "address_book": "Address",
    "friends_book": "Contacts",
    "inalid_amt": "Invalid amount",
    "amt_noNull": "The quantity cannot be empty",
    "transfer_amt_tips": "The amount isn't filled correctly",
    "withdraw_amt_tips": "The amount of withdrawal cannot be zero !",
    "withdraw_amt_err": "The available balance cannot be obtained !",
    "balance_lack_tips": "Your balance is insufficient ",
    "balance_zero_tips": "Your available balance is 0",
    "swft_notEnough": "Transaction function is temporarily suspended because your SWFTC balance is lower than 10 ",
    "unlink": "unlink",
    "link": "link",
    "transfer_friends_err": "Transfer account not filled out!",
    "transfer_err": "Transfer failed! Your transfer scope is:",
    "transfer_success": "Transfer Successful",
    "g_s_transfer_success": "Transfer Successful",
    "g_s_transfer_ing": "Transferring",
    "transfer_successful": "Transfer successful",
    "withdraw_addr_err": "The withdrawal address is not filled in !",
    "withdraw_err": "Withdraw failed! Your withdrawal amount ranges from:",
    "get_auth_code": "Send Code",
    "withdraw_success": "Withdraw Successful！",
    "withdraw_ETH_err": "ETH is not enough to withdraw coins",
    "withdraw_google_err": "Please enter Google Authentication code",  // 谷歌验证码未填写
    "lack_auth_code": "Please enter the verification code ",
    "lack_pw_code": "Please enter password",
    "lack_login_pwd": "The login password cannot be empty !",
    "bind_success": "Binding success !",
    "send_code_to": "The verification code has been sent to ",
    "send_code": "Send Code",
    "enter_phoneEmail": "Please enter phone/email",
    "enter_loginPW": "Please enter LoginPW",
    "enter_true_telEmail": "Please enter the correct phone number/mail",
    "login_fail": "Login failed! wrong user name or password",
    "pls_setPW": "Please set a password",
    "pls_enterPW": "Please enter password",
    "pls_setPW_again": "Please set password again",
    "PW_twice": "The password entered twice is inconsistent",
    "enter_code": "Please enter verification code",
    "PWLength": "Please ensure the password length is 6-20 digits",
    "register_success": "Registration is successful, please login",
    "registration_success": "Registration is successful！",
    "code_sendTo": "Verification code has been sent to",
    "email_been_send": "The email has been send.Please click on the link to retrieve your password.",
    "status_not_complete": "not_complete",
    "status_exchangeing": "Exchanging",
    "status_complete": "Complete",
    "status_timeout": "Timeout",
    "pending": "Pending",
    "wait_deposits": "Deposits",
    "limit_exchangeing": "Exchanging",
    "canceled": "Cancelled",
    "cancel": "Cancel",
    "canceling": "Cancelling",
    "cancel_success": "Already cancelled！",
    "cancel_success1": "Order Cancelled",
    "status_fail": "Fail",
    "status_refunding": "Refund...",
    "status_refund_completed": "Refund Completed",
    "refund": "Refund",
    "empty_newPW": "New password cannot be empty",
    "link_invalid": "The link is invalid, please re-initiate the request",
    "pw_set_success": "Password reset successful, please login",
    "code_illegal": "The verification code is incorrect",
    "code_send_success": "Verification code sent successfully！",
    "verification_success": "The verification was successful. Please reset your password",
    "why_refund": "Why do you need to enter refund address?",
    "why_deposit": "Why do you need to enter Receive address?",
    "because_deposit": "if the transaction is successful, this address will receive the transaction’s proceeds, please check carefully.",
    "because_refund": "if the exchange is suspended or unsuccessful, we will return all of your currency to this address.",
    "enter_receive_address": "Please enter receiving address",
    "enter_refund_address": "Please enter refund address",
    "order_exist": "Order doesn’t exist!",
    "miners": "Miner's fee ",
    "wait_deposit_send": "Deposit",
    "wait_fee_type": "Done",
    "wait_exchange_push": "Exchanging...",
    "wait_receive_send": "Sending...",
    "wait_receive_confirm": "Confirming...",
    "wait_receive_sending": "Confirming...",
    "receive_complete": "Exchange Completed",
    "receive_completed": "Completed",
    "wait_refund_sending": "Refunding...",
    "wait_refund_confirm": "Confirming...",
    "refund_complete": "Refund Completed",
    "timeout": "Timeout",
    "copy_success": "Copied successfully!",
    "feeTips": "If you have sufficient SwftCoin in your account, you will be charged a 0.1% transaction fee (paid in SwftCoin). Otherwise, you will pay a 0.2% transaction fee (charged in the original token).",
    "limitFeeTips": "0.1% transaction fee for limit orders.",
    "depositTips": "Please copy deposit address and deposit currency within quantity parameters. ",
    "EOSTips": "Notice: EOS Address # memo.",
    "nothing": "Nothing",
    "vol": "VOL(24h)",
    "add_success": "Add successful",
    "del_success": "successfully deleted",
    "loading": "Click to load more...",
    "other": "Other",
    "confirm": "Confirm",
    "transfer_history": "Transfer record",
    "select_coin": "Please choose token type first !",
    "pls_enter_your": "Please enter your ",
    "address": "Address",
    "pls_enter_your_friends": "Please enter a friend's account ID",
    "plsEnter_note": "Please enter some remarks",
    "note_length": "Create memo in 20 characters.",
    "note_length110": "Create memo in 110 characters.",
    "empty_email": "Email can not be null ！",
    "false_email": "Incorrect email format ！",
    "empty_phone": "Phone can not be null ！",
    "false_phone": "Incorrect phone format ！",
    "empty_account": "Account can not be null ！",
    "false_account": "Incorrect account format ！",
    "update_success": "Successful！",
    "go_binEmail": "You need to bind the mailbox first！",
    "invite_not_yet": "You haven't invited any friends yet, let's do it!",
    "finish_transfer": " has completed a transfer",
    "not_finish_transfer": " hasn't completed a transfer",
    "will_get": "Upon completion, you will receive ",
    "have_get": "You have already received ",
    "gasTip": "When chain traffic is congested, miners fee's will increase to ensure smooth completion of your transaction.",
    "withdraw_fee_tip": "When chain traffic is congested, miners fee's will increase to ensure smooth completion of your transaction.",
    "sending_tip": "<p>If the coin does not arrive within half an hour, please contact our customer service team</p>\n" +
        "<p>Email: contact@swft.pro</p> \n" +
        "<p>Telegram：https://t.me/SWFTBlockchain</p>",
    "deposit_coin_amt_empty": "Deposit amount can not be empty",
    "receive_coin_amt_empty": "Receiving amount can not be empty",
    "share_link_title": "Easily earn tokens in the bear market, just swipe your finger to arbitrage on SWFT.",
    "share_ex_title": "Arbitraging again!",
    "ask_cancel": "Confirm order cancellation?",
    "ok_btn": "Confirm",
    "cancel_btn": "Cancel",
    "deposit_range_pmd": "Range",
    "User_exists": "The user exists",
    "oneClickEx": "One-Click",
    "heightEx": "Decentralized Transfer",
    "limitEx": "Limit",
    "enter_limit_num": "Please enter limit order quantity",
    "Support_Advanced": " doesn't support decentralized transfers",
    "Invalid_packet": "Invalid red packet",
    "enter_login_account": "Please fill in the current login account",
    "ex_deduct": "Exchange and deduction",
    "ex_send": "Exchange and issue",
    "ex_refund": "Exchange and refund",
    "limit_deduct": "Limit order exchange and deduction",
    "limit_refund": "Limit order exchange and refund",
    "limit_send": "Limit order exchange and issue",
    "round_limit_deduct": "Redemption and deduction",
    "round_limit_send": "Redemption and issue",
    "round_limit_refund": "Redemption and refund",
    "intra_transfer": "Transfer",
    "shop_transfer": "Purchase",
    "CB": "Deposit",
    "TB": "Withdraw",
    "reward2user": "Rewards",
    "redpacket": "Red packet",
    "redpacket_out": "Send red packet",
    "redpacket_in": "Receive red packet",
    "redpacket_refund": "Return red packet",
    "none_data": "All records have been loaded",
    "tender_deduct": "Coin Deduction",
    "tender_receive": "Coin Redemption",
    "tender_deduct_success": "Deduction Successful",
    "tender_receive_success": "Redemption Successful",
    // "redPacket_tip_bind_weChat":"绑定微信抢红包更快哦！",
    // "go_bind":"去绑定",

    "round_loss_tip": "The current market price spread between buy and sell orders is unusually high. If you proceed with this swap, the final amount could be significantly lower than the amount shown.",
    "Continue": "Continue",
    "noMarketDe": "No trends and details for this token ",
    "noMarketK": "There is no trend chart for this currency.",
    "int_check": "Please enter an integer",
    "pin_packet": "Lucky red packet",
    "normal_packet": "Common red packet",
    "pin": "Luck",
    "pay_amt": "Please enter Amount",
    "request_amt": "Please enter Amount",
    "pay_coin": "Please enter Currency",
    "pay": "Pay",
    "request": "Request",
    "pay_refund": "SWFT PAY refund",
    "timeout_pay_refund": "Refunded",
    "no_record": "No record",
    "amount_illegal": "The amount entered is not legal",
    "wait_pay": "Waiting for payment",
    "paying": "Payments",
    "refund_success": "Refund successfully",
    "request_success": "Request completed",
    "pay_success": "Payment completed",
    "bring_fee": "The withdrawal amount must be greater than the withdrawal fee.",
    "hour": "h",
    "enter_pay_person": "Please enter the recipient",
    "enter_delay_person": "Please enter the recipient if you open the escrow payment",
    "coin": "Currency",
    "TRANSFER_DELAY_SEND": "Waiting for release",
    'WAIT_RECEIVE':'Waiting to receive',
    "TRANSFER_WAIT_PAY": "Waiting for release",
    "TRANSFER_CANCEL_PAY": "Transaction cancelled",
    "PAY_FREEZE": "Waiting for agreement",
    "PAY_CANCEL": "Transaction cancelled",
    "TRANSFER_WAIT_REFUND": "Waiting for refund",
    "complete_order_API": "The order has been paid successfully, please do not repeat",
    "apply_let_ask": "Request release?",
    "cancel_trade_ask": "Cancel transaction?",
    "confirm_let_ask": "Release?",
    "apply_cancel_ask": "Ask to cancel transaction?",
    "Release_successful": "Release successful",
    "apply_cancel_successfully": "The cancellation request was sent and the cancellation is pending",
    "Cancel_success": "The cancellation request was sent and the transaction has been cancelled",
    "apply_let_success": "Release request has been sent",
    "pls_address": "Please make sure the address is correct, otherwise you will not be able to retrieve it.",
    "pay_link_pls_google1": "To ensure the security of your assets, please go to \"Profile > Settings > Google Authenticator\"  to enable Google Authentication (GA)",
    "pay_link_pls_google": "The payment amount is high. To ensure the security of your assets, please go to \"Profile > Settings > Google Authenticator\"  to enable Google Authentication (GA) and get a GA code.",
    "repeat_yzm": "The network is running out, please get the verification code again.",
    "close_traceMode": "Please close the browser in no trace mode and access in normal mode.",
    "no_market_detail": "Could not find details on this currency",
    "hongbao_share_title": "I just sent you a red packet! Open it now!",
    "hongbao_share_title1": "",
    "hongbao_share_title_plo": "I just sent you a red packet! Open it now!",
    "hongbao_share_title_plo1": "",
    "web_share_title": "SWFT Pay, cross chain crypto transfer and payment network. ",
    "web_share_desc": "Being featured as next PayPal on blockchain in Silicon Valley. Register for free now!",
    "total_out": "{0} Sent",
    "total_in": "{0} Received",
    "single_red_exceed": "One red packet cannot exceed {0} {1}",
    "single_red_less": "The amount of a single red packet cannot be less than {0} {1}",
    "now_type_red": "",
    "decimalNumber": "Cannot exceed {0} digits after the decimal point",
    "redPacket_not_range": "The amount or number of red packet is not within the specified range. Please re-enter",

    "memo_click_tip": "{0} withdrawals require both a withdrawal address and a {0} memo",
    "memo_tip_recharge": "4、Depositing {0} requires both a deposit address and a {0} deposit memo, failure to follow correct deposit procedure will result in lost deposits.",
    "memo_tip_recharge1": "Depositing {0} requires both a deposit address and an {0} deposit memo.Warning: Failure to follow correct {0} deposit procedure will result in lost deposits.",
    "withdraw_memo_err": "Please enter memo",
    "memo_click_tip_rechange": "Depositing {0} requires both a deposit address and a {0} deposit memo.Warning: Failure to follow correct {0} deposit procedure will result in lost deposits.",
    "pls_enter_account": "Please SWFT Blockchain account",
    "packet_num": "Please enter the number of red packets",
    "packet_amt": "Please enter the total number of red packets",
    "is_create_account": "Do you want to automatically create a SWFT Blockchain account and receive the red packet using {0}? Please login with verification code after receiving your first red packet.",
    "Unverified": "Verify your account",
    "Verified": "Verified",
    "In_eview": "In review",
    "Not_pass": "Unsuccessful",
    "up_success": "Success",
    "click_up": "Upload",
    "Trade_return": "Trade and return",
    "Trade_deduction": "Trade and deduction",
    "Trade_issue": "Trade and issue",
    "Trade_refund": "Trade and refund",
    "Return_successful": "Return successful",
    "pls_enter_name": "Please enter your name",
    "pls_country": "Please choose nationality",
    "pls_card_type": "Please select Document Type ",
    "pls_card_num": "Please enter your document number ",
    "pls_up_front_img": "Please upload the front of the document",
    "pls_up_reverse_img": "Please upload the reverse side of the document",
    "pls_up_hand_img": "Please upload the photo you hold your document",
    "pls_up_video": "Record a video of yourself reading the numbers on the right",
    "pls_up_img_format": "The image you uploaded is not in the correct format, please upload it in '.jpg/.png/.jpeg' format!",
    "buy": "Buy",
    "sell": "Sell",
    "buy1": "Buy",
    "sell1": "Sell",
    "pend_Price": "Price",
    "pend_Amount": "Amount",
    "Executed": "Executed",
    'Unexecuted':'Unexecuted',
    "Enter_Price": "Please Enter Price",
    "Enter_Amount": "Please Enter Amount",
    "Cancelled": "Cancelled",
    "Completed": "Completed",
    "Partially_completed": "Partially completed",
    "Partially_completed1": "Partially",
    "Avg_Price": "Avg Price",
    "Executed_amt": "Executed",
    'pairs':'Trading Pairs',
    'direction':'Order Direction',
    'action':'Action',
    'status':'Status',
    "Total_Turnover": "Total Turnover",
    "trade_o_success": "Order Successful",
    "first_recoed": "Phase {0}",
    "first_recoed1": "Phase {0}",
    "Token_Sale_Phase": "Token Sale Phase {0}",
    "yesterday_amt": "Yesterday's earnings",
    "Total_earnings": "Total earnings",
    "details": "Details",
    "Y_released": "Released",
    "N_released": "To be released",
    "releasedTime": "Release time",
    "releasedAmt": "Release amount",
    "releaseStatus": "Status",
    "Number_locks": "Amount locked",
    "Locking_period": "Locking period",
    "Start_time": "Start",
    "end_time": "End",
    "Status_lock": "Status",
    "Locking_lock": "Locking",
    "Unlocked_lock": "Unlocked",
    "Token_sale_deduction": "Token sale and deduction",
    "Token_sale_issue": "Token sale and issue",
    "Token_sale_refund": "Token sale and refund",
    "day": "d",
    "Select_records": 'Select the transactions you want to delete',
    "Confirm_elete": 'Do you want to delete the selected transaction records?',
    "pack up": "Pack up",
    "Time": "Time",
    "Fee": "Fee",
    "active_noStart": "Activity has not yet started",
    "Actual_time": "Duration",
    "Total_amount": "Total amount",
    "Price": "Price",
    "Currency": "Currency",
    "Activity_time": "Activity time",
    "Buy_orders": "Buy",
    "Sell_orders": "Sell",
    "enter_memo": "Enter {0} memo",
    "receive_addre": "Enter {0} receive address",
    "refund_addre": "Enter {0} refund address",
    'k_time': 'Time',
    'k_direction': 'Type',
    'k_price': 'Price',
    'k_num': 'Amount',
    "depthMap": 'Depth',
    "kMap": 'Candle',
    "issueDate": "Issus Time",
    "tokenAmount": "Token Amount",
    "totalAmount": "TotalAmount",
    'tokenPrice': 'Token Price',
    'whitePaper': 'Write Paper',
    'webSite': 'Official Website',
    'blockExplore': 'Block Explorer',
    'introduce': 'Intorduction',
    "login_phone_emailPlaceholder": "Enter Your Email",
    "goLook": "Details",
    "SWFTredPrompt": "The number of Red Packet should be more than 10",
    // otc
    "otc_buy": "Buy",
    "otc_sell": "Sell",
    "otc_refund": "Refund",
    "otc_buy_completed": "Completed",
    "otc_sell_completed": "Completed",
    "otc_refund_completed": "Refund successful",


    // 理财
    "noInviter": "Please enter an account",
    "financeAccountNo": "The inviter account does not exist",
    "inputPW": "Please enter password",
    "errPW": "Password error",
    "received": "Claimed",
    "receive_btn": "Claim Now",
    "noRedPacket": "No claimable red packet",

    //借贷
    "dailyRaminimumBorrowte": "Minimum Borrow Amount {0} USDT ",
    "Months": "months",
    "Days":"days",
    'SWFTLoan': 'Lending',
    'dailyRate': 'Daily interest rate: {0}',
    'fastSecond': 'Get it in 1 second',
    'minimumBorrow': 'Minimum Borrow Amount {0} {1}',
    'maxBorrowUSDT': 'Maximum Borrow Amount ({0})',
    'borrow': 'Borrow',
    'whatSWFTloan': 'What is SWFT loan?',
    'myLoans': 'My Loans',
    'repayHistory': 'Repay history',
    'borrowing': 'Borrow',
    'selectCurrency': 'Select currency',
    'minBorrowAmount': 'Borrow amount (minimum {0} {1})',
    'pleaseBorrowAmout': 'Please input borrowAmout',
    'releasedImmediately': 'Your currency will be released immediately',
    'collateralCoins': 'Collateral coins',
    'currentPledgeRate': 'Current pledge rate:{0}',
    'period': 'Period',
    'repaymentOptions': 'Repayment options',
    'principalAllOnce': 'Pay interest in advance and repay the principal all at once.',
    'emergencyContact': 'Emergency contact ',
    'fillPhoneOrEmail': 'Please fill email address',
    'description': 'Description:',
    'description1': '1. Pay interest in advance and repay the principal all at once. ',
    'description2': '2. Please ensure that your registration/binding mobile number and the emergency contact information are in contact, so that we can contact you whenever necessary. If the market is at risk, we will assist you in handling the various pledge assets. We will control any problems to avoid as many unnecessary losses as possible.',
    'DailyInterestRate': 'Daily interest rate:',
    'next': 'Next',
    'arrivalAmount': 'You will get the loan on (date)',
    'ConfirmBorrow': 'Confirm and borrow',
    'congratulationsSuccessful': 'Congratulations on your successful loan of',
    'canViewDetails': 'You can go to the "My Loans" page to view the loan details.',
    'RepaySuccessful': 'Congratulations on your successful loan of',
    'canViewRepayDetails': 'You can go to the "Repay history" page to view the repay details.',
    'pleaseRepayment': 'Please complete the repayment before 23:59 on the expiration date to avoid overdue fees.',
    'complete_borrow': 'Complete ',
    'noRecords_jie': 'No records',
    'noRecords_huan': 'No records',
    'orderNumber': 'Order number',
    'stillPaidUSDT': 'Still to be paid (USDT)',
    'stillPaidBTC': 'Still to be paid (BTC)',
    'goRepay': 'Repay',
    'DailyIterestRate_title': 'Daily interest rate',
    'totalInterest': 'Total interest',
    'collateralCount': 'Collateral count',
    'pledgeRate': 'Pledge rate',
    'borrowingPeriod': 'Borrowing period',
    'orderTime': 'Order time',
    'expiration': 'Expiration ',
    'repay': 'Repay',
    'borrowAmout': 'Borrow Amout',
    'repayAmout': 'Repayment amount：',
    'repaymentAmountUSDT': 'Repayment amount (USDT)',
    'dueDate': 'Due date',
    'overdueFee': 'Overdue fee',
    'total': 'Total',
    'confirmRepay': 'Confirm and repay',
    'pleaseEmail': 'Please fill in the email address',
    'inputAmount': 'Input borrow amount',
    'borrowLess': 'The borrow amount cannot be less than {0} {1}',
    'borrowExceed': 'The borrow amount cannot exceed {0} {1}',
    'ref_success': 'Completed',
    'clear_warehouse_ing': 'Closing the position',
    'clear_warehouse_success': 'Closed the position',
    'wait_repayment': 'Repayment in progress',
    'repayment_deduct':'Repayment and deduction',
    'loan_refund':'Pledge returned',
    'loan_deduct':'Lending and deduction',
    'loan_send':'Lending and issue',
    'repayment_deduct_success':'Token deduction successful',
    'loan_refund_success':'Refund successful',
    'loan_deduct_success':'Token deduction successful',
    'loan_send_success':'Token issue successful',
    "overdue":"Overdue",
    'isSupportAdvanced':'Sorry, {0} is not supported at the moment.',
    'upgrade':'Contract upgrade',
    'upgrade_success':'Upgrade successful',
    'transfer_fee':'Internal transfers are subject to a {0}% processing fee',
    'memo_length_exceeds20':'Memo length exceeds 20 characters',
    'memo_length_exceeds32':'Memo length exceeds 32 characters',

    'SPRTSwithdraw_max':'SPRTS withdrawal limit is 30,000,000,000. ',  //SPRTS的最大提币数量不可超过 30000000000
    'tw_pwd_not_same':'Passwords not matched',
    'enter_withdraw_amount':'Please enter withdraw amount',
    'enter_transfer_amount':'Please enter transfer amount',
    'minwithdraw_amount':'Minimum withdrawal：{0}',
    'maxwithdraw_amount':'Maximum withdrawal：{0}',
    'KYC_no':'Please complete your identity verification before proceed.',
    'KYC_no_exchange':'We need a little bit more information from you in order to continue this transaction. When you’re ready, please visit the Verification page in your Profile. It’ll only take a few minutes! You can still do a regular swap.',
    'KYC_no_withdrawal':'We need a little bit more information from you in order to continue process this withdrawal. When you’re ready, please visit the Verification page in your Profile. It’ll only take a few minutes!',
    'KYC_review':'We are reviewing your identity verification. Thank you for your patience.',
    // 'KYC_failure':"We weren't able to verify your identity. Please try again.If you have any questions, please email contact@swft.pro, or contact our customer service team on WeChat: swftcoin2.",
    "plsLogin_exchange": "Please log in or register in order to continue this transaction. When you’re ready, please visit the Verification page in your Profile. It’ll only take a few minutes!",
    'login_later':'Later',
    'login_register':'Log in / Register',
    "verifynow":"Verify now",

    //币种信息列表
    'havecoinNumber':'Supporting {0} assets',
    "toverify":"To verify",
    "UNPnoChangeKGP":"Sorry, {0}/{1} is the only supported pair at the moment. ",

    "900": "Servers busy, please try later !",
    "901": "Incomplete request parameters !",
    "907": "Required field is empty",
    "911": "Servers busy, please try later !",
    "912": "Order doesn’t exist!",
    "915": "Deposit and Receive currency  cannot be the same!",
    "916": "The destination address is not valid !",
    "917": "The refund address is not valid !",
    "919": "The amount of the deposit is NOT valid!",
    "920": "The amount of the receiving is NOT valid!",
    "921": "The amount of the deposit is not in the range",//todo 特殊处理
    "201": "Sources of equipment doesn't exist!",
    "202": "The decimal of the amount deposited is too long !",
    "203": "Failed to get the deposit address",
    "207": "Invalid address!",
    "213": "Illegal Request !",
    "214": "Currency does not exist",
    "215": "Address is invalid",
    "216": "Withdraw amount illegal",
    "217": "Insufficient account balance",
    "218": "This currency is not supported in the exchange, please select another",
    "219": "Transfer amount illegal",
    "220": "You can't transfer to the same account",
    "221": "Transfer account doesn't exist",
    "222": "You cannot add yourself as a friend",
    "223": "SWFTC is in short supply",
    "224": "The transaction is being processed, cannot cancel.",
    "225": "Limit orders have exceeded the maximum limit.",
    "226": "The account already exists and cannot be added repeatedly",
    "228": "Goocoin has not been registered",
    "229": "Goocoin account wallet address is vacant",
    "230": "System busy",
    "231": "unknown error",
    "232": "Users already listed in blacklist",
    "233": "Interface authentication failed",
    "234": "Red packet type does not exist",
    "235": "Red packet number invalid",
    "236": "Wrong password",
    "237": "Red packet details do not exist. ",
    "238": "Too slow! Red packet already divided up!",
    "239": "Red packet timeout",
    "240": "This account has already claimed this red packet. Please try next time! ",
    "241": "No packet data in the system",
    "242": "This mailbox cannot be registered",
    "243": "Have not bound swft account, please bind or register swft account first",
    "244": "You have already bound another account, please unbind the original account first, then bind the new account.",
    "245": "Unauthorized user",
    "246": "Failed to get AccessToken",
    "247": "Need user’s authorization ",
    "248": "Failed to refresh AccessToken",
    "249": "please do not use decimal point if you use Gmail register username",
    "250": "SWFTC balance is lower than 10. Please deposit more first ",
    "251": "Not available at this time",
    "252": "Note length exceeds 50 characters",// 备注长度超出50个字符
    "266": "Cannot exceed 2 digits after the decimal point",
    "267": " Server Upgrade and Maintenance ",
    "270": " The amount of the coin cannot exceed 4 digits after the decimal point",
    "271": " The currency amount of the currency can only be an integer",
    "272": "The network is running out, please get the verification code again.",
    "273": "Please initialize the password first",
    "274": "Insufficient amount of mortgage",
    "275": "Failed to get openId",
    "276": "Failed to get unionId",
    "277": "There are not enough {0} buy orders in the market ",
    "278": "There are not enough {0} sell orders in the market ",
    "311": "You've reached the daily trade amount limit!",   //当天交易额度达到上限
    "314": "This trade is over the single trade amount limit.",   //单笔交易额度超过上限
    "315": "Red packet already received",   //单笔交易额度超过上限
    "850": "Indicates that during the event",
    "950": "Wrong username or password!",
    "951": "Please login!",//todo 特殊处理
    // 952:"可用余额不足",//特殊处理
    "954": "The amount of withdrawal is illegal",
    "955": "Registration failed, please try later!",
    "956": "Account registered",
    "957": "Please enter correct email address!",
    "958": "Please make sure the password is 6-20 digits long!",
    "959": "Two passwords do not match!",
    "960": "Account registered",
    "962": "Wrong old password!",
    "963": "Please enter correct email address!",
    "964": "The user account does not exist!",
    "968": "Withdraw failed! Please make sure you have it in your account",//todo 特殊处理todo 特殊处理
    "969": "Verification code sent failed!",
    "970": "Malformed phone number",
    "971": "Verification code error !",
    "972": "Frequent operation, please try again later",
    "973": "Withdrawal address can not be account address",
    "974": "Currency has been added",
    "975": "Can not found !",
    "976": "Remarks cannot exceed 20 characters",
    "977": "Today's verification code has exceeded the limit",
    "979": "Wrong password !",
    "980": "SMS code error !",
    "981": "Email code error !",
    "982": "Unbound mailbox, please bind mailbox first !",
    "984": "Verification code error!",
    "985": "The Email has been bound to other accounts !",
    "986": "The phone number has been bound to other accounts !",
    "987": "Login failed more than maximum limit !",
    "988": "Reset password times exceeded the limit today !",
    "989": "Account has been locked, please contact customer service !",
    "990": "The account has bound Google verification code !",
    "991": "Please bind Google verification code first !",
    "992": "Google verification code error !",
    "1000": "More than the limit !",
    "1001": "Audit not passed",
    "1002": "Order doesn’t exist!",
    "1003": "Order has been deposited",
    "1004": "Exchange rate loss exceeds threshold, stop redemption",
    "1005": "Order has expired",
    "1006": "Basic household does not exist",
    "1008": "Image verification code is incorrect!",
    "1009": "The payment has been received!",
    "1010": "Cannot exceed 6 digits after the decimal point",
    "1011": " This currency does not support currency charging for the time being. ",
    "1012": " You have registered GooCoin, you can login directly with GooCoin account password. ",
    "1013": "This order has been released",
    "1014": "Order canceled",
    "1015": "You have applied to release payment for this order",
    "1016": "You have applied to cancel payment for this order",
    "1017": "Third-party channels are disabled on SWFT Blockchain or the SWFT Blockchain account does not exist",
    "1018": "Third-party channels have not been set up on the SWFT Blockchain account. ",
    "1019": "Third-party channel number has not been set up yet. ",
    "1020": "The payment order is inconsistent with the channel information",
    "1021": "This order has already been paid! ",
    "1022": "The recipient user does not exist",
    "1023": "Releasing, please wait",
    "1024": "The payer has already released the money",
    "1025": "A loan request has been sent",
    "1026": "Order cancelled",
    "1027": "Transaction completed",
    "1028": "Cancelling, please wait",
    "1029": "Sent request has been sent",
    "1030": "Please contact customer service for negotiation",
    "1031": "The note is longer than 50 characters",
    "1032": "Third-party channel payment page address has not been set up yet.",
    "1033": "The cancellation request was sent and the transaction has been cancelled",
    "1034": "This currency does not support advanced receipt",
    "1035": "The amount of payment cannot be paid for the completion fee",
    "1036": "Red packet amount exceeds today's limit, please contact customer service",
    "1037": "Payment amount exceeds daily limit, please contact our customer service team",
    "1038": "Note length exceeds limit",
    "1039": "Verification code is empty",
    "1040": "Verified",
    "1041": "In review",
    "1042": "Invalid image",
    "1043": "The withdrawal amount is high, please complete identity vertification before proceeding.",
    "1044": "Document number already registered",
    "1045": "Image size is too large",
    "1046": "Your identity authentification is currently under review, you can withdraw after the review is complete.",
    "1053": "Financial functions are not available for the currency yet.",
    "1054": "Locking period is invalid",
    "1055": "Amount locked is invalid",
    "1056": "The inviter account does not exist",
    "1057": "SWFT financial account is not set up yet",
    "1058": "SWFT financial account does not exist",
    "1059": "Error transferring to SWFT financial account",
    "1060": "The inviter cannot be yourself",
    "1061": "You haven’t set a password for this account yet. Please use the verification code to log in.",
    "1062": 'Due to innapropriate language, you are temporarily unable to send red packets.',
    "1065": 'The video is invalid',
    "1066": "We weren't able to verify your identity. Please try again.If you have any questions, please email contact@swft.pro, or contact our customer service team on WeChat: swftcoin2.",
    "1067": ' Minimum deposit: {0}',
    "1068": ' Please complete your identity verification before proceed.',
    "1069": ' We are reviewing your identity verification. Thank you for your patience.',
    // Maximum deposit: {0},
    "1100": "The trading pair is invalid",
    "1101": "The trading pair does not exist",
    "1102": "There is not enough market depth for this pair",
    "1103": "The trading type is invalid",
    "1104": "The trading price is invalid",
    "1105": "The trading price accuracy is too long",
    "1106": "The trading amount is invalid",
    "1107": "The trading amount accuracy is too long",
    "1108": "The minimum trading amount is {0} {1}",
    "1109": "The minimum trading sum is {0} {1}",
    "1110": "Cancellation successful ",
    "1111": "Cancellation failed ",
    "1112": "Please confirm you have read the User Agreement first",
    "1113": "The buying price cannot be higher than 110% of the current price",
    "1114": "The selling price cannot be lower than 90% of the current price",
    "1115": "The remaining subscription amount is insufficient",
    "1116": "More than the per person subscription limit",
    "1117": "Activity has ended",
    "1118": "The subscription amount is inconsistent with the amount of activities specified",
    "1119": "Each account is limited to participate only once ",
    "1122": "Coming soon",
    "1047": "Withdrawals of this currency are temporarily unavailable.",
    "1048": "Deposits of this currency are temporarily unavailable.",
    "1123": "Repayment in progress",
    "1124": "Repay successfully",
    "1125": "This currency can’t be borrowed for now. ",
    "1126": "This currency is not supported as collateral for now.",
    "1127": "The loan currency can’t be the same as the collateral currency.",
    "1128": "Database parameter configuration error",
    "1129": "The borrowing period is invalid",
    "1130": "The borrowing amount is invalid",
    "1131": "Emergency contact format error",
    "1132": "Borrowing order does not exist",
    "1133": "Order information is incorrect",
    "1134": "Third-party login channels have not been set up yet",
    "1137": "Red packets with a total amount greater than {0} USDT can be shared to all SWFT Blockchain users",
    "available": "Available: ",
    "suspended": "Frozen: ",
    "share_to": "Share to: ",
    "all": "All"
};



function handleResCode(data, lan) {
    if (lan == "en") {
        lan = "en"
    }

    var lang = get_lan("displayLan");

    if (data != '') {

        if (data.resCode == '951') {
            if (sessionStorage.getItem("Variable_pc") == null) {
                layer.open({ content: get_lan("951", lan), btn: '<a href="/swft-v3/swft-v3-m/login.html"><span>' + get_lan('got_it') + '</span></a>' });
            } else {
                layer.open({ content: get_lan("951", lan), btn: '<a href="/swft-v3/swft-v3-pc/login.html"><span>' + get_lan('got_it') + '</span></a>' });
            }
        }
        else if (data.resCode == '1070') {
            var resMsgZh;
            if(data.resMsg.indexOf("######") != -1){
                resMsgZh = data.resMsg.split("######")[0];
            }else{
                resMsgZh = data.resMsg;
            }
            if(lang == "en"){
                layer.open({    
                    content:data.resMsgEn,
                    btn:get_lan("got_it")
                });
            }else{
                layer.open({
                    content:resMsgZh,
                    btn:get_lan("got_it")
                });
            }
        }
         else if (data.resCode == '952') {
            var drawMsg = data.resMsg;
            if (drawMsg != null && drawMsg != undefined) {
                var minimum = drawMsg.substring(drawMsg.indexOf("[") + 1, drawMsg.indexOf(","));
                var maximum = drawMsg.substring(drawMsg.indexOf(",") + 1, drawMsg.indexOf("]"));
                layer.open({ content: get_lan("withdraw_err", lan) + '[' + minimum + ', ' + maximum + ']', btn: get_lan('got_it', lan) });
            }
        } else if (data.resCode == '991') {
            var drawMsg = data.resMsg;
            if (drawMsg != null && drawMsg != undefined) {
                layer.open({ content: get_lan('991', lan), btn: '<a href="../Google_verify.html"><span>' + get_lan('got_it', lan) + '</span></a>' });
            }
        } else if (data.resCode == '218') {
            var displayString = get_lan(data.resCode, lan);
            layer.open({ content: displayString, btn: get_lan("got_it", lan) });
        } else {
            var displayString = get_lan(data.resCode, lan);
            if (!displayString) {
                displayString = get_lan('900', lan);
            }
            layer.open({ content: displayString, btn: get_lan("got_it", lan) });
        }
    }

}
var $wechatGetSignature = "wechat/getSignature";
/**
 * 微信分享
 */
var baselink = window.location.protocol + "//" + window.location.host + "/";
//生产环境APPID
var APPID = 'wx777a35ed519e432f';//prod
//判断测试环境还是生产环境
if (baselink.indexOf('inner') > -1) {
    APPID = 'wx777a35ed519e432f';//prod
}


function $ajax_wechatGetSignature(data, successfun) {
    $ajax_json_get($wechatGetSignature, data, successfun)
}
function $ajax_json_get(relativeUrl, data, successfun) {
    $.ajax({
        url: baselink + relativeUrl + '',
        type: "get",
        data: data,
        // headers: header =='' ?{}:header,
        contentType: "application/json",
        dataType: "json",
        success: function (json) {
            successfun(json);
        }
    });
}
var lan = get_lan("displayLan");
function wxshareSDK_redpacket(title, remark_share, coinCode) {
    if (lan == "en") {
        // if(coinCode=="PLO"){
        //     title=""+get_lan("hongbao_share_title_plo")+"";
        // }else{
        title = "" + get_lan("hongbao_share_title") + "";
        // }
    } else {
        // if(coinCode=="PLO"){
        //     title=""+get_lan("hongbao_share_title_plo")+""+coinCode+""+get_lan("hongbao_share_title_plo1")+""
        // }else{
        title = "" + get_lan("hongbao_share_title") + " " + coinCode + " " + get_lan("hongbao_share_title1") + "";
        // }
    }


    var imgUrl = '' + baselink + 'swft-v3/images/coins/' + coinCode + '.png';
    wxshareSDK(title, remark_share, imgUrl)
}
function wxshareSDK_websit() {
    var title = get_lan("web_share_title");
    var remark_share = get_lan("web_share_desc");
    var imgUrl = "" + baselink + "swft-v3/images/support/2_4.png";
    wxshareSDK(title, remark_share, imgUrl)
}

var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
// if (isWeixin) {
//     wxshareSDK_websit();
// }

function wxshareSDK(title, remark_share, imgUrl) {
    var noncestr, signature, timestamp, url;
    var data = new Object();
    data.url = window.location.href;
    $ajax_wechatGetSignature(data, function (msg) {
        // if (msg.resCode == 800) {
        noncestr = msg.noncestr;
        signature = msg.signature;
        timestamp = msg.timestamp;
        url = msg.url;
        // }
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: APPID, // 必填，公众号的唯一标识
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: noncestr, // 必填，生成签名的随机串
            signature: signature,// 必填，签名
            jsApiList: [
                'checkJsApi',
                'onMenuShareAppMessage',
                'onMenuShareTimeline',
                'getNetworkType',
                'previewImage'
            ] // 必填，需要使用的JS接口列表
        });
        wx.ready(function () {
            wx.checkJsApi({
                jsApiList: [
                    'getNetworkType',
                    'previewImage'
                ],
                success: function (res) {
                    // alert(JSON.stringify(res));
                }
            });
            //发送给朋友
            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: remark_share, // 分享描述
                link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    // alert('用户点击发送给朋友');
                },
                success: function (res) {
                    // alert('已分享');
                    // var data = {"depositCoinCode":"BTC","receiveCoinCode":"SWFTC"};
                    // data = JSON.stringify(data);
                    // SWFT.$ajax_getBaseInfo(data,function(json) {
                    //     alert(json.resCode)
                    // })

                },
                cancel: function (res) {
                    // alert('已取消');
                },
                fail: function (res) {
                    // alert(JSON.stringify(res));
                }
            });
            //朋友圈
            wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    // alert('用户点击发送给朋友');
                },
                success: function (res) {
                    // alert('已分享');
                },
                cancel: function (res) {
                    // alert('已取消');
                },
                fail: function (res) {
                    // alert(JSON.stringify(res));
                }
            })
        });
    });
}

!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return n(e)}):n(e,!0)}(this,function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(i),function(e){c(n,e,t)}):u(n,t)}function t(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)}):t?u(n,t):u(n,i)}function o(e){return e=e||{},e.appId=C.appId,e.verifyAppId=C.appId,e.verifySignType="sha1",e.verifyTimestamp=C.timestamp+"",e.verifyNonceStr=C.nonceStr,e.verifySignature=C.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=s(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",C.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function s(e,n){var i=e,t=v[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n=i+":"+o}function d(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=h[t];o&&(e[n]=o)}return e}}function u(e,n){if(!(!C.debug||n&&n.isInnerInvoke)){var i=v[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(e){if(!(k||w||C.debug||x<"6.0.2"||V.systemType<0)){var n=new Image;V.appId=C.appId,V.initTime=A.initEndTime-A.initStartTime,V.preVerifyTime=A.preVerifyEndTime-A.preVerifyStartTime,N.getNetworkType({isInnerInvoke:!0,success:function(e){V.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+V.version+"&o="+V.isPreVerifyOk+"&s="+V.systemType+"&c="+V.clientVersion+"&a="+V.appId+"&n="+V.networkType+"&i="+V.initTime+"&p="+V.preVerifyTime+"&u="+V.url;n.src=i}})}}function p(){return(new Date).getTime()}function f(n){T&&(e.WeixinJSBridge?n():S.addEventListener&&S.addEventListener("WeixinJSBridgeReady",n,!1))}function m(){N.invoke||(N.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(i),t)},N.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})}function g(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var n in h)e[h[n]]=n;return e}(),S=e.document,I=S.title,y=navigator.userAgent.toLowerCase(),_=navigator.platform.toLowerCase(),k=!(!_.match("mac")&&!_.match("win")),w=-1!=y.indexOf("wxdebugger"),T=-1!=y.indexOf("micromessenger"),M=-1!=y.indexOf("android"),P=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),x=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),A={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},V={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:P?1:M?2:-1,clientVersion:x,url:encodeURIComponent(location.href)},C={},L={_completes:[]},B={state:0,data:{}};f(function(){A.initEndTime=p()});var O=!1,E=[],N={config:function(e){C=e,u("config",e);var n=!1!==C.check;f(function(){if(n)i(h.config,{verifyJsApiList:d(C.jsApiList)},function(){L._complete=function(e){A.preVerifyEndTime=p(),B.state=1,B.data=e},L.success=function(e){V.isPreVerifyOk=0},L.fail=function(e){L._fail?L._fail(e):B.state=-1};var e=L._completes;return e.push(function(){l()}),L.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();L._completes=[]},L}()),A.preVerifyStartTime=p();else{B.state=1;for(var e=L._completes,t=0,o=e.length;t<o;++t)e[t]();L._completes=[]}}),m()},ready:function(e){0!=B.state?e():(L._completes.push(e),!T&&C.debug&&e())},error:function(e){x<"6.0.2"||(-1==B.state?e(B.data):L._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var i in n){var t=v[i];t&&(n[t]=n[i],delete n[i])}return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(M){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=n(e)},e))},onMenuShareTimeline:function(e){t(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||I,desc:e.title||I,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){t(h.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?i("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){t(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){t(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){t(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){t("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){t("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(M){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===O?(O=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(O=!1,E.length>0){var n=E.shift();wx.getLocalImgData(n)}},e))):E.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(P){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(h.openAddress,{},(e._complete=function(e){e=a(e)},e))},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};t.push(c)}i(h.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:C.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};t.push(c)}i(h.openCard,{card_list:t},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){t(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},f(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){f(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){f(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){f(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){f(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},b=1,R={};return S.addEventListener("error",function(e){if(!M){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=b++,n["wx-id"]=o),R[o])return;R[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})})}}},!0),S.addEventListener("load",function(e){if(!M){var n=e.target,i=n.tagName;n.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(R[t]=!1)}}},!0),n&&(e.wx=e.jWeixin=N),N}});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*! layer mobile-v2.0 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心 */
;!function(a){"use strict";var b=document,c="querySelectorAll",d="getElementsByClassName",e=function(a){return b[c](a)},f={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:"scale"},g={extend:function(a){var b=JSON.parse(JSON.stringify(f));for(var c in a)b[c]=a[c];return b},timer:{},end:{}};g.touch=function(a,b){a.addEventListener("click",function(a){b.call(this,a)},!1)};var h=0,i=["layui-m-layer"],j=function(a){var b=this;b.config=g.extend(a),b.view()};j.prototype.view=function(){var a=this,c=a.config,f=b.createElement("div");a.id=f.id=i[0]+h,f.setAttribute("class",i[0]+" "+i[0]+(c.type||0)),f.setAttribute("index",h);var g=function(){var a="object"==typeof c.title;return c.title?'<h3 style="'+(a?c.title[1]:"")+'">'+(a?c.title[0]:c.title)+"</h3>":""}(),j=function(){"string"==typeof c.btn&&(c.btn=[c.btn]);var a,b=(c.btn||[]).length;return 0!==b&&c.btn?(a='<span yes type="1">'+c.btn[0]+"</span>",2===b&&(a='<span no type="0">'+c.btn[1]+"</span>"+a),'<div class="layui-m-layerbtn">'+a+"</div>"):""}();if(c.fixed||(c.top=c.hasOwnProperty("top")?c.top:100,c.style=c.style||"",c.style+=" top:"+(b.body.scrollTop+c.top)+"px"),2===c.type&&(c.content='<i></i><i class="layui-m-layerload"></i><i></i><p>'+(c.content||"")+"</p>"),c.skin&&(c.anim="up"),"msg"===c.skin&&(c.shade=!1),f.innerHTML=(c.shade?"<div "+("string"==typeof c.shade?'style="'+c.shade+'"':"")+' class="layui-m-layershade"></div>':"")+'<div class="layui-m-layermain" '+(c.fixed?"":'style="position:static;"')+'><div class="layui-m-layersection"><div class="layui-m-layerchild '+(c.skin?"layui-m-layer-"+c.skin+" ":"")+(c.className?c.className:"")+" "+(c.anim?"layui-m-anim-"+c.anim:"")+'" '+(c.style?'style="'+c.style+'"':"")+">"+g+'<div class="layui-m-layercont">'+c.content+"</div>"+j+"</div></div></div>",!c.type||2===c.type){var k=b[d](i[0]+c.type),l=k.length;l>=1&&layer.close(k[0].getAttribute("index"))}document.body.appendChild(f);var m=a.elem=e("#"+a.id)[0];c.success&&c.success(m),a.index=h++,a.action(c,m)},j.prototype.action=function(a,b){var c=this;a.time&&(g.timer[c.index]=setTimeout(function(){layer.close(c.index)},1e3*a.time));var e=function(){var b=this.getAttribute("type");0==b?(a.no&&a.no(),layer.close(c.index)):a.yes?a.yes(c.index):layer.close(c.index)};if(a.btn)for(var f=b[d]("layui-m-layerbtn")[0].children,h=f.length,i=0;h>i;i++)g.touch(f[i],e);if(a.shade&&a.shadeClose){var j=b[d]("layui-m-layershade")[0];g.touch(j,function(){layer.close(c.index,a.end)})}a.end&&(g.end[c.index]=a.end)},a.layer={v:"2.0",index:h,open:function(a){var b=new j(a||{});return b.index},close:function(a){var c=e("#"+i[0]+a)[0];c&&(c.innerHTML="",b.body.removeChild(c),clearTimeout(g.timer[a]),delete g.timer[a],"function"==typeof g.end[a]&&g.end[a](),delete g.end[a])},closeAll:function(){for(var a=b[d](i[0]),c=0,e=a.length;e>c;c++)layer.close(0|a[0].getAttribute("index"))}},"function"==typeof define?define(function(){return layer}):function(){var a=document.scripts,c=a[a.length-1],d=c.src,e=d.substring(0,d.lastIndexOf("/")+1);c.getAttribute("merge")||document.head.appendChild(function(){var a=b.createElement("link");return a.href=e+"../../lib/layer/need/layer.css",a.type="text/css",a.rel="styleSheet",a.id="layermcss",a}())}()}(window);
var SWFT = {
    $ip: window.location.protocol + "//" + window.location.host + "/",
    // $ip:"https://120.27.14.93/",
    service: function (surl, obj, callBack, _type, _contentType) {
        var u = this.$ip + surl;
        // if (contentType == null) {
        //     contentType = "text/plain"
        // }
        var type = _type ? _type : "POST";
        var contentType = _contentType ? _contentType : "application/json";
        $.ajax({
            url: u,
            type: type,
            data: obj,
            contentType: contentType,
            dataType: 'json',
            success: function (json) {
                callBack(json);
            }, error: function (err) {
                // closeLoadTips();
                // layer.open({content: get_lan("checkNet"),btn: get_lan("got_it")});
                console.log(err)
            }
        });
    },
    //获取首页币种列表
    $ajax_queryCoinList: function (obj, callBack) {
        this.service("api/v1/queryCoinList", obj, callBack);
    },

    //获取首页币种列表
    $ajax_queryCoinListV2: function (obj, callBack) {
        this.service("api/v1/queryCoinListV2", obj, callBack);
    },

    //获取汇率
    $ajax_getBaseInfo: function (obj, callBack) {
        this.service("api/v1/getBaseInfo", obj, callBack)
    },
    //查询兑换接口
    $ajax_queryAllTrade: function (obj, callBack) {
        this.service("api/v2/ios/queryAllTradeV3", obj, callBack)
    },
    //查询订单状态
    $ajax_queryOrderState: function (obj, callBack) {
        this.service("api/v2/queryOrderState", obj, callBack)
    },
    //注册
    $ajax_userRegist: function (obj, callBack) {
        this.service("accountapi/regist", obj, callBack)
    },
    // // 登录
    // $ajax_userLoginWeb: function (obj, callBack) {
    //     this.service("accountapi/login_web", obj, callBack)
    // },
    // 登录
    $ajax_userLoginWeb: function (obj, callBack) {
        if (window.location.href.indexOf("http://192.168.0.100:8000") == -1) {
            // 生产环境
            this.service('accountapi/login_web', obj, callBack);
        } else {
            // 测试环境
            this.service("accountapi/login_app", obj, callBack)
            
        }
       
    },
    // 验证码登录
    $ajax_accountapi_captcha_login: function (obj, callBack) {
        this.service("accountapi/captcha/login", obj, callBack)
    },

    // 图文验证码
    $ajax_captcha: function (obj, callBack) {
        this.service("captcha", obj, callBack, 'GET', 'x-www-form-urlencoded')
    },

    // 初始化密码
    $ajax_accountapi_initPwd: function (obj, callBack) {
        this.service("accountapi/initPwd", obj, callBack)
    },
    $ajax_isLogin: function (obj, callBack) {
        this.service("accountapi/isLogin", obj, callBack)
    },
    $ajax_logout: function (obj, callBack) {
        this.service("accountapi/logout", obj, callBack)
    },
    $ajax_modifyPassword: function (obj, callBack) {
        this.service("accountapi/modifyPassword", obj, callBack)
    },
    // 忘记密码
    $ajax_forgetPwd: function (obj, callBack) {
        this.service("accountapi/forgetPwd", obj, callBack)
    },
    // 重设密码
    $ajax_resetPwdSign: function (obj, callBack) {
        this.service("accountapi/resetPwdSign", obj, callBack)
    },
    // 忘记手机密码
    $ajax_forgetPhonePwd: function (obj, callBack) {
        this.service("accountapi/forgetPhonePwd", obj, callBack)
    },
    // 校验手机验证码
    $ajax_checkPhoneCode: function (obj, callBack) {
        this.service("accountapi/checkPhoneCode", obj, callBack)
    },
    //用户自选币种列表展示
    $ajax_userChoseCoin: function (obj, callBack) {
        this.service("userinfo/v1/listUserSelect/mytoken", obj, callBack)
    },
    //币种模糊查询币种信息列表
    $ajax_findBySymbol: function (obj, callBack) {
        this.service("v1/coin/findBySymbol", obj, callBack)
    },
    //查询制定币种详情的接口
    $ajax_coinDetail: function (obj, callBack) {
        this.service("v1/coin/detail", obj, callBack)
    },
    //用户自选币添加接口
    $ajax_addCoin: function (obj, callBack) {
        this.service("userinfo/v1/addcoin", obj, callBack)
    },
    //用户自选币删除接口
    $ajax_delCoin: function (obj, callBack) {
        this.service("userinfo/v1/delcoin", obj, callBack)
    },
    //排行榜列表展示接口
    $ajax_ranklist: function (obj, callBack) {
        this.service("v1/coin/list/mytoken", obj, callBack)
    },
    //已上币列表
    $ajax_listPlatformCoin: function (obj, callBack) {
        this.service("/v1/coin/listPlatformCoin/mytoken", obj, callBack)
    },
    // 账户兑换接口
    $ajax_accountExchange: function (obj, callBack) {
        this.service("api/v2/accountExchange", obj, callBack)
    },
    // 简单兑换接口
    $ajax_simpleExchange: function (obj, callBack) {
        this.service("api/v3/simpleExchange", obj, callBack)
    },
    // 简单兑换接口检验用户账户余额
    $ajax_judgeAvailSimpleExchange: function (obj, callBack) {
        this.service("api/v3/judgeAvailSimpleExchange", obj, callBack)
    },
    // 限价兑换接口
    $ajax_limitedExchange: function (obj, callBack) {
        this.service("api/v3/limitedExchange", obj, callBack)
    },
    // 限价兑换校验接口
    $ajax_judgeAvailLimitedExchange: function (obj, callBack) {
        this.service("api/v3/judgeAvailLimitedExchange", obj, callBack)
    },
    // 常用地址添加
    $ajax_addUsualAddress: function (obj, callBack) {
        this.service("usualAddress/add", obj, callBack)
    },
    //常用地址查询
    $ajax_listUsualAddress: function (obj, callBack) {
        this.service("usualAddress/list", obj, callBack)
    },
    //常用地址删除
    $ajax_deleteUsualAddress: function (obj, callBack) {
        this.service("usualAddress/delete", obj, callBack)
    },
    //提币接口
    $ajax_drawMoney_v2_8_0: function (obj, callBack) {
        this.service("transapi/v2_8_0/drawMoney", obj, callBack)
    },
    //提币充币允许币种查询接口
    $ajax_getWithDrawCode: function (obj, callBack) {
        this.service("transapi/getWithDrawCode", obj, callBack)
    },
    //充币接口
    $ajax_chargingMoney_v2_8_0: function (obj, callBack) {
        this.service("transapi/v2_8_0/chargingMoney", obj, callBack)
    },
    //账户余额及提币手续费查询接口
    $ajax_availableAmt: function (obj, callBack) {
        this.service("transapi/availableAmt", obj, callBack)
    },
    //获取用户绑定信息
    $ajax_getBindInfo: function (obj, callBack) {
        this.service("accountapi/getBindInfo", obj, callBack)
    },
    // 获取绑定验证码
    $ajax_getBindCode: function (obj, callBack) {
        this.service("accountapi//getBindCode", obj, callBack)
    },
    // 绑定手机号或邮箱
    $ajax_bindAccount: function (obj, callBack) {
        this.service("accountapi/bind", obj, callBack)
    },
    // 获取验证码
    $ajax_verifyCodeSend: function (obj, callBack) {
        this.service("verifyCode/commonSend", obj, callBack)
    },
    //根据币种查询冲提币记录
    $ajax_queryDrawAndChargeRecord: function (obj, callBack) {
        this.service("api/v3/queryDrawAndChargeRecord", obj, callBack)
    },
    //查询用户指定币种可用金额
    $ajax_queryAsset: function (obj, callBack) {
        this.service("api/v3/queryAsset", obj, callBack)
    },
    $ajax_listAllAddress: function (obj, callBack) {
        this.service("usualAddress/listAll", obj, callBack)
    },
    // 创建google验证码
    $ajax_newAuthCode: function (obj, callBack) {
        this.service("auth/newCode", obj, callBack)
    },
    $ajax_bindAuthCode: function (obj, callBack) {
        this.service("auth/bind", obj, callBack)
    },
    //查询是否已绑定
    $ajax_isBindAuthCode: function (obj, callBack) {
        this.service("auth/isBind", obj, callBack)
    },
    $ajax_sendVerifyCode: function (obj, callBack) {
        this.service("verifyCode/send", obj, callBack)
    },
    //推荐详情
    $ajax_recommendDetail: function (obj, callBack) {
        this.service("recommend/recommendDetail", obj, callBack)
    },
    $ajax_queryDrawAndChargeStatus: function (obj, callBack) {
        this.service("api/v3/queryDrawAndChargeStatus", obj, callBack)
    },
    $ajax_internalTransfer: function (obj, callBack) {
        this.service("api/v3/internalTransfer", obj, callBack)
    },
    $ajax_usualFriendsAdd: function (obj, callBack) {
        this.service("usualFriends/add", obj, callBack)
    },
    $ajax_usualFriendsList: function (obj, callBack) {
        this.service("usualFriends/list", obj, callBack)
    },
    $ajax_usualFriendsDelete: function (obj, callBack) {
        this.service("usualFriends/delete", obj, callBack)
    },
    $ajax_isExistsUser: function (obj, callBack) {
        this.service("accountapi/isExistsUser", obj, callBack)
    },
    //限价订单的交易记录
    $ajax_queryLimitedTrade: function (obj, callBack) {
        this.service("api/v3/queryLimitedTradeV3", obj, callBack)
    },

    // 删除订单记录
    $ajax_removeOrder: function (obj, callBack) {
        this.service("api/v3/removeOrder", obj, callBack)
    },
    // 查询删除的订单
    $ajax_queryRemoveTrade: function (obj, callBack) {
        this.service("api/v3/queryRemoveTrade", obj, callBack)
    },
    // 查询限价删除的订单列表

    $ajax_queryLimitedRemoveTrade: function (obj, callBack) {
        this.service("api/v3/queryLimitedRemoveTrade", obj, callBack)
    },
    // 临时官网信息
    $ajax_websiteTradeInfo: function (obj, callBack) {
        this.service("notice/websiteTradeInfo", obj, callBack)
    },

    //撤单
    $ajax_cancelLimitedExchange: function (obj, callBack) {
        this.service("api/v3/cancelLimitedExchange", obj, callBack)
    },
    //限价订单详情
    $ajax_queryLimitedTradeDetai: function (obj, callBack) {
        this.service("api/v3/queryLimitedTradeDetail", obj, callBack)
    },
    // 发现
    $ajax_discoverList: function (obj, callBack) {
        this.service("discover/list", obj, callBack)
    },
    //项目方详情
    $ajax_partnertList: function (obj, callBack) {
        this.service("discover/detail", obj, callBack)
    },
    //单笔交易分享
    $ajax_orderShare: function (obj, callBack) {
        this.service("api/v3/orderShare", obj, callBack)
    },
    //单笔交易分享详情
    $ajax_orderShareDetail: function (obj, callBack) {
        this.service("api/v3/orderShareDetail", obj, callBack)
    },
    //商城检测登录状态
    $ajax_autoLogin: function (obj, callBack) {
        this.service("duibaApi/autoLogin", obj, callBack)
    },
    //查询是否绑定微信
    $ajax_wechat_findBind: function (obj, callBack) {
        this.service("wechat/findBind", obj, callBack)
    },
    //绑定微信
    $ajax_wechat_wxBindLogin: function (obj, callBack) {
        this.service("wechat/wxBindLogin", obj, callBack)
    },
    //谷歌验证码
    $ajax_auth_deployGoogleCod: function (obj, callBack) {
        this.service("auth/deployGoogleCode", obj, callBack)
    },
    //理财创建账户
    $ajax_panda_createAcct: function (obj, callBack) {
        this.service("tender/createAcct", obj, callBack)
    },
    //付款接口
    $ajax_pay_out: function (obj, callBack) {
        this.service("pay/out", obj, callBack)
    },
    //收款接口
    $ajax_pay_receive: function (obj, callBack) {
        this.service("pay/receive", obj, callBack)
    },
    $ajax_pay_findOutAndIn: function (obj, callBack) {
        this.service("pay/findOutAndIn", obj, callBack)
    },
    //收付款币种列表
    $ajax_pay_coinList: function (obj, callBack) {
        this.service("pay/coinList", obj, callBack)
    },
    //付款校验接口
    $ajax_pay_checkLimit: function (obj, callBack) {
        this.service("pay/checkLimit", obj, callBack)
    },
    //撤销交易
    $ajax_pay_confirmCancelLoan: function (obj, callBack) {
        this.service("pay/confirmCancelLoan", obj, callBack)
    },
    //确认放款
    $ajax_pay_confirmLoan: function (obj, callBack) {
        this.service("pay/confirmLoan", obj, callBack)
    },
    //申请撤销
    $ajax_pay_applyCancel: function (obj, callBack) {
        this.service("pay/applyCancel", obj, callBack)
    },
    //申请放款
    $ajax_pay_applyForLoan: function (obj, callBack) {
        this.service("pay/applyForLoan", obj, callBack)
    },
    //行情
    $ajax_market_getCoinId: function (obj, callBack) {
        this.service("market/getCoinId", obj, callBack)
    },
    //发红包
    $ajax_redPacket_send: function (obj, callBack) {
        this.service("redPacket/send", obj, callBack)
    },
    //发红包记录
    $ajax_redPacket_findSend: function (obj, callBack) {
        this.service("redPacket/findSend", obj, callBack)
    },
    //收红包记录
    $ajax_redPacket_findReceive: function (obj, callBack) {
        this.service("redPacket/findReceive", obj, callBack)
    },
    //发红包详情
    $ajax_redPacket_findDetail: function (obj, callBack) {
        this.service("redPacket/findDetail", obj, callBack)
    },
    //发红包详情币种信息
    $ajax_redPacket_queryUserReceiveAmt: function (obj, callBack) {
        this.service(" redPacket/queryUserReceiveAmt", obj, callBack)
    },
    //发红包币种列表
    $ajax_redPacket_coinCodeListInfo: function (obj, callBack) {
        this.service("redPacket/coinCodeListInfo", obj, callBack)
    },
    //分享到SWFT红包
    $ajax_redPacket_queryRedpacket: function (obj, callBack) {
        this.service("redPacket/queryRedpacket", obj, callBack)
    },
    //查询用户身份认证信息
    $ajax_kyc_queryUserKycState: function (obj, callBack) {
        this.service("kyc/queryUserKycState", obj, callBack)
    },
    //kyc校验
    $ajax_kyc_identityCheck: function (obj, callBack) {
        this.service("kyc/identityCheck", obj, callBack)
    },
    //kyc上传图片
    $ajax_kyc_uploadFiles: function (obj, callBack) {
        this.service("kyc/uploadFiles", obj, callBack)
    },
    // 身份认证-获取随机数
    $ajax_kyc_getRandomNum: function (obj, callBack) {
        this.service("kyc/getRandomNum", obj, callBack)
    },
    //第三方 查询用户身份认证信息
    $ajax_kyc_queryUserKycState: function (obj, callBack) {
        this.service("kycAuthIden/queryUserKycState", obj, callBack)
    },
    //第三方 kyc校验
    $ajax_kyc_identityCheck: function (obj, callBack) {
        this.service("kycAuthIden/identityCheck", obj, callBack)
    },
     //第三方 kyc上传图片
     $ajax_kyc_uploadFiles: function (obj, callBack) {
        this.service("kycAuthIden/uploadFiles", obj, callBack)
    },
    //第三方 身份认证-获取随机数
    $ajax_kyc_getRandomNum: function (obj, callBack) {
        this.service("kycAuthIden/getRandomNum", obj, callBack)
    },
    //根据币种查询交易对接口
    $ajax_coinTrade_queryPairByCode: function (obj, callBack) {
        this.service("coinTrade/queryPairByCode", obj, callBack)
    },
    //查询交易币种接口
    $ajax_coinTrade_loadTradeCode: function (obj, callBack) {
        this.service("coinTrade/loadTradeCode", obj, callBack)
    },
    //根据交易对查询市场信息接口
    $ajax_coinTrade_queryMarketByPair: function (obj, callBack) {
        this.service("coinTrade/queryMarketByPair", obj, callBack)
    },
    //下单交易接口
    $ajax_coinTrade_trade: function (obj, callBack) {
        this.service("coinTrade/trade", obj, callBack)
    },
    //撤销交易接口
    $ajax_coinTrade_cancel: function (obj, callBack) {
        this.service("coinTrade/cancel", obj, callBack)
    },
    //获取委托记录接口
    $ajax_coinTrade_getMyTrade: function (obj, callBack) {
        this.service("coinTrade/getMyTrade", obj, callBack)
    },
    //获取委托记录接口
    $ajax_coinTrade_getTradeRecord: function (obj, callBack) {
        this.service("coinTrade/getTradeRecord", obj, callBack)
    },
    //服务条款同意接口
    $ajax_coinTrade_agreeTerms: function (obj, callBack) {
        this.service("coinTrade/agreeTerms", obj, callBack)
    },
    //活动入口
    $ajax_purchase_getLatestEvent: function (obj, callBack) {
        this.service("purchase/getLatestEvent", obj, callBack)
    },
    //活动展示页面接口
    $ajax_purchase_getGroupRule: function (obj, callBack) {
        this.service("purchase/getGroupRule", obj, callBack)
    },
    //认购折算
    $ajax_purchase_estimate: function (obj, callBack) {
        this.service("purchase/estimate", obj, callBack)
    },
    //认购确认
    $ajax_purchase_buy: function (obj, callBack) {
        this.service("purchase/buy", obj, callBack)
    },
    //获取地址栏参数
    GetQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    },
    // 查询用户币多多钱包资产接口
    $ajax_purchase_queryGroupcoinAssets: function (obj, callBack) {
        this.service("purchase/queryGroupcoinAssets", obj, callBack)
    },
    //查询团购周期记录
    $ajax_purchase_queryPurchasePeriod: function (obj, callBack) {
        this.service("purchase/queryPurchasePeriod", obj, callBack)
    },
    //查询团购详情
    $ajax_purchase_queryPurchaseDetails: function (obj, callBack) {
        this.service("purchase/queryPurchaseDetails", obj, callBack)
    },
    //查询理财详情
    $ajax_purchase_queryFinanceDetail: function (obj, callBack) {
        this.service("purchase/queryFinanceDetail", obj, callBack)
    },

    // 查询理财货币列表
    $ajax_finance_coinCodeListInfo: function (obj, callBack) {
        this.service("finance/coinCodeListInfo", obj, callBack)
    },

    // 查询理财周期列表
    $ajax_finance_getCycle: function (obj, callBack) {
        this.service("finance/getCycle", obj, callBack)
    },

    //  查询理财数量列表
    $ajax_finance_getAmount: function (obj, callBack) {
        this.service("finance/getAmount", obj, callBack)
    },

    // 创建理财订单
    $ajax_finance_createOrder: function (obj, callBack) {
        this.service("finance/createOrder", obj, callBack)
    },

    // k线数据接口
    $ajax_market_kline: function (obj, callBack) {
        this.service("market/history/kline", obj, callBack)
    },

    // 最近成交记录接口
    $ajax_market_trade: function (obj, callBack) {
        this.service("market/history/trade", obj, callBack)
    },

    // 最近24小时行情
    $ajax_market_detail: function (obj, callBack) {
        this.service("market/history/detail", obj, callBack)
    },

    // 币种介绍
    $ajax_market_coinIntroduce: function (obj, callBack) {
        this.service("market/coinIntroduce", obj, callBack)
    },

    // otc 跳转路径接口
    $ajax_otc_getJumpUrl: function (obj, callBack) {
        this.service("otc/getJumpUrl", obj, callBack)
    },

    // 获取活动入口接口
    $ajax_inviteDisplay: function (obj, callBack) {
        this.service("api/v3/inviteDisplay", obj, callBack)
    },

    // 借款记录查询接口
    $ajax_repayment_queryLoanOrder: function (obj, callBack) {
        this.service("repayment/queryLoanOrder", obj, callBack)
    },

    // 还款记录查询接口
    $ajax_repayment_queryRepaymentOrder: function (obj, callBack) {
        this.service("repayment/queryRepaymentOrder", obj, callBack)
    },

    // 还款接口
    $ajax_repayment_repayment: function (obj, callBack) {
        this.service("repayment/repayment", obj, callBack)
    },

    // 获取借款配置信息接口
    $ajax_loan_getConfigInfo: function (obj, callBack) {
        this.service("loan/getConfigInfo", obj, callBack)
    },


    // 生成借款确认订单接口
    $ajax_loan_createConfirmOrder: function (obj, callBack) {
        this.service("loan/createConfirmOrder", obj, callBack)
    },


    // 确认借款订单接口
    $ajax_loan_confirmOrder: function (obj, callBack) {
        this.service("loan/confirmOrder", obj, callBack)
    },

    // Ploutoz第三方登录接口
    $ajax_api_ploutoz_login_web: function (obj, callBack) {
        this.service("api/ploutoz/login_web", obj, callBack)
    },

    // 交易可分享红包的金额是否大于5u
    $ajax_redPacket_checkShareRedpacketLimit: function (obj, callBack) {
        this.service("aredPacket/checkShareRedpacketLimit", obj, callBack)
    },

    // 首页 获取稳定币列表 
    $ajax_api_v1_queryStableCoinList: function (obj, callBack) {
        this.service("api/v1/queryStableCoinList", obj, callBack)
    },

    // 首页 DeFi币种列表 
    $ajax_api_v1_queryDefiCoinList: function (obj, callBack) {
        this.service("api/v1/queryDefiCoinList", obj, callBack)
    },

    // 付款/收款/红包 获取稳定币列表 
    $ajax_redPacket_coinCodeListInfoV2: function (obj, callBack) {
        this.service("redPacket/coinCodeListInfoV2", obj, callBack)
    },


    // 快捷买币-汇率配置接口
    $ajax_otcQuick_getRateInfo: function (obj, callBack) {
        this.service("otcQuick/getRateInfo", obj, callBack)
    },

    // 快捷买币-查询OTC可用币种信息接口
    $ajax_otcQuick_getCoinInfo: function (obj, callBack) {
        this.service("otcQuick/getCoinInfo", obj, callBack)
    },

    //快捷买币-根据币种刷新承兑商信息接口
    $ajax_otcQuick_getPromiseInfoByCode: function (obj, callBack) {
        this.service("otcQuick/getPromiseInfoByCode", obj, callBack)
    },

    // 快捷买币-刷新汇率配置信息的接口
    $ajax_otcQuick_getRateByParam: function (obj, callBack) {
        this.service("otcQuick/getRateByParam", obj, callBack)
    },

    // 快捷买币-同意协议接口
    $ajax_otcQuick_agreeTerms: function (obj, callBack) {
        this.service("otcQuick/agreeTerms", obj, callBack)
    },

    // 快捷买币-下单接口
    $ajax_otcQuick_createOrder: function (obj, callBack) {
        this.service("otcQuick/createOrder", obj, callBack)
    },

    // 快捷买币-根据订单号查询接口
    $ajax_otcQuick_queryByOrderId: function (obj, callBack) {
        this.service("otcQuick/queryByOrderId", obj, callBack)
    },

    // 快捷买币-查询订单列表接口
    $ajax_otcQuick_queryMyOrder: function (obj, callBack) {
        this.service("otcQuick/queryMyOrder", obj, callBack)
    },

    // 快捷买币-用户订单操作接口
    $ajax_otcQuick_dealOrder: function (obj, callBack) {
        this.service("otcQuick/dealOrder", obj, callBack)
    },

    // 快捷买币-承兑商-获取配置接口 
    $ajax_otc_promisor_getConfigInfo: function (obj, callBack) {
        this.service("otc/promisor/getConfigInfo", obj, callBack)
    },

    // 快捷买币-承兑商-发布买卖单接口
    $ajax_otc_promisor_createOrder: function (obj, callBack) {
        this.service("otc/promisor/createOrder", obj, callBack)
    },

    // 快捷买币-承兑商-修改买卖单接口
    $ajax_otc_promisor_modifyOrder: function (obj, callBack) {
        this.service("otc/promisor/modifyOrder", obj, callBack)
    },

    // 快捷买币-承兑商-删除买卖单接口
    $ajax_otc_promisor_delOrder: function (obj, callBack) {
        this.service("otc/promisor/delOrder", obj, callBack)
    },

    // 快捷买币-承兑商-查询买卖单列表接口
    $ajax_otc_promisor_findOrderList: function (obj, callBack) {
        this.service("otc/promisor/findOrderList", obj, callBack)
    },

    // 快捷买币-承兑商-根据ID查询买卖单详情
    $ajax_otc_promisor_findOrderById: function (obj, callBack) {
        this.service("otc/promisor/findOrderById", obj, callBack)
    },

    // 快捷买币-承兑商-查询用户订单列表接口
    $ajax_otc_promisor_findUserOrderList: function (obj, callBack) {
        this.service("otc/promisor/findUserOrderList", obj, callBack)
    },

    // 快捷买币-承兑商-根据订单号查询用户买卖单详情
    $ajax_otc_promisor_findUserOrderById: function (obj, callBack) {
        this.service("otc/promisor/findUserOrderById", obj, callBack)
    },

    // 快捷买币-承兑商-处理订单接口
    $ajax_otc_promisor_dealOrder: function (obj, callBack) {
        this.service("otc/promisor/dealOrder", obj, callBack)
    },

    // 快捷买币-添加支付方式
    $ajax_otc_user_addUserPayMethod: function (obj, callBack) {
        this.service("otc/user/addUserPayMethod", obj, callBack)
    },

    // 快捷买币-删除支付方式
    $ajax_otc_user_deleteUserPayMethod: function (obj, callBack) {
        this.service("otc/user/deleteUserPayMethod", obj, callBack)
    },

    // 快捷买币-编辑支付方式
    $ajax_otc_user_updateUserPayMethod: function (obj, callBack) {
        this.service("otc/user/updateUserPayMethod", obj, callBack)
    },

    // 快捷买币-激活支付方式
    $ajax_otc_user_activateUserPayMethod: function (obj, callBack) {
        this.service("otc/user/activateUserPayMethod", obj, callBack)
    },

    // 快捷买币-查询支付方式
    $ajax_otc_user_queryUserPayMethod: function (obj, callBack) {
        this.service("otc/user/queryUserPayMethod", obj, callBack)
    },

     // 管理员数据统计接口
     $ajax_statistics_loadData: function (obj, callBack) {
        this.service("statistics/loadData", obj, callBack)
    },

     // 推荐信息查询接口
     $ajax_recommend_recommendDetail: function (obj, callBack) {
        this.service("recommend/recommendDetail", obj, callBack)
    },

     // 判断是否在活动期间接口
     $ajax_api_v3_invite: function (obj, callBack) {
        this.service("api/v3/invite", obj, callBack)
    },

     // bd第三方钱包奖励
     $ajax_bdReward_wallet: function (obj, callBack) {
        this.service("bdReward/wallet", obj, callBack)
    },

     // 广告触发点击几率接口
     $ajax_ad_clickRate: function (obj, callBack) {
        this.service("ad/clickRate", obj, callBack)
    },

     // 内部转账接口校验
     $ajax_api_v3_internalTransferCheck: function (obj, callBack) {
        this.service("api/v3/internalTransferCheck", obj, callBack)
    },

     // 提币信息校验
     $ajax_api_v3_withdrawCheck: function (obj, callBack) {
        this.service("api/v3/withdrawCheck", obj, callBack)
    },

    // 交易币种状态列表接口
    $ajax_marketCmc_tradeCodeList: function (obj, callBack) {
        this.service("marketCmc/tradeCodeList", obj, callBack)
    },

    // 首页获取基本信息接口2
    $ajax_getBaseInfo2: function (obj, callBack) {
        this.service("api/v1/getBaseInfo2", obj, callBack)
    },






    // 验证是否为数字
    isNumber: function (num) {
        var reg = "^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$";
        var re = new RegExp(reg);
        return re.test(num);
    },
    // // 非负整数
    isPositiveInteger: function (num) {
        var reg = "^\\d+$";
        return new RegExp(reg).test(num);
    },
    // // 非负浮点数
    isPositiveDecimal: function (num) {
        var reg = "^(\\d+\\.\\d+$)|(\\d+\\.$)";
        return new RegExp(reg).test(num);
    },
    // // 验证是否为货币金额：整数或者小数,可为0
    isCoinAmt: function (num) {
        return SWFT.isPositiveInteger(num) || SWFT.isPositiveDecimal(num);
    },
    // // 验证是否为邮箱
    isEmail: function (email) {
        var reg = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,8}|[0-9]{1,3})(\\]?)$");
        return reg.test(email);
    },
    // // 验证是否为手机号
    isMobile: function (mobile) {
        //var reg = new RegExp("^((17[0-9])|(14[0-9])|(13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$");
        var reg = new RegExp("^[0-9]{6,11}$");
        return reg.test(mobile);
    },
    // // 校验是否为中国手机号
    isMobileCN: function (mobile) {
        var reg = new RegExp("^[1][3,4,5,6,7,8,9][0-9]{9}$");
        return reg.test(mobile);
    },
    // var userNo, sessionUuid,
    newBaseRequestData: function () {
        var equipmentNo = localStorage.getItem("equipmentNo");
        var sessionUuid = localStorage.getItem("sessionUuid");
        if (!equipmentNo) {
            equipmentNo = SWFT.randomWord(false, 32);
            localStorage.setItem("equipmentNo", equipmentNo);
        }
        if (!sessionUuid) {
            localStorage.setItem("sessionUuid", "");
        }
        var sourceType = 'H5';
        if (window.location.href.indexOf("http://192.168.0.100:8000") != -1) {
            // 生产环境
            sourceType = 'ANDROID';
        }
        var data = {
            "equipmentNo": equipmentNo,
            "sourceType": sourceType,
            "userNo": "",
            "sessionUuid": sessionUuid
        };
        data.userNo = localStorage.getItem("userNo");
        return data;
    },
    add0: function (m) {
        return m < 10 ? '0' + m : m;
    },
    // 将时间戳格式化为日期格式
    format: function (timemilins) {
        var time = new Date(timemilins);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
    },
    // // 去除字符串两端空格
    trim: function (s) {
        return s.replace(/(^\s*)|(\s*$)/g, '');
    },
    $ajax_queryUserAssets: function (obj, callBack) {
        this.service("accountapi/getAssets", obj, callBack)
    },
    logout: function (equipment) {
        var data = this.newBaseRequestData();
        data = JSON.stringify(data);
        this.$ajax_logout(data, function (json) {
            if (json.resCode == "800") {
                location.href = "../login.html";
            } else if (json.resCode == "900") {
                layer.open({ content: get_lan("900"), btn: get_lan("got_it") });
            } else if (json.resCode == "901") {
                layer.open({ content: get_lan("901"), btn: get_lan("got_it") });
            } else if (json.resCode == "951") {
                layer.open({ content: get_lan("plsLogin"), btn: get_lan("got_it") });
            }
        });
        sessionStorage.clear()
    },
    randomWord: function (randomFlag, min, max) {
        var str = "",
            range = min,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 随机产生
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for (var i = 0;i < range;i++) {
            pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    },
    // 展示和关闭等待条
    // var loadIndex = "";
    showLoadTips: function () {
        layer.open({
            type: 2,
            shadeClose: false
        });
    },
    closeLoadTips: function () {
        var loadIndex = layer.open({
            type: 2,
            shadeClose: false
        });
        layer.close(loadIndex);
    },
    // // 网站 默认进入首页
    get_sessionStorage_pc: function () {
        sessionStorage.getItem("Variable_pc");
        if (sessionStorage.getItem("Variable_pc") == null) {
            location.href = "/swft-v3/swft-v3-pc/index.html";
        }
    },
    set_sessionStorage_pc: function () {
        sessionStorage.setItem("Variable_pc", "pc");
    },
    get_sessionStorage_m: function () {
        sessionStorage.getItem("Variable_m");
        if (sessionStorage.getItem("Variable_m") == null) {
            location.href = "/swft-v3/swft-v3-m/index.html";
        }
    },
    set_sessionStorage_m: function () {
        sessionStorage.setItem("Variable_m", "m");
    },
    en_display: function (div_display) {
        if (getCookie("userLanguage") == "en") {
            $(div_display).css("display", "none")
        }
        else {
            $(div_display).css("display", "block")
        }
    },
    // //苹果浏览器兼容时间格式
    time_safari: function (timeStr) {
        return timeStr.replace(/-/g, "/");
    },
    // // 邀请的分享
    shareFuc: function () {
        window._bd_share_config = {
            "common":
            {
                "bdSnsKey": {},
                "bdText": get_lan("share_link_title"),
                "bdMini": "2",
                "bdMiniList": false,
                "bdPic": "" + SWFT.$ip + "/swft-v3/images/support/2_4.png",
                "bdStyle": "1",
                "bdSize": "32",
                "bdUrl": SWFT.$ip + "swft-v3/swft-v3-m/InvitedGift.html"
            },
            "share": {},
            "image": [{
                "tag": "img_2",
                viewType: 'list',
                viewPos: 'top',
                viewColor: 'black',
                viewSize: '32',
                viewList: ["weixin", "sqq", "twi", "fbook"]
                // "viewList":["weixin","sqq","twi","fbook"],
                // "viewText":get_lan("share_to"),
                // "viewSize":"32"
            }]
        };
        with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '/swft-v3/static/api/js/share.js'];

    },
    // // 邀请 不登录的分享
    shareFuc_no: function () {
        window._bd_share_config = {
            "common":
            {
                "bdSnsKey": {},
                "bdText": get_lan("share_link_title"),
                "bdMini": "2",
                "bdMiniList": false,
                "bdPic": "" + SWFT.$ip + "/swft-v3/images/support/2_4.png",
                "bdStyle": "1",
                "bdSize": "32",
                "bdUrl": SWFT.$ip + "/swft-v3/downloadAPP.html"
            },
            "share": {},
            "image": [{
                "tag": "img_2",
                viewType: 'list',
                viewPos: 'top',
                viewColor: 'black',
                viewSize: '32',
                viewList: ["weixin", "sqq", "twi", "fbook"]
                // "viewList":["weixin","sqq","twi","fbook"],
                // "viewText":get_lan("share_to"),
                // "viewSize":"32"
            }]
        };
        with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '/swft-v3/static/api/js/share.js'];

    },
    // //单笔分享
    shareExFuc: function (exurl) {
        window._bd_share_config = {
            "common":
            {
                "bdSnsKey": {},
                "bdText": get_lan("share_ex_title"),
                "bdMini": "2",
                "bdMiniList": false,
                "bdPic": "" + SWFT.$ip + "/swft-v3/images/support/2_4.png",
                "bdStyle": "1",
                "bdSize": "32",
                "bdUrl": exurl
            },
            "share": {},
            "image": [{
                "tag": "img_2",
                viewType: 'list',
                viewPos: 'top',
                viewColor: 'black',
                viewSize: '32',
                viewList: ["weixin", "sqq", "twi", "fbook"]
            }]
        };
        with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '/swft-v3/static/api/js/share.js'];

    },
    // // “分享”显示
    display_share: function () {
        window.location.href = '../InvitedGift.html';
        // $(".bdsharebuttonbox").slideToggle();
    },
    init: function () {
        var sourceFlag = this.GetQueryString("sourceFlag");
        if (sourceFlag != '' && sourceFlag != null) {
            sessionStorage.setItem("sourceFlag", sourceFlag);
        }
    },
    // //添加信任缓存
    Cache: function () {
        var Cache = '<meta HTTP-EQUIV="pragma" CONTENT="max-age=120"> \n' +
            '<meta HTTP-EQUIV="Cache-Control"  CONTENT="max-age=120"> \n' +
            '<meta HTTP-EQUIV="expires" CONTENT="0">';
        $("head").append(Cache);
    }(),
    // //添加谷歌链接
    GoogleAnalytics: function () {
        var GoogleAnalytics = '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-122581087-2"></script>\n' +
            '<script>\n' +
            'window.dataLayer = window.dataLayer || [];\n' +
            'function gtag(){dataLayer.push(arguments);}\n' +
            'gtag(\'js\', new Date());\n' +
            '\n' +
            'gtag(\'config\', \'UA-122581087-2\');\n' +
            '</script>';
        // <!-- Global site tag (gtag.js) - Google Analytics -->
        $("body").append(GoogleAnalytics);
    }(),
    //  涨跌幅降序排列
    increseDesc: function (a, b) {
        return b.increse - a.increse;
    },
    // * 涨跌幅升序排列
    increseAsc: function (a, b) {
        return a.increse - b.increse;
    },
    // * 价格降序排列
    priceDesc: function (a, b) {
        return b.usdPrice - a.usdPrice;
    },
    // * 价格升序排列
    priceAsc: function (a, b) {
        return a.usdPrice - b.usdPrice;
    },
    // 交易量降序排列
    volumeDesc: function (a, b) {
        return b.volumeEx - a.volumeEx;
    },
    // * 交易量升序排列
    volumeAsc: function (a, b) {
        return a.volumeEx - b.volumeEx;
    },
    // //移动PC端自适应
    ww: function () {
        // var browserR ="pc";
        function browserRedirect() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                browserR = "phone";
            } else {
                browserR = "pc";
            }
        }
        browserRedirect();
        if (browserR == "pc") {
            var clientWidth = document.documentElement.clientWidth;
            localStorage.setItem("beforeW", clientWidth);
            var beforeW = localStorage.getItem("beforeW");
            window.onresize = function () {
                clientWidth = document.documentElement.clientWidth;
                if (clientWidth < 768) {
                    if (beforeW > 768) {
                        window.location.href = '' + SWFT.$ip + '/swft-v3/swft-v3-m/index.html';
                    }
                } else {
                    if (beforeW < 768) {
                        window.location.href = '' + SWFT.$ip + '/swft-v3/swft-v3-pc/index.html';
                    }
                }
            };

        }
    }(),
    //判断当前浏览器语言
    GetLanguage: function () {
        var k_lan = get_lan("displayLan");
        return k_lan;
    },
    // 防止输入框自动填充
    no_input_auto: function () {
        $("input").attr("autocomplete", "off");
    }(),
    iframe_bug: function () {
        if (window.top != window.self) {
            top.location.href = "" + SWFT.$ip + "";
        }
    }(),


};
function stringFormat() {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for (var i = 1;i < arguments.length;i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}
// 获取本地时区
(function () {
    if (sessionStorage.getItem("region") == null || sessionStorage.getItem("region") == "undefined") {
        var T = new Date().getTimezoneOffset() / 60;
        sessionStorage.setItem('region', -T);
    }
})();
var k = SWFT.GetLanguage();
//登录之后的nav
function afterNav_pc() {
    var changeLang = get_lan("displayLan") === 'en' ? 'English' : '中文';
    var afterHtmlPC = '<header class="tabBanner-bgc" style="z-index: 99999999">\n' +
        '    <ul class="tabBanner_ex clearfix">\n' +
        '        <img class="logoImg l" src="/swft-v3/images/logopc_fff.png" alt="">\n' +
        '        <li class="home-li_pc l">\n' +
        '            <a><span class="i18n" name="nav_home"></span></a>\n' +
        '        </li>\n' +
        '        <li class="index-li_pc l">\n' +
        '            <a href="/swft-v3/swft-v3-pc/index.html"><span class="i18n" name="Swap"></span></a>\n' +
        '        </li>\n' +
        '        <li class="market-li_pc l">\n' +
        '            <a href="/swft-v3/swft-v3-pc/market/market.html"><span class="i18n" name="nav_market"></span></a>\n' +
        '        </li>\n' +
        '        <li class="wallet-li_pc l">\n' +
        '            <a href="/swft-v3/swft-v3-pc/wallet/walletPart.html"><span class="i18n" name="nav_wallet"></span></a>\n' +
        '        </li>\n' +
        '        <li class="deal-li_pc l">\n' +
        '            <a href="/swft-v3/swft-v3-pc/trade/deal.html"><span class="i18n" name="nav_trade"></span></a>\n' +
        '        </li>';
    if (k == "en") {
        afterHtmlPC += '';
    } else {
        afterHtmlPC += '<li class="discover-li_pc l">\n' +
            '                <a ><span class="i18n" name="nav_discover"></span></a>\n' +
            '            </li>';
    }

    afterHtmlPC += '<li class="my-li_pc l">\n' +
        '            <a href="/swft-v3/swft-v3-pc/my/mePart.html"><span class="my_span_pc"></span></a>\n' +
        '         </li>\n' +
        '        <li class="download-li_pc l">\n' +
        '            <a href="/swft-v3/downloadAPP.html"><span class="i18n" name="nav_download"></span></a>\n' +
        '        </li>\n' +
        '           <li class="lang-li" style="display:none;">' +
        '               <div class="lang">' +
        '                   <div class="selected">' + changeLang + '<span></span></div>' +
        '                   <ul class="list" style="display:none;">' +
        '                       <li class="zh">中文</li>' +
        '                       <li class="en">English</li>' +
        '                   </ul>' +
        '               </div>' +
        '           </li>' +
        '    </ul>\n' +
        '</header>';
    return afterHtmlPC;
}

$(function () {
    $(".discover-li_pc a").attr("href", "/swft-v3/swft-v3-pc/discover/discover.html");
    $(".discover-li a").attr("href", "/swft-v3/swft-v3-m/discover/discover.html");
    if(k =="en"){ 
        $(".download-li_pc a span").css("line-height","22px");   
    }else{
        $(".download-li_pc a span").css("line-height","50px");   
    }

    if (k == "zh-CN") {
        $(".home-li_pc a").click(function () {
            location.href = "https://www.swft.pro/?lang=zh";
        })
    } else {
        $(".home-li_pc a").click(function () {
            location.href = "https://www.swft.pro/";
        })
    }
    var userNo = localStorage.getItem('userNo');
    if (userNo == '' || userNo == null) {
        if (k == "zh-CN") {
            $(".my_span_pc").text("登录")
            $(".my_span").text("登录")
        } else {
            $(".my_span_pc").text("Login")
            $(".my_span").text("Login")
        }
    } else {
        if (k == "zh-CN") {
            $(".my_span_pc").text("我的")
            $(".my_span").text("我的")
        } else {
            $(".my_span_pc").text("Profile")
            $(".my_span").text("Profile")
        }
    }

});

function indextab_pc() {
    $(".index-li_pc a").addClass("ThemeColor");
    $(".index-li_pc a span").css("border-bottom", "2px #fff solid");
}

function wallettab_pc() {
    $(".wallet-li_pc a").addClass("ThemeColor");
    $(".wallet-li_pc a span").css("border-bottom", "2px #fff solid");
}
function mytab_pc() {
    $(".my-li_pc a").addClass("ThemeColor");
    $(".my-li_pc a span").css("border-bottom", "2px #fff solid");
}
function markettab_pc() {
    $(".market-li_pc a").addClass("ThemeColor");
    $(".market-li_pc a span").css("border-bottom", "2px #fff solid");
}
function discovertab_pc() {
    $(".discover-li_pc a").addClass("ThemeColor");
    $(".discover-li_pc a span").css("border-bottom", "2px #fff solid");
}
function tradetab_pc() {
    $(".trade-li_pc a").addClass("ThemeColor");
    $(".trade-li_pc a span").css("border-bottom", "2px #fff solid");
}


function afterNav() {
    var afterHtml = '<header class="tabBanner-bgc"style="z-index: 99999999" >\n' +
        '    <ul class="tabBanner clearfix">\n' +
        '        <li class="index-li">\n' +
        '            <a href="/swft-v3/swft-v3-m/index.html"><img src="/swft-v3/images/tabBanner/home.jpg" alt=""><br/><span class="i18n" name="home"></span></a>\n' +
        '        </li>\n' +
        '        <li class="wallet-li">\n' +
        '            <a href="/swft-v3/swft-v3-m/wallet/walletPart.html"><img src="/swft-v3/images/tabBanner/wallet.jpg" alt=""><br/><span class="i18n" name="nav_wallet"></span></a>\n' +
        '        </li>\n' +
        '        <li class="trade-li">\n' +
        '            <a href="/swft-v3/swft-v3-m/trade/trade.html"><img src="/swft-v3/images/tabBanner/trade.jpg" alt=""><br/><span class="i18n" name="nav_trade"></span></a>\n' +
        '        </li>';
    afterHtml += ' <li class="market-li">\n' +
        '            <a href="/swft-v3/swft-v3-m/market/market.html"><img src="/swft-v3/images/tabBanner/mark.jpg" alt=""><br/><span class="i18n" name="market_M"></span></a>\n' +
        '        </li>';
    // if(k=="en"){
    //     afterHtml +='';
    // }else{
    //     afterHtml += ' <li class="discover-li">\n' +
    //         '            <a ><img src="/swft-v3/images/tabBanner/discoverGrey.png" alt=""><br/><span class="i18n" name="nav_discover"></span></a>\n' +
    //         '        </li>';
    // }
    afterHtml +=
        '        <li class="my-li">\n' +
        '            <a href="/swft-v3/swft-v3-m/my/myPart.html"><img src="/swft-v3/images/tabBanner/my.jpg" alt=""><br/><span class="my_span"></span></a>\n' +
        '        </li>\n' +
        '    </ul>\n' +
        '</header>';
    return afterHtml;
}

function indextab() {
    $(".index-li a").addClass("ThemeColor");
    // $(".index-li a").css("border-bottom","2px #0095ff solid");
    $(".index-li a img").attr("src", "/swft-v3/images/tabBanner/home_blue.jpg")
}
function wallettab() {
    $(".wallet-li a").addClass("ThemeColor");
    // $(".wallet-li a").css("border-bottom","2px #0095ff solid");
    $(".wallet-li a img").attr("src", "/swft-v3/images/tabBanner/wallet_blue.jpg")
}
function mytab() {
    $(".my-li a").addClass("ThemeColor");
    // $(".my-li a").css("border-bottom","2px #0095ff solid");
    $(".my-li a img").attr("src", "/swft-v3/images/tabBanner/my_blue.jpg")
}
function markettab() {
    $(".market-li a").addClass("ThemeColor");
    // $(".market-li a").css("border-bottom","2px #0095ff solid");
    $(".market-li a img").attr("src", "/swft-v3/images/tabBanner/mark_blue.jpg")
}
// function discovertab() {
//     $(".discover-li a").addClass("ThemeColor");
//     // $(".market-li a").css("border-bottom","2px #0095ff solid");
//     $(".discover-li a img").attr("src","/swft-v3/images/tabBanner/discoverBlue.png")
// }
function tradetab() {
    $(".trade-li a").addClass("ThemeColor");
    // $(".market-li a").css("border-bottom","2px #0095ff solid");
    $(".trade-li a img").attr("src", "/swft-v3/images/tabBanner/trade_blue.jpg")
}

/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n||t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){function o(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=o},{}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=t("./closest");e.exports=o},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return l(document.body,t,e,n)}var c=t("./is"),l=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}e.exports=o},{}],6:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],7:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if(void 0!==o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function t(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function t(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function t(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function t(){this.removeFake()}},{key:"action",set:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:5}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if(void 0!==o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var s=i(e),u=i(n),f=i(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})}},{key:"onClick",value:function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function t(e){return l("action",e)}},{key:"defaultTarget",value:function t(e){var n=l("target",e);if(n)return document.querySelector(n)}},{key:"defaultText",value:function t(e){return l("text",e)}},{key:"destroy",value:function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});



//转换服务器时区时间
function formatTime(t, utc) {
    //t传入的时间参数,utc传入的时区参数
    if (!t) return;

    //获取本地时间
    var d = new Date();
    //获得本地时区
    // utc = utc ? parseFloat(utc) : d.getTimezoneOffset() / 60;
    var arr = t.split(/[- : \/]/);
    var time = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]).getTime() + (utc-8) * 60 * 60000;
    time = new Date(time);
    //转换传入时间为本地时间（默认传入服务器时间为东八区时间）
    //输出时间
    var yy = time.getFullYear();
    var MM = time.getMonth() + 1;
    MM = MM < 10 ? '0' + MM : MM;
    var dd = time.getDate();
    dd = dd < 10 ? '0' + dd : dd;
    var hh = time.getHours();
    hh = hh < 10 ? '0' + hh : hh;
    var mm = time.getMinutes();
    mm = mm < 10 ? '0' + mm : mm;
    var ss = time.getSeconds();
    ss = ss < 10 ? '0' + ss : ss;
    var date = yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
    return date;
}