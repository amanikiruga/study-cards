(this["webpackJsonpstudy-cards"]=this["webpackJsonpstudy-cards"]||[]).push([[0],{61:function(e,t,c){},85:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(28),r=c.n(s),d=(c(85),c(12)),i=c(15),l=c(135),j=c(136),o=c(137),u=c(131),b=c(66),x=c.n(b),O=(c(61),c(2)),h=function(e){var t=Object(a.useState)(""),c=Object(d.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),b=Object(d.a)(r,2),h=b[0],m=b[1],f=e.addedItems.map((function(t){return Object(O.jsxs)(l.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)(j.a,{sx:{py:2},flexWrap:"wrap",children:"".concat(t.id+1,".")}),Object(O.jsx)(l.a,{bgcolor:"#F6FAFD",sx:{p:1,m:1,borderRadius:"10%"},children:Object(O.jsx)(j.a,{children:Object(O.jsx)("pre",{style:{fontFamily:"inherit"},children:t.question})})}),Object(O.jsx)(l.a,{bgcolor:"#f5ffea",sx:{p:1,m:1,borderRadius:"10%"},children:Object(O.jsx)(j.a,{children:Object(O.jsx)("pre",{style:{fontFamily:"inherit"},children:t.answer})})}),Object(O.jsx)(o.a,{onClick:function(){var c;c=t.id,e.setAddedItems(e.addedItems.filter((function(e){return e.id!=c})))},startIcon:Object(O.jsx)(x.a,{})})]},t.id)}));return Object(O.jsxs)(l.a,{sx:{display:"flex",height:"100%",flexDirection:"column",textAlign:"center",alignItems:"center",my:12,mx:"26%"},children:[Object(O.jsx)(o.a,{variant:"contained",onClick:function(){return e.setIsPracticingCards(!0)},children:"Practice Cards"}),f,Object(O.jsxs)(l.a,{sx:{display:"flex",flexDirection:"row"},children:[Object(O.jsx)(l.a,{children:Object(O.jsx)(u.a,{id:"outlined-basic",label:"Add question",multiline:!0,defaultValue:n,sx:{mx:2},onInput:function(e){return s(e.target.value)},variant:"standard"})}),Object(O.jsx)(l.a,{children:Object(O.jsx)(u.a,{id:"outlined-basic",label:"Add answer",multiline:!0,defaultValue:h,onInput:function(e){return m(e.target.value)},variant:"standard"})})]}),Object(O.jsxs)(o.a,{onClick:function(){return t={question:n,answer:h,id:e.addedItems.length},void e.setAddedItems([].concat(Object(i.a)(e.addedItems),[t]));var t},children:[" ","Add Item"," "]})]})},m=c(138),f=c(139),v=c(133),I=function(e){var t=Object(a.useState)(!1),c=Object(d.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(0),i=Object(d.a)(r,2),l=i[0],u=i[1],b=Object(a.useState)(!1),x=Object(d.a)(b,2),h=x[0],I=x[1],p=e.addedItems.map((function(e){return Object(O.jsx)("div",{className:"flip-card ".concat(n?"reveal-answer":""),children:Object(O.jsxs)("div",{className:"flip-card-inner",children:[Object(O.jsx)("div",{className:"flip-card-front",children:Object(O.jsx)("div",{className:"card-content",children:e.question})}),Object(O.jsx)("div",{className:"flip-card-back",children:Object(O.jsx)("div",{className:"card-content",children:e.answer})})]})})}));return Object(O.jsxs)("div",{className:"card-view",children:[Object(O.jsxs)("div",{className:"card-view-controls",children:[Object(O.jsx)(o.a,{variant:"outlined",onClick:function(){e.setIsPracticingCards(!1)},children:"Modify Cards"}),Object(O.jsxs)(m.a,{row:!0,children:[Object(O.jsx)(f.a,{checked:n,onChange:function(e){s(e.target.checked)},control:Object(O.jsx)(v.a,{}),label:"Reveal Answers"}),Object(O.jsx)(f.a,{checked:h,onChange:function(e){I(e.target.checked)},control:Object(O.jsx)(v.a,{}),label:"Randomize Cards"})]})]}),Object(O.jsx)("div",{className:"card-view-header",children:Object(O.jsx)(j.a,{variant:"h5",component:"h2",color:"#2a77d2",textAlign:"center",children:"Long press card to view answer"})}),Object(O.jsxs)("div",{className:"card-view-center",children:[Object(O.jsxs)(o.a,{variant:"outlined",onClick:function(){u(Math.max(l-1,0))},sx:{mx:3},children:["\u3008"," "]}),p[l],Object(O.jsx)(o.a,{variant:"outlined",onClick:function(){var t=Array.from(Array(e.addedItems.length).keys()).filter((function(t){return t!=e.addedItems[l].id}));u(h?t[Math.floor(Math.random()*(e.addedItems.length-1))]:Math.min(l+1,e.addedItems.length-1))},sx:{mx:3},children:"\u3009"})]})]})},p=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(function(){var e=localStorage.getItem("studyItems");return e?JSON.parse(e):[]}()),r=Object(d.a)(s,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){var e;e=i,localStorage.setItem("studyItems",JSON.stringify(e))}),i),c?Object(O.jsx)(I,{setIsPracticingCards:n,addedItems:i}):Object(O.jsx)(h,{addedItems:i,setAddedItems:l,setIsPracticingCards:n})};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.8de6ae52.chunk.js.map