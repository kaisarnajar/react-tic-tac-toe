(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c(6),a=c(2);var i=c(0),s=function(t){var e=t.value,c=t.onClick,n=e?"squares ".concat(e):"squares";return Object(i.jsx)("button",{className:n,onClick:c,children:e})},o=function(t){var e=t.squares,c=t.onClick;return Object(i.jsx)("div",{className:"board",children:e.map((function(t,e){return Object(i.jsx)(s,{value:t,onClick:function(){return c(e)}},e)}))})},u=function(){var t=Object(n.useState)([Array(9).fill(null)]),e=Object(a.a)(t,2),c=e[0],s=e[1],u=Object(n.useState)(0),j=Object(a.a)(u,2),l=j[0],b=j[1],O=Object(n.useState)(!0),h=Object(a.a)(O,2),d=h[0],v=h[1],f=function(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<e.length;c++){var n=Object(a.a)(e[c],3),r=n[0],i=n[1],s=n[2];if(t[r]&&t[r]===t[i]&&t[r]===t[s])return t[r]}return null}(c[l]),x=d?"X":"O";return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"React Tic Tac Toe - With Hooks"}),Object(i.jsx)(o,{squares:c[l],onClick:function(t){var e=c.slice(0,l+1),n=e[l],a=Object(r.a)(n);f||a[t]||(a[t]=x,s([].concat(Object(r.a)(e),[a])),b(e.length),v(!d))}}),Object(i.jsxs)("div",{className:"info-wrapper",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"History"}),c.map((function(t,e){var c=e?"Go to move ".concat(e):"Go to Start";return Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){return b(t=e),void v(t%2===0);var t},children:c})},e)}))]}),Object(i.jsx)("h3",{children:f?"Winner: "+f:"Next Player: "+x})]})]})},j=c(7),l=c.n(j);c(13);l.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.75158f11.chunk.js.map