(this.webpackJsonpcocktail=this.webpackJsonpcocktail||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(31),a=n.n(s),r=(n(39),n(10)),l=n(21),o=n(4),j=(n(40),n(11)),d=n(3),u=n(32),b=n.n(u),O=(n(59),n(1)),h=function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h1",{children:"About Us"}),Object(O.jsxs)("div",{className:"icons",children:[Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/allan-caplain-79019a159/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"Allan Caplain"})}),Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/bastien-le-brun-3417b4137/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"Bastien Le Brun"})}),Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/calvinhyacinthmsc/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"Calvin Hyacinth"})}),Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/c%C3%A9dric-guyot-17231b209/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"C\xe9dric Guyot"})}),Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/cyril-david-928403176/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"Cyril David"})})]})]})})})};n(30);var f=function(e){var t=e.children,n=Object(c.useState)(!1),i=Object(o.a)(n,2),s=i[0],a=i[1];return!1===s?Object(O.jsx)("button",{className:"modalButton",type:"button",onClick:function(){a(!0)},children:"Details"}):Object(O.jsx)("div",{id:"myModal",className:"modal",children:Object(O.jsxs)("div",{className:"modal-content",children:[t,Object(O.jsx)("button",{className:"card-button",type:"button",onClick:function(){a(!1)},children:"Close"})]})})};function v(e){var t=e.ingredient1,n=e.ingredient2,c=e.ingredient3,i=e.ingredient4,s=e.ingredient5,a=e.ingredient6,r=e.instructions;return Object(O.jsxs)("div",{className:"ingredient",children:[Object(O.jsx)("p",{children:t}),Object(O.jsx)("p",{children:n}),Object(O.jsx)("p",{children:c}),Object(O.jsx)("p",{children:i}),Object(O.jsx)("p",{children:s}),Object(O.jsx)("p",{children:a}),Object(O.jsx)("div",{className:"instructions",children:r})]})}v.defaultProps={ingredient1:null,ingredient2:null,ingredient3:null,ingredient4:null,ingredient5:null,ingredient6:null,instructions:null};var x=v,m=n(18);var g=function(e){var t=e.cocktail,n=e.favorites,c=e.setFavorites;return Object(O.jsx)("div",{children:-1===n.findIndex((function(e){return e.idDrink===t.idDrink}))?Object(O.jsx)(m.b,{size:15,onClick:function(){return function(){var e=[].concat(Object(r.a)(n),[t]);c(e)}()}}):Object(O.jsx)(m.a,{size:15,onClick:function(){return function(){var e=n.filter((function(e){return e.idDrink!==t.idDrink}));c(e)}()}})})};var k=function(e){var t=e.data,n=e.favorites,c=e.setFavorites;return Object(O.jsx)("div",{className:"cards",children:Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-header",children:[Object(O.jsx)(g,{cocktail:t,favorites:n,setFavorites:c}),Object(O.jsx)("img",{className:"card-img",src:t.strDrinkThumb,alt:"illustration"}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h2",{className:"card-title",children:t.strDrink}),Object(O.jsx)(f,{children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:"card-title",children:t.strDrink}),Object(O.jsx)("img",{className:"modal-img",src:t.strDrinkThumb,alt:"illustration"}),Object(O.jsx)(x,{ingredient1:t.strIngredient1,ingredient2:t.strIngredient2,ingredient3:t.strIngredient3,ingredient4:t.strIngredient4,ingredient5:t.strIngredient5,ingredient6:t.strIngredient6,instructions:t.strInstructions})]})})]})]})})})},p=function(e){var t=e.cocktails,n=e.favorites,i=e.setFavorites,s=Object(c.useState)(1),a=Object(o.a)(s,2),r=a[0],l=a[1];return Object(c.useEffect)((function(){l(1)}),[t]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"contenu",children:t.slice(14*(r-1),14*r).map((function(e){return Object(O.jsx)(k,{data:e,favorites:n,setFavorites:i},e.idDrink)}))}),Object(O.jsxs)("div",{className:"pagination",children:[r>1&&Object(O.jsx)("button",{className:"pagebutton",type:"button",onClick:function(){return l(r-1)},children:"Previous page"}),14*r<t.length&&Object(O.jsx)("button",{className:"pagebutton",type:"button",onClick:function(){return l(r+1)},children:"Next page"})]})]})};n(61);var N=function(e){var t=e.getQuery,n=Object(c.useState)(""),i=Object(o.a)(n,2),s=i[0],a=i[1];return Object(O.jsx)("div",{className:"searchBar",children:Object(O.jsx)("input",{type:"search",className:"form-control",placeholder:"Search Cocktails",results:"0",value:s,onChange:function(e){return n=e.target.value,a(n),void t(n);var n}})})},C=function(e){var t=e.cocktails,n=e.favorites,i=e.setFavorites,s=Object(c.useState)(""),a=Object(o.a)(s,2),r=a[0],l=a[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{getQuery:function(e){return l(e)}}),Object(O.jsx)(p,{cocktails:t.filter((function(e){return e.strDrink.toLowerCase().includes(r.toLowerCase())})),favorites:n,setFavorites:i})]})},I=(n(62),n.p+"static/media/headerLogo.e79643a7.png"),w=function(){return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsxs)("div",{className:"gridstyle",children:[Object(O.jsx)("img",{className:"codeTailsImg",src:I,alt:"logo"}),Object(O.jsx)("h1",{children:"WELCOME TO WILD CODE'TAILS"})]}),Object(O.jsx)("div",{className:"thefourth",children:Object(O.jsxs)("nav",{className:"navlist",children:[Object(O.jsx)(j.b,{className:"link",activeClassName:"active",exact:!0,to:"/",children:"Search"}),Object(O.jsx)(j.b,{className:"link",activeClassName:"active",exact:!0,to:"/create",children:"Create"}),Object(O.jsx)(j.b,{className:"link",activeClassName:"active",exact:!0,to:"/cocktail-of-the-day",children:"Try me !"}),Object(O.jsx)(j.b,{className:"link",activeClassName:"active",exact:!0,to:"/favorites",children:"Favorites"})]})})]})};var F=function(e){var t=e.ingredients,n=e.selectedIngredient,c=e.setSelectedIngredient;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"dropdown",children:Object(O.jsxs)("select",{className:"select",onChange:function(e){c(e.target.value)},value:n,children:[Object(O.jsx)("option",{value:"",children:"Select Ingredient"}),t.map((function(e){return Object(O.jsx)("option",{value:e,children:e},e)}))]})})})},y=function(e){return e.reduce((function(e,t){var n=[].concat(Object(r.a)(e),Object(r.a)(t.strIngredients)),c=new Set(n);return Object(r.a)(c)}),[]).sort()};var S=function(e){var t=e.cocktails,n=e.favorites,i=e.setFavorites,s=Object(c.useState)([]),a=Object(o.a)(s,2),r=a[0],l=a[1],j=Object(c.useState)([]),d=Object(o.a)(j,2),u=d[0],b=d[1],h=Object(c.useState)(""),f=Object(o.a)(h,2),v=f[0],x=f[1],m=Object(c.useState)(""),g=Object(o.a)(m,2),k=g[0],N=g[1];return Object(c.useEffect)((function(){var e=y(t);l(e),b(e),x(""),N("")}),[t]),Object(c.useEffect)((function(){var e=y(t.filter((function(e){return""===v||e.strIngredients.includes(v)})));b(e.filter((function(e){return e!==v}))),N("")}),[v]),Object(O.jsxs)("div",{className:"strIngredient",children:[v,k,Object(O.jsx)(F,{ingredients:r,selectedIngredient:v,setSelectedIngredient:x}),Object(O.jsx)(F,{ingredients:u,selectedIngredient:k,setSelectedIngredient:N}),Object(O.jsx)(p,{cocktails:t.filter((function(e){return(""===v||e.strIngredients.includes(v))&&(""===k||e.strIngredients.includes(k))})),favorites:n,setFavorites:i})]})},D=n(34);n(71);var E=function(e){var t=e.cocktails,n=e.favorites,i=e.setFavorites,s=Object(c.useState)(),a=Object(o.a)(s,2),r=a[0],l=a[1],j=function(){var e=Math.floor(Math.random()*t.length);l(t[e])};return Object(c.useEffect)((function(){null==r&&t.length>=1&&j()}),[t]),Object(O.jsx)("div",{className:"dayscocktail",children:r&&Object(O.jsxs)("div",{className:"drinking",children:[Object(O.jsx)(k,{data:r,favorites:n,setFavorites:i}),Object(O.jsxs)("div",{className:"drink",children:[Object(O.jsx)(D.a,{size:70,className:"button",p:!0,onClick:function(){return j()},type:"button"}),Object(O.jsx)("div",{className:"text",children:Object(O.jsx)("text",{children:Object(O.jsx)("p",{children:"CHANGE"})})})]})]})})};n(72);var L=function(e){var t=e.favorites,n=e.setFavorites;return Object(O.jsx)("div",{className:"myFavorites",children:Object(O.jsx)("div",{className:"favoriteCocktail",children:t.map((function(e){return Object(O.jsx)(k,{data:e,favorites:t,setFavorites:n},e.idDrink)}))})})},T=function(e,t){var n=localStorage.getItem(e),i=n?JSON.parse(n):t,s=Object(c.useState)(i),a=Object(o.a)(s,2),r=a[0],l=a[1];return[r,function(t){localStorage.setItem(e,JSON.stringify(t)),l(t)}]};var B=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=T("favorite-cocktails",[]),a=Object(o.a)(s,2),u=a[0],f=a[1];return Object(c.useEffect)((function(){Promise.all("abcdefghijklmnopqrstuvwxyz0123456789".split("").map((function(e){return b.a.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(e))}))).then((function(e){i(e.reduce((function(e,t){if(null==t.data.drinks)return e;var n=t.data.drinks.map((function(e){for(var t=[],n=1;n<=15;n+=1){var c=e["strIngredient".concat(n)];null!=c&&""!==c&&t.push(c.toLowerCase())}return Object(l.a)(Object(l.a)({},e),{},{strIngredients:t})}));return[].concat(Object(r.a)(e),Object(r.a)(n.sort((function(e,t){return e.strDrink.localeCompare(t.strDrink)}))))}),[]))}))}),[]),Object(O.jsxs)(j.a,{basename:"/cocktail",children:[Object(O.jsx)(w,{}),Object(O.jsxs)("main",{children:[Object(O.jsx)(d.a,{path:"/",exact:!0,children:Object(O.jsx)(C,{cocktails:n,favorites:u,setFavorites:f})}),Object(O.jsx)(d.a,{path:"/create",exact:!0,children:Object(O.jsx)(S,{cocktails:n,favorites:u,setFavorites:f})}),Object(O.jsx)(d.a,{path:"/cocktail-of-the-day",exact:!0,children:Object(O.jsx)(E,{cocktails:n,favorites:u,setFavorites:f})}),Object(O.jsx)(d.a,{path:"/favorites",exact:!0,children:Object(O.jsx)(L,{favorites:u,setFavorites:f})})]}),Object(O.jsx)(h,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root")),A()}},[[73,1,2]]]);
//# sourceMappingURL=main.c6087362.chunk.js.map