(this.webpackJsonpmiskaa=this.webpackJsonpmiskaa||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(4),r=n.n(s),i=n(3),a=n(5),j=(n(10),n(0)),o=function(e){var t=e.name,n=e.capital,c=e.flag,s=e.region,r=e.subregion,i=e.population,a=e.borders,o=e.languages;return Object(j.jsxs)("div",{className:"country",children:[Object(j.jsx)("div",{className:"flag",children:Object(j.jsx)("img",{src:c,alt:"".concat(t," flag")})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h2",{style:{textAlign:"center"},children:t}),Object(j.jsxs)("h5",{style:{marginTop:"10px"},children:["Capital: ",n]}),Object(j.jsxs)("h5",{children:["Region: ",s]}),Object(j.jsxs)("h5",{children:["Sub-region: ",r]}),Object(j.jsxs)("h5",{children:[" Population: ",i]}),Object(j.jsxs)("h5",{children:["Languages:",o.map((function(e,t){return Object(j.jsx)("li",{children:e.name},t)}))]}),Object(j.jsxs)("h5",{children:["Borders:",a.map((function(e,t){return Object(j.jsx)("li",{children:e},t)}))]})]})]})};var l=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/region/asia").then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}))}),[]),Object(j.jsx)("div",{className:"App",children:n.map((function(e){var t=e.numericCode;return Object(c.createElement)(o,Object(i.a)(Object(i.a)({},e),{},{key:t}))}))})};r.a.render(Object(j.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.695d1a3c.chunk.js.map