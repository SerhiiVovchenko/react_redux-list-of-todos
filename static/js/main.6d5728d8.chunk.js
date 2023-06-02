(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),a=c(3),r=c(15),l=c(6),i=c(13),o=c(14),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(5),h={query:"",status:"all"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFilter":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"setQuery":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});default:return e}},O=function(e){return{type:"setQuery",payload:e}},f=function(e){return{type:"setFilter",payload:e}},x="setTodos",p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===x?t.playload:e},v=Object(l.combineReducers)({currentTodo:j,filter:m,todos:p}),y=Object(l.createStore)(v,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),N=c(0),g=(c(23),c(24),c(11)),T=c.n(g),k=a.b,w=a.c,E=c(1),C=function(){var e=k(),t=w((function(e){return e.todos})),c=w((function(e){return e.currentTodo})),n=w((function(e){return e.filter})),s=n.query,a=n.status,r=function(){switch(a){case"active":return t.filter((function(e){return!1===e.completed}));case"completed":return t.filter((function(e){return!0===e.completed}));default:return t}}().filter((function(e){return e.title.toLowerCase().includes(s)}));return Object(E.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("th",{children:"Title"}),Object(E.jsx)("th",{children:" "})]})}),Object(E.jsx)("tbody",{children:r.map((function(t){return Object(E.jsxs)("tr",{"data-cy":"todo",children:[Object(E.jsx)("td",{className:"is-vcentered",children:t.id}),Object(E.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(E.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("td",{className:"is-vcentered is-expanded",children:Object(E.jsx)("p",{className:T()({"has-text-danger":!t.completed},{"has-text-success":t.completed}),children:t.title})}),Object(E.jsx)("td",{className:"has-text-right is-vcentered",children:Object(E.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){e(d(t))}(t)},children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:T()("far",{"fa-eye":t.id!==(null===c||void 0===c?void 0:c.id)},{"fa-eye-slash":t.id===(null===c||void 0===c?void 0:c.id)})})})})})]},t.id)}))})]})},S=function(){var e=w((function(e){return e.filter})),t=e.query,c=e.status,n=Object(a.b)();return Object(E.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(E.jsx)("p",{className:"control",children:Object(E.jsx)("span",{className:"select",children:Object(E.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){n(f(e.target.value))},children:[Object(E.jsx)("option",{value:"all",children:"All"}),Object(E.jsx)("option",{value:"active",children:"Active"}),Object(E.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(E.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(E.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){n(O(e.target.value))}}),Object(E.jsx)("span",{className:"icon is-left",children:Object(E.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!t.length&&Object(E.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(E.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){n(O(""))}})})]})]})},_=c(4),q=(c(26),function(){return Object(E.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(E.jsx)("div",{className:"Loader__content"})})});function B(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var D=function(e){var t=e.selectedTodo,c=Object(N.useState)(null),n=Object(_.a)(c,2),s=n[0],a=n[1],r=k();Object(N.useEffect)((function(){var e;t&&(e=t.userId,B("/users/".concat(e))).then((function(e){return a(e)}))}),[t]);return Object(E.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(E.jsx)("div",{className:"modal-background"}),s?Object(E.jsxs)("div",{className:"modal-card",children:[Object(E.jsxs)("header",{className:"modal-card-head",children:[Object(E.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(E.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){r(u())}})]}),Object(E.jsxs)("div",{className:"modal-card-body",children:[Object(E.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(E.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(E.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(E.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(E.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]}):Object(E.jsx)(q,{})]})},F=function(){var e=Object(a.b)(),t=w((function(e){return e.currentTodo})),c=w((function(e){return e.todos}));return Object(N.useEffect)((function(){B("/todos").then((function(t){e(function(e){return{type:x,playload:e}}(t))}))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"section",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"box",children:[Object(E.jsx)("h1",{className:"title",children:"Todos:"}),Object(E.jsx)("div",{className:"block",children:Object(E.jsx)(S,{})}),Object(E.jsx)("div",{className:"block",children:c.length?Object(E.jsx)(C,{}):Object(E.jsx)(q,{})})]})})}),t&&Object(E.jsx)(D,{selectedTodo:t})]})},I=function(){return Object(E.jsx)(a.a,{store:y,children:Object(E.jsx)(r.a,{children:Object(E.jsx)(F,{})})})};s.a.render(Object(E.jsx)(I,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6d5728d8.chunk.js.map