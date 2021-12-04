(this.webpackJsonptodo2=this.webpackJsonptodo2||[]).push([[0],{98:function(t,e,n){"use strict";n.r(e);var o,c,r,a,i,s=n(0),d=n.n(s),l=n(25),u=n.n(l),O=n(20),j=n(18),f=n(26),b=f.a.div(o||(o=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin: auto;\n  justify-content: center;\n  max-width: 700px;\n"]))),p=n(13),x=n(74),g="ADD_TODO",m="TOGGLE_TODO",T="REMOVE_TODO",_="SORT_DONE_TODO",h="SORT_NOT_DONE_TODO",y="SHOW_ALL",S=n(138),v=n(134),E=f.a.div(c||(c=Object(j.a)(["\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n"]))),D=n(2),N=function(){var t=Object(O.b)(),e=Object(s.useState)(""),n=Object(p.a)(e,2),o=n[0],c=n[1],r=function(e){o.trim()&&(t(function(t){return{type:g,id:Object(x.a)(),text:t}}(o)),c(""))};return Object(D.jsxs)(E,{children:[Object(D.jsx)(v.a,{sx:{width:"70%"},id:"standard-basic",label:"\u0412\u0432\u0435\u0434\u0438 \u0437\u0430\u0434\u0430\u0447\u0443",variant:"standard",value:o,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&r()}}),Object(D.jsx)(S.a,{size:"small",variant:"contained",onClick:r,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},w=n(139),k=n(73),L=n.n(k),R=f.a.div(r||(r=Object(j.a)(["\n  display: flex;\n  position: center;\n  align-items: center;\n  align-self: stretch;\n  justify-content: space-between;\n  margin-left: 10px;\n  margin-top: 5px;\n  padding-left: 15px;\n  border: 1px solid grey;\n  border-radius: 20px;\n  word-break: break-all;\n"]))),C=function(t){var e=t.id,n=t.text,o=t.complete,c=Object(O.b)();return Object(D.jsxs)(R,{onClick:function(){return c(function(t){return{type:m,id:t}}(e))},style:{textDecoration:o?"line-through":"none"},children:[n,Object(D.jsx)(w.a,{"aria-label":"delete",onClick:function(){return c(function(t){return{type:T,id:t}}(e))},children:Object(D.jsx)(L.a,{})})]},e)},A=f.a.div(a||(a=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),J=function(){var t=Object(O.c)((function(t){return t.sortedTodos})),e=Object(O.c)((function(t){return t.flag}));return Object(s.useEffect)((function(){localStorage.setItem("savedStateTodos",JSON.stringify(t))})),Object(s.useEffect)((function(){localStorage.setItem("savedFlag",JSON.stringify(e))})),Object(D.jsx)(A,{children:t.map((function(t){return Object(D.jsx)(C,{id:t.id,text:t.text,complete:t.complete},t.id)}))})},I=n(137),z=f.a.div(i||(i=Object(j.a)(["\n  margin: 10px;\n  padding-left: 10px;\n"]))),H=function(){var t=Object(O.c)((function(t){return t.flag})),e=Object(O.b)();return Object(D.jsxs)(z,{children:[Object(D.jsx)(S.a,{size:"small",variant:"contained",color:"SORT_DONE_TODO"===t?"success":"primary",onClick:function(){return e({type:_})},children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"}),Object(D.jsx)(S.a,{size:"small",variant:"contained",color:"SORT_NOT_DONE_TODO"===t?"success":"primary",onClick:function(){return e({type:h})},children:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435"}),Object(D.jsx)(S.a,{size:"small",variant:"contained",color:"SHOW_ALL"===t?"success":"primary",onClick:function(){return e({type:y})},children:"\u0412\u0441\u0435"})]})};var W=function(){return Object(D.jsxs)(b,{children:[Object(D.jsx)(I.a,{textAlign:"center",variant:"h3",children:"Todo Redux"}),Object(D.jsx)(N,{}),Object(D.jsx)(J,{}),Object(D.jsx)(H,{})]})},X=n(21),V=n(23),G=n(15),M=localStorage.length||localStorage.sortedTodos?{todos:JSON.parse(localStorage.savedStateTodos),sortedTodos:JSON.parse(localStorage.savedStateTodos),flag:"SHOW_ALL"}:{todos:[],sortedTodos:[],flag:"SHOW_ALL"},U=function(t,e){return{todos:[].concat(Object(G.a)(t.todos),[{id:e.id,text:e.text,complete:!1}]),flag:t.flag,sortedTodos:[].concat(Object(G.a)(t.todos),[{id:e.id,text:e.text,complete:!1}])}},B=function(t,e){return{todos:t.todos.filter((function(t){return t.id!==e.id})),flag:t.flag,sortedTodos:t.todos.filter((function(t){return t.id!==e.id}))}},F=function(t,e){return{todos:t.todos.map((function(t){return t.id===e.id?Object(V.a)(Object(V.a)({},t),{},{complete:!t.complete}):t})),flag:t.flag,sortedTodos:t.todos.map((function(t){return t.id===e.id?Object(V.a)(Object(V.a)({},t),{},{complete:!t.complete}):t}))}},K=Object(X.d)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return U(t,e);case T:return B(t,e);case m:return F(t,e);case _:return Object(V.a)(Object(V.a)({},t),{},{flag:e.type,sortedTodos:Object(G.a)(t.todos.filter((function(t){return t.complete})))});case h:return Object(V.a)(Object(V.a)({},t),{},{sortedTodos:Object(G.a)(t.todos.filter((function(t){return!t.complete}))),flag:e.type});case y:return Object(V.a)(Object(V.a)({},t),{},{sortedTodos:Object(G.a)(t.todos.map((function(t){return t}))),flag:e.type});default:return t}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());u.a.render(Object(D.jsx)(d.a.StrictMode,{children:Object(D.jsx)(O.a,{store:K,children:Object(D.jsx)(W,{})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.d9f001ec.chunk.js.map