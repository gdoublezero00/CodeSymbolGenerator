(window["webpackJsonpcode-symbol-creator"]=window["webpackJsonpcode-symbol-creator"]||[]).push([[0],{33:function(e,t,n){e.exports=n(51)},42:function(e,t,n){},43:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),l=n.n(o),c=n(13),u=n(20),i=(n(42),n(5)),m=n(6),s=n(9),b=n(7),d=n(8),h=n(17),y=(n(43),n(44),n(3)),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(b.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(y.Navbar,{color:"grey-darker",className:"has-background-grey"},r.a.createElement(y.Navbar.Brand,null,r.a.createElement(y.Navbar.Item,{className:"has-text-white"},r.a.createElement("div",null,"CodeSymbolGenerator"))))}}]),t}(r.a.Component),g=n(18),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(b.a)(t).call(this,e))).state={},n.handleChangeSymbolType=n.handleChangeSymbolType.bind(Object(g.a)(n)),n.handleChangeString=n.handleChangeString.bind(Object(g.a)(n)),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("SymbolType");null!=e&&this.props.changeSymbolType(e)}},{key:"handleChangeSymbolType",value:function(e){this.props.changeSymbolType(e.target.value),localStorage.setItem("SymbolType",e.target.value)}},{key:"handleChangeString",value:function(e){this.props.changeCodeString(e.target.value)}},{key:"render",value:function(){return r.a.createElement(y.Columns.Column,null,r.a.createElement(y.Form.Field,null,r.a.createElement(y.Form.Label,null,"Symbol"),r.a.createElement(y.Form.Control,null,r.a.createElement(y.Form.Select,{value:this.props.symbolType,onChange:this.handleChangeSymbolType},r.a.createElement("option",{value:"code128"},"Code128"),r.a.createElement("option",{value:"qrcode"},"QRCode"),r.a.createElement("option",{value:"datamatrix"},"DataMatrix")))),r.a.createElement(y.Form.Field,null,r.a.createElement(y.Form.Label,null,"Symbol Value"),r.a.createElement(y.Form.Control,null,r.a.createElement(y.Form.Input,{placeholder:"input the symbol value.",value:this.props.codeString,onChange:this.handleChangeString}))))}}]),t}(r.a.Component),E=Object(c.c)(function(e){return{symbolType:e.symbolType,codeString:e.codeString}},function(e){return{changeSymbolType:function(t){e(function(e){return{type:"CHANGE_SYMBOLTYPE",payload:e}}(t))},changeCodeString:function(t){return e(function(e){return{type:"CHANGE_CODESTRING",payload:e}}(t))}}})(v),f=n(31),O=n.n(f),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(b.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){O()("symbol",{bcid:this.props.symbolType,text:this.props.codeString,scale:2,includetext:!0,textxalign:"center"},function(){})}},{key:"render",value:function(){return r.a.createElement(y.Columns.Column,null,r.a.createElement("canvas",{id:"symbol"}))}}]),t}(r.a.Component),C=Object(c.c)(function(e){return{symbolType:e.symbolType,codeString:e.codeString}})(j),S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(b.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(y.Section,{className:"has-background-grey-light"},r.a.createElement(y.Container,null,r.a.createElement(y.Columns,null,r.a.createElement(E,null),r.a.createElement(C,null))))}}]),t}(r.a.Component),T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(b.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(p,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(h.a,{render:function(){return r.a.createElement(S,null)}})))}}]),t}(r.a.Component),k=n(16),w=n(12),N=n(29),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SYMBOLTYPE":return t.payload;default:return e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CODESTRING":return t.payload;default:return e}},G=function(e){return Object(k.c)({symbolType:x,codeString:F,router:Object(u.b)(e)})},I=Object(w.a)();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B,D=Object(k.e)(G(I),B,Object(k.d)(Object(k.a)(Object(N.a)(I))));l.a.render(r.a.createElement(c.a,{store:D},r.a.createElement(u.a,{history:I},r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.3974615d.chunk.js.map