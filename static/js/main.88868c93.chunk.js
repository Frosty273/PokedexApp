(this["webpackJsonppokedex-v2"]=this["webpackJsonppokedex-v2"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=t(14),i=t(142),m=t(144),u=t(145),d=t(146),s=t(147),p=t(72),g=t(149),E=t(150),h=t(157),f=t(159),k=t(151),b=t(139),v=t(11),x=t(70),y=t(148),_=t(33),C=t.n(_),A=t(64),w=t.n(A);function T(e){var a=(e=e.replace(/-/gi," ")).lastIndexOf(" ");return-1!==a&&(e=e.slice(0,a+1)+e.charAt(a+1).toUpperCase()+e.slice(a+2)),e.charAt(0).toUpperCase()+e.slice(1)}var B=Object(b.a)((function(e){return{pokedexContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},searchContainer:{display:"flex",backgroundColor:Object(v.b)(e.palette.common.white,.15),paddingLeft:"20px",paddingRight:"20px",marginTop:"5px",marginBottom:"5px"},searchIcon:{alignSelf:"flex-end",marginBottom:"5px"},searchInput:{width:"200px",margin:"5px"},themeToggleContainer:{align:"center"},darkModeToggle:{display:"flex"},darkModeToggleText:{align:"center",color:"black"}}})),D=function(e){var a=e.history,t=B(),l=r.a.useState({}),o=Object(c.a)(l,2),b=o[0],v=o[1],_=r.a.useState(""),A=Object(c.a)(_,2),D=A[0],N=A[1],O=r.a.useState(!1),j=Object(c.a)(O,2),F=j[0],S=j[1],P=Object(x.a)({palette:{type:F?"dark":"light"}});Object(n.useEffect)((function(){C.a.get("https://pokeapi.co/api/v2/pokemon?limit=893").then((function(e){var a=e.data.results,t={};a.forEach((function(e,a){t[a+1]={id:a+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a+1,".png")}})),v(t)}))}),[]);return r.a.createElement(y.a,{theme:P},r.a.createElement(p.a,{style:{height:"100%"}},r.a.createElement("div",null,r.a.createElement(g.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement("div",{className:t.searchContainer},r.a.createElement(w.a,{className:t.searchIcon}),r.a.createElement(h.a,{className:t.searchInput,label:"Pokemon",variant:"standard",onChange:function(e){N(e.target.value)}})),r.a.createElement("div",{className:t.themeToggleContainer},r.a.createElement(f.a,{className:t.darkModeToggle,checked:F,onChange:function(){return S(!F)}}),r.a.createElement(s.a,{className:t.darkModeToggleText},"Dark Theme")))),b?r.a.createElement(i.a,{container:!0,spacing:2,className:t.pokedexContainer},Object.keys(b).map((function(e){return b[e].name.includes(D)&&function(e){var n=b[e],l=n.id,o=n.name,c=n.sprite;return r.a.createElement(i.a,{item:!0,xs:12,sm:3,key:e},r.a.createElement(m.a,{onClick:function(){return a.push("/".concat(e))}},r.a.createElement(u.a,{className:t.cardMedia,image:c,style:{width:"130px",height:"130px"}}),r.a.createElement(d.a,{className:t.cardContent},r.a.createElement(s.a,null,"".concat(l,". ").concat(T(o))))))}(e)}))):r.a.createElement(k.a,null))))},N=t(65),O=t(155),j=t(152),F=t(153),S=t(154),P=t(158),I=t(160);function M(e,a,t){return a.map((function(e){return e.move_learn_method.name===t&&"ultra-sun-ultra-moon"===e.version_group.name?e.move_learn_method.name:null})).includes(t)?e:null}var H=t(66);function R(){var e=Object(N.a)(["\n    background: ",";\n    border-color: ",";\n    outline: 0;\n  "]);return R=function(){return e},e}var L=Object(b.a)((function(){return{spinnerStyle:{width:"10rem",height:"10rem",borderWidth:"1rem"},spinnerWrapperStyle:{marginLeft:"auto",marginRight:"auto",width:"100%"},returnToPokedex:{align:"flex",marginBottom:"10px",marginRight:"50px",backgroundColor:"#3F51F5",color:"white","&:hover":{backgroundColor:"#3F51F5"}},types:{color:"white",textAlign:"center",borderRadius:"20px",paddingRight:"10px",paddingLeft:"10px",width:"80px",marginBottom:"5px"}}})),W=function(e){var a=e.match,t=e.history,l=a.params.pokemonId,o=r.a.useState(void 0),i=Object(c.a)(o,2),m=i[0],u=i[1],d=r.a.useState(void 0),p=Object(c.a)(d,2),g=p[0],E=p[1],h=L(),f={normal:{background:"#A8A878","border-color":"#6D6D4E"},fire:{background:"#F08030","border-color":"#9C531F"},fighting:{background:"#C03028","border-color":"#7D1F1A"},water:{background:"#6890F0","border-color":"#445E9C"},flying:{background:"#A890F0","border-color":"#6D5E9C"},grass:{background:"#78C850","border-color":"#4E8234"},poison:{background:"#A040A0","border-color":"#682A68"},electric:{background:"#F8D030","border-color":"#A1871F"},ground:{background:"#E0C068","border-color":"#927D44"},psychic:{background:"#F85888","border-color":"#A13959"},rock:{background:"#B8A038","border-color":"#786824"},ice:{background:"#98D8D8","border-color":"#638D8D"},bug:{background:"#A8B820","border-color":"#6D7815"},dragon:{background:"#7038F8","border-color":"#4924A1"},ghost:{background:"#705898","border-color":"#493963"},dark:{background:"#705848","border-color":"#49392F"},steel:{background:"#B8B8D0","border-color":"#787887"},fairy:{background:"#EE99AC","border-color":"#9B6470"}},b=H.a.div(R(),(function(e){return f[e.inputType].background}),(function(e){return f[e.inputType]["border-color"]}));Object(n.useEffect)((function(){C.a.get("https://pokeapi.co/api/v2/pokemon/".concat(l)).then((function(e){var a=e.data;u(a)})).catch((function(e){u(!1)})),C.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(l,"/")).then((function(e){var a=e.data;E(a)})).catch((function(e){E(!1)}))}),[l]);var v=function(e){var a=m.id;return a+e===0?1:a+e===894?893:a+e};return r.a.createElement("div",null,r.a.createElement("center",null,void 0!==m&&r.a.createElement(O.a,{className:h.returnToPokedex,onClick:function(){return t.push("/"+v(-1))}},"Previous Pokemon"),void 0!==m&&r.a.createElement(O.a,{className:h.returnToPokedex,onClick:function(){return t.push("/")}},"Back to Pokedex"),void 0!==m&&r.a.createElement(O.a,{className:h.returnToPokedex,onClick:function(){return t.push("/"+v(1))}},"Next Pokemon"),r.a.createElement("br",null),void 0===m&&r.a.createElement(k.a,{className:h.spinnerWrapperStyle})),void 0!==!!m&&m&&function(){var e=m.name,a=m.height,t=m.weight,n=m.types,l=m.sprites,o=m.abilities,c=m.stats,i=m.moves,u=l.front_default,d=l.front_shiny,s=l.back_default,p=l.back_shiny;console.log(g.flavor_text_entries);var E="";g.flavor_text_entries.some((function(e){"en"!==e.language.name||(E=e.flavor_text)})),console.log(g);var f=g.gender_rate,k=12.5*f,v=12.5*(8-f),x={};i.forEach((function(e){e.version_group_details.forEach((function(a){"level-up"===a.move_learn_method.name&&(x[e.move.name]=a.level_learned_at)}))}));var y,_=Object.keys(x).map((function(e){return[e,x[e]]}));return _.sort((function(e,a){return e[1]-a[1]})),r.a.createElement(j.a,{className:"mt=2"},r.a.createElement(F.a,null,r.a.createElement(S.a,{xs:12,md:6},r.a.createElement(P.a,null,r.a.createElement(P.a.Header,null,r.a.createElement("h2",null,T(e)),r.a.createElement("img",{src:u,alt:e}),r.a.createElement("img",{src:d,alt:e}),r.a.createElement("img",{src:s,alt:e}),r.a.createElement("img",{src:p,alt:e})),r.a.createElement(P.a.Body,null,r.a.createElement(F.a,null,r.a.createElement(S.a,null,r.a.createElement("h5",null,"Abilities"),o.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("span",null,function(e,a,t){return a===t-1&&1!==t?"Hidden Ability: "+e:e}(T(e.ability.name),a,o.length)))}))),r.a.createElement(S.a,null,r.a.createElement("h5",null,"Type(s)"),n.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(b,{className:h.types,inputType:e.type.name},T(e.type.name)))})))),r.a.createElement(F.a,null,r.a.createElement(S.a,null,r.a.createElement("h5",null,"Height"),a/10," m"),r.a.createElement(S.a,null,r.a.createElement("h5",null,"Weight"),t/10," kg")),r.a.createElement(F.a,null,r.a.createElement(S.a,null,r.a.createElement("h5",null,"Egg Group(s)"),(y=g.egg_groups,console.log(y),1===y.length?T(y[0].name):T(y[0].name)+", "+T(y[1].name))),r.a.createElement(S.a,null,r.a.createElement("h5",null,"Gender Ratio"),v,"% male, ",k,"% female"))))),r.a.createElement(S.a,{xs:12,md:6},r.a.createElement(P.a,null,r.a.createElement(P.a.Body,null,r.a.createElement("h4",null,"Description"),E,r.a.createElement("h4",null,"Base Stats"),c.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("strong",null,"hp"===(t=e.stat.name)?"HP":"attack"===t?"Atk":"defense"===t?"Def":"special-attack"===t?"Sp.Atk":"special-defense"===t?"Sp.Def":"speed"===t?"Speed":void 0),r.a.createElement(I.a,{now:e.base_stat,max:255,label:e.base_stat}));var t})))))),r.a.createElement("br",null),r.a.createElement(F.a,null,r.a.createElement(S.a,{xs:12,md:4},r.a.createElement(P.a,null,r.a.createElement(P.a.Header,null,r.a.createElement("h4",null,"Level Up")),r.a.createElement(P.a.Body,null,_.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("h6",null,"Lv "+e[1]+": "+T(e[0])))}))))),r.a.createElement(S.a,{xs:12,md:4},r.a.createElement(P.a,null,r.a.createElement(P.a.Header,null,r.a.createElement("h4",null,"Technical Machine")),r.a.createElement(P.a.Body,null,i.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("h6",null,M(T(e.move.name),e.version_group_details,"machine")))}))))),r.a.createElement(S.a,{xs:12,md:4},r.a.createElement(P.a,null,r.a.createElement(P.a.Header,null,r.a.createElement("h4",null,"Egg Moves")),r.a.createElement(P.a.Body,null,i.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("h6",null,M(T(e.move.name),e.version_group_details,"egg")))})))))))}(),!1===m&&r.a.createElement(s.a,null,"Pokemon not found"))},U=t(156);var G=function(){return r.a.createElement(U.c,null,r.a.createElement(U.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(D,e)}}),r.a.createElement(U.a,{exact:!0,path:"/:pokemonId",render:function(e){return r.a.createElement(W,e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(20),$=(t(108),Object(J.a)());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U.b,{history:$},r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,a,t){e.exports=t(109)}},[[80,1,2]]]);
//# sourceMappingURL=main.88868c93.chunk.js.map