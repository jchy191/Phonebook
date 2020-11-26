(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(1),r=t.n(c),o=t(15),u=t.n(o),i=(t(21),t(6)),s=t(3),h=(t(22),t(42)),d=t(4),l=t.n(d),b="/api/persons",j=function(){return l.a.get(b).then((function(e){return e.data})).catch((function(e){throw e.response.data}))},f=function(e){return l.a.post(b,e).then((function(e){return e.data})).catch((function(e){throw e.response.data}))},m=function(e){return l.a.delete("".concat(b,"/").concat(e)).catch((function(e){throw e.response.data}))},O=function(e,n){return l.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data})).catch((function(e){throw e.response.data}))};var v=function(e){var n=e.newName,t=e.newNumber,c=e.handleChange,r=e.addPerson;return Object(a.jsxs)("form",{onSubmit:r,children:[Object(a.jsxs)("div",{children:["Name: ",Object(a.jsx)("input",{name:"name",value:n,onChange:c})]}),Object(a.jsxs)("div",{children:["Number: ",Object(a.jsx)("input",{name:"number",value:t,onChange:c})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"Add"})})]})};var p=function(e){var n=e.searchValue,t=e.handleChange;return Object(a.jsx)("form",{children:Object(a.jsxs)("div",{children:["Filter contacts: ",Object(a.jsx)("input",{name:"search",value:n,onChange:t})]})})};var x=function(e){var n=e.name,t=e.id,c=e.number,r=e.handleDelete;return Object(a.jsxs)("li",{children:[n," ",c," ",Object(a.jsx)("button",{onClick:r,name:"".concat(n),id:"".concat(t),children:"Delete?"})]})};var w=function(e){var n=e.persons,t=e.searchValue,c=e.handleDelete,r=n.filter((function(e){return new RegExp("^".concat(t),"i").test(e.name)})).sort((function(e,n){var t=e.name.toLowerCase(),a=n.name.toLowerCase();return t<a?-1:t>a?1:0}));return Object(a.jsx)("ul",{children:r.map((function(e){return Object(a.jsx)(x,{id:e.id,name:e.name,number:e.number,handleDelete:c},e.id)}))})};var g=function(e){var n=e.message,t=e.isError;if(null===n)return null;var c="notification";return t&&(c="error"),Object(a.jsx)("div",{className:"".concat(c),children:n})},C=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(""),u=Object(s.a)(o,2),d=u[0],l=u[1],b=Object(c.useState)(""),x=Object(s.a)(b,2),C=x[0],N=x[1],k=Object(c.useState)(""),S=Object(s.a)(k,2),D=S[0],E=S[1],T=Object(c.useState)(null),V=Object(s.a)(T,2),y=V[0],P=V[1],A=Object(c.useState)(!1),J=Object(s.a)(A,2),L=J[0],B=J[1];Object(c.useEffect)((function(){j().then((function(e){r(e)}))}),[L]);var F=function(e){switch(e.target.name){case"name":l(e.target.value);break;case"number":N(e.target.value);break;case"search":E(e.target.value)}},I=function(e){f(e).then((function(n){r(t.concat(n)),l(""),N(""),P("".concat(e.name," has been added")),setTimeout((function(){P(null)}),5e3)})).catch(R)},M=function(e,n){O(e,n).then((function(e){r(t.map((function(n){return n.name!==d?n:e}))),l(""),N(""),P("".concat(n.name," has been updated")),setTimeout((function(){P(null)}),5e3)})).catch(R)},R=function(e){B(!0),P("".concat(e.error)),setTimeout((function(){P(null),B(!1)}),5e3)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(g,{message:y,isError:L}),Object(a.jsx)("h2",{children:"Add a New Contact:"}),Object(a.jsx)(v,{newName:d,newNumber:C,handleChange:F,addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===d}));if(n){window.confirm("".concat(d," is already added to the phonebook, replace the old number with the new one?"));var a=Object(i.a)(Object(i.a)({},n),{},{number:C});M(n.id,a)}else{var c={name:d,number:C,id:Object(h.a)()};I(c)}}}),Object(a.jsx)("h2",{children:"Numbers"}),Object(a.jsx)(p,{handleChange:F,searchValue:D}),Object(a.jsx)(w,{persons:t,searchValue:D,handleDelete:function(e){var n=e.target.name,a=e.target.id;window.confirm("Delete ".concat(n," from phonebook? Note that this action is not reversible."))&&m(a).then((function(e){r(t.filter((function(e){return e.id!==a}))),P("".concat(n," has been removed")),setTimeout((function(){P(null)}),5e3)})).catch(R)}})]})};u.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.824cd0e5.chunk.js.map