(this.webpackJsonpeventos=this.webpackJsonpeventos||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),u=n.n(c),o=(n(22),function(){return r.a.createElement("header",{className:"uk-margin","uk-margin":"true"},r.a.createElement("h1",{className:"uk-text-center"},"Eventos en React con EventBrite API"))}),l=n(6),i=n(2),s=n.n(i),m=n(4),p=n(3),v=n(5),f=n.n(v);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=Object(a.createContext)(),b=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(p.a)(n,2),u=c[0],o=c[1],i=Object(a.useState)({category:"Seleccione una opci\xf3n",name:"",idCategory:null}),v=Object(p.a)(i,2),b=v[0],E=v[1],O=function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.eventbriteapi.com/v3/categories/?token=".concat("LUXMFZYCQASMMAZINC5C","&locale=es_ES"),e.next=3,f()(t);case 3:n=e.sent,a=n.data,o(a.categories);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),r.a.createElement(g.Provider,{value:{categories:u,handleChange:function(e){var t=e.target,n=t.name,a=t.value;E(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b,Object(l.a)({},n,a)))},filters:b}},t)},E=Object(a.createContext)(),O=function(e){var t=e.children,n=Object(a.useContext)(g).categories,c=Object(a.useState)([]),u=Object(p.a)(c,2),o=u[0],l=u[1],i=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var r,c,u,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.find((function(e){return e.name_localized===t})).id,c="https://www.eventbriteapi.com/v3/events/search/?q=".concat(a,"&categories=").concat(r,"&sort_by=").concat("date","&token=").concat("LUXMFZYCQASMMAZINC5C","&locale=es_ES"),e.next=4,f()(c);case 4:u=e.sent,o=u.data,l(o.events);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(E.Provider,{value:{events:o,getEvents:i}},t)},k=function(){var e=Object(a.useContext)(g),t=e.categories,n=e.filters,c=e.handleChange,u=Object(a.useContext)(E).getEvents,o=n.category,l=n.name;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u(o,l)}},r.a.createElement("fieldset",{className:"uk-fieldset uk-margin"},r.a.createElement("legend",{className:"uk-legend uk-text-center"},"Busca tu event por Nombre o Categor\xeda")),r.a.createElement("div",{className:"uk-column-1-3@m uk-margin"},r.a.createElement("div",{className:"uk-margin","uk-margin":"true"},r.a.createElement("input",{name:"name",className:"uk-input",type:"text",placeholder:"Nombre de Evento o Ciudad",value:l,onChange:c})),r.a.createElement("div",{className:"uk-margin","uk-margin":"true"},r.a.createElement("select",{name:"category",className:"uk-select",onChange:c},r.a.createElement("option",{value:"Seleccione una opci\xf3n",defaultValue:"Seleccione una opci\xf3n"===o},"Seleccione una opci\xf3n"),t.map((function(e){var t=e.id,n=e.name_localized;return r.a.createElement("option",{key:t,value:n,"data-uk-form-select":!0,defaultValue:n===o},n)})))),r.a.createElement("div",{className:"uk-margin","uk-margin":"true"},r.a.createElement("input",{type:"submit",className:"uk-button uk-button-danger",value:"Busca Eventos"}))))};var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement("div",{className:"uk-container"},r.a.createElement(b,null,r.a.createElement(O,null,r.a.createElement(k,null)))))};u.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ccc8c3d0.chunk.js.map