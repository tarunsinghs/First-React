(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),o=n.n(s),a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(0)),d=function(e){return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"/set=set8$size=180x180")}),Object(u.jsx)("h1",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})})},j=function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monster.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})},m=function(e){var t=e.handleChange;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"search",placeholder:"Search Monster",onChange:t})})},f=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).HandleChange=function(t){e.setState({searchfield:t.target.value})},e.state={monster:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monster,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Rolodex Project"}),Object(u.jsx)(m,{handleChange:this.HandleChange}),Object(u.jsx)(j,{monster:r})]})}}]),n}(r.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.15bad1ef.chunk.js.map