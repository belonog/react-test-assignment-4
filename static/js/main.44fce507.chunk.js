(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(84)},72:function(e,t,a){},73:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),s=a(19),i=a(10),u=a(37),o=a(38),m=a.n(o),d=a(11),E=a(13),p=a.n(E),f={lastUpdate:null,list:[],isFetching:!1,didInvalidate:!0},h={lastUpdate:null,list:[],isFetching:!1,didInvalidate:!0},S=Object(i.c)({templates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"TEMPLATES_REQUEST":return Object(d.a)({},e,{isFetching:!0});case"TEMPLATES_RESPONSE":return Object(d.a)({},e,{list:a,selected:a[0].id,isFetching:!1,lastUpdate:Date.now(),didInvalidate:!1});case"SET_TEMPLATE":return Object(d.a)({},e,{selected:a});default:return e}},houses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"HOUSES_REQUEST":return Object(d.a)({},e,{isFetching:!0});case"HOUSES_RESPONSE":return Object(d.a)({},e,{list:a,isFetching:!1,lastUpdate:Date.now(),didInvalidate:!1});default:return e}}}),g=Object(i.e)(S,Object(i.d)(Object(i.a)(u.a,m.a)));a(72);p.a.defaults.baseURL="\u200bhttps://demo4452328.mockable.io/";var b=a(86),v=(a(73),a(88)),_=l.a.memo(function(){return l.a.createElement("header",null,l.a.createElement(v.a,{bg:"light"},l.a.createElement(v.a.Brand,{href:"#home"},"STARNAVI")))}),T=l.a.memo(function(e){return l.a.createElement("footer",{className:"footer mt-auto py-3"},l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"m-0 text-center"},"Copyright \xa9 Your Website 2019")))}),y=a(85),O=a(41),N=a(87),k=function(e){return l.a.createElement(y.a,null,l.a.createElement(O.a,{sm:4},l.a.createElement(N.a.Group,null,l.a.createElement(N.a.Label,null,"Choose a template"),l.a.createElement(N.a.Control,{as:"select",disabled:!e.templates.list||!e.templates.list.length,value:e.templates.selected,onChange:function(t){return e.setTemplate(+t.target.value)}},e.templates.list.map(function(e){var t=e.id;return l.a.createElement("option",{key:t},t)})))))},w=a(89),U=(a(83),a(43)),I=function(e){var t=Object(n.useState)(0),a=Object(U.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{className:"house-card__img-wrap"},l.a.createElement("div",{className:"house-card__img-wrap-ratio"},l.a.createElement(w.a.Img,{className:"house-card__img",src:e.data[r],onClick:function(){var t=r+1;t===e.data.length?c(0):c(t)}}),l.a.createElement("ul",{className:"house-card__img-indicator-list"},e.data.map(function(e,t){return l.a.createElement("li",{key:e,className:"house-card__img-indicator".concat(t===r?" current":"")})}))),e.children)},R=function(e){return l.a.createElement("p",{className:"house-card__address"},e.data)},P=function(e){return l.a.createElement("p",{className:"house-card__price"},"$ ",e.data.toLocaleString())},j=function(e){return l.a.createElement("div",{className:"house-card__area"},e.data," sq. fr.")},A=l.a.memo(function(e){var t=e.house,a=e.template;return l.a.createElement(O.a,{sm:6,lg:4},l.a.createElement(w.a,{style:{margin:"15px 0"},body:!0},a.map(function(e){return function e(a){if(!t[a.field])return null;var n;switch(a.component){case"IMAGE":n=I;break;case"ADDRESS":n=R;break;case"PRICE":n=P;break;case"AREA":n=j;break;default:return null}return a.children?l.a.createElement(n,{key:t.id+a.component,data:t[a.field]},a.children.map(function(t){return e(t)})):l.a.createElement(n,{data:t[a.field],key:t.id+a.component})}(e)})))}),L={updateTemplatesIfNeeded:function(){return function(e,t){(function(e){var t=e.isFetching,a=e.list,n=e.didInvalidate,l=e.lastUpdate;return!t&&(!a||!!(n||l<Date.now()-6e5))})(t().templates)&&e(function(e){e({type:"TEMPLATES_REQUEST"}),p.a.get("https://demo4452328.mockable.io/templates").then(function(t){e({type:"TEMPLATES_RESPONSE",payload:t.data})}).catch(function(){return e({type:"TEMPLATES_RESPONSE"})})})}},updateHousesIfNeeded:function(){return function(e,t){(function(e){var t=e.isFetching,a=e.list,n=e.didInvalidate,l=e.lastUpdate;return!t&&(!a||!!(n||l<Date.now()-6e4))})(t().houses)&&e(function(e){e({type:"HOUSES_REQUEST"}),p.a.get("https://demo4452328.mockable.io/properties").then(function(t){e({type:"HOUSES_RESPONSE",payload:t.data.data})}).catch(function(){return e({type:"HOUSES_RESPONSE"})})})}},setTemplate:function(e){return function(t){t({type:"SET_TEMPLATE",payload:e})}}},F=Object(s.b)(function(e){return{houses:e.houses.list,templates:e.templates}},L)(function(e){Object(n.useEffect)(function(){e.updateTemplatesIfNeeded(),e.updateHousesIfNeeded()},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{templates:e.templates,setTemplate:e.setTemplate}),l.a.createElement(y.a,null,e.houses&&!!e.templates.list.length&&e.houses.map(function(t){return l.a.createElement(A,{key:t.id,house:t,template:e.templates.list.find(function(t){return t.id===e.templates.selected}).template})})))}),M=function(e){return l.a.createElement("div",{className:"work-table"},l.a.createElement(_,null),l.a.createElement("main",null,l.a.createElement(b.a,null,l.a.createElement(F,null))),l.a.createElement(T,null))},H=function(e){return l.a.createElement(M,null)};c.a.render(l.a.createElement(s.a,{store:g},l.a.createElement(H,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.44fce507.chunk.js.map