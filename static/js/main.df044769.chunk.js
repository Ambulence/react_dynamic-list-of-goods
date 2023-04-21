(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var o=e(5),i=e.n(o),c=e(2),r=e(1),a=(e(10),e(3)),s=e.n(a),l=(e(11),e(0)),u=function(t){var n=t.goods;return Object(l.jsx)("ul",{className:"list",children:n.map((function(t){return Object(l.jsx)("li",{className:"","data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f,b=function(){return d().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return t.slice(0,5)}))},j=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))};!function(t){t.Default="default",t.All="getAll",t.FirstFive="firstFive",t.OnlyRed="onlyRedColor"}(f||(f={}));var h=function(){var t=Object(r.useState)([]),n=Object(c.a)(t,2),e=n[0],o=n[1],i=Object(r.useState)(!1),a=Object(c.a)(i,2),h=a[0],m=a[1],O=Object(r.useState)(!1),g=Object(c.a)(O,2),y=g[0],v=g[1],p=Object(r.useState)(f.Default),x=Object(c.a)(p,2),k=x[0],N=x[1],F=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.Default;m(!0),v(!1),t().then((function(t){return o(t)})).catch((function(){return v(!0)})).finally((function(){return m(!1)})),N(n)},A=function(t){return t===k&&!y};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"title is-2",children:"Dynamic list of Goods"}),Object(l.jsx)("button",{disabled:A(f.All),className:s()("button","is-link",{"is-loading":h}),type:"button","data-cy":"all-button",onClick:function(){return F(d,f.All)},children:"Load all goods"}),Object(l.jsx)("button",{disabled:A(f.FirstFive),className:s()("button","is-link",{"is-loading":h}),type:"button","data-cy":"first-five-button",onClick:function(){return F(b,f.FirstFive)},children:"Load 5 first goods"}),Object(l.jsx)("button",{disabled:A(f.OnlyRed),className:s()("button","is-link",{"is-loading":h}),type:"button","data-cy":"red-button",onClick:function(){return F(j,f.OnlyRed)},children:"Load red goods"}),!h&&!y&&Object(l.jsx)(u,{goods:e}),y&&Object(l.jsx)("div",{className:"notification is-danger",children:"An error occured when loading data!"})]})};i.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.df044769.chunk.js.map