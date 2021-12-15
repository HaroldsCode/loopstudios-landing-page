(this["webpackJsonploopstudios-landing-page"]=this["webpackJsonploopstudios-landing-page"]||[]).push([[0],{22:function(e,n,t){},23:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var i,a,s,r,c,o,l,d=t(0),j=t(13),m=t.n(j),b=(t(22),t(23),t(17)),p=t(2),h=t(3),g=t(1),u=function(){var e=Object(d.useState)(window.screen.width<576),n=Object(h.a)(e,2),t=n[0],i=n[1],a=Object(d.useState)(window.screen.width),s=Object(h.a)(a,2),r=s[0],c=s[1];return Object(d.useEffect)((function(){var e=window.screen.width<576;i((function(n){return e}))}),[r]),window.addEventListener("resize",(function(e){c((function(e){return window.screen.width}))})),Object(g.jsx)("ul",{className:"cards",children:[{name:"Deep earth",pathMobile:"./images/mobile/image-deep-earth.jpg",pathDesktop:"./images/desktop/image-deep-earth.jpg"},{name:"Night arcade",pathMobile:"./images/mobile/image-night-arcade.jpg",pathDesktop:"./images/desktop/image-night-arcade.jpg"},{name:"Soccer team VR",pathMobile:"./images/mobile/image-soccer-team.jpg",pathDesktop:"./images/desktop/image-soccer-team.jpg"},{name:"The grid",pathMobile:"./images/mobile/image-grid.jpg",pathDesktop:"./images/desktop/image-grid.jpg"},{name:"From up above VR",pathMobile:"./images/mobile/image-from-above.jpg",pathDesktop:"./images/desktop/image-from-above.jpg"},{name:"Pocket borealis",pathMobile:"./images/mobile/image-pocket-borealis.jpg",pathDesktop:"./images/desktop/image-pocket-borealis.jpg"},{name:"The curiosity",pathMobile:"./images/mobile/image-curiosity.jpg",pathDesktop:"./images/desktop/image-curiosity.jpg"},{name:"Make it fisheye",pathMobile:"./images/mobile/image-fisheye.jpg",pathDesktop:"./images/desktop/image-fisheye.jpg"}].map((function(e,n){return Object(g.jsxs)("li",{className:"card",children:[Object(g.jsx)("img",{className:"card__image",src:t?e.pathMobile:e.pathDesktop,alt:e.name}),Object(g.jsx)("div",{className:"card__body",children:Object(g.jsx)("h3",{className:"card__title",children:e.name})})]},n)}))})},f=t(5),x=t(6),O=t(8),v="hsl(0, 0%, 100%)",w="'Josefin Sans', sans-serif;",k=x.a.a(i||(i=Object(f.a)(["\n  text-decoration: none;\n  color: ",";\n  font-family: ",";\n  font-size: ",";\n  text-transform: ",";\n\n  &:hover{\n    &::before{\n      display: block;\n    }\n  }\n\n  &::before{\n    position: absolute;\n    bottom: -8px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1;\n    content: '';\n    width: 50%;\n    height: 2px;\n    border-radius: 1px;\n    background-color: var(--white);\n    display: none;\n  }\n  @media (min-width: 992px) {\n    font-size: 1.05rem;\n  }\n"])),v,(function(e){return"true"===e.size?w:""}),(function(e){return"true"===e.size?"calc(2rem + 1vh)":"1rem"}),(function(e){return"true"===e.size?"uppercase":""})),_=function(e){var n=e.path,t=e.children,i=e.size,a=void 0===i?"false":i;return Object(g.jsx)(k,{href:n,size:a,children:t})},y={aside:"\n    flex-direction: column;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translate(7vw,-50%);\n    gap: calc(1rem + 1vh);\n    & > li {\n      position: relative;\n      display: flex;\n      align-self: start;\n    }\n    @media landscape {\n      flex-direction: row;\n    }\n  ",normal:"\n    flex-direction: column;\n    gap: 1.6rem;\n    & > li {\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    @media screen and (min-width: 751px){\n      flex-direction: row;\n    }\n    @media (min-width: 992px) {\n      gap: 2.5rem;\n    }\n    "},N=x.a.ul(a||(a=Object(f.a)(["\n  padding: 0;\n  display: flex;\n  ","\n  \n"])),(function(e){return y[e.variant||"normal"]})),z=function(e){var n=e.variant;return Object(g.jsx)(N,{variant:n,children:[{name:"About",path:"#"},{name:"Carrers",path:"#"},{name:"Events",path:"#"},{name:"Products",path:"#"},{name:"Support",path:"#"}].map((function(e){var t=e.name,i=e.path;return Object(g.jsx)("li",{children:Object(g.jsx)(_,{path:i,size:"aside"===n?"true":"false",children:t})},t)}))})},M=t.p+"static/media/mobile.9b5aacea.jpg",D=t.p+"static/media/desktop.3de81110.jpg",S=Object(x.a)(O.b)(s||(s=Object(f.a)(["\n  position: relative;\n  right: -1.4%;\n  color: ",";\n  width: calc(1rem * 3);\n  height: calc(1rem * 3);\n"])),v),E=function(e){var n=e.showMenu,t=Object(d.useState)(window.screen.width>768),i=Object(h.a)(t,2),a=i[0],s=i[1],r=Object(d.useState)(window.screen.width),c=Object(h.a)(r,2),o=c[0],l=c[1];return Object(d.useEffect)((function(){var e=window.screen.width<768;s((function(n){return e}))}),[o]),window.addEventListener("resize",(function(e){l((function(e){return window.screen.width}))})),Object(g.jsxs)("header",{children:[Object(g.jsx)("div",{}),Object(g.jsx)("img",{src:a?M:D,alt:"background"}),Object(g.jsxs)("section",{children:[Object(g.jsxs)("nav",{className:"navbar",children:[Object(g.jsx)("img",{src:"./images/logo.svg",alt:"logo loopstudios",className:"brand"}),a&&Object(g.jsx)(S,{onClick:n}),!a&&Object(g.jsx)(z,{})]}),Object(g.jsx)("div",{className:"navbar__card",children:Object(g.jsx)("h1",{className:"navbar__title",children:"Immersive Experiences That Deliver"})})]})]})},C=x.a.picture(r||(r=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n\n  & img {\n    cursor: pointer;\n  }\n\n  & > a{\n    position: relative;\n\n    &:hover{\n\n      &::before{\n        display: block;\n      }\n\n    }\n\n    &::before{\n      position: absolute;\n      bottom: -6px;\n      left: 50%;\n      transform: translateX(-50%);\n      z-index: 1;\n      content: '';\n      width: 100%;\n      height: 2px;\n      border-radius: 1px;\n      background-color: var(--white);\n      display: none;\n    }\n  }\n\n  @media (min-width: 992px) {\n    align-items: end;\n    justify-content: end;\n  }\n"]))),F=function(){return Object(g.jsx)(C,{children:[{alt:"Facebook",src:"./images/icon-facebook.svg"},{alt:"Twitter",src:"./images/icon-twitter.svg"},{alt:"Pinterest",src:"./images/icon-pinterest.svg"},{alt:"Instagram",src:"./images/icon-instagram.svg"}].map((function(e){var n=e.alt,t=e.src;return Object(g.jsx)("a",{href:"/#",children:Object(g.jsx)("img",{src:t,alt:n})},n)}))})},T=x.a.div(c||(c=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1.5rem 0 3.5rem 0;\n  a, span{\n    color: ","\n  }\n  \n  @media (min-width: 992px) {\n    flex-direction: row;\n    a{\n      font-size: 1.05rem;\n    }\n  }\n"])),v),I=function(){return Object(g.jsxs)(T,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:"Challenge by"}),"\xa0",Object(g.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),"."]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:"Coded by"}),"\xa0",Object(g.jsx)("a",{href:"https://haroldmoreno.com/",target:"_blank",rel:"noreferrer",children:"Harold Moreno"}),"."]})]})},L=function(){return Object(g.jsxs)("footer",{children:[Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsxs)("div",{className:"footer__group",children:[Object(g.jsx)("img",{className:"footer__brand",src:"./images/logo.svg",alt:"loopstudios",title:"loopstudios"}),Object(g.jsx)(z,{})]}),Object(g.jsxs)("div",{className:"footer__group",children:[Object(g.jsx)(F,{}),Object(g.jsx)("p",{children:"\xa9 2021 Loopstudios. All rigths reserved."})]})]}),Object(g.jsx)(I,{})]})},R=x.a.aside(o||(o=Object(f.a)(["\n  position:absolute;\n  z-index:1;\n  top:0;\n  left:0;\n  background-color:#000;\n  height: 100%;\n  width: 100vw;\n  padding: 5vh 7vw;\n  box-sizing: border-box;\n\n  & #nav {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]))),V=Object(x.a)(O.a)(l||(l=Object(f.a)(["\n  position: relative;\n  right: -1.4%;\n  color: ",";\n  width: calc(1rem * 2.4);\n  height: calc(1rem * 2.4);\n\n  & > path {\n    width: 1rem;\n  }\n"])),v),J=function(e){var n=e.toggle;return Object(g.jsxs)(R,{children:[Object(g.jsxs)("div",{id:"nav",children:[Object(g.jsx)("img",{src:"./images/logo.svg",alt:"logo loopstudios"}),Object(g.jsx)(V,{onClick:n})]}),Object(g.jsx)(z,{variant:"aside"})]})},P=function(){var e=Object(d.useState)(!1),n=Object(h.a)(e,2),t=n[0],i=n[1];return t?Object(g.jsx)(J,{toggle:function(e){return i((function(e){return!1}))}}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(E,{showMenu:function(e){return i((function(e){return!0}))}}),Object(g.jsxs)("main",{children:[Object(g.jsxs)("article",{className:"data",children:[Object(g.jsx)("picture",{className:"data__thumbnail",children:Object(g.jsx)("img",{className:"data__image",src:"./images/desktop/image-interactive.jpg",alt:"Interactive VR"})}),Object(g.jsxs)("div",{className:"data__body",children:[Object(g.jsx)("h2",{className:"data__title",children:"The leader in interactive VR"}),Object(g.jsx)("p",{className:"data__copy",children:"Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand."})]})]}),Object(g.jsxs)("section",{className:"creations",children:[Object(g.jsx)("h2",{className:"creations__title",children:"Our creations"}),Object(g.jsx)("button",{className:"btn btn--creations",children:"See all"}),Object(g.jsx)(u,{})]})]}),Object(g.jsx)(L,{})]})},A=function(){return Object(g.jsx)(b.a,{children:Object(g.jsx)(p.c,{children:Object(g.jsx)(p.a,{path:"/",element:Object(g.jsx)(P,{})})})})};m.a.render(Object(g.jsx)(A,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.64a1b056.chunk.js.map