import{a as d}from"/build/_shared/chunk-GLNUVGVW.js";import{b as r,g as o}from"/build/_shared/chunk-7SM5FQTA.js";import{b as n,e,f as s}from"/build/_shared/chunk-AKSB5QXU.js";s();s();var l=n(d());function m(){let{posts:i}=o(),a={weekday:"short",year:"numeric",month:"long",day:"numeric"};return e.createElement(e.Fragment,null,e.createElement("div",{className:"page-header"},e.createElement("h1",null,"Posts"),e.createElement(r,{to:"/posts/writeanewpost",className:"btn"},"New Post")),e.createElement("ul",{className:"posts-list"},i.map(t=>e.createElement("li",{key:t.id},e.createElement(r,{to:t.id},e.createElement("h3",null,t.title),new Date(t.createdAt).toLocaleString("en-US",a))))))}var u=m;export{u as default};