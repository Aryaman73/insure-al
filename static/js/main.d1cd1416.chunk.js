(this["webpackJsonpinsure-al"]=this["webpackJsonpinsure-al"]||[]).push([[0],{15:function(e,r,a){e.exports=a(28)},20:function(e,r,a){},21:function(e,r,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(e,r,a){},28:function(e,r,a){"use strict";a.r(r);var t=a(0),s=a.n(t),n=a(5),i=a.n(n),o=(a(20),a(21),a(22),a(6)),u=a(7),l=a(14),c=a(13),d=a(8),m=a.n(d),g=a(9),h=a.n(g),p=function(e){Object(l.a)(a,e);var r=Object(c.a)(a);function a(e){var t;return Object(o.a)(this,a),(t=r.call(this,e)).state={name:t.props.steps.name||"",address:t.props.steps.address||"",yearsAtResidence:t.props.steps.yearsAtResidence||"",yearHouseBuilt:t.props.steps.yearHouseBuilt||""},t}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,r=(e.name,e.address,e.yearsAtResidence,e.yearHouseBuilt);return r.value>2e3?s.a.createElement("div",null," Your house was built after 2000 (i.e. the year ",r.value,"), and thus your insurance premium is quite low!  "):s.a.createElement("div",null," Your house was built before 2000, and thus, your insurance premium ranges from $500 to $700")}}]),a}(t.Component);p.defaultProps={steps:m.a.object};var y=function(){return s.a.createElement(h.a,{style:{width:"80vw",height:"40vw"},contentStyle:{height:"32vw"},steps:[{id:"1",message:"Hello! What is your name?",trigger:"name"},{id:"name",user:!0,trigger:"2"},{id:"2",message:"Hi {previousValue}! What is your address?",trigger:"address"},{id:"address",user:!0,trigger:"3"},{id:"3",message:"How many years have you spent at your current residence?",trigger:"yearsAtResidence"},{id:"yearsAtResidence",options:[{value:"Less than 1 Year",label:"Less than 1 year",trigger:"4"},{value:"1 - 3 years",label:"1 - 3 years",trigger:"4"},{value:"More than 3 years",label:"More than 3 years",trigger:"4"}]},{id:"4",message:"What year was your home built in? ",trigger:"yearHouseBuilt"},{id:"yearHouseBuilt",user:!0,trigger:"5"},{id:"5",component:s.a.createElement(p,null),asMessage:!0,end:!0}]})};var v=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(y,null),s.a.createElement("p",null,"Hey! This is Insure-Al, your friendly Insurance Advisor!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d1cd1416.chunk.js.map