(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["9dfc2533"],{"9dfc2533":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return c;}});var a=n("f19d2b93");n("0e3bed0e");var d=n("5b220c3d"),t=n("a9d1a279"),c=()=>{let[e,l]=(0,d.useState)(!0),[n,c]=(0,d.useState)(!1),s=`${e?"Checked":"Unchecked"}-${n?"Disabled":"Enabled"}`;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{style:{marginBottom:"20px"},children:(0,a.jsx)(t.Checkbox,{checked:e,disabled:n,onChange:e=>{console.log("checked = ",e.target.checked),l(e.target.checked);},children:s})}),(0,a.jsxs)("p",{children:[(0,a.jsx)(t.Button,{type:"primary",size:"small",onClick:()=>{l(!e);},children:e?"Uncheck":"Check"}),(0,a.jsx)(t.Button,{style:{margin:"0 10px"},type:"primary",size:"small",onClick:()=>{c(!n);},children:n?"Enable":"Disable"})]})]});};}}]);